import Fastify from 'fastify'
import cors from '@fastify/cors'
import staticPlugin from '@fastify/static'
import formbody from '@fastify/formbody'
import cookie from '@fastify/cookie'
import session from '@fastify/session'
import path from 'path'
import { fileURLToPath } from 'url'
import { PrismaClient } from '@prisma/client'
import { setupAdmin } from './admin.js'
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const prisma = new PrismaClient()

async function start() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true, // In production, set this to your SITE_URL
  })


  // API Routes
  fastify.get('/api/articles', async (request, reply) => {
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
    const { slug } = request.params as { slug: string }
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

  fastify.get('/api/sitemap', async (request, reply) => {
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
