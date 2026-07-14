import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laserski Pilinzi | Ordinacija Dr. Terzić',
  description: 'Laserski pilinzi u ordinaciji Dr. Terzić — detaljan opis usluge uskoro.',
}

const serviceData = {
  title: 'Laserski Pilinzi',
  aboutHeading: 'O ovoj usluzi',
  subtitle: 'Laserski pilinzi — sadržaj u pripremi',
  description: 'Detaljan opis usluge biće dostupan uskoro',
  whatIsIt: 'Sadržaj za ovu uslugu je u pripremi. Detaljan opis, tok tretmana i najčešća pitanja biće dodati čim ih dr Terzić dostavi.',
  pendingNotice: 'Čeka se zvanična informacija od dr Terzić za ovu uslugu. Stranica će biti dopunjena čim je dostavi.',
  relatedServices: [
    { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' },
    { title: 'Podmlađivanje – Fotona 3D, 4D i 5D laserski lifting', href: '/usluge/podmladjivanje-fotona-3d-4d-5d' },
    { title: 'Morpheus8 RF Microneedling', href: '/usluge/morpheus8' },
  ],
}

export default function LaserskiPilingPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/piling-treatment.jpg" />
}
