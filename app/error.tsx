'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-background px-6">
      <div className="hidden md:block absolute right-8 top-1/3 w-[1px] h-32 bg-primary/30" />
      <div className="text-center max-w-xl">
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
          Greška
        </p>
        <h1 className="font-serif text-4xl text-foreground md:text-6xl">
          Nešto nije u redu
        </h1>
        <div className="mx-auto my-10 h-[2px] w-16 bg-primary" />
        <p className="text-muted-foreground font-light leading-relaxed max-w-sm mx-auto">
          Došlo je do neočekivane greške. Pokušajte ponovo ili se vratite na početnu stranicu.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-white transition-all duration-500 hover:bg-[#0a5a61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Pokušaj ponovo
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#27221d]/30 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-[#27221d] transition-all duration-500 hover:border-[#27221d] hover:bg-[#27221d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27221d] focus-visible:ring-offset-2"
          >
            Naslovna stranica
          </Link>
        </div>
      </div>
    </section>
  )
}
