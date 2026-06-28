import { NextRequest, NextResponse } from 'next/server'
import { GATE_COOKIE, GATE_TOKEN, lockHtml } from '@/lib/site-gate'

export function middleware(req: NextRequest) {
  // Already unlocked → let the request through.
  if (req.cookies.get(GATE_COOKIE)?.value === GATE_TOKEN) {
    return NextResponse.next()
  }

  // Otherwise render the lock screen in place of whatever was requested.
  const error = req.nextUrl.searchParams.get('gate_error') === '1'
  return new NextResponse(lockHtml(req.nextUrl.pathname, error), {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
    },
  })
}

export const config = {
  // Gate everything except the unlock endpoint and Next.js internals.
  matcher: ['/((?!api/unlock|_next).*)'],
}
