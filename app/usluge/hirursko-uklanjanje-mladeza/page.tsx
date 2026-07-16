import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hirurško Uklanjanje Mladeža sa PH Dijagnostikom | Ordinacija Dr. Terzić',
  description: 'Hirurško uklanjanje mladeža sa patohistološkom dijagnostikom u ordinaciji Dr. Terzić: detaljan opis usluge uskoro.',
}

const serviceData = {
  title: 'Hirurško Uklanjanje Mladeža sa PH Dijagnostikom',
  aboutHeading: 'O ovoj usluzi',
  subtitle: 'Hirurško uklanjanje mladeža sa patohistološkom dijagnostikom: sadržaj u pripremi',
  description: 'Detaljan opis usluge biće dostupan uskoro',
  whatIsIt: 'Sadržaj za ovu uslugu je u pripremi. Detaljan opis, tok tretmana i najčešća pitanja biće dodati čim ih dr Terzić dostavi.',
  pendingNotice: 'Čeka se zvanična informacija od dr Terzić za ovu uslugu. Stranica će biti dopunjena čim je dostavi.',
  relatedServices: [
    { title: 'Dermoskopski pregled mladeža', href: '/usluge/dermoskopija' },
    { title: 'Uklanjanje virusnih bradavica, kondiloma i moluski', href: '/usluge/bradavice-papilomi-keratoze-moluske' },
    { title: 'Dijagnostika i lečenje kožnih i polnih bolesti', href: '/usluge/medicinska-dermatologija' },
  ],
}

export default function HirurskoUklanjanjeMladezaPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/dermatology-treatment.jpg" />
}
