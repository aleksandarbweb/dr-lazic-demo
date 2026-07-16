import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medicinski Higijenski Tretmani Lica | Ordinacija Dr. Terzić',
  description: 'Medicinski higijenski tretmani lica u ordinaciji Dr. Terzić: detaljan opis usluge uskoro.',
}

const serviceData = {
  title: 'Medicinski Higijenski Tretmani Lica',
  aboutHeading: 'O ovoj usluzi',
  subtitle: 'Medicinski higijenski tretmani lica: sadržaj u pripremi',
  description: 'Detaljan opis usluge biće dostupan uskoro',
  whatIsIt: 'Sadržaj za ovu uslugu je u pripremi. Detaljan opis, tok tretmana i najčešća pitanja biće dodati čim ih dr Terzić dostavi.',
  pendingNotice: 'Čeka se zvanična informacija od dr Terzić za ovu uslugu. Stranica će biti dopunjena čim je dostavi.',
  relatedServices: [
    { title: 'Biološki tretmani lica', href: '/usluge/bioloski-tretmani-lica' },
    { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' },
    { title: 'Savetovanje za negu lica', href: '/usluge/savetovanje-za-negu-lica' },
  ],
}

export default function MedicinskiHigijenskiTretmaniLicaPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/dermatology-treatment.jpg" />
}
