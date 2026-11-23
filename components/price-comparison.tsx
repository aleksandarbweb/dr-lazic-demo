'use client'

import Link from 'next/link'
import { Check, Calendar, MessageCircle } from 'lucide-react'
import { FadeUp } from '@/components/motion-primitives'
import { useTranslation } from '@/lib/i18n/LanguageContext'
import { businessData } from '@/lib/business-data'
import { formatEuro, priceTreatments } from '@/lib/price-comparison'

const marketMeta = [
  { id: 'at' as const, flag: '🇦🇹' },
  { id: 'de' as const, flag: '🇩🇪' },
  { id: 'ch' as const, flag: '🇨🇭' },
  { id: 'us' as const, flag: '🇺🇸' },
]

export function PriceComparison() {
  const { t, language } = useTranslation()
  const locale = language === 'en' ? 'en-US' : language === 'ru' ? 'ru-RU' : 'sr-RS'
  const pc = t.home.priceComparison

  return (
    <section className="border-t border-[#ddd6cc] bg-white py-12 md:py-24">
      <div className="mx-auto max-w-7xl sm:px-8 lg:px-12">
        <FadeUp>
          <h2 className="mx-auto max-w-4xl px-5 text-center font-serif text-[1.65rem] leading-tight text-[#1c1a17] sm:px-0 sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            {pc.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl px-5 text-center text-base leading-relaxed text-[#6b6560] sm:px-0 md:text-lg">
            {pc.subtitle}
          </p>
        </FadeUp>

        {/* Mobile: horizontal snap strip. Desktop: 4-col grid */}
        <div
          className="no-scrollbar mt-10 flex gap-4 overflow-x-auto px-5 pb-2 scroll-smooth snap-x snap-mandatory md:mt-12 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4"
          role="list"
          aria-label={pc.title}
        >
          {priceTreatments.map((treatment) => {
            const name = pc.treatments[treatment.id]
            return (
              <article
                key={treatment.id}
                role="listitem"
                className="flex w-[min(78vw,300px)] shrink-0 snap-start flex-col border border-[#ddd6cc] bg-[#fffcf8] p-5 md:h-full md:w-auto md:shrink md:p-6"
              >
                <h3 className="min-h-[3.25rem] font-serif text-xl leading-snug text-[#1c1a17]">
                  {name}
                </h3>

                <div className="mt-5 rounded-sm border border-primary/35 bg-[#0c6e76]/06 px-4 py-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                      <span aria-hidden="true">🇷🇸</span>
                      {pc.ourPrice}
                    </span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-2 font-serif text-2xl text-[#1c1a17] md:text-[1.65rem]">
                    {pc.from} {formatEuro(treatment.prices.bg, locale)}
                  </p>
                </div>

                <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                  {marketMeta.map((market) => (
                    <li
                      key={market.id}
                      className="flex items-center justify-between gap-3 border-b border-[#ebe5dc] pb-2.5 text-sm last:border-0 last:pb-0"
                    >
                      <span className="flex items-center gap-2 text-[#5e5953]">
                        <span aria-hidden="true">{market.flag}</span>
                        {pc.markets[market.id]}
                      </span>
                      <span className="tabular-nums text-[#3a3530]">
                        {formatEuro(treatment.prices[market.id], locale)}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <FadeUp delay={0.12}>
          <div className="px-5 sm:px-0">
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[#9b948c]">
              {pc.disclaimer}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/kontakt"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#0a5a61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
              >
                <Calendar size={16} aria-hidden="true" />
                {pc.ctaExam}
              </Link>
              <a
                href={businessData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#1c1a17]/25 bg-[#fffcf8] px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-[#1c1a17] transition-all hover:border-[#1c1a17] hover:bg-[#1c1a17] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1a17] focus-visible:ring-offset-2 sm:w-auto"
              >
                <MessageCircle size={16} aria-hidden="true" />
                {pc.ctaWhatsApp}
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
