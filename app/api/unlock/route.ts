import { NextRequest, NextResponse } from 'next/server'
import { GATE_COOKIE, GATE_TOKEN, getGatePassword } from '@/lib/site-gate'

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const password = String(form.get('password') ?? '')
  const nextRaw = String(form.get('next') ?? '/')
  const next = nextRaw.startsWith('/') ? nextRaw : '/'

  if (password !== getGatePassword()) {
    return NextResponse.redirect(new URL(`${next}?gate_error=1`, req.url), 303)
  }

  const res = NextResponse.redirect(new URL(next, req.url), 303)
  res.cookies.set(GATE_COOKIE, GATE_TOKEN, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })
  return res
}
