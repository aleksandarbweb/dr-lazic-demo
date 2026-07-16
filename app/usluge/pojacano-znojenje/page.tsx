import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lečenje Pojačanog Znojenja | Ordinacija Dr. Terzić',
  description: 'Lečenje pojačanog znojenja u ordinaciji Dr. Terzić: detaljan opis usluge uskoro.',
}

const serviceData = {
  title: 'Lečenje Pojačanog Znojenja',
  aboutHeading: 'O ovoj usluzi',
  subtitle: 'Lečenje pojačanog znojenja: sadržaj u pripremi',
  description: 'Detaljan opis usluge biće dostupan uskoro',
  whatIsIt: 'Sadržaj za ovu uslugu je u pripremi. Detaljan opis, tok tretmana i najčešća pitanja biće dodati čim ih dr Terzić dostavi.',
  pendingNotice: 'Čeka se zvanična informacija od dr Terzić za ovu uslugu. Stranica će biti dopunjena čim je dostavi.',
  relatedServices: [
    { title: 'Dijagnostika i lečenje kožnih i polnih bolesti', href: '/usluge/medicinska-dermatologija' },
    { title: 'Lečenje akni', href: '/usluge/akne' },
    { title: 'Dermoskopski pregled mladeža', href: '/usluge/dermoskopija' },
  ],
}

export default function PojacanoZnojenjePage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/botoks-treatment.jpg" />
}
