"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Instagram, ChevronDown } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'
import { LanguageSwitcher } from '@/components/language-switcher'
import { navItems } from '@/lib/nav'
import { businessData } from '@/lib/business-data'

const navLinksData = navItems.filter(item => item.translationKey !== 'contact')

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return
    const menu = menuRef.current
    if (!menu) return

    const focusables = menu.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    )
    const first = focusables[0]
    const last = focusables[focusables.length - 1]

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        return
      }
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    first?.focus()
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenMobileDropdown(null)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#f7f4ef]/95 backdrop-blur-md shadow-sm border-b border-[#ddd6cc]/70'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex h-[5.5rem] items-center gap-3 lg:gap-4">
          {/* Logo & Instagram */}
          <div className="flex flex-shrink-0 flex-col items-start gap-0.5">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <Image
                src="/images/Logos/dr-lazic-full-logo.png"
                alt="Dental Clinic Dr Vesna Lazić"
                width={240}
                height={78}
                priority
                className="h-12 w-auto rounded-sm sm:h-14"
              />
            </Link>
            <a
              href={businessData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-[2px] flex items-center gap-1.5 rounded-sm text-[#6b6560] transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              title="Pratite nas na Instagramu"
              aria-label="Instagram"
            >
              <Instagram size={10} strokeWidth={2.5} />
              <span className="text-[8px] font-semibold uppercase tracking-[0.15em]">
                {businessData.instagramHandle}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="ml-auto hidden min-w-0 items-center justify-end gap-0.5 xl:gap-1 lg:flex">
            {navLinksData.map((link) => (
              <div
                key={link.href}
                className={link.dropdown ? 'group relative' : ''}
                onMouseEnter={() => link.dropdown && setServicesOpen(true)}
                onMouseLeave={() => link.dropdown && setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  aria-expanded={link.dropdown ? servicesOpen : undefined}
                  aria-haspopup={link.dropdown ? 'true' : undefined}
                  className={`relative flex shrink-0 items-center gap-0.5 whitespace-nowrap px-1.5 py-3 text-[10.5px] font-medium uppercase tracking-[0.06em] transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 xl:px-2.5 xl:text-[12px] xl:tracking-[0.08em] ${
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                >
                  {t.nav[link.translationKey]}
                  {link.dropdown && (
                    <ChevronDown size={12} className="shrink-0 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                  {pathname === link.href && (
                    <span className="absolute bottom-1.5 left-2 right-2 h-px bg-primary xl:left-2.5 xl:right-2.5" />
                  )}
                </Link>

                {link.dropdown && (
                  <div className="invisible absolute left-0 top-[calc(100%-0.5rem)] z-50 min-w-[280px] translate-y-2 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex max-h-[70vh] flex-col overflow-y-auto rounded-xl border border-border bg-white py-2 shadow-xl">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className="px-5 py-2.5 text-[11px] font-medium uppercase tracking-wide text-foreground transition-colors hover:bg-background hover:text-primary"
                        >
                          {t.nav.categoriesDropdown[subLink.categoryKey]}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA & Language */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-4">
            <LanguageSwitcher />
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-primary px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#0a5a61] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 xl:px-6 xl:py-3 xl:text-[12px]"
            >
              {t.nav.bookAppointment}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="ml-auto flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <button
              className="p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigacioni meni"
          className="max-h-[80vh] overflow-y-auto border-t border-border bg-white/98 backdrop-blur-md lg:hidden"
        >
          <div className="space-y-5 px-6 py-8">
            {navLinksData.map((link) => (
              <div key={link.href}>
                {link.dropdown ? (
                  <button
                    className={`flex w-full items-center justify-between py-2 text-base font-medium uppercase tracking-[0.1em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${
                      pathname === link.href ? 'text-primary' : 'text-foreground'
                    }`}
                    aria-expanded={openMobileDropdown === link.href}
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === link.href ? null : link.href
                      )
                    }
                  >
                    <span>{t.nav[link.translationKey]}</span>
                    <ChevronDown
                      size={18}
                      className={`text-muted-foreground transition-transform duration-300 ${
                        openMobileDropdown === link.href ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between py-2 text-base font-medium uppercase tracking-[0.1em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${
                      pathname === link.href ? 'text-primary' : 'text-foreground'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {t.nav[link.translationKey]}
                  </Link>
                )}

                {link.dropdown && openMobileDropdown === link.href && (
                  <div className="mt-2 space-y-4 border-l-2 border-border/50 py-2 pl-4">
                    <Link
                      href={link.href}
                      className="block text-xs font-semibold uppercase tracking-wider text-primary transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {t.nav[link.translationKey]} →
                    </Link>
                    {link.dropdown.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                        onClick={closeMobileMenu}
                      >
                        {t.nav.categoriesDropdown[subLink.categoryKey]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/kontakt"
              className="mt-6 block rounded-full bg-primary px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.1em] text-white"
              onClick={closeMobileMenu}
            >
              {t.nav.bookAppointment}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
