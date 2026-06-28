"use client"

import Link from 'next/link'
import { Zap, Radio, Snowflake, Search, Thermometer, type LucideIcon } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'

type DeviceKey = keyof ReturnType<typeof useTranslation>['t']['oprema']['devices']

const deviceConfig: Array<{
  key: DeviceKey
  icon: LucideIcon
  name: string
  manufacturer: string
  id: string
}> = [
  { key: 'lightSheer', icon: Zap, name: 'Light Sheer ET', manufacturer: 'Lumenis', id: 'light-sheer' },
  { key: 'fotona', icon: Zap, name: 'SP Spectro', manufacturer: 'Fotona', id: 'fotona' },
  { key: 'ellman', icon: Radio, name: 'Ellman', manufacturer: 'Ellman', id: 'ellman' },
  { key: 'cryopen', icon: Snowflake, name: 'CryoPen', manufacturer: 'CryoPen', id: 'cryopen' },
  { key: 'dermlite', icon: Search, name: 'DermLite DL3', manufacturer: 'DermLite', id: 'dermlite' },
  { key: 'zimmer', icon: Thermometer, name: 'Zimmer Cryo 6 & Cryo Tube CL02', manufacturer: 'Zimmer', id: 'zimmer' },
]

export default function OpremaPage() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#faf9f7] pt-36 pb-20">
        <div className="hidden md:block absolute left-8 top-1/3 w-[1px] h-32 bg-[#b91c1c]/30" />
        <div className="hidden md:block absolute right-8 top-1/4 w-[1px] h-48 bg-[#b91c1c]/30" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-[#b91c1c] text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            {t.oprema.eyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a]">
            {t.oprema.title}
          </h1>
          <div className="w-24 h-[2px] bg-[#b91c1c] mx-auto mt-8" />
          <p className="text-[#6b6b6b] mt-8 max-w-2xl mx-auto font-light leading-relaxed">
            {t.oprema.subtitle}
          </p>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-12 md:space-y-16">
            {deviceConfig.map((device, index) => {
              const Icon = device.icon
              const deviceT = t.oprema.devices[device.key]
              const isReversed = index % 2 !== 0

              return (
                <div
                  key={device.id}
                  id={device.id}
                  className={`scroll-mt-32 ${index > 0 ? 'pt-12 md:pt-16 border-t border-[#e5e0da]' : ''}`}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start ${isReversed ? 'lg:direction-rtl' : ''}`}>
                    {/* Device Info — 2 cols */}
                    <div className={`lg:col-span-2 ${isReversed ? 'lg:order-2' : ''}`}>
                      <div className="rounded-[1.75rem] border border-[#e3dad1] bg-[#faf9f7] p-1.5">
                        <div className="rounded-[calc(1.75rem-0.375rem)] border border-[#f2ece5] bg-[#fffdfb] p-8 md:p-10">
                          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#e5e0da] bg-white">
                            <Icon size={26} className="text-[#b91c1c]" />
                          </div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b91c1c] mb-2">
                            {device.manufacturer}
                          </p>
                          <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-1">
                            {device.name}
                          </h2>
                          <p className="text-sm text-[#6b6b6b] italic mb-6">{deviceT.subtitle}</p>
                          <div className="w-12 h-[2px] bg-[#b91c1c] mb-6" />
                          <p className="text-[#6b6b6b] font-light leading-relaxed text-sm">
                            {deviceT.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Treatments List — 3 cols */}
                    <div className={`lg:col-span-3 ${isReversed ? 'lg:order-1' : ''}`}>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b91c1c] mb-5">
                        {t.oprema.treatmentsLabel}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {deviceT.treatments.map((treatment, tIndex) => (
                          <div
                            key={tIndex}
                            className="group flex items-start gap-4 rounded-xl border border-[#e5e0da] bg-[#faf9f7] p-5 transition-all duration-500 hover:border-[#b91c1c]/40 hover:bg-white hover:shadow-sm"
                          >
                            <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[#b91c1c] transition-transform duration-500 group-hover:scale-125" />
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

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#b91c1c] py-20">
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
            className="mt-10 inline-flex rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#b91c1c] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#faf9f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#b91c1c] active:scale-[0.98]"
          >
            {t.oprema.ctaButton}
          </Link>
        </div>
      </section>
    </>
  )
}
