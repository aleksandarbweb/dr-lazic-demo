'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { BeforeAfterSlider } from '@/components/before-after-slider'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/motion-primitives'
import { useTranslation } from '@/lib/i18n/LanguageContext'
import { beforeAfterCases } from '@/lib/reviews'

const PLACEHOLDER_SRC: Record<string, string> = {
  ordinacija: '/images/gallery/ordinacija.webp',
  prijem: '/images/gallery/prijem.webp',
  tim: '/images/gallery/tim.webp',
  'cad-cam': '/images/gallery/cad-cam.webp',
  implantologija: '/images/gallery/implantologija.webp',
  sterilizacija: '/images/gallery/sterilizacija.webp',
}

type GalleryFilter = 'all' | 'Ordinacija' | 'Tim' | 'Tehnologija' | 'Pre i posle'

export default function GalerijaPage() {
  const { t } = useTranslation()
  const g = t.galerija
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all')
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const filters: { key: GalleryFilter; label: string }[] = [
    { key: 'all', label: g.filterAll },
    { key: 'Pre i posle', label: g.filterBeforeAfter },
    { key: 'Ordinacija', label: g.filterClinic },
    { key: 'Tim', label: g.filterTeam },
    { key: 'Tehnologija', label: g.filterTech },
  ]

  const atmosphereItems = useMemo(
    () =>
      g.items.map((item) => ({
        ...item,
        src: PLACEHOLDER_SRC[item.id] ?? PLACEHOLDER_SRC.ordinacija,
      })),
    [g.items]
  )

  const showBeforeAfter = activeFilter === 'all' || activeFilter === 'Pre i posle'
  const showAtmosphere = activeFilter !== 'Pre i posle'
  const filteredAtmosphere =
    activeFilter === 'all' || activeFilter === 'Pre i posle'
      ? atmosphereItems
      : atmosphereItems.filter((item) => item.category === activeFilter)

  useEffect(() => {
    if (!lightboxImage) return

    closeButtonRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [lightboxImage])

  return (
    <>
      <section className="relative bg-[#f7f4ef] pt-36 pb-16 md:pb-20">
        <div className="pointer-events-none absolute left-8 top-1/3 hidden h-32 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent md:block" />
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
          <FadeUp>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              {g.eyebrow}
            </p>
            <h1 className="font-serif text-5xl text-[#1c1a17] md:text-6xl lg:text-7xl">
              {g.title}
            </h1>
            <div className="mx-auto mt-8 h-[2px] w-24 bg-primary" />
            <p className="mx-auto mt-8 max-w-2xl font-light text-[#6b6560]">
              {g.subtitle}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="border-y border-[#ddd6cc] bg-[#fffcf8]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div
            className="flex flex-wrap justify-center gap-3 py-8"
            role="group"
            aria-label={g.title}
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                aria-pressed={activeFilter === filter.key}
                className={`px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-primary text-white shadow-lg'
                    : 'border border-[#ddd6cc] bg-transparent text-[#6b6560] hover:border-primary hover:text-[#1c1a17]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {showBeforeAfter && (
        <section className="bg-[#f7f4ef] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <FadeUp>
              <p className="mb-4 text-center text-sm uppercase tracking-[0.2em] text-primary">
                {g.beforeAfterEyebrow}
              </p>
              <h2 className="text-center font-serif text-3xl text-[#1c1a17] md:text-4xl lg:text-5xl">
                {g.beforeAfterTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-base text-[#6b6560]">
                {g.beforeAfterSubtitle}
              </p>
              <p className="mt-3 text-center text-[11px] uppercase tracking-[0.16em] text-[#9b948c]">
                {g.dragHint}
              </p>
            </FadeUp>

            <StaggerChildren
              className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2"
              staggerDelay={0.07}
            >
              {beforeAfterCases.map((c, index) => {
                const caseCopy = g.cases[index]
                return (
                  <StaggerItem key={c.id}>
                    <article className="overflow-hidden border border-[#ddd6cc] bg-[#fffcf8]">
                      <BeforeAfterSlider
                        beforeSrc={c.before}
                        afterSrc={c.after}
                        beforeLabel={g.before}
                        afterLabel={g.after}
                        alt={`${g.caseLabel} ${index + 1}: ${caseCopy?.title ?? ''}`}
                      />
                      <div className="border-t border-[#ddd6cc] px-5 py-4">
                        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
                          {g.caseLabel} {index + 1}
                        </p>
                        <h3 className="mt-2 font-serif text-xl text-[#1c1a17]">
                          {caseCopy?.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#6b6560]">
                          {caseCopy?.description}
                        </p>
                      </div>
                    </article>
                  </StaggerItem>
                )
              })}
            </StaggerChildren>
          </div>
        </section>
      )}

      {showAtmosphere && (
        <section className="border-t border-[#ddd6cc] bg-[#fffcf8] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            {(activeFilter === 'all' || filteredAtmosphere.length > 0) && (
              <FadeUp>
                <p className="mb-4 text-center text-sm uppercase tracking-[0.2em] text-primary">
                  {g.atmosphereEyebrow}
                </p>
                <h2 className="text-center font-serif text-3xl text-[#1c1a17] md:text-4xl">
                  {g.atmosphereTitle}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-center text-base text-[#6b6560]">
                  {g.atmosphereSubtitle}
                </p>
              </FadeUp>
            )}

            {filteredAtmosphere.length > 0 ? (
              <StaggerChildren
                className="mt-12 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3"
                staggerDelay={0.05}
              >
                {filteredAtmosphere.map((item) => (
                  <StaggerItem key={item.id} className="break-inside-avoid">
                    <button
                      type="button"
                      className="group w-full cursor-pointer text-left"
                      onClick={() => setLightboxImage({ src: item.src, alt: item.title })}
                    >
                      <div className="relative overflow-hidden border border-[#ddd6cc] shadow-sm transition-all duration-500 hover:border-primary hover:shadow-xl">
                        <Image
                          src={item.src}
                          alt={item.title}
                          width={600}
                          height={450}
                          className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#12100e]/70 via-[#12100e]/10 to-transparent opacity-90 transition-opacity duration-500">
                          <div className="p-5">
                            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
                              {item.category === 'Ordinacija'
                                ? g.filterClinic
                                : item.category === 'Tim'
                                  ? g.filterTeam
                                  : g.filterTech}
                            </p>
                            <p className="mt-1 font-serif text-xl text-white">{item.title}</p>
                            <p className="mt-1 max-w-[32ch] text-sm font-light text-white/80">
                              {item.caption}
                            </p>
                          </div>
                        </div>
                        <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                    </button>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            ) : (
              <div className="py-20 text-center">
                <p className="font-light text-[#6b6560]">{g.emptyState}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={g.lightboxLabel}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#12100e]/95 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label={g.lightboxClose}
            className="absolute right-6 top-6 rounded-sm text-white transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X size={32} />
          </button>
          <div className="relative max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1200}
              height={900}
              className="max-h-[90vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
