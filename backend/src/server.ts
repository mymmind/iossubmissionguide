// Load dotenv BEFORE any other imports that might use process.env
import dotenv from 'dotenv'
import path from 'path'

// Load environment variables with explicit paths
// Use process.cwd() since PM2 sets the working directory to backend/
dotenv.config({ path: path.join(process.cwd(), '.env') }) // Load from backend/.env
dotenv.config({ path: path.join(process.cwd(), '../.env.local') }) // Load from root/.env.local (dev only)

// Now import everything else after env vars are loaded
import Fastify from 'fastify'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'
import compress from '@fastify/compress'
import { z } from 'zod'
import { prisma } from './prisma.js'
import { setupAdmin } from './admin.js'
import { stripeRoutes } from './routes/stripe.js'
import { validateCriticalConfig } from './config.js'
import { errorHandlerPlugin } from './error-handler.js'
import { stripe } from './stripe-client.js'

// Validate environment configuration at startup
validateCriticalConfig()

// Constants - extracted magic numbers
const RATE_LIMIT_MAX = 100
const RATE_LIMIT_WINDOW = '1 minute'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year in seconds
const CACHE_CONTROL_PUBLIC = 'public, max-age=300, stale-while-revalidate=600' // 5min cache, 10min stale
const CACHE_CONTROL_PRIVATE = 'private, max-age=0, must-revalidate'

