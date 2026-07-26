import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galerija | Ordinacija Dr. Terzić',
  description: 'Pogledajte fotografije ordinacije, opreme i tretmana u ordinaciji Dr. Terzić u Beogradu.',
}

export default function GalerijaLayout({ children }: { children: React.ReactNode }) {
  return children
}
