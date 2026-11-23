export type CategoryKey =
  | 'examination'
  | 'aestheticDentistry'
  | 'aestheticFillings'
  | 'teethWhitening'
  | 'cadCam'
  | 'veneers'
  | 'implantology'
  | 'oralSurgery'
  | 'prosthetics'
  | 'periodontology'
  | 'endodontics'
  | 'orthodontics'
  | 'laserTherapy'

export type NavDropdownItem = {
  categoryKey: CategoryKey
  href: string
}

export type NavItem = {
  href: string
  translationKey:
    | 'home'
    | 'about'
    | 'services'
    | 'gallery'
    | 'dentalTourism'
    | 'career'
    | 'contact'
  dropdown?: NavDropdownItem[]
}

export const navItems: NavItem[] = [
  { href: '/', translationKey: 'home' },
  { href: '/o-nama', translationKey: 'about' },
  {
    href: '/usluge',
    translationKey: 'services',
    dropdown: [
      { categoryKey: 'examination', href: '/usluge/stomatoloski-pregled-i-konsultacije' },
      { categoryKey: 'aestheticDentistry', href: '/usluge/estetska-stomatologija' },
      { categoryKey: 'aestheticFillings', href: '/usluge/estetski-ispuni' },
      { categoryKey: 'teethWhitening', href: '/usluge/beljenje-zuba' },
      { categoryKey: 'cadCam', href: '/usluge/cad-cam' },
      { categoryKey: 'veneers', href: '/usluge/fasete' },
      { categoryKey: 'implantology', href: '/usluge/implantologija' },
      { categoryKey: 'oralSurgery', href: '/usluge/oralna-hirurgija' },
      { categoryKey: 'prosthetics', href: '/usluge/protetika' },
      { categoryKey: 'periodontology', href: '/usluge/parodontologija' },
      { categoryKey: 'endodontics', href: '/usluge/endodoncija' },
      { categoryKey: 'orthodontics', href: '/usluge/ortodoncija' },
      { categoryKey: 'laserTherapy', href: '/usluge/terapija-laserom' },
    ],
  },
  { href: '/galerija', translationKey: 'gallery' },
  { href: '/dentalni-turizam', translationKey: 'dentalTourism' },
  { href: '/karijera', translationKey: 'career' },
  { href: '/kontakt', translationKey: 'contact' },
]
