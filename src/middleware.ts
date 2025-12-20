import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createHmac } from 'crypto'

const ADMIN_COOKIE_NAME = 'admin_session'

function verifySessionToken(token: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    console.error('ADMIN_PASSWORD environment variable is required')
    return false
  }

  try {
    const parts = token.split('.')
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
    const hmac = createHmac('sha256', adminPassword)
    hmac.update(randomPart + timestamp)
    const expectedSignature = hmac.digest('hex')

    return signature === expectedSignature
  } catch {
    return false
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only protect /userlogin routes (except login)
  if (pathname.startsWith('/userlogin') && pathname !== '/userlogin/login') {
    const session = request.cookies.get(ADMIN_COOKIE_NAME)

    if (!session?.value) {
      const loginUrl = new URL('/userlogin/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }

    // Verify the session token
    if (!verifySessionToken(session.value)) {
      const loginUrl = new URL('/userlogin/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/userlogin/:path*'],
}
