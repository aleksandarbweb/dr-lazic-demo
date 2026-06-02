"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'

const navLinksData = [
  { href: '/', translationKey: 'home' },
  { href: '/o-nama', translationKey: 'about' },
  { href: '/usluge', translationKey: 'services' },
  { href: '/oprema', translationKey: 'equipment' },
  { href: '/galerija', translationKey: 'gallery' },
  { href: '/kontakt', translationKey: 'contact' },
] as const

export function Footer() {
  const { t } = useTranslation()

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#1a1a1a]">
      {/* Top Decorative Line */}
      <div className="h-1 bg-[#b91c1c]" />

      <div className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:gap-16 md:grid-cols-3">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-start">
            <Link href="/" onClick={handleLogoClick} className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70 -ml-4 md:-ml-6 lg:-ml-8">
              <Image
                src="/images/Logos/dr terzic beli logo.png"
                alt="Dr Terzić"
                width={500}
                height={200}
                className="mb-4 h-28 w-auto object-contain object-left md:h-32 lg:h-36 xl:h-40"
              />
            </Link>
            <p className="mb-6 max-w-xs text-sm font-light leading-relaxed text-white/60">
              {t.footer.description}
            </p>
            
            <a 
              href="https://www.instagram.com/dr.terzic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 text-white/60 hover:text-[#b91c1c] transition-colors duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70 rounded-sm"
              title="Pratite nas na Instagramu"
            >
              <div className="flex items-center justify-center p-2 rounded-full border border-white/20 group-hover:border-[#b91c1c] transition-colors duration-400">
                <Instagram size={14} strokeWidth={2} />
              </div>
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase">@dr.terzic</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-medium text-sm tracking-[0.2em] uppercase mb-8">
              {t.footer.navigation}
            </h3>
            <ul className="space-y-4">
              {navLinksData.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/60 transition-colors duration-300 hover:text-[#b91c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70"
                  >
                    {t.nav[link.translationKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium text-sm tracking-[0.2em] uppercase mb-8">
              {t.footer.contact}
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-[#b91c1c] flex-shrink-0 mt-0.5" />
                <div className="text-white/60 text-sm font-light">
                  <p>Kosovska 51, Beograd, 11000</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <a
                      href="https://maps.app.goo.gl/1QuFk4f2xaXxMegp7"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-[#b91c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70"
                    >
                      Google Maps
                    </a>
                    <span className="text-white/25">·</span>
                    <a
                      href="https://maps.apple/p/ad.WyF4.88me0~"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-[#b91c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70"
                    >
                      Apple Maps
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-[#b91c1c] flex-shrink-0" />
                <a
                  href="tel:+381628412909"
                  className="text-sm font-light text-white/60 transition-colors hover:text-[#b91c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70"
                >
                  +381 62 841 29 09
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-[#b91c1c] flex-shrink-0" />
                <a
                  href="mailto:mdterzic@gmail.com"
                  className="text-sm font-light text-white/60 transition-colors hover:text-[#b91c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70"
                >
                  mdterzic@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Clock size={18} className="text-[#b91c1c] flex-shrink-0 mt-0.5" />
                <div className="text-white/60 text-sm font-light">
                  <p>{t.footer.monFri} 10:00 - 18:00</p>
                  <p>{t.footer.satSun}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <p className="text-white/40 text-sm text-center font-light tracking-wide">
            © 2026 Ordinacija Dr. Terzić. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

