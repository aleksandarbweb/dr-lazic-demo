'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from "motion/react"
import { 
  Stethoscope, 
  Sparkles, 
  FlaskConical, 
  Zap, 
  ShieldCheck, 
  HandHeart 
} from 'lucide-react'
import { ServiceCard } from '@/components/service-card'
import { DoctorCard } from '@/components/doctor-card'
import { TestimonialCard } from '@/components/testimonial-card'
import { SectionTitle } from '@/components/section-title'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/motion-primitives'
import { useTranslation } from '@/lib/i18n/LanguageContext'

const servicesConfig = [
  { icon: Stethoscope, href: '/usluge#dermatologija' },
  { icon: Sparkles, href: '/usluge#estetika' },
  { icon: FlaskConical, href: '/usluge#estetska-dermatologija' },
  { icon: Zap, href: '/usluge#laserski-tretmani' },
  { icon: ShieldCheck, href: '/usluge#dermatovenerologija' },
  { icon: HandHeart, href: '/usluge#kozmetologija' },
]

const partners = [
  'Lumenis Light Sheer',
  'Morpheus8',
  'Fotona',
  'Bioderma',
  'Juvederm'
]

const testimonialsConfig = [
  { treatmentHref: '/usluge/botoks-fileri' },
  { treatmentHref: '/usluge/morpheus8' },
  { treatmentHref: '/usluge/dermoskopija' },
  { treatmentHref: '/usluge/laserska-epilacija' },
  { treatmentHref: '/usluge/prp' },
  { treatmentHref: '/usluge/hemijski-pilinzi' },
  { treatmentHref: '/usluge/profhilo' },
  { treatmentHref: '/usluge/akne' },
  { treatmentHref: '/kontakt' },
]

const doctorsConfig = [
  {
    imageSrc: "/images/people/Marta/marta new in labcoat 1.png",
    profileHref: "/o-nama#marta-terzic",
    enableFocusEasterEgg: true
  },
  {
    imageSrc: "/images/people/Biljana/drbiljanapetkovicheadshot.png",
    profileHref: "/o-nama#biljana-petkovic",
    reversed: true
  }
]

const heroTrustItems = [
  { label: '20+ godina iskustva' },
  { label: '60+ tretmana' },
  { label: 'Individualan pristup' },
]

