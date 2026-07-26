'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from "motion/react"
import {
  Stethoscope,
  Sparkles,
  Zap,
  Waves,
  Microscope,
  HandHeart
} from 'lucide-react'
import { ServiceCard } from '@/components/service-card'
import { DoctorCard } from '@/components/doctor-card'
import { TestimonialCard } from '@/components/testimonial-card'
import { SectionTitle } from '@/components/section-title'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/motion-primitives'
import { useTranslation } from '@/lib/i18n/LanguageContext'

const servicesConfig = [
  { icon: Stethoscope, href: '/usluge#opsta-dermatovenerologija' },
  { icon: Sparkles, href: '/usluge#estetska-dermatologija' },
  { icon: Zap, href: '/usluge#laseri-u-dermatologiji' },
  { icon: Waves, href: '/usluge#radiotalasna-hirurgija' },
  { icon: Microscope, href: '/usluge#kompjuterizovana-dermoskopija' },
  { icon: HandHeart, href: '/usluge#kozmetologija' },
]

const equipmentBrands = [
  { name: 'Fotona', logo: '/images/Logos/fotona-logo.png' },
  { name: 'Alma', logo: '/images/Logos/alma-logo.png' },
  { name: 'InMode', logo: '/images/Logos/inmode-logo.png' },
  { name: 'Ellman', logo: '/images/Logos/ellman-logo.png' },
  { name: 'Cortex', logo: '/images/Logos/cortex-logo.png' },
  { name: 'H&O', logo: '/images/Logos/ho-logo.png' },
  { name: 'Canfield', logo: '/images/Logos/canfield-logo.png' },
  { name: 'Dermapen', logo: '/images/Logos/dermapen-logo.png' },
]

const doctorsConfig = [
  {
    imageSrc: "/images/people/Marta/marta new in labcoat 1.png",
    profileHref: "/o-nama#marta-terzic",
  },
  {
    imageSrc: "/images/people/Biljana/drbiljanapetkovicheadshot.png",
    profileHref: "/o-nama#biljana-petkovic",
    reversed: true
  }
]


