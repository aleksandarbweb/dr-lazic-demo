import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dijagnostika i Lečenje Kožnih i Polnih Bolesti | Ordinacija Dr. Terzić',
  description:
    'Dermatologija za celu porodicu: sveobuhvatan pregled kože, vidljivih sluzokoža i kožnih tvorevina za decu i odrasle u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Dijagnostika i Lečenje Kožnih i Polnih Bolesti',
  aboutHeading: 'Šta obuhvata specijalistički pregled?',
  subtitle: 'Dermatologija za celu porodicu: precizna dijagnostika i terapija kožnih i polnih bolesti, za decu i odrasle.',
  description: 'Sveobuhvatan dermatološki pristup za decu i odrasle',
  whatIsIt: `Specijalistički pregled dece i odraslih u ordinaciji "Dr Terzić" obuhvata sveobuhvatan pregled kože, vidljivih sluzokoža i kožnih tvorevina (nokti i dlaka).`,
  pendingNotice: 'Čeka se dodatna informacija od dr Terzić o ovoj usluzi. Ova stranica će biti dopunjena čim je dostavi; do tada je popunjena samo osnovnim, opštim informacijama.',
  relatedServices: [
    { title: 'Lečenje akni', href: '/usluge/akne' },
    { title: 'Uklanjanje virusnih bradavica, kondiloma i moluski', href: '/usluge/bradavice-papilomi-keratoze-moluske' },
    { title: 'Dermoskopski pregled mladeža', href: '/usluge/dermoskopija' },
  ],
}

export default function MedicinskaDermatologijaPage() {
  return (
    <ServicePageLayout
      {...serviceData}
      imageSrc="/images/Services/opsta-dermatovenerologija/lecenje-koznih-i-polnih-bolesti.png"
    />
  )
}
