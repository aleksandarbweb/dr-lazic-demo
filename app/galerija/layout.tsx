import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galerija | Dental Clinic Dr Vesna Lazić',
  description:
    'Pre i posle transformacije, atmosfera ordinacije i digitalni stomatološki workflow u Dental Clinic Dr Vesna Lazić.',
}

export default function GalerijaLayout({ children }: { children: React.ReactNode }) {
  return children
}
