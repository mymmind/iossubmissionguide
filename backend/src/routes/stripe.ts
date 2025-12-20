import { FastifyInstance } from 'fastify'
import Stripe from 'stripe'
import path from 'path'
import fs from 'fs'
import { z } from 'zod'

// Validation schemas
const sessionIdSchema = z.object({
  sessionId: z.string().regex(/^cs_(test_|live_)[a-zA-Z0-9]+$/, { message: 'Invalid Stripe session ID format' }),
})

const validFileTypes = ['native_guide', 'native_smells', 'expo_guide', 'expo_smells'] as const

const downloadParamsSchema = z.object({
  sessionId: z.string().regex(/^cs_(test_|live_)[a-zA-Z0-9]+$/, { message: 'Invalid Stripe session ID format' }),
  file: z.enum(validFileTypes, { message: 'Invalid file type' }),
})

const lookupBodySchema = z.object({
  email: z.email({ message: 'Invalid email format' }),
})

export async function stripeRoutes(fastify: FastifyInstance): Promise<void> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2024-10-28.acacia' as Stripe.LatestApiVersion,
  })

  fastify.post('/api/create-checkout-session', async (request, reply) => {
    try {
      if (!process.env.STRIPE_SECRET_KEY) {
        throw new Error('STRIPE_SECRET_KEY is missing');
      }

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'iOS App Store Submission Toolkit',
                description: 'Complete Master Instructions, Coding Best Practices, and Store Review Strategy',
              },
              unit_amount: 2999, // $29.99
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.FRONTEND_URL || 'http://localhost:4321'}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:4321'}/?canceled=true`,
      })

      return { url: session.url }
    } catch (error) {
      fastify.log.error({ err: error }, 'Stripe Error')
      if (error instanceof Stripe.errors.StripeError) {
        return reply.status(error.statusCode || 400).send({
          error: error.message,
          type: error.type
        })
      }
      return reply.status(400).send({
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    }
  })

  fastify.get('/api/verify-session/:sessionId', async (request, reply) => {
    try {
      const parseResult = sessionIdSchema.safeParse(request.params)
      if (!parseResult.success) {
        return reply.status(400).send({ error: parseResult.error.issues[0]?.message || 'Invalid session ID' })
      }
      const { sessionId } = parseResult.data

      const session = await stripe.checkout.sessions.retrieve(sessionId)
      
      if (session.payment_status === 'paid') {
        const baseUrl = process.env.BACKEND_URL || 'http://localhost:3005';
        return {
          status: 'paid',
          customer_email: session.customer_details?.email,
          content: {
            // Track 1: Swift / iOS Native
            native: {
              title: 'Swift & iOS Native Toolkit',
              downloads: [
                { name: 'Native Submission Guide', description: 'Meticulous detail for Swift devs', url: `${baseUrl}/api/download/${sessionId}/native_guide` },
                { name: 'Swift Code Smells', description: 'Technical risk checklist', url: `${baseUrl}/api/download/${sessionId}/native_smells` }
              ],
              prompt: `You are a senior Apple App Store Reviewer specializing in NATIVE iOS (Swift/Obj-C).
Audit the code for:
- Usage of private APIs (dlopen, dlsym, etc.)
- Info.plist Purpose Strings (Camera/Location/Tracking)
- Human Interface Guidelines compliance
- CoreData/SwiftData privacy handling
- In-App Purchase logic (StoreKit 2)`
            },
            // Track 2: React Native / Expo
            expo: {
              title: 'React Native & Expo Toolkit',
              downloads: [
                { name: 'Expo Submission Guide', description: 'Meticulous detail for JS/TS devs', url: `${baseUrl}/api/download/${sessionId}/expo_guide` },
                { name: 'React Native Risk Checklist', description: 'Javascript/Native-bridge audit', url: `${baseUrl}/api/download/${sessionId}/expo_smells` }
              ],
              prompt: `You are a senior Apple App Store Reviewer specializing in CROSS-PLATFORM (React Native/Expo).
Audit the code for:
- Illegal JS execution or OTA updates (Guideline 2.5.2)
- Expo Permissions handling (location-always/foreground)
- Bridge implementation risks
- Nutrition Label accuracy for JS dependencies
- Tracking Transparency with Expo-Tracking`
            }
          }
        }
      }
      
      return reply.status(402).send({ status: 'unpaid', message: 'Payment has not been completed.' })
    } catch (error) {
      fastify.log.error({ err: error }, 'Session Verification Error')
      return reply.status(404).send({ error: 'Session not found or expired' })
    }
  })

  fastify.get('/api/download/:sessionId/:file', async (request, reply) => {
    const parseResult = downloadParamsSchema.safeParse(request.params)
    if (!parseResult.success) {
      return reply.status(400).send({ error: parseResult.error.issues[0]?.message || 'Invalid parameters' })
    }
    const { sessionId, file } = parseResult.data

    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId)
      if (session.payment_status !== 'paid') {
        return reply.status(403).send({ error: 'Unauthorized. Payment required.' })
      }

      const fileMap: Record<typeof file, string> = {
        native_guide: 'How to Pass the Apple App Store Review Process.pdf',
        native_smells: 'Swift and iOS Development_ Best Practices and Common Code Smells.pdf',
        expo_guide: 'How to Pass the Apple App Store Review Process.pdf', // Placeholder
        expo_smells: 'Swift and iOS Development_ Best Practices and Common Code Smells.pdf', // Placeholder
      }
      const fileName = fileMap[file]
      
      const downloadDir = path.resolve(process.cwd(), 'downloads')
      const filePath = path.resolve(downloadDir, fileName)

      // Prevent directory traversal attacks
      if (!filePath.startsWith(downloadDir)) {
        return reply.status(403).send({ error: 'Forbidden' })
      }

      if (!fs.existsSync(filePath)) {
        return reply.status(404).send({ error: 'File not found' })
      }

      const stream = fs.createReadStream(filePath)
      reply.header('Content-Type', 'application/pdf')
      reply.header('Content-Disposition', `attachment; filename="${fileName}"`)
      return reply.send(stream)

    } catch (e) {
      return reply.status(404).send({ error: 'Download failed' })
    }
  })

  // Stripe webhook handler for payment events
  fastify.post('/api/webhooks/stripe', {
    config: {
      rawBody: true, // Required for signature verification
    }
  }, async (request, reply) => {
    const sig = request.headers['stripe-signature']
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

    if (!sig || !webhookSecret) {
      return reply.status(400).send({ error: 'Missing signature or webhook secret' })
    }

    try {
      // Get raw body for signature verification
      const rawBody = (request as { rawBody?: Buffer }).rawBody
      if (!rawBody) {
        return reply.status(400).send({ error: 'Missing raw body' })
      }

      const event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret)

      // Handle specific event types
      switch (event.type) {
        case 'checkout.session.completed': {
          const session = event.data.object
          fastify.log.info({ sessionId: session.id, email: session.customer_details?.email }, 'Payment completed')
          // Could store purchase in database here for faster lookups
          break
        }
        case 'payment_intent.payment_failed': {
          const paymentIntent = event.data.object
          fastify.log.warn({ paymentIntentId: paymentIntent.id }, 'Payment failed')
          break
        }
        default:
          fastify.log.info({ type: event.type }, 'Unhandled webhook event')
      }

      return { received: true }
    } catch (error) {
      fastify.log.error({ err: error }, 'Webhook signature verification failed')
      return reply.status(400).send({ error: 'Webhook signature verification failed' })
    }
  })

  // Recovery route: find session by email
  fastify.post('/api/lookup-purchase', async (request, reply) => {
    const parseResult = lookupBodySchema.safeParse(request.body)
    if (!parseResult.success) {
      return reply.status(400).send({ error: parseResult.error.issues[0]?.message || 'Invalid email' })
    }
    const { email } = parseResult.data

    try {
      // List the most recent 100 sessions and filter by email
      // In a high-traffic app, you'd want to save these to your own DB instead!
      const sessions = await stripe.checkout.sessions.list({
        limit: 100,
        expand: ['data.customer_details']
      })

      const customerSession = sessions.data.find(s => 
        s.payment_status === 'paid' && 
        s.customer_details?.email?.toLowerCase() === email.toLowerCase()
      )

      if (customerSession) {
        return { sessionId: customerSession.id }
      } else {
        return reply.status(404).send({ error: 'No successful purchase found for this email.' })
      }
    } catch (error) {
      fastify.log.error({ err: error }, 'Lookup Error')
      return reply.status(500).send({ error: 'Internal server error during lookup' })
    }
  })
}
