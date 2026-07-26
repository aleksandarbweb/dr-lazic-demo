import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O nama | Ordinacija Dr. Terzić',
  description: 'Upoznajte dr Martu Terzić i dr Biljanu Petković, specijaliste dermatovenerologije u Beogradu sa dugogodišnjim iskustvom u medicinskoj i estetskoj dermatologiji.',
}

export default function ONamaLayout({ children }: { children: React.ReactNode }) {
  return children
}
