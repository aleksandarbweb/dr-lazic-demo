import type { Metadata } from 'next'
import { serviceBySlug } from '@/lib/service-catalog'

export function buildServiceMetadata(slug: string): Metadata {
  const service = serviceBySlug[slug]
  if (!service) {
    return { title: 'Usluga | Ordinacija Dr. Terzić' }
  }
  return {
    title: `${service.name} | Ordinacija Dr. Terzić`,
    description: `${service.name} u ordinaciji Dr. Terzić. Individualni protokol, stručni nadzor i jasno definisan plan tretmana.`,
  }
}
