import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O nama | Dental Clinic Dr Vesna Lazić',
  description:
    'Stomatološka ordinacija Dental Clinic od 1998. godine. Upoznajte dr Vesnu Lazić, prof. dr Zorana Lazića i tim, protetika, implantologija, oralna hirurgija. Prvi pregled je besplatan.',
}

export default function ONamaLayout({ children }: { children: React.ReactNode }) {
  return children
}
