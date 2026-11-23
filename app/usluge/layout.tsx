import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Usluge | Dental Clinic Dr Vesna Lazić',
  description:
    'Sve savremene stomatološke usluge u Beogradu: estetska stomatologija, implantologija, protetika, laser, ortodoncija, endodoncija i više. Prvi pregled besplatan.',
}

export default function UslugeLayout({ children }: { children: React.ReactNode }) {
  return children
}
