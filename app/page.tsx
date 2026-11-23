'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import {
  ClipboardList,
  Sparkles,
  Paintbrush,
  Sun,
  Cpu,
  Smile,
  Gem,
  Scissors,
  Crown,
  HeartPulse,
  CircleDot,
  AlignCenter,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionTitle } from '@/components/section-title'
import { FadeUp } from '@/components/motion-primitives'
import { PriceComparison } from '@/components/price-comparison'
import { WhyClinicSection } from '@/components/why-clinic-section'
import { ReviewsSection } from '@/components/reviews-section'
import { useTranslation } from '@/lib/i18n/LanguageContext'
import { businessData } from '@/lib/business-data'

const servicesConfig: { icon: LucideIcon; href: string }[] = [
  { icon: ClipboardList, href: '/usluge/stomatoloski-pregled-i-konsultacije' },
  { icon: Sparkles, href: '/usluge/estetska-stomatologija' },
  { icon: Paintbrush, href: '/usluge/estetski-ispuni' },
  { icon: Sun, href: '/usluge/beljenje-zuba' },
  { icon: Cpu, href: '/usluge/cad-cam' },
  { icon: Smile, href: '/usluge/fasete' },
  { icon: Gem, href: '/usluge/implantologija' },
  { icon: Scissors, href: '/usluge/oralna-hirurgija' },
  { icon: Crown, href: '/usluge/protetika' },
  { icon: HeartPulse, href: '/usluge/parodontologija' },
  { icon: CircleDot, href: '/usluge/endodoncija' },
  { icon: AlignCenter, href: '/usluge/ortodoncija' },
  { icon: Zap, href: '/usluge/terapija-laserom' },
]

