import type { MetadataRoute } from 'next'
import { serviceBySlug } from '@/lib/service-catalog'

const baseUrl = 'https://dr-terzic-site.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/o-nama`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/usluge`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/oprema`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/galerija`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/kontakt`, changeFrequency: 'yearly', priority: 0.7 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(serviceBySlug).map((slug) => ({
    url: `${baseUrl}/usluge/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