export default function HomePage() {
  const { t } = useTranslation()
  const servicesCarouselRef = useRef<HTMLDivElement>(null)
  const mobileServicesRef = useRef<HTMLDivElement>(null)
  const testimonialsCarouselRef = useRef<HTMLDivElement>(null)
  const partnersCarouselRef = useRef<HTMLDivElement>(null)
  const shouldReduce = useReducedMotion()
  
  const [servicesPaused, setServicesPaused] = useState(false)
  const [testimonialsPaused, setTestimonialsPaused] = useState(false)
  const [partnersPaused, setPartnersPaused] = useState(false)
  
  const servicesResumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const testimonialsResumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const services = t.home.servicesList.map((service, index) => ({
    ...service,
    ...servicesConfig[index]
  }))

  const testimonials = t.home.testimonialsList.map((testimonial, index) => ({
    ...testimonial,
    ...testimonialsConfig[index]
  }))

  const doctors = t.home.doctorsList.map((doc, index) => ({
    ...doc,
    ...doctorsConfig[index]
  }))

  // ── Auto-scrolling Marquees (Desktop Services & Partners) ──
  useEffect(() => {
    const containers = [
      { ref: servicesCarouselRef, speed: 0.012, paused: servicesPaused },
      { ref: partnersCarouselRef, speed: 0.01, paused: partnersPaused }
    ]

    const frameIds: number[] = []

    containers.forEach(({ ref, speed, paused }) => {
      const container = ref.current
      if (!container) return

      let frameId = 0
      let lastTs = 0

      const tick = (ts: number) => {
        if (paused) {
          lastTs = ts
          frameId = requestAnimationFrame(tick)
          return
        }
        if (lastTs === 0) lastTs = ts
        const delta = ts - lastTs
        lastTs = ts
        
        container.scrollLeft += (delta * speed)

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0
        }
        frameId = requestAnimationFrame(tick)
      }
      
      frameId = requestAnimationFrame(tick)
      frameIds.push(frameId)
    })

    return () => frameIds.forEach(id => cancelAnimationFrame(id))
  }, [servicesPaused, partnersPaused])

  // ── Infinite Scroll Jump Logic (Mobile Interactive Carousels) ──
  useEffect(() => {
    const handleInfiniteScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
      const container = ref.current
      if (!container) return

      // Initialize to middle set
      const init = () => {
        const third = container.scrollWidth / 3
        container.style.scrollBehavior = 'auto'
        container.scrollLeft = third
      }
      
      const timer = setTimeout(init, 150)

      let isJumping = false

      const onScroll = () => {
        if (isJumping) return
        
        const { scrollLeft, scrollWidth } = container
        if (scrollWidth === 0) return
        const third = scrollWidth / 3

        // Thresholds: Jump if we are closer than 1/4 of a set to either end
        const jumpThreshold = third * 0.5 

        if (scrollLeft < jumpThreshold) {
          isJumping = true
          container.style.scrollSnapType = 'none'
          container.style.scrollBehavior = 'auto'
          container.scrollLeft = scrollLeft + third
          // Force layout reflow
          void container.offsetHeight 
          container.style.scrollSnapType = 'x mandatory'
          setTimeout(() => { isJumping = false }, 60)
        } else if (scrollLeft > third * 2 + jumpThreshold) {
          isJumping = true
          container.style.scrollSnapType = 'none'
          container.style.scrollBehavior = 'auto'
          container.scrollLeft = scrollLeft - third
          void container.offsetHeight
          container.style.scrollSnapType = 'x mandatory'
          setTimeout(() => { isJumping = false }, 60)
        }
      }

      container.addEventListener('scroll', onScroll, { passive: true })
      return () => {
        clearTimeout(timer)
        container.removeEventListener('scroll', onScroll)
      }
    }

    const cleanupServices = handleInfiniteScroll(mobileServicesRef)
    const cleanupTestimonials = handleInfiniteScroll(testimonialsCarouselRef)

    return () => {
      cleanupServices?.()
      cleanupTestimonials?.()
    }
  }, [])

  const loopingServices = [...services, ...services]
  const tripleServices = [...services, ...services, ...services]
  const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials]
  const loopingPartners = [...partners, ...partners]

  const pauseServices = () => {
    if (servicesResumeTimeout.current) clearTimeout(servicesResumeTimeout.current)
    setServicesPaused(true)
  }
  const resumeServices = () => {
    if (servicesResumeTimeout.current) clearTimeout(servicesResumeTimeout.current)
    servicesResumeTimeout.current = setTimeout(() => setServicesPaused(false), 900)
  }
  const pauseTestimonials = () => {
    if (testimonialsResumeTimeout.current) clearTimeout(testimonialsResumeTimeout.current)
    setTestimonialsPaused(true)
  }
  const resumeTestimonials = () => {
    if (testimonialsResumeTimeout.current) clearTimeout(testimonialsResumeTimeout.current)
    testimonialsResumeTimeout.current = setTimeout(() => setTestimonialsPaused(false), 900)
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
            <div className="max-w-2xl text-center lg:text-left">
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
                className="text-5xl font-serif leading-[1.05] text-[#181512] sm:text-6xl md:text-7xl lg:text-8xl"
              >
                {t.home.hero.titleLine1}
                <br />
                <span className="italic text-[#342f2a]">{t.home.hero.titleLine2}</span>
              </motion.h1>
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
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
              >
                <Link
                  href="/kontakt"
                  className="group inline-flex w-full items-center justify-center gap-4 pl-6 pr-3 py-3 rounded-full bg-[#b91c1c] text-sm font-medium uppercase tracking-[0.16em] text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#9f1818] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ee] active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none sm:w-auto sm:gap-5 sm:pl-7 sm:pr-3"
                >
                  <span>{t.home.hero.ctaPrimary}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition-all duration-700 ease-[cubic-bezier(32,72,0,1)] group-hover:-translate-y-[1px] group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none">
                    <span aria-hidden="true" className="text-base leading-none">
                      →
                    </span>
                  </span>
                </Link>
                <Link
                  href="/usluge"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#27221d]/30 px-7 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#27221d] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-[#27221d] hover:bg-[#27221d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27221d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ee] active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
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
                {heroTrustItems.map((item, i) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#7a756f]"
                  >
                    {i > 0 && <span className="text-[#d6cec4]" aria-hidden="true">·</span>}
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#b91c1c]/40" />
                    {item.label}
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
                  alt="Dr. Marta Terzić"
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
              {tripleServices.map((service, index) => (
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

            <StaggerChildren className="hidden grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:grid" staggerDelay={0.08}>
              {services.map((service) => (
                <StaggerItem key={service.title}>
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
            <div className="mt-2 flex justify-center gap-1.5 md:hidden">
               <div className="h-1 w-8 rounded-full bg-[#b91c1c]/20" />
               <div className="h-1 w-1.5 rounded-full bg-[#b91c1c]/10" />
               <div className="h-1 w-1.5 rounded-full bg-[#b91c1c]/10" />
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
      <section className="noise-overlay relative overflow-hidden bg-[#151311] py-20 md:py-32 lg:py-48">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-full w-px bg-white/[0.03]" />
          <div className="absolute right-1/4 top-0 h-full w-px bg-white/[0.03]" />
          {/* Soft radial glow behind quote */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-[#b91c1c]/[0.03] blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
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
              <h2 className="font-serif text-3xl italic leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                &ldquo;{t.home.philosophy.quote.replace(/^"|"$/g, '').replace(/^"|"$/g, '')}&rdquo;
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
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PARTNERS SECTION (Infinite Marquee)
          ════════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-[#e5ddd3] bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp>
            <p className="mb-10 text-center text-sm uppercase tracking-[0.2em] text-[#6b6b6b]">{t.home.partnersTitle}</p>
          </FadeUp>
          <div 
            ref={partnersCarouselRef}
            className="no-scrollbar flex gap-10 overflow-x-hidden md:gap-16"
            onMouseEnter={() => setPartnersPaused(true)}
            onMouseLeave={() => setPartnersPaused(false)}
          >
            {loopingPartners.map((partner, index) => (
              <span
                key={`${partner}-${index}`} 
                className="flex-shrink-0 cursor-default text-sm font-medium uppercase tracking-[0.1em] text-[#1a1a1a]/40 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] md:hover:text-[#b91c1c] md:text-base"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          TESTIMONIALS SECTION
          ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f7f4ee] py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp>
            <SectionTitle title={t.home.testimonialsSection.title} />
          </FadeUp>
          
          <div className="relative">
            <div
              ref={testimonialsCarouselRef}
              className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-8 md:hidden"
              onMouseEnter={pauseTestimonials}
              onMouseLeave={resumeTestimonials}
              onPointerDown={pauseTestimonials}
              onPointerUp={resumeTestimonials}
              onTouchStart={pauseTestimonials}
              onTouchEnd={resumeTestimonials}
            >
              {tripleTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.author}-${index}`}
                  className="min-w-[85vw] snap-center"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>

            {/* Swipe hint for mobile */}
            <div className="mt-2 flex justify-center gap-1.5 md:hidden">
               <div className="h-1 w-8 rounded-full bg-[#b91c1c]/20" />
               <div className="h-1 w-1.5 rounded-full bg-[#b91c1c]/10" />
               <div className="h-1 w-1.5 rounded-full bg-[#b91c1c]/10" />
            </div>
          </div>

          <StaggerChildren className="hidden gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:flex md:items-stretch" staggerDelay={0.1}>
            {testimonials.map((testimonial, i) => (
              <StaggerItem
                key={`${testimonial.author}-${i}`}
                className="min-w-full snap-start md:min-w-[calc((100%-3rem)/3)]"
              >
                <TestimonialCard {...testimonial} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CTA SECTION
          ════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#b91c1c] py-20 md:py-32">
        {/* Layered Decorative Elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
          <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-white/5" />
          {/* Additional depth layers */}
          <div className="absolute left-1/4 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-white/[0.03]" />
          <div className="absolute right-1/3 top-1/4 h-32 w-32 rounded-full bg-white/[0.04]" />
          {/* Subtle horizontal line */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/[0.06]" />
          {/* Diamond/lozenge accent */}
          <div className="absolute right-[15%] top-[20%] h-16 w-16 rotate-45 border border-white/[0.08]" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <FadeUp>
            <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-6">{t.home.cta.subtitle}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-wide">
              {t.home.cta.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/80 text-lg mt-6 max-w-2xl mx-auto font-light">
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
                className="group mx-auto inline-flex items-center justify-between rounded-full bg-white px-3 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#b91c1c] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#faf9f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#b91c1c] active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none sm:gap-5 sm:pl-8 sm:pr-3"
              >
                <span>{t.home.cta.button}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b91c1c]/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[1px] group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none">
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
