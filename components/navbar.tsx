"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Instagram, ChevronDown } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'
import { LanguageSwitcher } from '@/components/language-switcher'

// The actual translation key is validated in the component.

const navLinksData = [
  { href: '/', translationKey: 'home' as const },
  { href: '/o-nama', translationKey: 'about' as const },
  { 
    href: '/usluge', 
    translationKey: 'services' as const,
    dropdown: [
      { label: 'Dermatologija', href: '/usluge#dermatologija' },
      { label: 'Estetika', href: '/usluge#estetika' },
      { label: 'Estetska dermatologija', href: '/usluge#estetska-dermatologija' },
      { label: 'Laserski tretmani', href: '/usluge#laserski-tretmani' },
      { label: 'Dermatovenerologija', href: '/usluge#dermatovenerologija' },
      { label: 'Kozmetologija', href: '/usluge#kozmetologija' },
    ]
  },
  { href: '/oprema', translationKey: 'equipment' as const },
  { href: '/galerija', translationKey: 'gallery' as const },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e5ddd3]/60' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-start h-24">
          {/* Logo & Social */}
          <div className="flex flex-col items-start gap-0.5 flex-shrink-0">
            <Link href="/" onClick={handleLogoClick}>
              <Image
                src="/images/Logos/dr terzic crni logo.png"
                alt="Dr Terzić"
                width={160}
                height={65}
                className="h-12 w-auto sm:h-14"
              />
            </Link>
            <a 
              href="https://www.instagram.com/dr.terzic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 ml-[6px] text-[#5f5a55] hover:text-[#b91c1c] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/50 rounded-sm"
              title="Pratite nas na Instagramu"
            >
              <Instagram size={11} strokeWidth={2.5} />
              <span className="text-[9px] font-semibold tracking-[0.15em] uppercase">@dr.terzic</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center ml-auto gap-8 xl:gap-10">
            {navLinksData.map((link) => (
              <div key={link.href} className={link.dropdown ? "group relative" : ""}>
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-1.5 text-[12px] xl:text-[13px] font-medium tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[#b91c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70 focus-visible:ring-offset-2 py-4 ${
                    pathname === link.href 
                      ? 'text-[#b91c1c]' 
                      : 'text-[#1a1a1a]'
                  }`}
                >
                  {t.nav[link.translationKey]}
                  {link.dropdown && <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />}
                  {pathname === link.href && (
                    <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#b91c1c]" />
                  )}
                </Link>

                {link.dropdown && (
                  <div className="absolute top-[calc(100%-0.5rem)] left-0 pt-2 opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 min-w-[300px] z-50">
                    <div className="bg-white border border-[#e5e0da] rounded-xl shadow-xl overflow-hidden py-2 flex flex-col">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className="px-6 py-3.5 text-[#1a1a1a] hover:text-[#b91c1c] hover:bg-[#faf9f7] transition-colors font-medium tracking-wide uppercase text-[11px]"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA & Language */}
          <div className="hidden lg:flex items-center gap-5 ml-12 xl:ml-16">
            <LanguageSwitcher />
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-[#b91c1c] px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#991b1b] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/80 focus-visible:ring-offset-2"
            >
              {t.nav.bookAppointment}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              className="p-2 text-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/80"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-[#e5e0da] max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-8 space-y-5">
            {navLinksData.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`flex justify-between items-center py-2 text-base font-medium uppercase tracking-[0.1em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70 ${
                    pathname === link.href ? 'text-[#b91c1c]' : 'text-[#1a1a1a]'
                  }`}
                  onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                >
                  <span>{t.nav[link.translationKey]}</span>
                  {link.dropdown && <ChevronDown size={18} className="text-[#6b6b6b]" />}
                </Link>
                {link.dropdown && (
                  <div className="mt-2 pl-4 space-y-4 border-l-2 border-[#e5e0da]/50 py-2">
                    {link.dropdown.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block text-[#6b6b6b] hover:text-[#b91c1c] text-xs font-semibold tracking-wider uppercase transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/kontakt"
              className="mt-6 block rounded-full bg-[#b91c1c] px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.1em] text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.bookAppointment}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
