import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Krioterapija (terapija tečnim azotom) | Ordinacija Dr. Terzić',
  description: 'Sigurno i efikasno uklanjanje bradavica, aktiničnih i seboroičnih keratoza i drugih kožnih promena tečnim azotom u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Krioterapija (terapija tečnim azotom)',
  aboutHeading: 'Šta je krioterapija?',
  subtitle: 'Sigurno i brzo uklanjanje kožnih promena tečnim azotom temperature -196°C, uz minimalan period oporavka.',
  description: 'Savremena metoda uklanjanja kožnih promena kontrolisanim zamrzavanjem tečnim azotom.',
  whatIsIt: `Krioterapija je savremena, sigurna i veoma efikasna metoda uklanjanja različitih promena na koži primenom tečnog azota temperature -196°C. Kontrolisanim zamrzavanjem dolazi do selektivnog uništavanja obolelog tkiva, nakon čega organizam prirodnim procesom zarastanja stvara novu, zdravu kožu.\n\nZahvaljujući brzini izvođenja, odličnim rezultatima i minimalnom periodu oporavka, krioterapija predstavlja jednu od najčešće primenjivanih procedura u savremenoj dermatologiji.`,
  whatIsItSections: [
    {
      heading: 'Kada se preporučuje?',
      body: 'Nakon dermatološkog pregleda i postavljanja tačne dijagnoze, krioterapija može biti metoda izbora za lečenje:',
      items: [
        'virusnih bradavica',
        'aktiničnih keratoza (prekanceroznih promena kože nastalih usled hroničnog izlaganja suncu)',
        'seboroičnih keratoza',
        'mekih fibroma',
        'pojedinih benignih promena kože',
        'drugih promena za koje dermatolog proceni da su pogodne za ovu vrstu terapije',
      ],
    },
    {
      heading: 'Kako izgleda tretman?',
      body: 'Tečni azot se na promenu nanosi precizno, pomoću spreja ili posebnog aplikatora. Sama procedura traje svega nekoliko sekundi, a u zavisnosti od vrste i veličine promene može biti potrebno jedno ili više kratkih zamrzavanja. Većina pacijenata oseća samo prolazno peckanje ili osećaj intenzivne hladnoće, zbog čega lokalna anestezija najčešće nije potrebna.',
    },
    {
      heading: 'Oporavak nakon tretmana',
      body: 'Neposredno nakon procedure mogu se javiti prolazno crvenilo, otok ili formiranje plika, što predstavlja očekivanu reakciju kože. Tokom narednih dana stvara se krastica koja spontano otpada, dok se ispod nje formira nova koža. U većini slučajeva pacijenti se odmah vraćaju svojim svakodnevnim aktivnostima, uz jednostavne preporuke za negu tretiranog područja.',
    },
    {
      heading: 'Prednosti krioterapije',
      items: [
        'brz i komforan tretman',
        'minimalno invazivna procedura',
        'bez rezova i šavova',
        'kratak oporavak',
        'odličan estetski rezultat u najvećem broju slučajeva',
        'mogućnost tretiranja više promena tokom jedne posete',
        'bez potrebe za posebnom pripremom pacijenta',
      ],
    },
    {
      heading: 'Individualni pristup svakom pacijentu',
      body: 'U našoj ordinaciji svaka promena na koži se najpre pažljivo pregleda klinički i dermoskopski. Na osnovu postavljene dijagnoze određujemo da li je krioterapija najbolji izbor ili je potrebno primeniti drugu terapijsku metodu. Naš cilj nije samo uspešno uklanjanje promene, već i postizanje najboljeg mogućeg funkcionalnog i estetskog rezultata uz maksimalnu bezbednost za svakog pacijenta.',
    },
  ],
  relatedServices: [
    { title: 'Radiotalasna hirurgija', href: '/usluge/radiotalasna-hirurgija' },
    { title: 'Uklanjanje papiloma i keratoza', href: '/usluge/uklanjanje-papiloma-i-keratoza' },
    { title: 'Uklanjanje virusnih bradavica, kondiloma i moluski', href: '/usluge/bradavice-papilomi-keratoze-moluske' },
  ],
}

export default function KrioterapijaPage() {
  return (
    <ServicePageLayout
      {...serviceData}
      imageSrc="/images/Services/dermatology-treatment.jpg"
    />
  )
}
