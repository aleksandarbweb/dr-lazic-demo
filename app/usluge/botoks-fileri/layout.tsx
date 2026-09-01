import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Botoks i fileri | Ordinacija Dr. Terzić',
  description: 'Botulinum toksin i hijaluronski fileri u ordinaciji Dr. Terzić imaju zasebne stranice sa detaljnim opisom svakog tretmana.',
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
