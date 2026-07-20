"use client"

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'

export default function GalerijaPage() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const filters = [
    { key: 'all', label: t.galerija.filterAll },
    { key: 'Ordinacija', label: t.galerija.filterClinic },
    { key: 'Tretmani', label: t.galerija.filterTreatments },
    { key: 'Pre i posle', label: t.galerija.filterBeforeAfter },
  ]

  const images = [
    { src: '/images/Services/clinic-interior.jpg', category: 'Ordinacija', alt: 'Unutrašnjost ordinacije' },
    { src: '/images/Services/botoks-treatment.jpg', category: 'Tretmani', alt: 'Botoks tretman' },
    { src: '/images/Services/morpheus8-treatment.jpg', category: 'Tretmani', alt: 'Morpheus8 tretman' },
    { src: '/images/Services/laser-treatment.jpg', category: 'Tretmani', alt: 'Laserski tretman' },
    { src: '/images/Services/profhilo-treatment.jpg', category: 'Tretmani', alt: 'Profhilo tretman' },
    { src: '/images/Services/prp-treatment.jpg', category: 'Tretmani', alt: 'PRP tretman' },
    { src: '/images/Services/piling-treatment.jpg', category: 'Tretmani', alt: 'Hemijski piling' },
    { src: '/images/Services/dermoscopy-treatment.jpg', category: 'Tretmani', alt: 'Dermoskopija' },
    { src: '/images/Services/dermatology-treatment.jpg', category: 'Tretmani', alt: 'Dermatološki pregled' },
    { src: '/images/people/Marta/drmartaterzicheadshot.png', category: 'Ordinacija', alt: 'dr Marta Terzić' },
    { src: '/images/people/Biljana/drbiljanapetkovicheadshot.png', category: 'Ordinacija', alt: 'dr Biljana Petković' },
  ]

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(img => img.category === activeFilter)

  // Escape key and focus management for lightbox
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
      {/* Hero Section */}
      <section className="relative bg-[#faf9f7] pt-36 pb-20">
        <div className="hidden md:block absolute left-8 top-1/3 w-[1px] h-32 bg-[#b91c1c]/30" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-[#b91c1c] text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            {t.galerija.eyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a]">
            {t.galerija.title}
          </h1>
          <div className="w-24 h-[2px] bg-[#b91c1c] mx-auto mt-8" />
          <p className="text-[#6b6b6b] mt-8 max-w-xl mx-auto font-light">
            {t.galerija.subtitle}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-[#e5e0da]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3 py-8" role="group" aria-label="Filteri galerije">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                aria-pressed={activeFilter === filter.key}
                className={`px-8 py-3 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-[#b91c1c] text-white shadow-lg'
                    : 'bg-transparent text-[#6b6b6b] hover:text-[#1a1a1a] border border-[#e5e0da] hover:border-[#b91c1c]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#faf9f7] py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setLightboxImage(image.src)}
              >
                <div className="relative overflow-hidden border border-[#e5e0da] hover:border-[#b91c1c] transition-all duration-500 shadow-sm hover:shadow-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm tracking-wide font-light">
                      {image.alt}
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#b91c1c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#b91c1c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#6b6b6b] font-light">{t.galerija.emptyState}</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pregled slike"
          className="fixed inset-0 bg-[#1a1a1a]/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            ref={closeButtonRef}
            onClick={() => setLightboxImage(null)}
            aria-label="Zatvori pregled"
            className="absolute top-6 right-6 text-white hover:text-[#b91c1c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImage}
              alt="Uvećana slika galerije"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
