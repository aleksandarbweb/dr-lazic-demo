export type CategoryKey =
  | 'generalDermatovenereology'
  | 'aestheticDermatology'
  | 'lasersInDermatology'
  | 'radiowaveSurgery'
  | 'cryosurgery'
  | 'computerizedDermoscopy'
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
      { categoryKey: 'generalDermatovenereology', href: '/usluge#opsta-dermatovenerologija' },
      { categoryKey: 'aestheticDermatology', href: '/usluge#estetska-dermatologija' },
      { categoryKey: 'lasersInDermatology', href: '/usluge#laseri-u-dermatologiji' },
      { categoryKey: 'radiowaveSurgery', href: '/usluge#radiotalasna-hirurgija' },
      { categoryKey: 'cryosurgery', href: '/usluge#kriohirurgija' },
      { categoryKey: 'computerizedDermoscopy', href: '/usluge#kompjuterizovana-dermoskopija' },
      { categoryKey: 'cosmetology', href: '/usluge#kozmetologija' },
    ],
  },
  { href: '/oprema', translationKey: 'equipment' },
  { href: '/galerija', translationKey: 'gallery' },
  { href: '/kontakt', translationKey: 'contact' },
]
