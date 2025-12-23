import Stripe from 'stripe'

// Lazy-initialized Stripe client - prevents instantiation before dotenv loads
let _stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
      apiVersion: '2024-10-28.acacia' as Stripe.LatestApiVersion,
    })
  }
  return _stripe
}

// For backwards compatibility - getter that lazily initializes
export const stripe = new Proxy({} as Stripe, {
  get(_, prop) {
    return (getStripe() as unknown as Record<string | symbol, unknown>)[prop]
  }
})
