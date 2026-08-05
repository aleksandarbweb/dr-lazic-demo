import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dijagnostika i lečenje kožnih i polnih bolesti | Ordinacija Dr. Terzić',
  description:
    'Dermatologija za celu porodicu: sveobuhvatan pregled kože, vidljivih sluzokoža i kožnih tvorevina za decu i odrasle u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Dijagnostika i lečenje kožnih i polnih bolesti',
  aboutHeading: 'Šta obuhvata specijalistički pregled?',
  subtitle: 'Dermatologija za celu porodicu: precizna dijagnostika i terapija kožnih i polnih bolesti, za decu i odrasle.',
  description: 'Sveobuhvatan dermatološki pristup za decu i odrasle',
  whatIsIt: `Posvećeni smo očuvanju zdravlja kože, od prevencije i ranog otkrivanja do savremenog lečenja kožnih bolesti.\n\nSpecijalistički pregled dece i odraslih u ordinaciji "Dr Terzić" obuhvata sveobuhvatan pregled kože, vidljivih sluzokoža i kožnih tvorevina (nokti i dlaka).`,
  relatedServices: [
    { title: 'Lečenje akni', href: '/usluge/akne' },
    { title: 'Uklanjanje virusnih bradavica, kondiloma i moluski', href: '/usluge/bradavice-papilomi-keratoze-moluske' },
    { title: 'Dermoskopski pregled mladeža', href: '/usluge/dermoskopija' },
  ],
}

export default function MedicinskaDermatologijaPage() {
  return (
    <ServicePageLayout {...serviceData} />
  )
}
