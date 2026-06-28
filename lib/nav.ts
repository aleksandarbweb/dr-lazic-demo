export type CategoryKey =
  | 'dermatology'
  | 'aesthetics'
  | 'aestheticDermatology'
  | 'laserTreatments'
  | 'dermatovenereology'
  | 'cosmetology'

export type NavDropdownItem = {
  categoryKey: CategoryKey
  href: string
}

export type NavItem = {
  href: string
  translationKey: 'home' | 'about' | 'services' | 'equipment' | 'gallery' | 'contact'
  dropdown?: NavDropdownItem[]
}

export const navItems: NavItem[] = [
  { href: '/', translationKey: 'home' },
  { href: '/o-nama', translationKey: 'about' },
  {
    href: '/usluge',
    translationKey: 'services',
    dropdown: [
      { categoryKey: 'dermatology', href: '/usluge#dermatologija' },
      { categoryKey: 'aesthetics', href: '/usluge#estetika' },
      { categoryKey: 'aestheticDermatology', href: '/usluge#estetska-dermatologija' },
      { categoryKey: 'laserTreatments', href: '/usluge#laserski-tretmani' },
      { categoryKey: 'dermatovenereology', href: '/usluge#dermatovenerologija' },
      { categoryKey: 'cosmetology', href: '/usluge#kozmetologija' },
    ],
  },
  { href: '/oprema', translationKey: 'equipment' },
  { href: '/galerija', translationKey: 'gallery' },
  { href: '/kontakt', translationKey: 'contact' },
]
