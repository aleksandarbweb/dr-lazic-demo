import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uklanjanje Ožiljaka | Ordinacija Dr. Terzić',
  description: 'Uklanjanje ožiljaka u ordinaciji Dr. Terzić — detaljan opis usluge uskoro.',
}

const serviceData = {
  title: 'Uklanjanje Ožiljaka',
  aboutHeading: 'O ovoj usluzi',
  subtitle: 'Uklanjanje ožiljaka — sadržaj u pripremi',
  description: 'Detaljan opis usluge biće dostupan uskoro',
  whatIsIt: 'Sadržaj za ovu uslugu je u pripremi. Detaljan opis, tok tretmana i najčešća pitanja biće dodati čim ih dr Terzić dostavi.',
  pendingNotice: 'Čeka se zvanična informacija od dr Terzić za ovu uslugu. Stranica će biti dopunjena čim je dostavi.',
  relatedServices: [
    { title: 'Uklanjanje strija', href: '/usluge/strije-laser' },
    { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' },
    { title: 'Morpheus8 RF Microneedling', href: '/usluge/morpheus8' },
  ],
}

export default function UklanjanjeOziljakaPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/laser-treatment.jpg" />
}
