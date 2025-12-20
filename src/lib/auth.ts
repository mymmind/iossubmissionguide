import { cookies } from 'next/headers'
import { randomBytes, createHmac } from 'crypto'

export const ADMIN_COOKIE_NAME = 'admin_session'

// Require ADMIN_PASSWORD - no insecure defaults
function getAdminPassword(): string {
  const password = process.env.ADMIN_PASSWORD
  if (!password) {
    throw new Error('ADMIN_PASSWORD environment variable is required')
  }
  return password
}

export async function verifyPassword(password: string): Promise<boolean> {
  return password === getAdminPassword()
}

export async function createSession(): Promise<string> {
  // Generate cryptographically secure random token
  const randomPart = randomBytes(32).toString('hex')
  const timestamp = Date.now().toString()

  // Create HMAC signature for the token
  const hmac = createHmac('sha256', getAdminPassword())
  hmac.update(randomPart + timestamp)
  const signature = hmac.digest('hex')

  // Token format: randomPart.timestamp.signature
  return `${randomPart}.${timestamp}.${signature}`
}

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies()
  cookieStore.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24, // 1 day (reduced from 7)
    path: '/',
  })
}

export async function clearSessionCookie() {
  const cookieStore = await cookies()
  cookieStore.delete(ADMIN_COOKIE_NAME)
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get(ADMIN_COOKIE_NAME)

  if (!session?.value) {
    return false
  }

  // Verify the session token signature
  try {
    const parts = session.value.split('.')
    if (parts.length !== 3) {
      return false
    }

    const [randomPart, timestamp, signature] = parts

    // Check token age (max 1 day)
    const tokenAge = Date.now() - parseInt(timestamp, 10)
    if (isNaN(tokenAge) || tokenAge > 24 * 60 * 60 * 1000) {
      return false
    }

    // Verify HMAC signature
    const hmac = createHmac('sha256', getAdminPassword())
    hmac.update(randomPart + timestamp)
    const expectedSignature = hmac.digest('hex')

    return signature === expectedSignature
  } catch {
    return false
  }
}
