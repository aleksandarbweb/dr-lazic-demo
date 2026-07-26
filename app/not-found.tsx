import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-background px-6">
      <div className="hidden md:block absolute left-8 top-1/3 w-[1px] h-32 bg-primary/30" />
      <div className="text-center max-w-xl">
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
          Greška 404
        </p>
        <h1 className="font-serif text-6xl text-foreground md:text-8xl">
          Stranica nije pronađena
        </h1>
        <div className="mx-auto my-10 h-[2px] w-16 bg-primary" />
        <p className="text-muted-foreground font-light leading-relaxed max-w-sm mx-auto">
          Stranica koju tražite ne postoji ili je premeštena na drugu adresu.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-white transition-all duration-500 hover:bg-[#9f1818] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Povratak na početnu
        </Link>
      </div>
    </section>
  )
}
