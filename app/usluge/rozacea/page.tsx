import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lečenje Rozacee | Ordinacija Dr. Terzić',
  description: 'Lečenje rozacee u ordinaciji Dr. Terzić — detaljan opis usluge uskoro.',
}

const serviceData = {
  title: 'Lečenje Rozacee',
  aboutHeading: 'O ovoj usluzi',
  subtitle: 'Lečenje rozacee — sadržaj u pripremi',
  description: 'Detaljan opis usluge biće dostupan uskoro',
  whatIsIt: 'Sadržaj za ovu uslugu je u pripremi. Detaljan opis, tok tretmana i najčešća pitanja biće dodati čim ih dr Terzić dostavi.',
  pendingNotice: 'Čeka se zvanična informacija od dr Terzić za ovu uslugu. Stranica će biti dopunjena čim je dostavi.',
  relatedServices: [
    { title: 'Uklanjanje vaskularnih promena – kapilari i hemangiomi', href: '/usluge/kapilari-i-hemangiomi-laser' },
    { title: 'Lečenje akni', href: '/usluge/akne' },
    { title: 'Dijagnostika i lečenje kožnih i polnih bolesti', href: '/usluge/medicinska-dermatologija' },
  ],
}

export default function RozaceaPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/dermatology-treatment.jpg" />
}
