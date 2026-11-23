"use client"

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { serviceCategories } from '@/lib/service-catalog'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/motion-primitives'

export default function UslugePage() {
  return (
    <>
      <section className="relative bg-background pt-36 pb-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/4 rounded-full bg-primary/[0.04]" />
          <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/4 translate-y-1/4 rounded-full bg-[#c4a574]/[0.08]" />
        </div>
        <div className="hidden md:block absolute left-8 top-1/3 w-[1px] h-32 bg-primary/30" />
        <div className="hidden md:block absolute right-8 top-1/4 w-[1px] h-48 bg-primary/30" />
        <FadeUp>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              Naša ponuda
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground">
              Usluge
            </h1>
            <div className="w-24 h-[2px] bg-primary mx-auto mt-8" />
            <p className="text-muted-foreground mt-8 max-w-3xl mx-auto font-light leading-relaxed text-base md:text-lg">
              Sve savremene stomatološke usluge, terapija laserom, estetski ispuni, beljenje zuba,
              CAD/CAM, fasete, implantologija, oralna hirurgija, protetika, parodontologija,
              ortodoncija i endodoncija, uz najbolje materijale i individualan plan terapije.
              Prvi pregled je besplatan.
            </p>
          </div>
        </FadeUp>
      </section>

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
                  <p className="text-muted-foreground mt-2 mb-10 font-light italic max-w-2xl">
                    {category.subtitle}
                  </p>
                )}
              </FadeUp>
              <StaggerChildren
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
                staggerDelay={0.05}
              >
                {category.services.map((service, index) => (
                  <StaggerItem key={service.slug} className="h-full">
                    <Link
                      href={`/usluge/${service.slug}`}
                      className="group relative flex h-full flex-col border border-border bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                    >
                      <div className="absolute left-0 top-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                      <div className="mb-5 flex items-start justify-between gap-3">
                        <span className="font-serif text-3xl text-primary/25 leading-none tabular-nums group-hover:text-primary/50 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {service.highlight && (
                          <span className="shrink-0 text-[10px] tracking-[0.14em] uppercase font-medium text-primary border border-primary/30 bg-primary/[0.06] px-2.5 py-1">
                            {service.highlight}
                          </span>
                        )}
                      </div>
                      <h3 className="text-foreground font-serif text-xl group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="mt-3 text-muted-foreground text-sm font-light leading-relaxed flex-grow">
                        {service.shortDescription}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-primary text-sm font-medium">
                        Saznajte više
                        <ChevronRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

        <FadeUp>
          <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4">Konsultacije</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Prvi pregled je besplatan
            </h2>
            <p className="text-white/80 mt-5 font-light max-w-xl mx-auto">
              Saznajte sve o svom stomatološkom problemu i kako ga rešiti, efikasno, bezbolno i uz
              jasne informacije o ceni.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase transition-all duration-500 hover:bg-background hover:shadow-xl hover:-translate-y-1 active:scale-95 group"
              >
                Kontaktirajte nas
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="https://api.whatsapp.com/send/?phone=38163283087&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 active:scale-95"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
