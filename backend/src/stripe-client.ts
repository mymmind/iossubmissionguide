import Stripe from 'stripe'

// Shared Stripe client instance - prevents duplicate instantiation
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-10-28.acacia' as Stripe.LatestApiVersion,
})
