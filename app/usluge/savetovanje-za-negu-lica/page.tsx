import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Savetovanje za Negu Lica | Ordinacija Dr. Terzić',
  description: 'Savetovanje za negu lica u ordinaciji Dr. Terzić — detaljan opis usluge uskoro.',
}

const serviceData = {
  title: 'Savetovanje za Negu Lica',
  aboutHeading: 'O ovoj usluzi',
  subtitle: 'Savetovanje za negu lica — sadržaj u pripremi',
  description: 'Detaljan opis usluge biće dostupan uskoro',
  whatIsIt: 'Sadržaj za ovu uslugu je u pripremi. Detaljan opis, tok tretmana i najčešća pitanja biće dodati čim ih dr Terzić dostavi.',
  pendingNotice: 'Čeka se zvanična informacija od dr Terzić za ovu uslugu. Stranica će biti dopunjena čim je dostavi.',
  relatedServices: [
    { title: 'Medicinski higijenski tretmani lica', href: '/usluge/medicinski-higijenski-tretmani-lica' },
    { title: 'Biološki tretmani lica', href: '/usluge/bioloski-tretmani-lica' },
    { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' },
  ],
}

export default function SavetovanjeZaNeguLicaPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/dermatology-treatment.jpg" />
}
