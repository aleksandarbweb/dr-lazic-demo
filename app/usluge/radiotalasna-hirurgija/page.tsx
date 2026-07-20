import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Radiotalasna hirurgija | Ordinacija Dr. Terzić',
  description: 'Precizno i minimalno invazivno uklanjanje kožnih promena radiotalasnim aparatom Ellman u ordinaciji Dr. Terzić: papilomi, keratoze, fibromi, ksantelazme i druge benigne promene.',
}

const serviceData = {
  title: 'Radiotalasna hirurgija',
  aboutHeading: 'Šta je radiotalasna hirurgija?',
  subtitle: 'Precizno, minimalno invazivno uklanjanje kožnih promena aparatom Ellman, uz odličnu kontrolu krvarenja i brzo zarastanje.',
  description: 'Precizno i minimalno invazivno uklanjanje kožnih promena radiotalasnim aparatom Ellman.',
  whatIsIt: `Radiotalasna hirurgija predstavlja savremenu, preciznu i minimalno invazivnu metodu uklanjanja različitih promena na koži i sluzokožama. U našoj ordinaciji koristimo aparat Ellman, koji primenjuje visokofrekventne radio-talase za nežno presecanje i uklanjanje tkiva uz minimalno oštećenje okolne kože.\n\nZahvaljujući izuzetnoj preciznosti, odličnoj kontroli krvarenja i brzom zarastanju, radiotalasna hirurgija danas predstavlja jednu od najčešće korišćenih metoda u dermatološkoj hirurgiji.`,
  whatIsItSections: [
    {
      heading: 'Kada se preporučuje?',
      body: 'Nakon dermatološkog pregleda i postavljanja tačne dijagnoze, radiotalasna hirurgija može biti metoda izbora za uklanjanje:',
      items: [
        'benignih pigmentnih promena, kada postoji indikacija za njihovo uklanjanje',
        'mekih fibroma',
        'papiloma',
        'seboroičnih keratoza',
        'ksantelazmi',
        'epidermalnih cista (ateroma)',
        'virusnih bradavica',
        'drugih benignih promena kože i sluzokoža, prema proceni dermatologa',
      ],
    },
    {
      heading: 'Kako izgleda tretman?',
      body: 'Procedura se izvodi u lokalnoj anesteziji, što omogućava da tretman bude bezbolan ili gotovo bezbolan. Nakon anestezije, promena se precizno uklanja radiotalasnim instrumentom, uz istovremenu koagulaciju sitnih krvnih sudova, čime se smanjuje krvarenje i omogućava dobra preglednost operativnog polja. Sam zahvat traje od nekoliko minuta do dvadesetak minuta, u zavisnosti od broja promena, njihove veličine i lokalizacije promene.',
    },
    {
      heading: 'Oporavak nakon tretmana',
      body: 'Nakon zahvata na tretiranom mestu ostaje površinska ranica ili manja krastica koja zarasta u narednim danima. Većina pacijenata se odmah vraća svakodnevnim aktivnostima, uz pridržavanje jednostavnih uputstava za negu. U pojedinim slučajevima uklonjena promena se šalje na patohistološku analizu radi potvrde dijagnoze.',
    },
    {
      heading: 'Prednosti radiotalasne hirurgije',
      items: [
        'izuzetna preciznost uklanjanja promena',
        'minimalno oštećenje okolnog tkiva',
        'veoma dobra kontrola krvarenja',
        'brzo i kvalitetno zarastanje',
        'odličan estetski rezultat',
        'kratko trajanje procedure',
        'mogućnost slanja uklonjenog tkiva na patohistološku analizu kada je to potrebno',
      ],
    },
    {
      heading: 'Individualni pristup svakom pacijentu',
      body: 'Svaka promena na koži u našoj ordinaciji najpre se pažljivo procenjuje kliničkim pregledom i dermoskopijom. Na osnovu postavljene dijagnoze određujemo najbezbedniji i najefikasniji način lečenja. Naš cilj je da svaka procedura bude izvedena uz maksimalnu preciznost, bezbednost i očuvanje estetskog izgleda kože, kako bi pacijent dobio optimalan terapijski i kozmetički rezultat.',
    },
  ],
  relatedServices: [
    { title: 'Uklanjanje papiloma i keratoza', href: '/usluge/uklanjanje-papiloma-i-keratoza' },
    { title: 'Krioterapija (terapija tečnim azotom)', href: '/usluge/krioterapija' },
    { title: 'Uklanjanje virusnih bradavica, kondiloma i moluski', href: '/usluge/bradavice-papilomi-keratoze-moluske' },
  ],
}

export default function RadiotalasnaHirurgijaPage() {
  return (
    <ServicePageLayout
      {...serviceData}
      imageSrc="/images/Services/dermatology-treatment.jpg"
    />
  )
}
