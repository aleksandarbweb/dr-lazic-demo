import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lečenje Akni | Ordinacija Dr. Terzić',
  description: 'Individualni pristup, laserska terapija i sistemski protokoli za lečenje akni svih formi. Medicinska dermatologija u ordinaciji Dr. Terzić u Beogradu.',
}

const serviceData = {
  title: 'Lečenje Akni',
  subtitle: 'Individualni pristup, savremena laserska terapija i sistemski protokoli za sve forme akni',
  description: 'Stručna medicinska nega prilagođena svakom tipu i uzroku akni',
  whatIsIt: `Akne predstavljaju najčešće dermatološko oboljenje, vezano najviše za adolescentni period, ali nisu retkost ni kod osoba srednje životne dobi. Postoje razni tipovi akni: od vrlo blagih, preko srednje teških, do teških formi praćenih izraženim upalnim procesima koji mogu ostaviti ožiljke i crvene fleke. Što se ranije krene sa adekvatnom terapijom, veće su šanse za brže izlečenje i manji rizik od trajnih tragova.

Svaki pacijent se posmatra kao individua: proces lečenja planiramo prema kliničkoj slici, godinama, polu, životnim navikama, metabolizmu i mogućim hormonskim disbalansima. Kod odraslih pacijentkinja sve češći uzrok akni su policistični jajnici i insulinska rezistencija, pa je po potrebi neophodna i podrška ginekologa ili endokrinologa.

Ključne reči u lečenju i izlečenju akni su individualni pristup, poverenje, strpljenje i upornost, uz redovno korišćenje terapije koju preporuči dermatolog.`,
  methods: [
    'Lokalna terapija (retinoidi, antiseptici) prilagođena tipu kože',
    'Sistemska terapija: antibiotici, kontraceptivna pilula ili izotretinoin, po protokolu dermatologa',
    'Nd:YAG laser: 5 do 6 tretmana nedeljno, potom mesečno održavanje',
    'Clear Skin laser (odobren od FDA): 4 do 6 tretmana na svake 2 do 3 nedelje',
    'Hemijski pilinzi nove generacije: u serijama na 2 do 4 nedelje',
    'Komedoekspresija (medicinsko higijensko čišćenje): uklanjanje otvorenih i zatvorenih komedona',
  ],
  howItWorks: [
    'Detaljan pregled: analiza tipa kože, težine oboljenja, prethodnih terapija i mogućih hormonskih faktora.',
    'Individualni plan lečenja koji kombinuje lokalnu i, po potrebi, sistemsku terapiju.',
    'Terapija laserom i/ili hemijskim pilinzima u ordinaciji, prema kliničkoj slici.',
    'Saveti o ishrani i svakodnevnoj nezi koji podržavaju terapiju.',
    'Redovne kontrole radi prilagođavanja terapije i praćenja napretka.',
  ],
  idealCandidates: [
    'Osobe sa blagim, umerenim ili teškim aknama, u adolescenciji ili odrasloj dobi.',
    'Pacijenti kod kojih akne ostavljaju ožiljke ili crvene fleke.',
    'Odrasle pacijentkinje kod kojih se sumnja na hormonski uzrok (policistični jajnici, insulinska rezistencija).',
    'Osobe koje žele kombinaciju medicinske terapije i laserske podrške.',
  ],
  expectedResults: [
    'Smanjenje broja i intenziteta upalnih promena uz redovnu terapiju.',
    'Manji rizik od ožiljaka i postinflamatornih crvenih fleka uz ranu intervenciju.',
    'Poboljšan kvalitet kože i regulisano lučenje loja uz lasersku i/ili sistemsku terapiju.',
    'Pristup usklađen sa svetskim dermatološkim standardima, koji ne remeti svakodnevne aktivnosti.',
  ],
  faqs: [
    {
      question: 'Koliko dugo traje lečenje akni?',
      answer: 'Zavisi od težine i tipa akni. Laserska terapija Nd:YAG laserom obično podrazumeva 5-6 tretmana jednom nedeljno, a zatim mesečno održavanje; Clear Skin laser 4-6 tretmana na 2-3 nedelje. Kod težih formi sistemska terapija traje više nedelja do meseci.',
    },
    {
      question: 'Da li ishrana utiče na akne?',
      answer: 'Da, namirnice poput rafinisanog šećera, brze masne hrane i mleka mogu pogoršati akne kod nekih osoba, pa se savetuje redukcija njihovog unosa uz redovnu terapiju.',
    },
    {
      question: 'Zašto se ponekad uključuje ginekolog ili endokrinolog?',
      answer: 'Kod adultnih akni čest uzrok su policistični jajnici i insulinska rezistencija, pa je u tim slučajevima saradnja sa ginekologom ili endokrinologom deo uspešnog lečenja.',
    },
    {
      question: 'Da li lečenje akni remeti svakodnevne aktivnosti?',
      answer: 'Ne, pristup lečenju akni u ordinaciji usklađen je sa svetskim dermatološkim standardima i ne remeti pacijente u obavljanju svakodnevnih aktivnosti.',
    },
    {
      question: 'Šta ako blagi preparati ne pomažu?',
      answer: 'Kod težih formi akni koriste se dermatološki protokoli sa sistemskom terapijom (antibiotici, kontraceptivna pilula ili izotretinoin), koji dovode do smirivanja upale, smanjenja lučenja loja i boljeg kvaliteta kože.',
    },
  ],
  relatedServices: [
    { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' },
    { title: 'PRP tretman', href: '/usluge/prp' },
    { title: 'Dermoskopija', href: '/usluge/dermoskopija' },
  ],
}

export default function AknePage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/dermatology-treatment.jpg" />
}
