import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lečenje Akni | Ordinacija Dr. Terzić',
  description: 'Individualni pristup, laserska terapija i sistemski protokoli za lečenje akni svih formi. Medicinska dermatologija u ordinaciji Dr. Terzić u Beogradu.',
}

const serviceData = {
  title: 'Lečenje Akni',
  aboutHeading: 'Šta su akne?',
  subtitle: 'Individualni pristup, savremena laserska terapija i sistemski protokoli za sve forme akni',
  description: 'Stručna medicinska nega prilagođena svakom tipu i uzroku akni',
  whatIsIt: `Akne predstavljaju najčešće dermatološko oboljenje, uglavnom vezano za adolescentnu dob, mada neretko obolevaju i osobe srednje životne dobi. Postoje razni tipovi akni, od vrlo blagih, preko srednje teških, do teških formi praćenih izraženim upalnim procesima koji mogu za sobom ostaviti ožiljke i crvene fleke, pa je bitno što ranije krenuti sa adekvatnom terapijom kako bi se ubrzalo izlečenje i smanjila mogućnost nastanka ožiljaka i fleka.`,
  whatIsItSections: [
    {
      heading: 'Individualni pristup',
      body: 'Neophodno je da se svaki pacijent posmatra kao individua, te se proces lečenja planira individualno, shodno kliničkoj slici, godinama pacijenta, polu, životnim navikama, metabolizmu i mogućim hormonskim disbalansima. Savremena dermatologija primat daje širokom dijapazonu lokalne i sistemske terapije, koja omogućava brze i bolje rezultate u lečenju, a čiji izbor svakako treba poveriti iskusnom dermatologu. Ključne reči u lečenju i izlečenju akni su: individualni pristup, poverenje, strpljenje i upornost, uz redovno korišćenje terapije preporučene od dermatologa, a po potrebi ginekologa i endokrinologa.',
    },
    {
      heading: 'Terapija laserom',
      body: 'Terapija laserom daje odlične rezultate. U zavisnosti od kliničke slike primenjuju se neinvazivni laseri koji uništavaju bakterije i stimulišu regeneraciju kože, i dovode do smanjenja upalnih procesa, ali i beljenja postinflamatornih crvenih fleka. Takođe se, u zavisnosti od kliničke slike, mogu koristiti i invazivni laseri koji rade piling i značajno popravljaju kvalitet kože i ožiljke.',
    },
    {
      heading: 'Hemijski pilinzi i komedoekspresija',
      body: 'Hemijski pilinzi nove generacije se obično rade u serijama na 2 do 4 nedelje. Kod nekih tipova akni praktikuje se, uz ostale terapije, komedoekspresija (medicinski higijenski tretman), kojom se uklanjaju otvoreni i zatvoreni komedoni, tj. miteseri, što značajno ubrzava proces lečenja.',
    },
    {
      heading: 'Sistemska terapija za teže forme',
      body: 'U lečenju teških formi akni primenjuju se isključivo dermatološki protokoli koji podrazumevaju korišćenje sistemske terapije: antibioticima, kontraceptivnom pilulom ili izotretinoinom (Roakutan), koja traje više nedelja i meseci i dovodi do odličnih rezultata u smislu smirivanja upalnih procesa, smanjenja lučenja lojnih žlezda, poboljšanja kvaliteta same kože i smanjenja mogućnosti nastanka ožiljaka. Ovakav pristup lečenju akni zadovoljava svetske dermatološke standarde i ne remeti pacijente u obavljanju svakodnevnih aktivnosti.',
    },
    {
      heading: 'Ishrana i hormonski faktori',
      body: 'Sve više pažnje obraća se i na ishranu, koja može loše uticati na pojavu akni, pa se savetuje redukcija unosa namirnica poput rafinisanih šećera, brze masne hrane i mleka. Sve češći uzrok nastanka adultnih akni su policistični jajnici i insulinska rezistencija, pa je neophodna podrška ginekologa i endokrinologa. S obzirom na kompleksnost problema i izražen individualizam, kako u formi akni tako i u odgovoru na terapiju, vrlo je važno lečenje prepustiti dermatologu, koji će izabrati najbolju kombinaciju terapije za svakog pacijenta ponaosob.',
    },
  ],
  methods: [
    'Neinvazivni Nd:YAG laser: 5 do 6 tretmana nedeljno, potom mesečno održavanje',
    'Clear Skin laser (odobren od FDA): 4 do 6 tretmana na svake 2 do 3 nedelje',
    'Invazivni (ablativni) laserski piling: poboljšanje kvaliteta kože i ožiljaka',
    'Hemijski pilinzi nove generacije: u serijama na 2 do 4 nedelje',
    'Komedoekspresija (medicinski higijenski tretman): uklanjanje otvorenih i zatvorenih komedona',
    'Sistemska terapija: antibiotici, kontraceptivna pilula ili izotretinoin (Roakutan), po protokolu dermatologa',
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
      answer: 'Kod težih formi akni koriste se dermatološki protokoli sa sistemskom terapijom (antibiotici, kontraceptivna pilula ili izotretinoin – Roakutan), koji dovode do smirivanja upale, smanjenja lučenja loja i boljeg kvaliteta kože. Terapija traje više nedelja do meseci i zadovoljava svetske dermatološke standarde.',
    },
  ],
  relatedServices: [
    { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' },
    { title: 'PRP tretman', href: '/usluge/prp' },
    { title: 'Dermoskopija', href: '/usluge/dermoskopija' },
  ],
}

export default function AknePage() {
  return (
    <ServicePageLayout
      {...serviceData}
      imageSrc="/images/Services/opsta-dermatovenerologija/lecenje-akni.png"
    />
  )
}
