import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dermapen | Ordinacija Dr. Terzić',
  description: 'Dermapen tretman u ordinaciji Dr. Terzić: detaljan opis usluge uskoro.',
}

const serviceData = {
  title: 'Dermapen',
  aboutHeading: 'O ovoj usluzi',
  subtitle: 'Dermapen: sadržaj u pripremi',
  description: 'Detaljan opis usluge biće dostupan uskoro',
  whatIsIt: 'Sadržaj za ovu uslugu je u pripremi. Detaljan opis, tok tretmana i najčešća pitanja biće dodati čim ih dr Terzić dostavi.',
  pendingNotice: 'Čeka se zvanična informacija od dr Terzić za ovu uslugu. Stranica će biti dopunjena čim je dostavi.',
  relatedServices: [
    { title: 'Profhilo', href: '/usluge/profhilo' },
    { title: 'Medicinski higijenski tretmani lica', href: '/usluge/medicinski-higijenski-tretmani-lica' },
    { title: 'PRP tretman', href: '/usluge/prp' },
  ],
}

export default function DermapenPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/prp-treatment.jpg" />
}
