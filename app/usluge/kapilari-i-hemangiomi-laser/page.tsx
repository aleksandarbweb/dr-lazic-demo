import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lasersko Uklanjanje Vaskularnih Promena — Kapilari i Hemangiomi | Ordinacija Dr. Terzić',
  description: 'Lasersko uklanjanje proširenih kapilara, crvenila lica i hemangioma medicinskim laserom u ordinaciji Dr. Terzić u Beogradu.',
}

const serviceData = {
  title: 'Uklanjanje Vaskularnih Promena — Kapilari i Hemangiomi',
  subtitle: 'Lasersko uklanjanje proširenih kapilara, crvenila lica i hemangioma — precizno, bez oštećenja okolne kože',
  description: 'Laserski tretman vaskularnih promena na licu i telu',
  whatIsIt: `Prošireni kapilari (telangiektazije), uporno crvenilo lica i hemangiomi nastaju usled proširenih ili novoformiranih krvnih sudova u koži. Najčešće se javljaju na licu, ali mogu zahvatiti i druge delove tela.

Medicinski laser cilja hemoglobin u proširenim sudovima i postepeno ih zatvara, bez oštećenja okolnog tkiva. Tretman se sprovodi individualno, u zavisnosti od tipa, veličine i lokacije vaskularne promene, uz procenu broja potrebnih seansi.`,
  howItWorks: [
    'Dermatološki pregled i procena tipa i rasprostranjenosti vaskularnih promena.',
    'Određivanje parametara lasera prema tipu kože i vrsti promene.',
    'Sprovođenje laserskog tretmana uz zaštitu okolne kože.',
    'Uputstva za negu kože i fotoprotekciju nakon tretmana.',
    'Kontrolni pregled i planiranje eventualne dodatne seanse.',
  ],
  idealCandidates: [
    'Osobe sa proširenim kapilarima na licu (nos, obrazi, brada).',
    'Pacijenti sa hroničnim crvenilom lica povezanim sa rozaceom.',
    'Osobe sa hemangiomima ili manjim vaskularnim malformacijama.',
    'Pacijenti koji žele neinvazivan tretman bez perioda oporavka.',
  ],
  expectedResults: [
    'Vidljivo smanjenje ili nestanak tretiranih krvnih sudova.',
    'Ujednačeniji ten i smanjeno crvenilo lica.',
    'Minimalan oporavak — moguće je kratkotrajno crvenilo neposredno nakon tretmana.',
    'Dugotrajan rezultat uz adekvatnu zaštitu od sunca.',
  ],
  faqs: [
    {
      question: 'Koliko seansi je potrebno?',
      answer: 'Zavisi od tipa i rasprostranjenosti promene — manje, izolovane kapilare je često moguće ukloniti u jednoj do dve seanse, dok rozacea i rasprostranjenije promene zahtevaju više kontrolisanih tretmana.',
    },
    {
      question: 'Da li je tretman bolan?',
      answer: 'Većina pacijenata oseća kratak, blag ubod ili osećaj toplote tokom tretmana; koža se odmah nakon toga hladi radi udobnosti.',
    },
    {
      question: 'Da li se vaskularne promene mogu vratiti?',
      answer: 'Tretirani sudovi se trajno zatvaraju, ali s vremenom se mogu formirati novi, posebno kod hronične rozacee ili genetske predispozicije — zato je dugoročna zaštita kože i kontrola važna.',
    },
    {
      question: 'Kada mogu očekivati rezultate?',
      answer: 'Kod manjih kapilara promena je često vidljiva odmah; kod rasprostranjenijeg crvenila rezultat se procenjuje postepeno, u nedeljama nakon tretmana.',
    },
  ],
  relatedServices: [
    { title: 'Podmlađivanje – Fotona 3D, 4D i 5D laserski lifting', href: '/usluge/podmladjivanje-fotona-3d-4d-5d' },
    { title: 'Medicinska dermatologija', href: '/usluge/medicinska-dermatologija' },
    { title: 'Dermoskopija – pregled mladeža', href: '/usluge/dermoskopija' },
  ],
}

export default function KapilariHemangiomiLaserPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/laser-treatment.jpg" />
}
