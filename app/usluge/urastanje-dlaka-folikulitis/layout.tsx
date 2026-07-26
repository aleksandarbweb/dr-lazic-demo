import type { Metadata } from 'next'
import { buildServiceMetadata } from '@/lib/service-metadata'

export const metadata: Metadata = buildServiceMetadata('urastanje-dlaka-folikulitis')

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
