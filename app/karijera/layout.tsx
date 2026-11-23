import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karijera i kursevi | Dental Clinic Dr Vesna Lazić',
  description:
    'Pohađajte kurseve u Dental Clinic: bazična i napredna implantologija (odobreno od Nemačke komore stomatologa), Nobel Biocare sistem i laser u stomatološkoj praksi. Mentoriše prof. dr Zoran Lazić.',
}

export default function KarijeraLayout({ children }: { children: React.ReactNode }) {
  return children
}
