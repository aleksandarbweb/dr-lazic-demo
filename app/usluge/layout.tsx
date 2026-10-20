import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Usluge | Ordinacija Dr. Terzić',
  description: 'Kompletna medicinska i estetska dermatologija u Beogradu: botoks, fileri, laserski tretmani, PRP, dermoskopija i drugi tretmani sa najsavremenijom opremom.',
}

export default function UslugeLayout({ children }: { children: React.ReactNode }) {
  return children
}
