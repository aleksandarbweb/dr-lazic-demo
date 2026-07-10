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
  // Gate everything except the unlock endpoint, Next.js internals, and static
  // assets under public/ (images/videos). Without this exclusion, the Next.js
  // image optimizer's internal fetch of /images/... gets intercepted by the
  // gate and returns the lock-screen HTML instead of the real file, so every
  // optimized image 400s in local/dev preview.
  matcher: ['/((?!api/unlock|_next|images/|videos/|.*\\.(?:png|jpe?g|svg|ico|webp|avif|gif|mp4|webm|webmanifest)$).*)'],
}
