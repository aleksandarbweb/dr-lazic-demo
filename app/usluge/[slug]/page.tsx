import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePageLayout } from '@/components/service-page-layout'
import { allServices, serviceBySlug } from '@/lib/service-catalog'
import { dentalServiceContent } from '@/lib/dental-service-content'
import { buildServiceMetadata } from '@/lib/service-metadata'

type Params = { slug: string }

export async function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  return buildServiceMetadata(slug)
}

export default async function DynamicServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const service = serviceBySlug[slug]
  if (!service) notFound()

  const content = dentalServiceContent[slug]
  if (!content) notFound()

  const relatedServices = content.relatedSlugs
    .map((relatedSlug) => serviceBySlug[relatedSlug])
    .filter(Boolean)
    .map((item) => ({ title: item.name, href: `/usluge/${item.slug}` }))

  return (
    <ServicePageLayout
      title={content.title}
      subtitle={content.subtitle}
      description={content.description}
      aboutHeading={content.aboutHeading}
      whatIsIt={content.whatIsIt}
      howItWorks={content.howItWorks}
      idealCandidates={content.idealCandidates}
      expectedResults={content.expectedResults}
      faqs={content.faqs}
      relatedServices={relatedServices}
      imageSrc={service.imageSrc}
    />
  )
}
