import type { Metadata } from 'next'
import { buildServiceMetadata } from '@/lib/service-metadata'

export const metadata: Metadata = buildServiceMetadata('savetovanje-za-negu-lica')

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