export default function HomePage() {
  const { t, language } = useTranslation()
  const mobileServicesRef = useRef<HTMLDivElement>(null)
  const partnersCarouselRef = useRef<HTMLAnchorElement>(null)
  const reviewsCarouselRef = useRef<HTMLDivElement>(null)
  const shouldReduce = useReducedMotion()

  const [partnersPaused, setPartnersPaused] = useState(false)
  const [reviewsPaused, setReviewsPaused] = useState(false)
  // Mobile gets plain native touch scrolling instead of the JS-driven marquee —
  // matches Tailwind's `md` breakpoint (768px) used everywhere else on this page.
  const [isMobile, setIsMobile] = useState(false)

  const reviewsResumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const partnersResumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mql.matches)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  const services = t.home.servicesList.map((service, index) => ({
    ...service,
    ...servicesConfig[index]
  }))

  const doctors = t.home.doctorsList.map((doc, index) => ({
    ...doc,
    ...doctorsConfig[index],
    ctaLabel: t.home.doctorsSection.viewProfileLabel,
  }))

  // ── Auto-scrolling Marquees (Equipment & Reviews) — desktop only. Mobile
  // relies entirely on native touch scrolling; no RAF loop runs there at all.
  // Also respects prefers-reduced-motion (shouldReduce).
  useEffect(() => {
    if (isMobile || shouldReduce) return

    const containers = [
      // Doubled lists — reset once we've scrolled exactly one copy's width.
      { ref: partnersCarouselRef, speed: 0.01, paused: partnersPaused, resetFraction: 0.5 },
      { ref: reviewsCarouselRef, speed: 0.008, paused: reviewsPaused, resetFraction: 0.5 },
    ]

    // A cancelled flag (not a stored frame id) is what actually stops the loop:
    // `tick` reschedules itself every frame via a recursive `requestAnimationFrame`
    // call, so only the very first frame id was ever capturable up front — trying
    // to cancel by id after the fact silently cancels nothing, and the loop leaks
    // forever, ignoring all future pause state. This was a pre-existing bug,
    // confirmed via instrumentation: hovering set `paused` correctly, but a
    // leaked earlier loop kept writing scrollLeft in parallel regardless.
    let cancelled = false

    containers.forEach(({ ref, speed, paused, resetFraction }) => {
      const container = ref.current
      if (!container) return

      let lastTs = 0
      // Track position in a float; container.scrollLeft rounds to an integer on
      // read, so accumulating via `container.scrollLeft += tinyDelta` silently
      // drops sub-pixel increments and the marquee never actually moves.
      let position = container.scrollLeft
      let lastSetValue = position

      const tick = (ts: number) => {
        if (cancelled) return
        if (paused) {
          lastTs = ts
          requestAnimationFrame(tick)
          return
        }
        if (lastTs === 0) lastTs = ts
        const delta = ts - lastTs
        lastTs = ts

        // If the user (or the edge-jump effect) moved scrollLeft since our last
        // write, resync so auto-scroll continues from there instead of fighting it.
        if (Math.abs(container.scrollLeft - lastSetValue) > 1) {
          position = container.scrollLeft
        }

        position += delta * speed
        if (resetFraction !== null && position >= container.scrollWidth * resetFraction) {
          position = 0
        }
        container.scrollLeft = position
        lastSetValue = container.scrollLeft
        requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    })

    return () => { cancelled = true }
  }, [partnersPaused, reviewsPaused, isMobile, shouldReduce])

  const loopingEquipment = [...equipmentBrands, ...equipmentBrands]
  const doubledReviews = [...t.home.reviewsList, ...t.home.reviewsList]
  // Mobile: plain, single-copy lists with native touch scroll — no JS position
  // manipulation, so there's nothing to teleport/jump while the user drags.
  // Desktop: doubled lists feed the RAF marquee above.
  const mobileServicesList = services
  const equipmentItems = isMobile ? equipmentBrands : loopingEquipment
  const reviewsItems = isMobile ? t.home.reviewsList : doubledReviews

  const pauseReviews = () => {
    if (reviewsResumeTimeout.current) clearTimeout(reviewsResumeTimeout.current)
    setReviewsPaused(true)
  }
  const resumeReviews = () => {
    if (reviewsResumeTimeout.current) clearTimeout(reviewsResumeTimeout.current)
    reviewsResumeTimeout.current = setTimeout(() => setReviewsPaused(false), 1200)
  }
  const pausePartners = () => {
    if (partnersResumeTimeout.current) clearTimeout(partnersResumeTimeout.current)
    setPartnersPaused(true)
  }
  const resumePartners = () => {
    if (partnersResumeTimeout.current) clearTimeout(partnersResumeTimeout.current)
    partnersResumeTimeout.current = setTimeout(() => setPartnersPaused(false), 1200)
  }

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] overflow-hidden bg-[#faf9f6]">
        {/* Abstract Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[5%] top-[15%] h-64 w-px bg-gradient-to-b from-transparent via-[#b91c1c]/20 to-transparent" />
          <div className="absolute right-[10%] top-[20%] h-96 w-px bg-gradient-to-b from-transparent via-[#b91c1c]/15 to-transparent" />
          <div className="absolute left-[20%] top-[10%] h-[1px] w-48 bg-gradient-to-r from-transparent via-[#d6cec4] to-transparent" />
          <div className="absolute -right-24 top-1/4 h-[500px] w-[500px] rounded-full bg-[#b91c1c]/[0.02] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-7xl items-center px-6 pb-16 pt-32 sm:px-8 lg:px-12 lg:pt-36">
          <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left Content */}
            <div className="min-w-0 max-w-2xl text-center lg:text-left">
              <motion.p
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-6 inline-flex rounded-full border border-[#b91c1c]/20 bg-white/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-[#b91c1c]"
              >
                {t.home.hero.badge}
              </motion.p>
              <motion.h1
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className={`text-5xl font-serif leading-[1.05] text-[#181512] sm:text-6xl md:text-7xl ${language === 'ru' ? 'lg:text-5xl xl:text-6xl' : 'lg:text-6xl xl:text-7xl'}`}
              >
                {t.home.hero.titleLine1}
                <br />
                <span className="text-[#342f2a]">{t.home.hero.titleLine2}</span>
              </motion.h1>

              {/* Mobile/Tablet Portrait — desktop shows the larger version at right */}
              <motion.div
                initial={shouldReduce ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative mx-auto mt-8 aspect-[4/5] w-full max-w-[220px] sm:max-w-[260px] lg:hidden"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] border-[8px] border-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/images/people/Marta/marta new 1.png"
                    alt="dr Marta Terzić"
                    fill
                    priority
                    className="object-cover object-[42%_35%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                </div>
              </motion.div>

              <motion.p
                initial={shouldReduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-8 max-w-[50ch] text-base leading-relaxed text-[#5e5953] md:text-lg lg:mx-0 mx-auto"
              >
                {t.home.hero.description}
              </motion.p>
              <motion.div
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
              >
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center gap-3 pl-5 pr-2.5 py-2.5 rounded-full bg-[#b91c1c] text-xs font-medium uppercase tracking-[0.16em] text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#9f1818] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ee] active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <span>{t.home.hero.ctaPrimary}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[1px] group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none">
                    <span aria-hidden="true" className="text-sm leading-none">
                      →
                    </span>
                  </span>
                </Link>
                <Link
                  href="/usluge"
                  className="inline-flex items-center justify-center rounded-full border border-[#27221d]/20 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-[#27221d] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-[#27221d] hover:bg-[#27221d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27221d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ee] active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  {t.home.hero.ctaSecondary}
                </Link>
              </motion.div>

              {/* Trust micro-indicators */}
              <motion.div
                initial={shouldReduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              >
                {t.home.hero.trustItems.map((item, i) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#7a756f]"
                  >
                    {i > 0 && <span className="text-[#d6cec4]" aria-hidden="true">·</span>}
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#b91c1c]/40" />
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right Image with Frame */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative hidden aspect-[4/5] w-full max-w-[500px] lg:block justify-self-end"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border-[12px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)]">
                <Image
                  src="/images/people/Marta/marta new 1.png"
                  alt="dr Marta Terzić"
                  fill
                  priority
                  className="object-cover object-[42%_35%] transition-transform duration-1000 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
              </div>
              {/* Decorative Frame Accents */}
              <motion.div
                initial={shouldReduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-6 -top-6 h-24 w-24 border-l-2 border-t-2 border-[#b91c1c]/30"
              />
              <motion.div
                initial={shouldReduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -bottom-6 -right-6 h-24 w-24 border-b-2 border-r-2 border-[#b91c1c]/30"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          TRUST BAR / STATS
          ════════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-[#e5ddd3] bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp>
            <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#b91c1c] md:mb-12">
              {t.home.trustEyebrow}
            </p>
          </FadeUp>
          <StaggerChildren className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10" staggerDelay={0.1}>
            {t.home.stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <div
                  className={`relative text-center ${
                    index < t.home.stats.length - 1 ? 'md:border-r md:border-[#e5e0da]' : ''
                  }`}
                >
                  <div className="mx-auto mb-4 h-[2px] w-6 bg-[#b91c1c]/30" />
                  <p className="font-serif text-5xl tabular-nums text-[#b91c1c] md:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm font-light leading-relaxed tracking-wide text-[#6b6b6b]">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SERVICES SECTION
          ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f7f4ee] py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp>
            <p className="mb-4 text-center text-sm tracking-[0.2em] uppercase text-[#b91c1c]">
              {t.home.servicesSection.eyebrow}
            </p>
            <SectionTitle
              title={t.home.servicesSection.title}
              subtitle={t.home.servicesSection.subtitle}
            />
          </FadeUp>
          {/* Mobile Carousel / Desktop Grid */}
          <div className="relative">
            <div 
              ref={mobileServicesRef}
              className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-8 md:hidden"
            >
              {mobileServicesList.map((service, index) => (
                <div
                  key={`${service.title}-${index}`}
                  className="min-w-[85vw] snap-center rounded-[1.75rem] border border-[#e3dad1] bg-white p-1.5"
                >
                  <div className="h-full overflow-hidden rounded-[calc(1.75rem-0.375rem)] border border-[#f2ece5] bg-[#fffdfb]">
                    <ServiceCard {...service} learnMoreText={t.home.servicesSection.learnMore} />
                  </div>
                </div>
              ))}
            </div>

            <StaggerChildren className="hidden flex-wrap justify-center gap-5 md:flex" staggerDelay={0.08}>
              {services.map((service) => (
                <StaggerItem
                  key={service.title}
                  className="w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                >
                  <div
                    className="h-full rounded-[1.75rem] border border-[#e3dad1] bg-white p-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(65,45,30,0.35)] motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    <div className="h-full overflow-hidden rounded-[calc(1.75rem-0.375rem)] border border-[#f2ece5] bg-[#fffdfb]">
                      <ServiceCard {...service} learnMoreText={t.home.servicesSection.learnMore} />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Swipe hint for mobile */}
            <div className="mt-3 flex flex-col items-center gap-2 md:hidden">
              <div className="flex justify-center gap-1.5">
                <div className="h-1 w-8 rounded-full bg-[#b91c1c]/20" />
                <div className="h-1 w-1.5 rounded-full bg-[#b91c1c]/10" />
                <div className="h-1 w-1.5 rounded-full bg-[#b91c1c]/10" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#9b948c]">
                {t.home.servicesSection.swipeMobile}
              </p>
            </div>
          </div>
          <FadeUp delay={0.2}>
            <div className="mt-8 flex justify-center">
              <Link
                href="/usluge"
                className="inline-flex items-center justify-center rounded-full border border-[#27221d]/30 px-8 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#27221d] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-[#27221d] hover:bg-[#27221d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27221d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ee]"
              >
                {t.home.servicesSection.viewAll}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PHILOSOPHY / DR. QUOTE SECTION
          ════════════════════════════════════════════════════════════════════ */}
      <section className="noise-overlay relative overflow-hidden bg-[#2a2420] py-16 md:py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-full w-px bg-white/[0.03]" />
          <div className="absolute right-1/4 top-0 h-full w-px bg-white/[0.03]" />
          {/* Soft radial glow behind quote */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-[#b91c1c]/[0.03] blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <FadeUp delay={0}>
              <div className="mb-10 flex justify-center">
                <div className="h-12 w-[1px] bg-[#b91c1c]" />
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.4em] text-white/30">
                {t.home.philosophy.title}
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <h2 className="font-serif text-2xl leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                &ldquo;{t.home.philosophy.quote.replace(/^["“]|["”]$/g, '')}&rdquo;
              </h2>
            </FadeUp>
            
            <FadeUp delay={0.45}>
              <div className="mt-12 flex flex-col items-center">
                <div className="mb-4 h-px w-12 bg-white/20" />
                <p className="text-sm font-medium tracking-[0.2em] text-white/50">{t.home.philosophy.author}</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          DOCTORS SECTION
          ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f5f2ec] py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp>
            <SectionTitle title={t.home.doctorsSection.title} />
          </FadeUp>
          <div className="space-y-16 md:space-y-24">
              {doctors.map((doctor, index) => (
                <DoctorCard key={index} {...doctor} />
              ))}
          </div>
          <FadeUp delay={0.1}>
            <div className="mt-16 flex justify-center md:mt-20">
              <Link
                href="/o-nama#nas-tim"
                className="inline-flex items-center justify-center rounded-full border border-[#27221d]/30 px-8 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#27221d] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-[#27221d] hover:bg-[#27221d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27221d] focus-visible:ring-offset-2"
              >
                {t.home.doctorsSection.viewTeamLabel}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          EQUIPMENT SECTION (Infinite Marquee, links to /oprema)
          ════════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-[#e5ddd3] bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp>
            <p className="mb-10 text-center text-sm uppercase tracking-[0.2em] text-[#6b6b6b]">{t.home.equipmentTitle}</p>
          </FadeUp>
          <Link
            href="/oprema"
            ref={partnersCarouselRef}
            className="no-scrollbar flex items-center gap-14 overflow-x-auto snap-x snap-mandatory px-6 -mx-6 md:snap-none md:gap-20 md:px-0 md:mx-0"
            onMouseEnter={pausePartners}
            onMouseLeave={resumePartners}
            onFocus={pausePartners}
            onBlur={resumePartners}
            onTouchStart={pausePartners}
            onTouchEnd={resumePartners}
            onPointerDown={pausePartners}
            onPointerUp={resumePartners}
            aria-label={t.home.equipmentTitle}
          >
            {equipmentItems.map((brand, index) => (
              <span
                key={`${brand.name}-${index}`}
                className="relative h-9 w-28 flex-shrink-0 snap-center grayscale opacity-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-100 hover:grayscale-0 md:h-10 md:w-32"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </span>
            ))}
          </Link>
          <p className="mt-4 text-center text-[11px] uppercase tracking-[0.15em] text-[#9b948c] md:hidden">
            {t.home.swipeHint}
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PATIENT REVIEWS SECTION — real, curated excerpts from public reviews,
          in a self-scrolling marquee that also supports manual drag/swipe.
          ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp>
            <SectionTitle title={t.home.reviewsSection.title} subtitle={t.home.reviewsSection.subtitle} />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div
              ref={reviewsCarouselRef}
              className="no-scrollbar -mx-6 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:-mx-8 sm:px-8 md:snap-none lg:-mx-12 lg:px-12"
              onMouseEnter={pauseReviews}
              onMouseLeave={resumeReviews}
              onTouchStart={pauseReviews}
              onTouchEnd={resumeReviews}
              onPointerDown={pauseReviews}
              onPointerUp={resumeReviews}
            >
              {reviewsItems.map((item, index) => (
                <div key={index} className="w-[280px] flex-shrink-0 snap-center sm:w-[340px]">
                  <TestimonialCard quote={item.quote} author={item.author} />
                </div>
              ))}
            </div>
          </FadeUp>

          <p className="mt-4 text-center text-[11px] uppercase tracking-[0.15em] text-[#9b948c] md:hidden">
            {t.home.swipeHint}
          </p>

          <FadeUp delay={0.2}>
            <p className="mt-6 text-center text-xs uppercase tracking-[0.15em] text-[#9b948c] md:mt-10">
              {t.home.reviewsSource}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CTA SECTION
          ════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#faf6f1] py-20 md:py-32 border-y border-[#e5ddd3]">
        {/* Layered Decorative Elements — soft, not solid red */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b91c1c]/[0.04]" />
          <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-[#b91c1c]/[0.04]" />
          <div className="absolute left-1/4 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#b91c1c]/[0.02]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <FadeUp>
            <p className="text-[#b91c1c] text-sm tracking-[0.3em] uppercase mb-6">{t.home.cta.subtitle}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#181512] tracking-wide">
              {t.home.cta.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#5e5953] text-lg mt-6 max-w-2xl mx-auto font-light">
              {t.home.cta.description}
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <motion.div
              className="mt-10 inline-block"
              whileHover={shouldReduce ? {} : { scale: 1.03 }}
              whileTap={shouldReduce ? {} : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/kontakt"
                className="group mx-auto inline-flex items-center justify-between rounded-full bg-[#b91c1c] px-3 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#9f1818] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf6f1] active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none sm:gap-5 sm:pl-8 sm:pr-3"
              >
                <span>{t.home.cta.button}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[1px] group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none">
                  <span aria-hidden="true" className="text-base leading-none">
                    →
                  </span>
                </span>
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
