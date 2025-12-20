import { FastifyInstance } from 'fastify'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2024-10-28.acacia' as any, // casting to any to avoid strict version mismatch if types are slightly off
})

export async function stripeRoutes(fastify: FastifyInstance) {
  fastify.post('/api/create-checkout-session', async (request, reply) => {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'iOS App Store Submission Toolkit',
                description: 'Complete PDF Guide, Code Smells (iOS & Expo), Prompts for Swift/React Native',
              },
              unit_amount: 999, // $9.99
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/?canceled=true`,
      })

      return { url: session.url }
    } catch (error: any) {
      fastify.log.error(error)
      return reply.status(500).send({ error: error.message })
    }
  })
}
