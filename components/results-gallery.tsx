'use client'

import { FadeUp, StaggerChildren, StaggerItem } from '@/components/motion-primitives'
import { BeforeAfterSlider } from '@/components/before-after-slider'
import { useTranslation } from '@/lib/i18n/LanguageContext'
import { beforeAfterCases } from '@/lib/reviews'

export function ResultsGallery() {
  const { t } = useTranslation()
  const g = t.home.resultsGallery

  return (
    <section className="border-t border-[#ddd6cc] bg-[#f7f4ef] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <FadeUp>
          <p className="mb-4 text-center text-sm uppercase tracking-[0.2em] text-primary">
            {g.eyebrow}
          </p>
          <h2 className="text-center font-serif text-3xl text-[#1c1a17] md:text-4xl lg:text-5xl">
            {g.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-[#6b6560]">
            {g.subtitle}
          </p>
        </FadeUp>

        <StaggerChildren
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
          staggerDelay={0.07}
        >
          {beforeAfterCases.map((c, index) => (
            <StaggerItem key={c.id}>
              <BeforeAfterSlider
                beforeSrc={c.before}
                afterSrc={c.after}
                beforeLabel={g.before}
                afterLabel={g.after}
                alt={`${g.caseLabel} ${index + 1}`}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
