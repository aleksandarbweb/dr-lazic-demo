'use client'

import Link from 'next/link'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/motion-primitives'
import { useTranslation } from '@/lib/i18n/LanguageContext'
import { businessData } from '@/lib/business-data'

const HOTEL_HREFS = [
  'https://www.radissonhotels.com/en-us/hotels/radisson-blu-old-mill-belgrade',
  'https://www.hoteltesla.rs/',
  'https://www.slavijahotelbelgrade.com/',
  'https://www.apartmani-u-beogradu.com/',
] as const

export default function DentalniTurizamPage() {
  const { t } = useTranslation()
  const d = t.dentalTourism
  const contactStep = d.steps[1]
  const lodgingStep = d.steps[4]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-28 pb-12 sm:pt-36 sm:pb-20 md:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 70% 55% at 15% 10%, color-mix(in srgb, var(--primary) 14%, transparent), transparent), radial-gradient(ellipse 45% 40% at 90% 85%, color-mix(in srgb, var(--primary) 8%, transparent), transparent)',
          }}
        />
        <div className="hidden md:block absolute left-8 top-1/3 w-px h-36 bg-primary/30" />
        <div className="hidden md:block absolute right-12 top-1/4 w-px h-52 bg-primary/15" />

        <FadeUp>
          <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              {d.eyebrow}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
              {d.title}
            </h1>
            <div className="w-24 h-[2px] bg-primary mx-auto mt-8" />
            <p className="text-muted-foreground mt-8 max-w-2xl mx-auto font-light leading-relaxed text-base md:text-lg">
              {d.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-primary px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#0a5a61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {d.heroCtaContact}
              </Link>
              <a
                href={businessData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-primary/40 bg-transparent px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-colors duration-300 hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {d.heroCtaWhatsApp}
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Journey intro + step rail */}
      <section className="bg-white py-16 md:py-20 border-y border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="max-w-2xl mb-12 md:mb-14">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                {d.journeyEyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
                {d.journeyTitle}
              </h2>
              <div className="w-16 h-[2px] bg-primary mt-6 mb-6" />
              <p className="text-muted-foreground font-light leading-relaxed text-base md:text-lg">
                {d.journeyIntro}
              </p>
            </div>
          </FadeUp>

          <StaggerChildren className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 pb-2 scroll-smooth snap-x snap-mandatory overscroll-x-contain sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 sm:snap-none lg:grid-cols-8">
            {d.steps.map((step) => (
              <StaggerItem key={step.number} className="w-[42vw] max-w-[160px] shrink-0 snap-start sm:w-auto sm:max-w-none sm:shrink">
                <a
                  href={`#korak-${step.number}`}
                  className="group block min-h-[5.5rem] border-t border-primary/25 pt-3 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <span className="font-serif text-sm tabular-nums text-primary/70 group-hover:text-primary">
                    {step.number}
                  </span>
                  <p className="mt-2 line-clamp-3 text-[12px] font-light leading-snug text-foreground/75 group-hover:text-foreground md:text-[13px]">
                    {step.title}
                  </p>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Narrative journey */}
      <section className="bg-background py-12 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ol className="relative space-y-0">
            <div
              className="pointer-events-none absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-primary/15 to-transparent md:left-[19px]"
              aria-hidden="true"
            />

            {d.steps.map((step, index) => {
              const isContact = index === 1
              const isLodging = index === 4
              const isAlt = index % 2 === 1

              return (
                <li
                  key={step.number}
                  id={`korak-${step.number}`}
                  className="relative scroll-mt-28 pb-14 md:pb-16 last:pb-0"
                >
                  <FadeUp>
                    <div className="grid grid-cols-1 md:grid-cols-[48px_minmax(0,1fr)] gap-5 md:gap-10">
                      <div className="relative z-10 flex md:justify-center">
                        <span className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border border-primary/30 bg-background font-serif text-xs md:text-sm text-primary tabular-nums shadow-[0_0_0_6px_#f7f4ef]">
                          {step.number}
                        </span>
                      </div>

                      <div
                        className={`md:pl-2 ${
                          isAlt ? 'md:pr-4' : ''
                        }`}
                      >
                        <div
                          className={`border border-border/80 ${
                            isAlt ? 'bg-white' : 'bg-[#fffcf8]'
                          } px-6 py-8 md:px-9 md:py-10`}
                        >
                          <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
                            {step.title}
                          </h3>
                          <p className="mt-5 text-muted-foreground font-light leading-relaxed text-base md:text-[17px]">
                            {step.body}
                          </p>

                          {isContact && 'agentName' in contactStep && contactStep.agentName && (
                            <div className="mt-8 border-t border-border pt-7">
                              <p className="text-primary text-xs tracking-[0.18em] uppercase font-medium mb-3">
                                {contactStep.agentLabel}
                              </p>
                              <p className="font-serif text-xl text-foreground">
                                {contactStep.agentName}
                              </p>
                              <p className="text-sm text-muted-foreground mt-1">
                                {contactStep.agentRole}
                              </p>
                              <p className="text-sm text-foreground/80 mt-4 font-light">
                                {contactStep.agentAddress}
                              </p>
                              <a
                                href={`tel:${contactStep.agentPhone?.replace(/\s/g, '')}`}
                                className="inline-block mt-2 text-sm text-primary font-medium tracking-wide hover:underline underline-offset-4"
                              >
                                {contactStep.agentPhone}
                              </a>
                            </div>
                          )}

                          {isLodging && 'hotels' in lodgingStep && lodgingStep.hotels && (
                            <div className="mt-8 border-t border-border pt-7">
                              <p className="text-sm text-foreground/85 font-light leading-relaxed mb-5">
                                {lodgingStep.hotelsIntro}
                              </p>
                              <ul className="divide-y divide-border border-y border-border">
                                {lodgingStep.hotels.map((hotel, hotelIndex) => (
                                  <li key={hotel.name}>
                                    <a
                                      href={HOTEL_HREFS[hotelIndex]}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-4 transition-colors hover:bg-primary/[0.03] -mx-1 px-1"
                                    >
                                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                                        {hotel.name}
                                      </span>
                                      <span className="text-sm text-muted-foreground font-light">
                                        {hotel.detail}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                              <p className="mt-5 text-sm text-primary/90 font-light">
                                {lodgingStep.hotelsDiscount}
                              </p>
                              <p className="mt-2 text-sm text-muted-foreground font-light">
                                {lodgingStep.hotelsAlt}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Languages */}
      <section className="bg-white py-16 md:py-20 border-y border-border">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <FadeUp>
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              {d.languages.eyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              {d.languages.title}
            </h2>
            <div className="w-12 h-[2px] bg-primary mx-auto mt-6 mb-6" />
            <p className="text-muted-foreground font-light leading-relaxed text-base md:text-lg">
              {d.languages.body}
            </p>
          </FadeUp>
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
              {d.cta.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white text-balance">
              {d.cta.title}
            </h2>
            <p className="text-white/80 mt-5 font-light max-w-xl mx-auto leading-relaxed">
              {d.cta.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kontakt"
                className="inline-flex bg-white px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-primary transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98]"
              >
                {d.cta.contactButton}
              </Link>
              <a
                href={businessData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-white/40 px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98]"
              >
                {d.cta.whatsappButton}
              </a>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
