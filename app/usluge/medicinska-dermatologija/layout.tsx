import type { Metadata } from 'next'
import { buildServiceMetadata } from '@/lib/service-metadata'

export const metadata: Metadata = buildServiceMetadata('medicinska-dermatologija')

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
