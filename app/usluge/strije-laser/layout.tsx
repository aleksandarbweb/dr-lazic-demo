import type { Metadata } from 'next'

// Explicit metadata rather than buildServiceMetadata: this slug appears under two catalog
// categories and the laser-framed bullet ("Laserski tretmani strija") would otherwise become
// the document title. Dr Terzić asked for no laser wording in the title (2026-10-20).
export const metadata: Metadata = {
  title: 'Uklanjanje strija | Ordinacija Dr. Terzić',
  description:
    'Uklanjanje strija kombinovanom terapijom: Nd:YAG i frakcionisani Er:YAG laser uz injektovanje kolagen stimulatora. Ordinacija Dr. Terzić, Beograd.',
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
