"use client"

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { serviceCategories } from '@/lib/service-catalog'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/motion-primitives'
// Note: Metadata was removed since this page is now a "use client" component.
// It should be moved to a layout.tsx if SEO metadata is strictly required here.

export default function UslugePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background pt-36 pb-20">
        <div className="hidden md:block absolute left-8 top-1/3 w-[1px] h-32 bg-primary/30" />
        <div className="hidden md:block absolute right-8 top-1/4 w-[1px] h-48 bg-primary/30" />
        <FadeUp>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              Naša ponuda
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground">
              Usluge
            </h1>
            <div className="w-24 h-[2px] bg-primary mx-auto mt-8" />
            <p className="text-muted-foreground mt-8 max-w-2xl mx-auto font-light">
              Kompletna medicinska i estetska dermatologija sa najsavremenijom opremom
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Services Categories */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {serviceCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              id={category.id}
              className={`scroll-mt-32 ${categoryIndex > 0 ? 'mt-20 pt-20 border-t border-border' : ''}`}
            >
              <FadeUp delay={0.1}>
                <h2 className={`font-serif text-3xl md:text-4xl text-primary ${category.subtitle ? '' : 'mb-10'}`}>
                  {category.title}
                </h2>
                {category.subtitle && (
                  <p className="text-muted-foreground mt-2 mb-8 font-light italic">
                    {category.subtitle}
                  </p>
                )}
              </FadeUp>
              <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch" staggerDelay={0.05}>
                {category.services.map((service) => (
                  <StaggerItem key={service.name} className="h-full">
                    <Link
                      href={`/usluge/${service.slug}`}
                      className="group flex h-full w-full items-center justify-between gap-3 border border-border bg-background p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                    >
                      <span className="text-foreground text-sm group-hover:text-primary transition-colors font-light">
                        {service.name}
                      </span>
                      <ChevronRight size={16} className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
        
        <FadeUp>
          <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4">Konsultacije</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Niste Sigurni Koji Tretman Vam Odgovara?
            </h2>
            <p className="text-white/80 mt-5 font-light">
              Javite nam se i saznajte koji tretman je idealan za vas
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-4 mt-10 text-sm font-bold tracking-[0.15em] uppercase transition-all duration-500 hover:bg-background hover:shadow-xl hover:-translate-y-1 active:scale-95 group"
            >
              Kontaktirajte nas
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
