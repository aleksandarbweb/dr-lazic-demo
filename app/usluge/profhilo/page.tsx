import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Biorevitalizacija kože | Ordinacija Dr. Terzić',
  description:
    'Biorevitalizacija kože: preparati na bazi hijaluronske kiseline, aminokiselina i peptida za hidrataciju, elastičnost i kvalitet kože, uz svega nekoliko uboda. Ordinacija Dr. Terzić, Beograd.',
}

const serviceData = {
  title: 'Biorevitalizacija kože',
  aboutHeading: 'Šta je biorevitalizacija?',
  subtitle:
    'Hidratacija, elastičnost, tonus i kvalitet kože, uz svega nekoliko uboda i minimalnu traumu.',
  description: 'Minimalno invazivna injekciona procedura za kožu kojoj treba više od površinske nege.',
  pendingNotice:
    'Fotografija za ovu uslugu još uvek nije dostavljena, pa je trenutno prikazana privremena zamenska slika. Tekst na stranici je kompletan i zvaničan.',
  whatIsIt:
    'Biorevitalizacija je minimalno invazivna injekciona procedura kojom se poboljšavaju hidratacija, elastičnost, tonus i kvalitet kože. Tretman se izvodi primenom preparata na bazi hijaluronske kiseline, aminokiselina i peptida, uz svega nekoliko uboda, čime se aktivne supstance unose u kožu uz minimalnu traumu.',
  whatIsItSections: [
    {
      heading: 'Šta tretman postiže',
      body: 'Preparati doprinose intenzivnoj hidrataciji, podržavaju procese regeneracije i poboljšavaju teksturu i svežinu kože. Tretman je namenjen koži kojoj su potrebni dodatna hidratacija, bolji tonus i blistavost, kao i ublažavanje prvih znakova starenja. Posebno može biti koristan kod osetljive, dehidrirane kože i kože sklone rozacei, uz pažljiv izbor preparata i individualno prilagođen pristup.',
    },
    {
      heading: 'Kombinovanje sa laserskim tretmanima',
      body: 'Odlični rezultati postižu se kombinovanjem biorevitalizacije sa laserskim tretmanima, čime se komplementarnim delovanjem može dodatno unaprediti kvalitet kože, njena tekstura i svežina. Kod kože sa rozaceom, kombinacija se pažljivo planira u skladu sa stanjem kože i njenom tolerancijom.',
    },
    {
      heading: 'Protokol tretmana',
      body: 'Preporučujemo seriju od tri tretmana, u razmacima od mesec dana, nakon čega se, u zavisnosti od stanja kože i korišćenog preparata, savetuje tretman održavanja na svakih 3–6 meseci.',
    },
  ],
  relatedServices: [
    { title: 'Mezoterapija', href: '/usluge/mezoterapija' },
    { title: 'Kolagen stimulatori', href: '/usluge/kolagen-stimulatori' },
    { title: 'Personalizovano podmlađivanje laserom', href: '/usluge/podmladjivanje-fotona-3d-4d-5d' },
  ],
}

export default function BiorevitalizacijaPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/profhilo-treatment.jpg" />
}
