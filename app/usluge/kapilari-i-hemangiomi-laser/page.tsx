import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lasersko Uklanjanje Vaskularnih Promena — Kapilari, Spider Nevusi i Hemangiomi | Ordinacija Dr. Terzić',
  description: 'Lasersko uklanjanje proširenih kapilara, spider nevusa i hemangioma Nd:YAG laserom u ordinaciji Dr. Terzić u Beogradu.',
}

const serviceData = {
  title: 'Uklanjanje Vaskularnih Promena — Kapilari, Spider Nevusi i Hemangiomi',
  subtitle: 'Nd:YAG laser — najefikasnija metoda za uklanjanje proširenih kapilara, spider nevusa i hemangioma',
  description: 'Laserski tretman vaskularnih promena na licu i telu',
  whatIsIt: `Kapilari su sitni, najbrojniji krvni sudovi u površnom sloju kože. Usled izlaganja suncu, vetru, hormonskog disbalansa ili genetske predispozicije, kapilari se proširuju i postaju uočljivi u predelu nosa, obraza i brade — kao crvene, ljubičaste ili plave promene u obliku grančica ili paukove mreže (teleangiektazije, spider nevusi). Predstavljaju estetski problem i poželjno ih je ukloniti kako bi se sprečilo dalje širenje.

Hemangiomi kože su benigni tumori nastali usled hiperplazije krvnih sudova. Na početku izgledaju kao mala crvena tačka prečnika oko 1 mm (površni hemangiom), a vremenom mogu narasti iznad ravni kože do veličine zrna graška — pri povređivanju jako krvare. Duboki hemangiomi imaju tamnoljubičastu boju.

Nd:YAG laser talasne dužine 1064 nm je najefikasnija metoda za uklanjanje ovih promena: emituje svetlosne impulse čiju energiju upija hemoglobin u krvi, a ta energija se pretvara u toplotu koja koaguliše krv i „zavaruje" zidove neželjenog krvnog suda.`,
  howItWorks: [
    'Dermatološki pregled i procena tipa, boje, konfiguracije i broja krvnih sudova.',
    'Određivanje parametara lasera prema tipu kože i vrsti promene.',
    'Sprovođenje laserskog tretmana — osećaj je najčešće kratkotrajno peckanje, uz sistem hlađenja koji sprečava zagrevanje kože i čini tretman prijatnijim.',
    'Neposredno nakon tretmana javlja se crvenilo, sa ili bez blagog otoka, koje se najčešće povlači za jedan dan.',
    'Kontrolni pregled i, po potrebi, planiranje dodatne seanse.',
  ],
  idealCandidates: [
    'Osobe sa proširenim kapilarima na licu (nos, obrazi, brada).',
    'Pacijenti sa spider nevusima ili hemangiomima (cherry angiomima).',
    'Osobe sa hroničnim crvenilom lica povezanim sa rozaceom — za koje postoji poseban protokol rada.',
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
      answer: 'Zavisi od broja i gustine tretiranih krvnih sudova — na primer, tretman zvezdastog hemangioma traje svega nekoliko sekundi, dok je za veći broj kapilara potrebno srazmerno više vremena.',
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
      answer: 'Tretirani sudovi se trajno zatvaraju, ali s vremenom se mogu formirati novi, posebno kod hronične rozacee ili genetske predispozicije — zato je dugoročna zaštita kože i kontrola važna.',
    },
  ],
  relatedServices: [
    { title: 'Podmlađivanje – Fotona 3D, 4D i 5D laserski lifting', href: '/usluge/podmladjivanje-fotona-3d-4d-5d' },
    { title: 'Medicinska dermatologija', href: '/usluge/medicinska-dermatologija' },
    { title: 'Dermoskopija – pregled mladeža', href: '/usluge/dermoskopija' },
  ],
}

export default function KapilariHemangiomiLaserPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/laser-treatment.jpg" />
}