async function start() {
  const fastify = Fastify({
    logger: true,
  })

  // Configure CORS with allowed origins
  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:4321', // Astro dev server
    process.env.SITE_URL,
  ].filter(Boolean) as string[]

  await fastify.register(cors, {
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or server-to-server)
      if (!origin) {
        callback(null, true)
        return
      }
      if (allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'), false)
      }
    },
    credentials: true,
  })

  // Gzip/Brotli compression for responses
  await fastify.register(compress, {
    global: true,
    encodings: ['gzip', 'deflate'],
  })

  // Rate limiting - protect against abuse
  await fastify.register(rateLimit, {
    max: RATE_LIMIT_MAX,
    timeWindow: RATE_LIMIT_WINDOW,
    errorResponseBuilder: () => ({
      statusCode: 429,
      error: 'Too Many Requests',
      message: 'Rate limit exceeded. Please try again later.',
    }),
  })

  // Security headers
  await fastify.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"], // AdminJS needs inline scripts
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'", 'https://api.stripe.com'],
      },
    },
    crossOriginEmbedderPolicy: false, // Required for AdminJS
  })

  // Global error handler - prevents leaking internal error details
  errorHandlerPlugin(fastify)

  // Register Stripe Routes
  await fastify.register(stripeRoutes)

  // Health check endpoint for Docker/monitoring
  fastify.get('/api/health', async (_request, reply) => {
    try {
      // Check database connectivity
      await prisma.$queryRaw`SELECT 1`
      return {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
      }
    } catch (error) {
      return reply.status(503).send({
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Database connection failed',
      })
    }
  })

  // Purchase session cookie management (replaces localStorage for security)
  const PURCHASE_COOKIE_NAME = 'ios_guide_purchase'
  const isProduction = process.env.NODE_ENV === 'production'

  // Validation schemas
  const purchaseSessionSchema = z.object({
    sessionId: z.string().regex(/^cs_(test_|live_)[a-zA-Z0-9]+$/, { message: 'Invalid session ID format' }),
  })

  const articlesQuerySchema = z.object({
    full: z.enum(['true', 'false']).optional(),
  })

  const slugParamSchema = z.object({
    slug: z.string().min(1).max(200).regex(/^[a-z0-9-]+$/, { message: 'Invalid slug format' }),
  })

  // Set purchase session in httpOnly cookie (with payment verification)
  fastify.post('/api/purchase-session', async (request, reply) => {
    // Validate input with zod
    const parseResult = purchaseSessionSchema.safeParse(request.body)
    if (!parseResult.success) {
      return reply.status(400).send({ error: 'Invalid session ID' })
    }
    const { sessionId } = parseResult.data

    // CRITICAL: Verify payment with Stripe before setting cookie
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId)
      if (session.payment_status !== 'paid') {
        return reply.status(403).send({ error: 'Payment not completed' })
      }
    } catch (error) {
      fastify.log.error({ err: error }, 'Failed to verify Stripe session')
      return reply.status(404).send({ error: 'Session not found' })
    }

    reply.setCookie(PURCHASE_COOKIE_NAME, sessionId, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'strict',
      maxAge: COOKIE_MAX_AGE,
      path: '/',
    })

    return { success: true }
  })

  // Get purchase session from cookie
  fastify.get('/api/purchase-session', async (request, reply) => {
    // User-specific data - no caching
    reply.header('Cache-Control', CACHE_CONTROL_PRIVATE)

    const sessionId = request.cookies[PURCHASE_COOKIE_NAME]

    // Return 200 with null sessionId if no session - avoids console errors
    return { sessionId: sessionId || null }
  })

  // Clear purchase session cookie
  fastify.delete('/api/purchase-session', async (_request, reply) => {
    reply.clearCookie(PURCHASE_COOKIE_NAME, { path: '/' })
    return { success: true }
  })

  // API Routes
  fastify.get('/api/articles', async (request, reply) => {
    // Validate query parameters
    const parseResult = articlesQuerySchema.safeParse(request.query)
    const full = parseResult.success ? parseResult.data.full : undefined

    // Add cache headers for public content
    reply.header('Cache-Control', CACHE_CONTROL_PUBLIC)

    // If full=true, return complete article data (for static site generation)
    if (full === 'true') {
      const articles = await prisma.article.findMany({
        include: {
          relatedFrom: {
            include: {
              targetArticle: {
                select: {
                  slug: true,
                  title: true,
                  description: true,
                  category: true,
                }
              }
            },
            orderBy: { displayOrder: 'asc' }
          }
        },
        orderBy: { publishedAt: 'asc' },
      })
      return articles
    }

    // Default: return minimal list data
    const articles = await prisma.article.findMany({
      select: {
        id: true,
        slug: true,
        title: true,
        category: true,
        isHub: true,
      },
      orderBy: { publishedAt: 'asc' },
    })
    return articles
  })

  fastify.get('/api/articles/:slug', async (request, reply) => {
    // Validate slug parameter
    const parseResult = slugParamSchema.safeParse(request.params)
    if (!parseResult.success) {
      return reply.status(400).send({ error: 'Invalid slug format' })
    }
    const { slug } = parseResult.data

    // Add cache headers for public content
    reply.header('Cache-Control', CACHE_CONTROL_PUBLIC)

    const article = await prisma.article.findUnique({
      where: { slug },
      include: {
        relatedFrom: {
          include: {
            targetArticle: {
              select: {
                slug: true,
                title: true,
                description: true,
                category: true,
              }
            }
          },
          orderBy: { displayOrder: 'asc' }
        }
      }
    })

    if (!article) {
      return reply.status(404).send({ error: 'Article not found' })
    }

    return article
  })

  fastify.get('/api/sitemap', async (_request, reply) => {
    // Add cache headers for public content
    reply.header('Cache-Control', CACHE_CONTROL_PUBLIC)

    const articles = await prisma.article.findMany({
      select: {
        slug: true,
        updatedAt: true,
      }
    })

    const sitemap = articles.map(article => ({
      url: `/${article.slug === 'app-store-guide' ? '' : article.slug}`,
      lastmod: article.updatedAt.toISOString(),
    }))

    return sitemap
  })

  // AdminJS Setup
  await setupAdmin(fastify)

  const port = Number(process.env.PORT) || 3005
  try {
    await fastify.listen({ port, host: '0.0.0.0' })
    console.log(`Server listening on http://localhost:${port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
