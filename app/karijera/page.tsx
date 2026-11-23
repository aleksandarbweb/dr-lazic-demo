"use client"

import Link from 'next/link'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/motion-primitives'
import { useTranslation } from '@/lib/i18n/LanguageContext'
import { businessData } from '@/lib/business-data'

export default function KarijeraPage() {
  const { t } = useTranslation()
  const k = t.karijera

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-28 pb-12 sm:pt-36 sm:pb-20 md:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 80% 50% at 50% -20%, color-mix(in srgb, var(--primary) 18%, transparent), transparent), radial-gradient(ellipse 40% 40% at 100% 80%, color-mix(in srgb, var(--primary) 8%, transparent), transparent)',
          }}
        />
        <div className="hidden md:block absolute left-8 top-1/3 w-px h-32 bg-primary/30" />
        <div className="hidden md:block absolute right-10 top-1/4 w-px h-48 bg-primary/20" />

        <FadeUp>
          <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              {k.eyebrow}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
              {k.title}
            </h1>
            <div className="w-24 h-[2px] bg-primary mx-auto mt-8" />
            <p className="text-muted-foreground mt-8 max-w-2xl mx-auto font-light leading-relaxed text-base md:text-lg">
              {k.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#kursevi"
                className="inline-flex items-center justify-center bg-primary px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#0a5a61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {k.courses.eyebrow}
              </a>
              <a
                href={businessData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-primary/40 bg-transparent px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-colors duration-300 hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {k.cta.whatsappButton}
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Why learn here */}
      <section className="bg-white py-12 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-14 lg:gap-20 items-start">
            <FadeUp>
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                {k.why.eyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
                {k.why.title}
              </h2>
              <div className="w-16 h-[2px] bg-primary mt-6 mb-8" />
              <p className="text-muted-foreground leading-relaxed font-light text-base md:text-lg">
                {k.why.description}
              </p>
              <p className="mt-8 font-serif text-xl md:text-2xl text-foreground">
                {t.onama.zoran.name}
              </p>
              <p className="text-primary text-xs font-medium tracking-[0.12em] uppercase mt-2">
                {t.onama.zoran.title}
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <ul className="border-t border-border">
                {k.why.credentials.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-5 py-5 border-b border-border"
                  >
                    <span className="font-serif text-sm text-primary/70 tabular-nums pt-0.5 shrink-0 w-7">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-foreground/90 font-light leading-snug text-[15px] md:text-base">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section id="kursevi" className="bg-background py-12 md:py-28 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                {k.courses.eyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
                {k.courses.title}
              </h2>
              <div className="w-16 h-[2px] bg-primary mx-auto mt-6 mb-6" />
              <p className="text-muted-foreground font-light leading-relaxed">
                {k.courses.subtitle}
              </p>
            </div>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {k.courses.items.map((course) => (
              <StaggerItem key={course.number}>
                <article className="group relative h-full border border-[#e3dad1] bg-white/70 p-7 md:p-9 transition-all duration-500 hover:border-primary/35 hover:bg-white hover:shadow-[0_12px_40px_-20px_rgba(12,110,118,0.25)]">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <span className="font-serif text-4xl md:text-5xl text-primary/20 leading-none tabular-nums transition-colors duration-500 group-hover:text-primary/35">
                      {course.number}
                    </span>
                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary border border-primary/25 px-3 py-1.5">
                      {course.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-[15px] mb-7">
                    {course.description}
                  </p>
                  <ul className="space-y-3 border-t border-border/80 pt-6">
                    {course.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-foreground/85 font-light leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Audience */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                {k.audience.eyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                {k.audience.title}
              </h2>
              <div className="w-16 h-[2px] bg-primary mx-auto mt-6 mb-6" />
              <p className="text-muted-foreground font-light leading-relaxed">
                {k.audience.description}
              </p>
            </div>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/80">
            {k.audience.items.map((item, index) => (
              <StaggerItem key={item}>
                <div className="bg-white px-7 py-8 h-full flex gap-5 items-start">
                  <span className="font-serif text-primary/50 text-lg tabular-nums shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-foreground/90 font-light leading-snug text-[15px] md:text-base pt-0.5">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-24">
        <div
          className="absolute left-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 bottom-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"
          aria-hidden="true"
        />

        <FadeUp>
          <div className="relative max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
            <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4">
              {k.cta.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              {k.cta.title}
            </h2>
            <p className="text-white/80 mt-5 font-light max-w-xl mx-auto leading-relaxed">
              {k.cta.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kontakt"
                className="inline-flex rounded-full bg-white px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-primary transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98]"
              >
                {k.cta.contactButton}
              </Link>
              <a
                href={businessData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-white/40 px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98]"
              >
                {k.cta.whatsappButton}
              </a>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
