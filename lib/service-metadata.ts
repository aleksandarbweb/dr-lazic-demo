import type { Metadata } from 'next'
import { serviceBySlug } from '@/lib/service-catalog'

const CLINIC = 'Dental Clinic Dr Vesna Lazić'

export function buildServiceMetadata(slug: string): Metadata {
  const service = serviceBySlug[slug]
  if (!service) {
    return { title: `Usluga | ${CLINIC}` }
  }
  return {
    title: `${service.name} | ${CLINIC}`,
    description:
      service.shortDescription ||
      `${service.name} u ordinaciji ${CLINIC}. Individualni plan terapije, savremeni materijali i stručan pristup.`,
  }
}
