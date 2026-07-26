import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oprema | Ordinacija Dr. Terzić',
  description: 'Najsavremenija dermatološka oprema u ordinaciji Dr. Terzić: Fotona laseri, Morpheus8, DermLite dermoskopi i druga vrhunska oprema za medicinsku i estetsku dermatologiju.',
}

export default function OpremaLayout({ children }: { children: React.ReactNode }) {
  return children
}
