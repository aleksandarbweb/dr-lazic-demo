export type PriceMarket = 'bg' | 'at' | 'de' | 'ch' | 'us'

export const priceMarkets: {
  id: PriceMarket
  flag: string
  /** Translation key under home.priceComparison.markets */
  labelKey: PriceMarket
}[] = [
  { id: 'bg', flag: '🇷🇸', labelKey: 'bg' },
  { id: 'at', flag: '🇦🇹', labelKey: 'at' },
  { id: 'de', flag: '🇩🇪', labelKey: 'de' },
  { id: 'ch', flag: '🇨🇭', labelKey: 'ch' },
  { id: 'us', flag: '🇺🇸', labelKey: 'us' },
]

export const priceTreatments = [
  {
    id: 'implant',
    prices: { bg: 650, at: 1700, de: 1900, ch: 2200, us: 2300 },
    fromBg: true,
  },
  {
    id: 'allon',
    prices: { bg: 4800, at: 13500, de: 15000, ch: 21000, us: 25000 },
    fromBg: true,
  },
  {
    id: 'zirconia',
    prices: { bg: 250, at: 1300, de: 1450, ch: 1700, us: 2000 },
    fromBg: true,
  },
  {
    id: 'veneers',
    prices: { bg: 290, at: 1400, de: 1600, ch: 1850, us: 2000 },
    fromBg: true,
  },
] as const

export function formatEuro(value: number, locale = 'sr-RS') {
  return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(value)} €`
}
