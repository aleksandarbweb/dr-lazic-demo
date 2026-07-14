import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uklanjanje Pigmentnih Promena | Ordinacija Dr. Terzić',
  description: 'Uklanjanje pigmentnih promena u ordinaciji Dr. Terzić — detaljan opis usluge uskoro.',
}

const serviceData = {
  title: 'Uklanjanje Pigmentnih Promena',
  aboutHeading: 'O ovoj usluzi',
  subtitle: 'Uklanjanje pigmentnih promena — sadržaj u pripremi',
  description: 'Detaljan opis usluge biće dostupan uskoro',
  whatIsIt: 'Sadržaj za ovu uslugu je u pripremi. Detaljan opis, tok tretmana i najčešća pitanja biće dodati čim ih dr Terzić dostavi.',
  pendingNotice: 'Čeka se zvanična informacija od dr Terzić za ovu uslugu. Stranica će biti dopunjena čim je dostavi.',
  relatedServices: [
    { title: 'Uklanjanje papiloma i keratoza', href: '/usluge/uklanjanje-papiloma-i-keratoza' },
    { title: 'Uklanjanje virusnih bradavica, kondiloma i moluski', href: '/usluge/bradavice-papilomi-keratoze-moluske' },
    { title: 'Dijagnostika i lečenje kožnih i polnih bolesti', href: '/usluge/medicinska-dermatologija' },
  ],
}

export default function PigmentnePromenePage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/piling-treatment.jpg" />
}
