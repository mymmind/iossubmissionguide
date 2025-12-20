import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ADMIN_COOKIE_NAME = 'admin_session'

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
    try {
      const decoded = Buffer.from(session.value, 'base64').toString()
      const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'

      if (!decoded.endsWith(adminPassword)) {
        const loginUrl = new URL('/userlogin/login', request.url)
        loginUrl.searchParams.set('redirect', pathname)
        return NextResponse.redirect(loginUrl)
      }
    } catch {
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
