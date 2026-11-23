'use client'

import Link from 'next/link'
import { Check, Calendar, MessageCircle } from 'lucide-react'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/motion-primitives'
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
    <section className="border-t border-[#ddd6cc] bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <FadeUp>
          <h2 className="mx-auto max-w-4xl text-center font-serif text-3xl leading-tight text-[#1c1a17] md:text-4xl lg:text-[2.75rem]">
            {pc.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-[#6b6560] md:text-lg">
            {pc.subtitle}
          </p>
        </FadeUp>

        <StaggerChildren
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
          staggerDelay={0.06}
        >
          {priceTreatments.map((treatment) => {
            const name = pc.treatments[treatment.id]
            return (
              <StaggerItem key={treatment.id}>
                <article className="flex h-full flex-col border border-[#ddd6cc] bg-[#fffcf8] p-5 md:p-6">
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
              </StaggerItem>
            )
          })}
        </StaggerChildren>

        <FadeUp delay={0.12}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[#9b948c]">
            {pc.disclaimer}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#0a5a61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Calendar size={16} aria-hidden="true" />
              {pc.ctaExam}
            </Link>
            <a
              href={businessData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1c1a17]/25 bg-[#fffcf8] px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-[#1c1a17] transition-all hover:border-[#1c1a17] hover:bg-[#1c1a17] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1a17] focus-visible:ring-offset-2"
            >
              <MessageCircle size={16} aria-hidden="true" />
              {pc.ctaWhatsApp}
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
