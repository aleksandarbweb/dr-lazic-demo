import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mezoterapija koktelima za kosu | Ordinacija Dr. Terzić',
  description: 'Mezoterapija koktelima za kosu: unos sterilnih koktela vitamina, minerala i aminokiselina direktno oko folikula dlake, u seriji od 5 tretmana, u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Mezoterapija koktelima za kosu',
  aboutHeading: 'Šta je mezoterapija za kosu?',
  subtitle: 'Unos sterilnih koktela vitamina, minerala i aminokiselina direktno oko folikula dlake',
  description: 'Brz, komforan tretman koji hrani koren dlake i podstiče zdrav rast kose',
  whatIsIt: 'Mezoterapija koktelima za kosu je tretman kojim dermatolog, pomoću mikro-iglica, unosi sterilne koktele vitamina, minerala i aminokiselina u srednji sloj kože, direktno oko folikula dlake. Tretman je komforan, traje oko 20 do 30 minuta, a ubodi su brzi i površinski.',
  whatIsItSections: [
    {
      heading: 'Protokol i oporavak',
      body: 'Tretman se radi u seriji od 5 tretmana, u razmaku od 7 do 14 dana. Ne ostavlja nikakve vidljive tragove na koži glave, tako da odmah nakon izlaska iz ordinacije možete nastaviti sa svojim obavezama. Preporučuje se da kosu ne perete narednih 24 sata kako bi aktivne supstance iz koktela u potpunosti delovale.',
    },
  ],
  relatedServices: [
    { title: 'Lečenje opadanja kose (alopecije)', href: '/usluge/opadanje-kose' },
    { title: 'PRP tretman', href: '/usluge/prp' },
    { title: 'Fotona HAIRestart®: laserska stimulacija rasta kose', href: '/usluge/fotona-hairestart' },
  ],
}

export default function MezoterapijaPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/prp-treatment.jpg" />
}
