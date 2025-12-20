import { z } from 'zod'

// Environment variable schema
const envSchema = z.object({
  // Required in production
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
  STRIPE_SECRET_KEY: z.string().min(1, 'STRIPE_SECRET_KEY is required'),

  // Optional with defaults
  PORT: z.string().optional().default('3005'),
  NODE_ENV: z.enum(['development', 'production', 'test']).optional().default('development'),

  // Required for admin panel
  ADMIN_EMAIL: z.string().email('ADMIN_EMAIL must be a valid email').optional(),
  ADMIN_PASSWORD: z.string().min(8, 'ADMIN_PASSWORD must be at least 8 characters').optional(),
  SESSION_SECRET: z.string().min(32, 'SESSION_SECRET must be at least 32 characters').optional(),

  // Required for Stripe webhooks
  STRIPE_WEBHOOK_SECRET: z.string().optional(),

  // URLs
  FRONTEND_URL: z.string().url().optional().default('http://localhost:4321'),
  BACKEND_URL: z.string().url().optional().default('http://localhost:3005'),
  SITE_URL: z.string().url().optional(),
})

export type EnvConfig = z.infer<typeof envSchema>

// Validate and export config
function validateEnv(): EnvConfig {
  const result = envSchema.safeParse(process.env)

  if (!result.success) {
    console.error('❌ Invalid environment variables:')
    result.error.issues.forEach((issue) => {
      console.error(`  - ${issue.path.join('.')}: ${issue.message}`)
    })

    if (process.env.NODE_ENV === 'production') {
      throw new Error('Missing required environment variables')
    } else {
      console.warn('⚠️  Running in development mode with missing env vars')
    }
  }

  return result.data || (process.env as unknown as EnvConfig)
}

export const config = validateEnv()

// Helper to check if we're in production
export const isProduction = config.NODE_ENV === 'production'

// Check critical vars at startup
export function validateCriticalConfig(): void {
  const criticalVars = ['DATABASE_URL', 'STRIPE_SECRET_KEY']
  const missing = criticalVars.filter((v) => !process.env[v])

  if (missing.length > 0) {
    throw new Error(`Missing critical environment variables: ${missing.join(', ')}`)
  }

  // In production, require admin credentials
  if (isProduction) {
    const productionRequired = ['ADMIN_EMAIL', 'ADMIN_PASSWORD', 'SESSION_SECRET']
    const missingProd = productionRequired.filter((v) => !process.env[v])

    if (missingProd.length > 0) {
      throw new Error(`Missing production environment variables: ${missingProd.join(', ')}`)
    }
  }

  console.log('✅ Environment configuration validated')
}
