import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt | Ordinacija Dr. Terzić',
  description: 'Zakažite pregled u ordinaciji Dr. Terzić. Adresa: Kosovska 51, Beograd. Telefon: +381 62 841 29 09. Radno vreme, mapa i direktan kontakt.',
}

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children
}