function ServiceMarqueeCard({
  icon: Icon,
  title,
  description,
  href,
  learnMore,
  decorative = false,
}: {
  icon: LucideIcon
  title: string
  description: string
  href: string
  learnMore: string
  decorative?: boolean
}) {
  const className =
    'group flex w-[min(78vw,280px)] shrink-0 flex-col border border-[#ddd6cc] bg-[#fffcf8] p-5 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-[300px]'

  const inner = (
    <>
      <div className="mb-4 flex h-10 w-10 items-center justify-center border border-[#ddd6cc] transition-colors group-hover:border-primary/30 group-hover:bg-primary/5">
        <Icon size={20} className="text-primary" />
      </div>
      <h3 className="font-serif text-lg text-[#1c1a17]">{title}</h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm font-light leading-relaxed text-[#6b6560]">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-primary">
        {learnMore}
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </>
  )

  if (decorative) {
    return (
      <div className={className} aria-hidden="true">
        {inner}
      </div>
    )
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  )
}

export default function HomePage() {
  const { t, language } = useTranslation()
  const shouldReduce = useReducedMotion()

  const services = t.home.servicesList
    .map((service, index) => {
      const config = servicesConfig[index]
      if (!config?.icon) return null
      return { ...service, ...config }
    })
    .filter((s): s is NonNullable<typeof s> => s !== null)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f7f4ef] lg:min-h-[100dvh]">
        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block">
          <div className="absolute left-[6%] top-[18%] h-64 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          <div className="absolute right-[12%] top-[22%] h-80 w-px bg-gradient-to-b from-transparent via-[#ddd6cc] to-transparent" />
          <div className="absolute left-[18%] top-[12%] h-px w-40 bg-gradient-to-r from-transparent via-[#ddd6cc] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-5 pb-10 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:min-h-[100dvh] lg:px-12 lg:pt-32">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-20">
            <div className="min-w-0 max-w-2xl text-center lg:text-left">
              <motion.p
                initial={shouldReduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-3 font-serif text-[1.75rem] tracking-tight text-[#12100e] sm:mb-5 sm:text-4xl md:text-5xl"
              >
                {t.home.hero.brand}
              </motion.p>

              <motion.p
                initial={shouldReduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-primary sm:mb-6"
              >
                {t.home.hero.badge}
              </motion.p>

              <motion.h1
                initial={shouldReduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                className={`font-serif text-[2rem] leading-[1.1] text-[#1c1a17] sm:text-5xl md:text-6xl ${
                  language === 'ru' ? 'lg:text-5xl xl:text-6xl' : 'lg:text-6xl'
                }`}
              >
                {t.home.hero.titleLine1}
                <br />
                <span className="text-[#3a3530]">{t.home.hero.titleLine2}</span>
              </motion.h1>

              <motion.p
                initial={shouldReduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="mx-auto mt-5 max-w-[40ch] text-[15px] leading-relaxed text-[#6b6560] sm:mt-7 sm:max-w-[48ch] sm:text-base md:text-lg lg:mx-0"
              >
                {t.home.hero.description}
              </motion.p>

              <motion.div
                initial={shouldReduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
              >
                <Link
                  href="/kontakt"
                  className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-primary py-3 pl-6 pr-3 text-xs font-medium uppercase tracking-[0.16em] text-white transition-all duration-500 hover:bg-[#0a5a61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef] active:scale-[0.98]"
                >
                  <span>{t.home.hero.ctaPrimary}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0.5">
                    <span aria-hidden="true" className="text-sm leading-none">
                      →
                    </span>
                  </span>
                </Link>
                <a
                  href={businessData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#1c1a17]/20 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-[#1c1a17] transition-all duration-500 hover:border-[#1c1a17] hover:bg-[#1c1a17] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1a17] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef] active:scale-[0.98]"
                >
                  {t.home.hero.ctaWhatsApp}
                </a>
                <Link
                  href="/usluge/stomatoloski-pregled-i-konsultacije"
                  className="inline-flex min-h-11 items-center justify-center rounded-full px-2 py-3 text-xs font-medium uppercase tracking-[0.16em] text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef]"
                >
                  {t.home.hero.ctaFreeExam}
                </Link>
              </motion.div>

              <motion.ul
                initial={shouldReduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="mt-8 flex flex-col items-center gap-2.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-2 lg:items-start lg:justify-start"
              >
                {t.home.hero.trustItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#7a756f]"
                  >
                    <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                    {item}
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative mx-auto w-full max-w-[280px] sm:max-w-[360px] lg:mx-0 lg:max-w-[420px] lg:justify-self-end"
            >
              <div
                className="relative aspect-[4/5] w-full overflow-hidden bg-[#f7f4ef]"
                style={{
                  WebkitMaskImage:
                    'radial-gradient(ellipse 92% 88% at 50% 42%, #000 58%, transparent 100%), linear-gradient(to bottom, #000 70%, transparent 100%)',
                  maskImage:
                    'radial-gradient(ellipse 92% 88% at 50% 42%, #000 58%, transparent 100%), linear-gradient(to bottom, #000 70%, transparent 100%)',
                  WebkitMaskComposite: 'source-in',
                  maskComposite: 'intersect',
                }}
              >
                <Image
                  src="/images/people/dr-vesna-lazic.jpg"
                  alt="dr Vesna Lazić"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                  className="scale-[1.08] object-cover object-[50%_16%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#f7f4ef] via-[#f7f4ef]/25 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#f7f4ef] to-transparent sm:w-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-[#f7f4ef] to-transparent sm:w-10" />
              </div>
              <p className="mt-3 text-center text-sm uppercase tracking-[0.18em] text-[#6b6560] sm:mt-4 lg:text-left">
                dr Vesna Lazić
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. Trust / why clinic */}
      <WhyClinicSection />

      {/* 2. Services marquee */}
      <section className="overflow-hidden bg-[#f7f4ef] py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <p className="mb-4 text-center text-sm uppercase tracking-[0.2em] text-primary">
              {t.home.servicesSection.eyebrow}
            </p>
            <SectionTitle
              title={t.home.servicesSection.title}
              subtitle={t.home.servicesSection.subtitle}
            />
          </FadeUp>
        </div>

        {shouldReduce ? (
          <div className="no-scrollbar mt-8 flex gap-3 overflow-x-auto px-5 pb-2 snap-x snap-mandatory sm:mt-10 sm:px-8 lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-12 lg:pb-0">
            {services.map((service) => (
              <div key={service.href} className="snap-start">
                <ServiceMarqueeCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  learnMore={t.home.servicesSection.learnMore}
                />
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Mobile: manual snap scroll (no continuous animation jank) */}
            <div
              className="no-scrollbar relative mt-8 overflow-x-auto overscroll-x-contain px-5 pb-2 scroll-smooth snap-x snap-mandatory md:hidden"
              aria-label={t.home.servicesSection.title}
            >
              <div className="flex w-max gap-3">
                {services.map((service) => (
                  <div key={service.href} className="snap-start">
                    <ServiceMarqueeCard
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      href={service.href}
                      learnMore={t.home.servicesSection.learnMore}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* md+: CSS marquee */}
            <div
              className="group/marquee relative mt-10 hidden md:block"
              aria-label={t.home.servicesSection.title}
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f7f4ef] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f7f4ef] to-transparent" />
              <div className="flex animate-marquee gap-4 pl-4 will-change-transform">
                {services.map((service) => (
                  <ServiceMarqueeCard
                    key={`a-${service.href}`}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    href={service.href}
                    learnMore={t.home.servicesSection.learnMore}
                  />
                ))}
                {services.map((service) => (
                  <ServiceMarqueeCard
                    key={`b-${service.href}`}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    href={service.href}
                    learnMore={t.home.servicesSection.learnMore}
                    decorative
                  />
                ))}
              </div>
            </div>
          </>
        )}

        <FadeUp delay={0.1}>
          <div className="mt-8 flex justify-center px-5 sm:mt-10 sm:px-6">
            <Link
              href="/usluge"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#1c1a17]/30 px-8 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#1c1a17] transition-all duration-500 hover:border-[#1c1a17] hover:bg-[#1c1a17] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1a17] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef]"
            >
              {t.home.servicesSection.viewAll}
            </Link>
          </div>
        </FadeUp>
      </section>

      {/* 3. Meet the doctor */}
      <section className="border-y border-[#ddd6cc] bg-[#f7f4ef] py-12 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
            <FadeUp className="lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden bg-[#f7f4ef] sm:max-w-[360px] lg:mx-0">
                <Image
                  src="/images/people/dr-vesna-lazic.jpg"
                  alt="dr Vesna Lazić"
                  fill
                  sizes="(max-width: 640px) 280px, 360px"
                  className="scale-[1.06] object-cover object-[50%_16%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#f7f4ef]/55 via-transparent to-transparent" />
              </div>
            </FadeUp>

            <FadeUp delay={0.1} className="lg:col-span-7">
              <p className="mb-3 text-sm uppercase tracking-[0.22em] text-primary sm:mb-4">
                {t.home.doctorSection.eyebrow}
              </p>
              <h2 className="font-serif text-3xl text-[#1c1a17] sm:text-4xl md:text-5xl">
                {t.home.doctorSection.title}
              </h2>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-[#6b6560]">
                {t.home.doctorSection.role}
              </p>
              <p className="mt-6 max-w-[55ch] text-base leading-relaxed text-[#5e5953] sm:mt-8 md:text-lg">
                {t.home.doctorSection.bio}
              </p>
              <Link
                href="/o-nama"
                className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-[#1c1a17]/30 px-8 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#1c1a17] transition-all duration-500 hover:border-[#1c1a17] hover:bg-[#1c1a17] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1a17] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef] sm:mt-10"
              >
                {t.home.doctorSection.cta}
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 4. Pricing after value is established */}
      <PriceComparison />

      {/* 5. Compact reviews near the end */}
      <ReviewsSection />

      {/* 6. Merged closing: free consult + final CTA */}
      <section className="bg-[#12100e] py-14 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-12">
          <FadeUp>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-primary sm:mb-5">
              {t.home.highlight.eyebrow}
            </p>
            <h2 className="font-serif text-[1.75rem] text-white sm:text-3xl md:text-5xl">
              {t.home.highlight.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-white/70 sm:mt-6 md:text-lg">
              {t.home.highlight.description}
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center">
              <a
                href={businessData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#0a5a61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#12100e]"
              >
                {t.home.highlight.ctaWhatsApp}
              </a>
              <Link
                href="/kontakt"
                className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-white/25 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:border-white hover:bg-white hover:text-[#12100e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#12100e]"
              >
                <span>{t.home.cta.button}</span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
            <p className="mx-auto mt-6 max-w-lg text-sm font-light text-white/45">
              {t.home.cta.description}
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
