"use client"

import Link from 'next/link'
import { useTranslation } from '@/lib/i18n/LanguageContext'

type DeviceKey = keyof ReturnType<typeof useTranslation>['t']['oprema']['devices']

const deviceConfig: Array<{
  key: DeviceKey
  name: string
  manufacturer: string
  id: string
}> = [
  { key: 'avalancheLase', name: 'AvalancheLase', manufacturer: 'Fotona', id: 'avalanchelase' },
  { key: 'spDynamis', name: 'SP Dynamis', manufacturer: 'Fotona', id: 'sp-dynamis' },
  { key: 'harmonyXL', name: 'Harmony XL Pro', manufacturer: 'Alma', id: 'harmony-xl-pro' },
  { key: 'ellman', name: 'Ellman', manufacturer: 'Ellman', id: 'ellman' },
  { key: 'cryopen', name: 'CryoPro & CryoPen', manufacturer: 'Cortex / H&O', id: 'cryopen' },
  { key: 'dermlite', name: 'DermLite DL5 & Canfield D200EVO', manufacturer: 'DermLite / Canfield', id: 'dermlite' },
]

export default function OpremaPage() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background pt-36 pb-20">
        <div className="hidden md:block absolute left-8 top-1/3 w-[1px] h-32 bg-primary/30" />
        <div className="hidden md:block absolute right-8 top-1/4 w-[1px] h-48 bg-primary/30" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            {t.oprema.eyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground">
            {t.oprema.title}
          </h1>
          <div className="w-24 h-[2px] bg-primary mx-auto mt-8" />
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto font-light leading-relaxed">
            {t.oprema.subtitle}
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-wrap justify-center gap-2.5">
            {deviceConfig.map((device) => (
              <a
                key={device.id}
                href={`#${device.id}`}
                className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-[#3d3832] transition-colors duration-300 hover:border-primary/40 hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                {device.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-12 md:space-y-16">
            {deviceConfig.map((device, index) => {
              const deviceT = t.oprema.devices[device.key]
              const isReversed = index % 2 !== 0

              return (
                <div
                  key={device.id}
                  id={device.id}
                  className={`scroll-mt-32 ${index > 0 ? 'pt-12 md:pt-16 border-t border-border' : ''}`}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start ${isReversed ? 'lg:direction-rtl' : ''}`}>
                    {/* Device Info — 2 cols */}
                    <div className={`lg:col-span-2 ${isReversed ? 'lg:order-2' : ''}`}>
                      <div className="rounded-[1.75rem] border border-[#e3dad1] bg-background p-1.5">
                        <div className="rounded-[calc(1.75rem-0.375rem)] border border-[#f2ece5] bg-[#fffdfb] p-8 md:p-10">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-3">
                            {device.manufacturer}
                          </p>
                          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-1">
                            {device.name}
                          </h2>
                          <p className="text-sm text-muted-foreground italic mb-6">{deviceT.subtitle}</p>
                          <div className="w-12 h-[2px] bg-primary mb-6" />
                          <p className="text-muted-foreground font-light leading-relaxed text-sm">
                            {deviceT.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Treatments List — 3 cols */}
                    <div className={`lg:col-span-3 ${isReversed ? 'lg:order-1' : ''}`}>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-5">
                        {t.oprema.treatmentsLabel}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {deviceT.treatments.map((treatment, tIndex) => (
                          <div
                            key={tIndex}
                            className="group flex items-start gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-500 hover:border-primary/40 hover:bg-white hover:shadow-sm"
                          >
                            <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-primary transition-transform duration-500 group-hover:scale-125" />
                            <span className="text-sm text-[#3d3832] font-light leading-relaxed">
                              {treatment}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Brands / Preparations Section */}
      <section className="bg-background py-16 md:py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-8 font-medium">
            {t.oprema.brandsTitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {t.oprema.brands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-light text-[#3d3832]"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute left-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4">{t.oprema.ctaEyebrow}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            {t.oprema.ctaTitle}
          </h2>
          <p className="text-white/80 mt-5 font-light max-w-xl mx-auto">
            {t.oprema.ctaDescription}
          </p>
          <Link
            href="/kontakt"
            className="mt-10 inline-flex rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98]"
          >
            {t.oprema.ctaButton}
          </Link>
        </div>
      </section>
    </>
  )
}
