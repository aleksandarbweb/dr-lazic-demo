"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/motion-primitives'
import { useTranslation } from '@/lib/i18n/LanguageContext'

interface FAQ {
  question: string
  answer: string
}

interface RelatedService {
  title: string
  href: string
}

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  description: string
  whatIsIt: string
  howItWorks: string[]
  idealCandidates: string[]
  expectedResults: string[]
  faqs: FAQ[]
  relatedServices: RelatedService[]
  imageSrc?: string
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  whatIsIt,
  howItWorks,
  idealCandidates,
  expectedResults,
  faqs,
  relatedServices,
  imageSrc
}: ServicePageLayoutProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { t } = useTranslation()

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#faf9f7] pt-36 pb-24">
        <div className="hidden md:block absolute left-8 top-1/3 w-[1px] h-32 bg-[#b91c1c]/30" />
        <FadeUp>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <Link
                href="/usluge"
                className="inline-flex items-center text-[#6b6b6b] text-sm hover:text-[#b91c1c] transition-colors mb-8 tracking-wide group"
              >
                <ChevronRight size={16} className="rotate-180 mr-2 transition-transform group-hover:-translate-x-1" />
                {t.servicePage.backToServices}
              </Link>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a]">
                {title}
              </h1>
              <div className="w-24 h-[2px] bg-[#b91c1c] mt-8" />
              <p className="text-[#6b6b6b] text-lg mt-8 font-light leading-relaxed">
                {subtitle}
              </p>
              <Link
                href="/kontakt"
                className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#b91c1c] px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#991b1b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c] focus-visible:ring-offset-2 active:scale-[0.98] group"
              >
                {t.servicePage.learnMore}
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-all duration-500 group-hover:-translate-y-[1px] group-hover:translate-x-1">
                  <span aria-hidden="true" className="text-xs leading-none">→</span>
                </span>
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* What Is It Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp delay={0.1}>
                <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">{t.servicePage.aboutLabel}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
                  {t.servicePage.whatIs} {title}?
                </h2>
                <div className="w-16 h-[2px] bg-[#b91c1c] mb-8" />
                <p className="text-[#6b6b6b] leading-relaxed whitespace-pre-line font-light">
                  {whatIsIt}
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={0.3} className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-[#e4ddd4] bg-[#f4eee8] p-1.5 shadow-[0_25px_50px_-30px_rgba(44,31,20,0.45)]">
              <div className="relative h-full w-full overflow-hidden rounded-[calc(1.75rem-0.375rem)]">
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#f5f3f0]">
                    <span className="text-[#6b6b6b]">Slika tretmana</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#24160f]/15 via-transparent to-transparent" />
              </div>
              <div className="absolute left-5 top-5 h-12 w-12 border-l border-t border-[#b91c1c]/60" />
              <div className="absolute bottom-5 right-5 h-12 w-12 border-b border-r border-[#b91c1c]/60" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#faf9f7] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16">
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">{t.servicePage.processLabel}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              {t.servicePage.howItWorks}
            </h2>
            <div className="w-16 h-[2px] bg-[#b91c1c] mx-auto mt-6" />
          </FadeUp>
          <StaggerChildren className="max-w-3xl mx-auto" staggerDelay={0.1}>
            {howItWorks.map((step, index) => (
              <StaggerItem key={index}>
                <div className="flex gap-8 mb-10 last:mb-0">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-[#b91c1c] font-serif text-2xl text-white shadow-lg">
                    {index + 1}
                  </div>
                  <div className="pt-3">
                    <p className="text-[#6b6b6b] leading-relaxed font-light">{step}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Ideal Candidates & Results Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <FadeUp>
                <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">{t.servicePage.candidatesLabel}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
                  {t.servicePage.forWhom}
                </h2>
                <div className="w-16 h-[2px] bg-[#b91c1c] mb-8" />
              </FadeUp>
              <StaggerChildren className="space-y-5" staggerDelay={0.1}>
                {idealCandidates.map((candidate, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-4">
                      <span className="w-2 h-2 bg-[#b91c1c] mt-2 flex-shrink-0" />
                      <span className="text-[#6b6b6b] font-light">{candidate}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
            <div>
              <FadeUp delay={0.2}>
                <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">{t.servicePage.resultsLabel}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
                  {t.servicePage.expectedResults}
                </h2>
                <div className="w-16 h-[2px] bg-[#b91c1c] mb-8" />
              </FadeUp>
              <StaggerChildren className="space-y-5" staggerDelay={0.1}>
                {expectedResults.map((result, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-4">
                      <span className="w-2 h-2 bg-[#b91c1c] mt-2 flex-shrink-0" />
                      <span className="text-[#6b6b6b] font-light">{result}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#faf9f7] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16">
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">{t.servicePage.faqLabel}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              {t.servicePage.faqTitle}
            </h2>
            <div className="w-16 h-[2px] bg-[#b91c1c] mx-auto mt-6" />
          </FadeUp>
          <StaggerChildren className="space-y-4" staggerDelay={0.08}>
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <div className="border border-[#e5e0da] bg-white shadow-sm transition-shadow hover:shadow-md">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                    className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70"
                  >
                    <span className="text-[#1a1a1a] font-medium pr-4">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-[#b91c1c] transition-transform duration-300 flex-shrink-0 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{ maxHeight: openFaq === index ? '500px' : '0', opacity: openFaq === index ? 1 : 0 }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-[#e5e0da] mx-6">
                      <p className="text-[#6b6b6b] leading-relaxed font-light">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp className="text-center mb-16">
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">{t.servicePage.exploreLabel}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              {t.servicePage.relatedTitle}
            </h2>
            <div className="w-16 h-[2px] bg-[#b91c1c] mx-auto mt-6" />
          </FadeUp>
          <StaggerChildren className="grid grid-cols-1 gap-6 md:grid-cols-3" staggerDelay={0.1}>
            {relatedServices.map((service) => (
              <StaggerItem key={service.href}>
                <Link
                  href={service.href}
                  className="group block rounded-[1.5rem] border border-[#e5e0da] bg-[#faf9f7] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#b91c1c]/50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70 relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#b91c1c] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:w-full" />
                  <h3 className="text-[#1a1a1a] font-medium mb-3 group-hover:text-[#b91c1c] transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-[#b91c1c] text-sm inline-flex items-center gap-2 font-medium">
                    {t.servicePage.learnMore}
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#b91c1c] py-20">
        <div className="absolute left-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

        <FadeUp>
          <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4">{t.servicePage.ctaReadyLabel}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              {title} — {t.servicePage.ctaTitle}
            </h2>
            <p className="text-white/80 mt-5 font-light">
              {t.servicePage.ctaDescription}
            </p>
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-center gap-3 bg-white text-[#b91c1c] px-10 py-4 mt-10 text-sm font-bold tracking-[0.15em] uppercase transition-all duration-500 hover:bg-[#faf9f7] hover:shadow-xl hover:-translate-y-1 active:scale-95 rounded-full"
            >
              {t.servicePage.contactUs}
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
