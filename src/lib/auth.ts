import { cookies } from 'next/headers'

const ADMIN_COOKIE_NAME = 'admin_session'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'

export async function verifyPassword(password: string): Promise<boolean> {
  return password === ADMIN_PASSWORD
}

export async function createSession(): Promise<string> {
  // Simple session token - in production, use a more secure method
  const token = Buffer.from(`${Date.now()}-${ADMIN_PASSWORD}`).toString('base64')
  return token
}

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies()
  cookieStore.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
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

  // Verify the session token contains the correct password hash
  try {
    const decoded = Buffer.from(session.value, 'base64').toString()
    return decoded.endsWith(ADMIN_PASSWORD)
  } catch {
    return false
  }
}
