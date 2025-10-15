import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'pt']
const defaultLocale = 'pt'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!pathnameHasLocale) {
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${defaultLocale}`, req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}
