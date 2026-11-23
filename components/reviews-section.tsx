'use client'

import { Star } from 'lucide-react'
import { FadeUp } from '@/components/motion-primitives'
import { useTranslation } from '@/lib/i18n/LanguageContext'
import { businessData } from '@/lib/business-data'
import { clinicReviews } from '@/lib/reviews'

export function ReviewsSection() {
  const { t } = useTranslation()
  const r = t.home.reviewsSection

  return (
    <section className="border-y border-[#ddd6cc] bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <FadeUp>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-primary">
                {r.eyebrow}
              </p>
              <h2 className="font-serif text-2xl text-[#1c1a17] md:text-3xl">
                {r.title}
              </h2>
              <p className="mt-2 text-sm text-[#6b6560] md:text-base">
                {r.subtitle}
              </p>
            </div>

            <a
              href={businessData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-3 rounded-sm border border-[#ddd6cc] bg-[#fffcf8] px-4 py-3 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < 4
                        ? 'fill-primary text-primary'
                        : 'fill-primary/40 text-primary/40'
                    }
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-[#1c1a17]">
                <span className="font-serif text-lg text-primary">
                  {businessData.googleRating}
                </span>
                <span className="ml-1.5 text-[#6b6560]">{r.googleRating}</span>
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.14em] text-primary sm:inline">
                {r.viewOnMaps}
              </span>
            </a>
          </div>
        </FadeUp>

        <div
          className="no-scrollbar -mx-6 mt-8 flex gap-4 overflow-x-auto px-6 pb-2 scroll-smooth snap-x snap-mandatory md:mx-0 md:px-0"
          role="list"
          aria-label={r.title}
        >
          {clinicReviews.map((review) => (
            <blockquote
              key={review.id}
              role="listitem"
              className="flex w-[min(85vw,320px)] shrink-0 snap-start flex-col border border-[#ddd6cc] bg-[#fffcf8] p-5 md:w-[300px]"
            >
              <p className="line-clamp-4 flex-1 text-sm leading-relaxed text-[#5e5953]">
                „{review.quote}“
              </p>
              {review.note && (
                <p className="mt-3 text-xs font-medium text-primary">{review.note}</p>
              )}
              <footer className="mt-4 border-t border-[#ebe5dc] pt-3">
                <cite className="not-italic text-sm font-medium text-[#1c1a17]">
                  {review.author}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
