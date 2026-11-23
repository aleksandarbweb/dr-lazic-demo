'use client'

import { FadeUp } from '@/components/motion-primitives'
import { useTranslation } from '@/lib/i18n/LanguageContext'

export function WhyClinicSection() {
  const { t } = useTranslation()
  const w = t.home.whyClinic

  return (
    <section className="border-t border-[#ddd6cc] bg-[#f7f4ef] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeUp className="lg:col-span-5">
            <p className="mb-4 text-sm uppercase tracking-[0.22em] text-primary">
              {w.eyebrow}
            </p>
            <h2 className="font-serif text-3xl text-[#1c1a17] md:text-4xl lg:text-5xl">
              {w.title}
            </h2>
            <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-[#5e5953] md:text-lg">
              {w.paragraph}
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-7">
            <ul className="space-y-0 border-t border-[#ddd6cc]">
              {w.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-4 border-b border-[#ddd6cc] py-5 md:py-6"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span className="text-base leading-relaxed text-[#3a3530] md:text-lg">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
