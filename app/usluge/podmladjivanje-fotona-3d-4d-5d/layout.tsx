import type { Metadata } from 'next'

// Explicit metadata rather than buildServiceMetadata: the catalog name for this slug is a long
// descriptive phrase, so the generic template would produce a title that is too long for SERPs.
export const metadata: Metadata = {
  title: 'Podmlađivanje laserom — Fotona 3D, 4D, 5D i Alma Harmony | Dr. Terzić',
  description:
    'Personalizovano lasersko podmlađivanje lica, vrata, dekoltea i šaka: Fotona Nd:YAG i Er:YAG protokoli 3D, 4D i 5D, Alma Harmony ClearLift, ClearSkin, DVL i NIR. Ordinacija dr Terzić, Beograd.',
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
