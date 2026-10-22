import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mezoterapija | Ordinacija Dr. Terzić',
  description:
    'Mezoterapija: dermatolog mikro-iglicama unosi sterilne koktele vitamina, minerala i aminokiselina u srednji sloj kože, radi kvaliteta kože, regeneracije i ujednačenijeg tena.',
}

const serviceData = {
  title: 'Mezoterapija',
  aboutHeading: 'Šta je mezoterapija?',
  subtitle:
    'Unos sterilnih koktela vitamina, minerala i aminokiselina mikro-iglicama direktno u kožu radi poboljšanja njenog kvaliteta, stimulacije regeneracije i ujednačavanja tena.',
  description: 'Aktivne supstance se unose tamo gde koži trebaju, uz kratak i komforan tretman.',
  pendingNotice:
    'Fotografija za ovu uslugu još uvek nije dostavljena, pa je na njenom mestu prikazan okvir za sliku. Tekst na stranici je kompletan i zvaničan.',
  whatIsIt:
    'Mezoterapija je tretman kojim dermatolog, pomoću mikro-iglica, unosi sterilne koktele vitamina, minerala i aminokiselina u srednji sloj kože. Tretman je komforan, traje oko 20-30 minuta.',
  whatIsItSections: [
    {
      heading: 'Protokol i oporavak',
      body: 'Ne ostavlja vidljive tragove na koži. Ne savetuje se šminkanje do sutradan.',
    },
  ],
  relatedServices: [
    { title: 'Biorevitalizacija kože', href: '/usluge/profhilo' },
    { title: 'Kolagen stimulatori', href: '/usluge/kolagen-stimulatori' },
    { title: 'Uklanjanje pigmentnih promena', href: '/usluge/pigmentne-promene' },
  ],
}

// No imageSrc on purpose: the only stock photo available here shows a PRP blood draw
// (centrifuge and blood tubes), which would misrepresent a mesotherapy treatment.
// The shared layout's "photo pending" placeholder is shown instead.
export default function MezoterapijaPage() {
  return <ServicePageLayout {...serviceData} />
}
