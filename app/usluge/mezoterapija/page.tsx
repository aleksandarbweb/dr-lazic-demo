import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mezoterapija | Ordinacija Dr. Terzić',
  description: 'Mezoterapija u ordinaciji Dr. Terzić — detaljan opis usluge uskoro.',
}

const serviceData = {
  title: 'Mezoterapija',
  aboutHeading: 'O ovoj usluzi',
  subtitle: 'Mezoterapija — sadržaj u pripremi',
  description: 'Detaljan opis usluge biće dostupan uskoro',
  whatIsIt: 'Sadržaj za ovu uslugu je u pripremi. Detaljan opis, tok tretmana i najčešća pitanja biće dodati čim ih dr Terzić dostavi.',
  pendingNotice: 'Čeka se zvanična informacija od dr Terzić za ovu uslugu. Stranica će biti dopunjena čim je dostavi.',
  relatedServices: [
    { title: 'PRP tretman', href: '/usluge/prp' },
    { title: 'Biorevitalizacije (Profhilo)', href: '/usluge/profhilo' },
    { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' },
  ],
}

export default function MezoterapijaPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/prp-treatment.jpg" />
}
