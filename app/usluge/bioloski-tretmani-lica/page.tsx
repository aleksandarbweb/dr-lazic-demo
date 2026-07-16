import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Biološki Tretmani Lica | Ordinacija Dr. Terzić',
  description: 'Biološki tretmani lica u ordinaciji Dr. Terzić: detaljan opis usluge uskoro.',
}

const serviceData = {
  title: 'Biološki Tretmani Lica',
  aboutHeading: 'O ovoj usluzi',
  subtitle: 'Biološki tretmani lica: sadržaj u pripremi',
  description: 'Detaljan opis usluge biće dostupan uskoro',
  whatIsIt: 'Sadržaj za ovu uslugu je u pripremi. Detaljan opis, tok tretmana i najčešća pitanja biće dodati čim ih dr Terzić dostavi.',
  pendingNotice: 'Čeka se zvanična informacija od dr Terzić za ovu uslugu. Stranica će biti dopunjena čim je dostavi.',
  relatedServices: [
    { title: 'Medicinski higijenski tretmani lica', href: '/usluge/medicinski-higijenski-tretmani-lica' },
    { title: 'PRP tretman', href: '/usluge/prp' },
    { title: 'Savetovanje za negu lica', href: '/usluge/savetovanje-za-negu-lica' },
  ],
}

export default function BioloskiTretmaniLicaPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/dermatology-treatment.jpg" />
}
