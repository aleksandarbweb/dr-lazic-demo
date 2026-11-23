"use client"

import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle } from '@/components/section-title'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/motion-primitives'
import { useTranslation } from '@/lib/i18n/LanguageContext'

export default function ONamaPage() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero */}
      <section className="relative bg-background pt-36 pb-16 md:pb-20">
        <div className="hidden md:block absolute left-8 top-1/3 w-px h-32 bg-primary/30" />
        <FadeUp>
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              {t.onama.eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              {t.onama.title}
            </h1>
            <div className="w-24 h-[2px] bg-primary mx-auto mt-8" />
            <p className="text-muted-foreground mt-8 max-w-2xl mx-auto font-light leading-relaxed text-base md:text-lg">
              {t.onama.heroIntro}
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Clinic story: 1998 */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 lg:gap-20 items-start">
            <FadeUp>
              <p className="font-serif text-[5.5rem] md:text-[7rem] leading-none text-primary/15 select-none tabular-nums">
                1998
              </p>
              <p className="text-primary text-sm tracking-[0.2em] uppercase mt-2 mb-4">
                {t.onama.storyEyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                {t.onama.storyTitle}
              </h2>
              <div className="w-16 h-[2px] bg-primary mt-6" />
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-muted-foreground leading-relaxed font-light text-base md:text-lg mb-6">
                {t.onama.storyP1}
              </p>
              <p className="text-muted-foreground leading-relaxed font-light text-base md:text-lg mb-10">
                {t.onama.storyP2}
              </p>
              <p className="text-primary text-xs tracking-[0.18em] uppercase mb-4 font-medium">
                {t.onama.storyServicesLabel}
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                {t.onama.storyServices.map((service) => (
                  <li
                    key={service}
                    className="text-sm text-foreground/80 font-light border-b border-primary/20 pb-0.5"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="bg-foreground py-11 md:py-14">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-8">
              {t.onama.tagline.map((word, index) => (
                <span key={word} className="flex items-center gap-x-5 sm:gap-x-8">
                  <span className="font-serif text-lg sm:text-xl text-white/90 tracking-wide text-center">
                    {word}
                  </span>
                  {index < t.onama.tagline.length - 1 && (
                    <span className="w-1.5 h-1.5 bg-primary" aria-hidden="true" />
                  )}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Dr Vesna Lazić: warm stone + soft off-white headshot */}
      <section
        id="dr-vesna-lazic"
        className="bg-background py-20 md:py-28 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div className="relative mx-auto w-full max-w-[420px]">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/images/people/dr-vesna-lazic.jpg"
                    alt={t.onama.vesna.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r border-b border-primary/40 pointer-events-none" />
                <div className="absolute -top-3 -left-3 w-16 h-16 border-l border-t border-primary/40 pointer-events-none" />
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                {t.onama.vesna.eyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">
                {t.onama.vesna.name}
              </h2>
              <p className="text-primary font-medium text-sm tracking-[0.12em] uppercase mb-8">
                {t.onama.vesna.title}
              </p>
              {t.onama.vesna.bio.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className={
                    index === 0
                      ? 'text-foreground/80 leading-relaxed text-base md:text-[1.05rem] mb-6'
                      : 'text-muted-foreground leading-relaxed font-light mb-5 last:mb-8'
                  }
                >
                  {paragraph}
                </p>
              ))}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.onama.vesna.focus.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-foreground/85 font-light flex items-start gap-3"
                  >
                    <span className="mt-2 w-1.5 h-1.5 bg-primary shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Prof. dr Zoran Lazić: scannable credentials */}
      <section
        id="prof-zoran-lazic"
        className="bg-white py-20 md:py-28 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp>
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              {t.onama.zoran.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">
              {t.onama.zoran.name}
            </h2>
            <p className="text-primary font-medium text-sm tracking-[0.12em] uppercase mb-8">
              {t.onama.zoran.title}
            </p>
            <div className="w-16 h-[2px] bg-primary mb-8" />
            <p className="text-muted-foreground leading-relaxed font-light text-base md:text-lg max-w-3xl mb-12">
              {t.onama.zoran.intro}
            </p>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0 border-t border-border">
            {t.onama.zoran.credentials.map((item, index) => (
              <StaggerItem key={item}>
                <div className="flex gap-5 py-5 border-b border-border">
                  <span className="font-serif text-sm text-primary/70 tabular-nums pt-0.5 shrink-0 w-7">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-foreground/90 font-light leading-snug text-[15px] md:text-base">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Team */}
      <section id="nas-tim" className="bg-background py-20 md:py-28 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp>
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4 text-center font-medium">
              {t.onama.teamEyebrow}
            </p>
            <SectionTitle title={t.onama.teamTitle} />
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/80 mt-4">
            {t.onama.team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-background px-7 py-9 h-full">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary text-xs font-medium tracking-[0.12em] uppercase leading-relaxed">
                    {member.title}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Free first exam CTA */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <FadeUp>
            <p className="text-primary text-sm tracking-[0.28em] uppercase mb-5 font-medium">
              {t.onama.ctaEyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {t.onama.ctaTitle}
            </h2>
            <div className="w-16 h-[2px] bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground font-light leading-relaxed mb-10 max-w-xl mx-auto">
              {t.onama.ctaDescription}
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center bg-primary px-9 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#0a5a61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {t.onama.ctaButton}
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
