import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kolagen Stimulatori | Ordinacija Dr. Terzić',
  description: 'Kolagen stimulatori u ordinaciji Dr. Terzić — detaljan opis usluge uskoro.',
}

const serviceData = {
  title: 'Kolagen Stimulatori',
  aboutHeading: 'O ovoj usluzi',
  subtitle: 'Kolagen stimulatori — sadržaj u pripremi',
  description: 'Detaljan opis usluge biće dostupan uskoro',
  whatIsIt: 'Sadržaj za ovu uslugu je u pripremi. Detaljan opis, tok tretmana i najčešća pitanja biće dodati čim ih dr Terzić dostavi.',
  pendingNotice: 'Čeka se zvanična informacija od dr Terzić za ovu uslugu. Stranica će biti dopunjena čim je dostavi.',
  relatedServices: [
    { title: 'Biorevitalizacije (Profhilo)', href: '/usluge/profhilo' },
    { title: 'Morpheus8 RF Microneedling', href: '/usluge/morpheus8' },
    { title: 'PRP tretman', href: '/usluge/prp' },
  ],
}

export default function KolagenStimulatoriPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/prp-treatment.jpg" />
}
