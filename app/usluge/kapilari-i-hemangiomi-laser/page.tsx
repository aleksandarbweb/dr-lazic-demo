import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uklanjanje Vaskularnih Promena: Kapilari, Spider Nevusi i Hemangiomi | Ordinacija Dr. Terzić',
  description: 'Lasersko uklanjanje proširenih kapilara, spider nevusa i hemangioma Nd:YAG laserom u ordinaciji Dr. Terzić u Beogradu.',
}

const serviceData = {
  title: 'Uklanjanje Vaskularnih Promena: Kapilari i Hemangiomi',
  aboutHeading: 'Šta su kapilari i hemangiomi?',
  subtitle: 'Nd:YAG laser, najefikasnija metoda za uklanjanje proširenih kapilara, spider nevusa i hemangioma',
  description: 'Laserski tretman vaskularnih promena na licu i telu',
  whatIsIt: `Kapilari su sitni, najbrojniji krvni sudovi koji se nalaze u površnom sloju kože. Usled dejstva nepovoljnih faktora kao što su izlaganje suncu, vetru, hormonski disbalans i genetika, kapilari se proširuju i postaju uočljivi, najčešće u predelu nosa, obraza i brade.

Vaskularne promene koje tretiramo:`,
  whatIsItSections: [
    {
      heading: 'Tipovi vaskularnih promena',
      items: [
        'Prošireni kapilari – teleangiektazije',
        'Spider nevusi',
        'Hemangiomi / cherry angiomi',
      ],
    },
    {
      heading: 'Prošireni kapilari',
      body: 'Prošireni kapilari se ispoljavaju kao crvena, ljubičasta ili plava promena na koži i mogu izgledati kao grane drveta ili imati oblik paukove mreže. Predstavljaju estetski problem, a poželjno ih je ukloniti kako bi se sprečilo njihovo dalje širenje.',
    },
    {
      heading: 'Hemangiomi',
      body: 'Hemangiomi kože su benigni tumori koji su posledica hiperplazije krvnih sudova. Na samom početku izgledaju kao mala crvena tačka u ravni kože prečnika 1 mm i predstavljaju površne hemangiome. Tokom vremena mogu da porastu iznad površine kože i da izgledaju kao deo zrna graška; pri povređivanju jako krvare. Hemangiomi mogu biti i duboki, kada imaju tamnoljubičastu boju.',
    },
    {
      heading: 'Princip rada Nd:YAG lasera',
      body: 'Nd:YAG laser je najefikasnija metoda za uklanjanje vaskularnih promena. Laser talasne dužine 1064 nm emituje svetlosne impulse čiju energiju upija hemoglobin u krvi. Ta svetlosna energija se pretvara u toplotu koja dovodi do koagulisanja krvi i specifičnog „zavarivanja" zidova neželjenih krvnih sudova.',
    },
    {
      heading: 'Osećaj tokom tretmana',
      body: 'Najčešće pacijenti karakterišu ovaj osećaj kao kratkotrajno peckanje. Poseban sistem za hlađenje sprečava zagrevanje kože i tretman čini prijatnijim.',
    },
    {
      heading: 'Trajanje tretmana',
      body: 'Trajanje tretmana zavisi od broja i gustine tretiranih krvnih sudova. Primera radi, u slučaju zvezdastog hemangioma tretman traje svega nekoliko sekundi. Za tretman većeg broja kapilara potrebno je srazmerno više vremena.',
    },
    {
      heading: 'Broj tretmana',
      body: 'Broj tretmana zavisi od tipa, boje, konfiguracije i broja krvnih sudova. Najčešće je dovoljno uraditi 1 do 3 tretmana na 4 do 6 nedelja. U slučajevima gde krvni sudovi formiraju kapilarnu mrežu, ponekad je potrebno uraditi više tretmana. Vidljivo smanjenje kapilara primetno je posle svakog pojedinačnog tretmana.',
    },
    {
      heading: 'Vidljivi rezultati tretmana',
      body: 'Pojedinačni krvni sudovi, spider angiomi i tzv. cherry angiomi najčešće nestaju sa jednim tretmanom, dok u slučaju većeg broja krvnih sudova i većih kapilarnih mreža rezultat dolazi postepeno, sa svakim sledećim tretmanom.',
    },
    {
      heading: 'Nakon tretmana',
      body: 'Odmah nakon tretmana se primećuje crvenilo, sa ili bez neznatnog otoka, koje se najčešće povlači za jedan dan. Sami krvni sudovi potamne, a za nekoliko dana se resorbuju i nestaju. Koža nakon ove intervencije ostaje intaktna, bez ožiljaka.',
    },
  ],
  methods: [
    'Nd:YAG laser, talasna dužina 1064 nm',
  ],
  howItWorks: [
    'Dermatološki pregled i procena tipa, boje, konfiguracije i broja krvnih sudova.',
    'Određivanje parametara lasera prema tipu kože i vrsti promene.',
    'Sprovođenje laserskog tretmana uz sistem hlađenja koji sprečava zagrevanje kože i tretman čini prijatnijim.',
    'Neposredno nakon tretmana javlja se crvenilo, sa ili bez blagog otoka, koje se najčešće povlači za jedan dan.',
    'Kontrolni pregled i, po potrebi, planiranje dodatne seanse (1 do 3 tretmana na 4 do 6 nedelja).',
  ],
  idealCandidates: [
    'Osobe sa proširenim kapilarima – teleangiektazijama na licu (nos, obrazi, brada).',
    'Pacijenti sa spider nevusima ili hemangiomima (cherry angiomima).',
    'Osobe sa hroničnim crvenilom lica povezanim sa rozaceom, za koje postoji poseban protokol rada.',
    'Pacijenti koji žele neinvazivan tretman bez perioda oporavka.',
  ],
  expectedResults: [
    'Pojedinačni krvni sudovi, spider angiomi i cherry angiomi najčešće nestaju već posle jednog tretmana.',
    'Kod većeg broja krvnih sudova i gušćih kapilarnih mreža rezultat dolazi postepeno, sa svakim sledećim tretmanom.',
    'Tretirani krvni sudovi potamne, a zatim se za nekoliko dana resorbuju i nestaju.',
    'Koža nakon intervencije ostaje intaktna, bez ožiljaka.',
  ],
  faqs: [
    {
      question: 'Koliko traje sam tretman?',
      answer: 'Zavisi od broja i gustine tretiranih krvnih sudova. Na primer, tretman zvezdastog hemangioma traje svega nekoliko sekundi, dok je za veći broj kapilara potrebno srazmerno više vremena.',
    },
    {
      question: 'Koliko je tretmana potrebno?',
      answer: 'Zavisi od tipa, boje, konfiguracije i broja krvnih sudova. Najčešće je dovoljno 1 do 3 tretmana na svake 4 do 6 nedelja; kod kapilarnih mreža ponekad je potrebno više seansi.',
    },
    {
      question: 'Da li je tretman bolan?',
      answer: 'Većina pacijenata opisuje osećaj kao kratkotrajno peckanje. Poseban sistem za hlađenje sprečava zagrevanje kože i tretman čini prijatnijim.',
    },
    {
      question: 'Da li se vaskularne promene mogu vratiti?',
      answer: 'Tretirani sudovi se trajno zatvaraju, ali s vremenom se mogu formirati novi, posebno kod hronične rozacee ili genetske predispozicije, zato je dugoročna zaštita kože i kontrola važna.',
    },
  ],
  relatedServices: [
    { title: 'Podmlađivanje – Fotona 3D, 4D i 5D laserski lifting', href: '/usluge/podmladjivanje-fotona-3d-4d-5d' },
    { title: 'Dijagnostika i lečenje kožnih i polnih bolesti', href: '/usluge/medicinska-dermatologija' },
    { title: 'Dermoskopija – pregled mladeža', href: '/usluge/dermoskopija' },
  ],
}

export default function KapilariHemangiomiLaserPage() {
  return (
    <ServicePageLayout
      {...serviceData}
      imageSrc="/images/Services/opsta-dermatovenerologija/uklanjanje-vaskularnih-promena.png"
    />
  )
}
