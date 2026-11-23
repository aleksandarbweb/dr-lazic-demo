"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Instagram, Youtube, Facebook } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'
import { navItems } from '@/lib/nav'
import { businessData } from '@/lib/business-data'

const navLinksData = navItems

export function Footer() {
  const { t } = useTranslation()

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#12100e]">
      {/* Top Decorative Line */}
      <div className="h-1 bg-primary" />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-start">
            <Link href="/" onClick={handleLogoClick} className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70">
              <Image
                src="/images/Logos/dr-lazic-full-logo.png"
                alt="Dental Clinic Dr Vesna Lazić"
                width={360}
                height={120}
                className="mb-4 h-14 w-auto object-contain object-left sm:mb-5 sm:h-20 md:h-24"
              />
            </Link>
            <p className="mb-5 max-w-xs text-[15px] font-light leading-relaxed text-white/70 sm:mb-6 sm:text-base">
              {t.footer.description}
            </p>
            
            <div className="flex items-center gap-2">
              <a
                href={businessData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-sm text-white/60 transition-colors duration-400 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                title="Instagram"
                aria-label="Instagram"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors duration-400 group-hover:border-primary">
                  <Instagram size={16} strokeWidth={2} />
                </span>
              </a>
              <a
                href={businessData.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-sm text-white/60 transition-colors duration-400 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                title="YouTube"
                aria-label="YouTube"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors duration-400 group-hover:border-primary">
                  <Youtube size={16} strokeWidth={2} />
                </span>
              </a>
              <a
                href={businessData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-sm text-white/60 transition-colors duration-400 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                title="Facebook"
                aria-label="Facebook"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors duration-400 group-hover:border-primary">
                  <Facebook size={16} strokeWidth={2} />
                </span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white sm:mb-8">
              {t.footer.navigation}
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 sm:gap-x-6 sm:gap-y-2">
              {navLinksData.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-10 items-center text-[15px] font-light text-white/70 transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 sm:text-base"
                  >
                    {t.nav[link.translationKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white sm:mb-8">
              {t.footer.contact}
            </h3>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex items-start gap-3 sm:gap-4">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <div className="text-[15px] font-light text-white/70 sm:text-base">
                  <p>{businessData.addressDisplay}</p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <a
                      href={businessData.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-10 items-center transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                    >
                      Google Maps
                    </a>
                    <span className="text-white/30">·</span>
                    <a
                      href={businessData.appleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-10 items-center transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                    >
                      Apple Maps
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <a
                  href={`tel:${businessData.telephone}`}
                  className="inline-flex min-h-10 items-center text-[15px] font-light text-white/70 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 sm:text-base"
                >
                  {businessData.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <a
                  href={`mailto:${businessData.email}`}
                  className="inline-flex min-h-10 items-center break-all text-[15px] font-light text-white/70 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 sm:text-base"
                >
                  {businessData.email}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Clock size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-base font-light space-y-1">
                  <p>{t.footer.hoursWeekdays}</p>
                  <p>{t.footer.hoursSaturday}</p>
                  <p>{t.footer.hoursSunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <p className="text-white/50 text-sm text-center font-light tracking-wide">
            © 2026 Dental Clinic Dr Vesna Lazić. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

