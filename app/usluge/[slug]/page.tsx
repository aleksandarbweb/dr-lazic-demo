import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePageLayout } from '@/components/service-page-layout'
import { allServices, serviceBySlug } from '@/lib/service-catalog'

type Params = { slug: string }

const buildServiceCopy = (name: string, category: string) => ({
  subtitle: `${name} — individualno planiran tretman u okviru oblasti: ${category}`,
  description: `Personalizovan protokol za ${name.toLowerCase()} sa fokusom na bezbednost, prirodan rezultat i dugoročno održavanje.`,
  whatIsIt: `${name} je procedura iz oblasti "${category}" koja se planira prema tipu kože, indikaciji i ciljevima pacijenta. U ordinaciji Dr. Terzić tretman započinje detaljnom procenom i jasnim planom koraka kako bi rezultat bio ujednačen, predvidiv i estetski prirodan.

Svaki protokol prilagođavamo ritmu vaše kože i kliničkoj slici, uz poseban akcenat na bezbednost, post-proceduralnu negu i praćenje napretka.`,
  howItWorks: [
    `Dermatološka konsultacija i procena indikacije za ${name.toLowerCase()}.`,
    'Formiranje individualnog plana tretmana i očekivanih rokova rezultata.',
    'Sprovođenje tretmana u kontrolisanim uslovima sa jasnim protokolom.',
    'Uputstva za negu nakon tretmana i plan kontrole.',
    'Kontrolni pregled i eventualna optimizacija narednog koraka.',
  ],
  idealCandidates: [
    `Osobe koje žele ciljano rešavanje problema kroz ${name.toLowerCase()}.`,
    'Osobe koje traže medicinski nadzor i strukturisan protokol tretmana.',
    'Osobe koje žele prirodan rezultat bez narušavanja karakteristika lica i kože.',
    'Pacijenti koji žele plan održavanja i dugoročnu stabilnost rezultata.',
  ],
  expectedResults: [
    'Postepeno i vidljivo poboljšanje kvaliteta kože u skladu sa indikacijom.',
    'Ujednačeniji izgled i bolji tonus tretirane regije.',
    'Jasno definisan plan održavanja rezultata kroz vreme.',
    'Bolja kontrola stanja i manji rizik od neželjenih oscilacija.',
  ],
  faqs: [
    {
      question: `Koliko traje tretman ${name.toLowerCase()}?`,
      answer: 'Trajanje zavisi od regije i plana rada, ali većina tretmana traje između 20 i 60 minuta.',
    },
    {
      question: 'Da li je potreban oporavak nakon tretmana?',
      answer: 'Zavisi od procedure. Većina protokola ima minimalan oporavak uz jasna uputstva koja dobijate odmah nakon tretmana.',
    },
    {
      question: 'Kada mogu očekivati prve rezultate?',
      answer: 'Početne promene su često vidljive rano, dok se puni efekat procenjuje nakon planiranog perioda kontrole.',
    },
    {
      question: 'Da li je tretman bezbedan tokom cele godine?',
      answer: 'Da, uz pravilnu indikaciju i zaštitu kože. Kod procedura osetljivih na sunce dobijate striktan plan fotoprotekcije.',
    },
  ],
})

export async function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const service = serviceBySlug[slug]
  if (!service) {
    return {
      title: 'Usluga | Ordinacija Dr. Terzić',
    }
  }
  return {
    title: `${service.name} | Ordinacija Dr. Terzić`,
    description: `${service.name} u ordinaciji Dr. Terzić. Individualni protokol, stručni nadzor i jasno definisan plan tretmana.`,
  }
}

export default async function DynamicServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const service = serviceBySlug[slug]
  if (!service) notFound()

  const copy = buildServiceCopy(service.name, service.category)
  const relatedServices = allServices
    .filter((item) => item.category === service.category && item.slug !== service.slug)
    .slice(0, 3)
    .map((item) => ({ title: item.name, href: `/usluge/${item.slug}` }))

  return (
    <ServicePageLayout
      title={service.name}
      subtitle={copy.subtitle}
      description={copy.description}
      whatIsIt={copy.whatIsIt}
      howItWorks={copy.howItWorks}
      idealCandidates={copy.idealCandidates}
      expectedResults={copy.expectedResults}
      faqs={copy.faqs}
      relatedServices={relatedServices}
      imageSrc={service.imageSrc}
    />
  )
}
