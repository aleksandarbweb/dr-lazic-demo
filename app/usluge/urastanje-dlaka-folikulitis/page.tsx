import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laserski Tretman Uraslih Dlačica (Folikulitis) | Ordinacija Dr. Terzić',
  description: 'Laserski tretman problema uraslih dlačica u ordinaciji Dr. Terzić — detaljan opis usluge uskoro.',
}

const serviceData = {
  title: 'Laserski Tretman Uraslih Dlačica (Folikulitis)',
  aboutHeading: 'O ovoj usluzi',
  subtitle: 'Laserski tretman problema uraslih dlačica — sadržaj u pripremi',
  description: 'Detaljan opis usluge biće dostupan uskoro',
  whatIsIt: 'Sadržaj za ovu uslugu je u pripremi. Detaljan opis, tok tretmana i najčešća pitanja biće dodati čim ih dr Terzić dostavi.',
  pendingNotice: 'Čeka se zvanična informacija od dr Terzić za ovu uslugu. Stranica će biti dopunjena čim je dostavi.',
  relatedServices: [
    { title: 'Epilacija laserom – trajno uklanjanje dlačica', href: '/usluge/laserska-epilacija' },
    { title: 'Lečenje akni', href: '/usluge/akne' },
    { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' },
  ],
}

export default function UrastanjeDlakaFolikulitisPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/laser-treatment.jpg" />
}
