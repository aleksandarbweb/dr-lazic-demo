import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hemijski Pilinzi | Ordinacija Dr. Terzić',
  description: 'Profesionalni hemijski pilinzi za obnavljanje i revitalizaciju kože. Tretmani za akne, hiperpigmentaciju i anti-aging u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Hemijski Pilinzi',
  aboutHeading: 'Šta su hemijski pilinzi?',
  subtitle: 'Obnavljanje i revitalizacija kože kontrolisanom eksfolijacijom',
  description: 'Profesionalni medicinski pilinzi za dubinsku regeneraciju kože',
  whatIsIt: `Hemijski piling je medicinski tretman koji koristi specijalne kiseline za kontrolisanu eksfolijaciju površinskih slojeva kože. Uklanjanjem oštećenih ćelija stimuliše se regeneracija i stvaranje nove, zdrave kože sa poboljšanom teksturom, tonom i elastičnošću.

U zavisnosti od dubine delovanja, razlikujemo površinske, srednje i duboke pilinge. U našoj ordinaciji koristimo profesionalne medicinske preparate i prilagođavamo tip i koncentraciju pilinga individualnim potrebama svake kože. Najčešće korišćene kiseline su glikolna, salicilna, TCA, mlečna i piruvična kiselina.`,
  howItWorks: [
    'Konsultacija i analiza kože - određivanje tipa kože, problema i izbor odgovarajućeg pilinga.',
    'Priprema kože - čišćenje i odmašćivanje kože specijalnim preparatima.',
    'Aplikacija pilinga - nanošenje kiseline u kontrolisanim slojevima, praćenje reakcije kože.',
    'Neutralizacija - zaustavljanje delovanja kiseline i uklanjanje ostataka preparata.',
    'Završna nega - nanošenje umirujućih i hidratantnih preparata sa visokim SPF faktorom.',
    'Serija tretmana - za optimalne rezultate preporučuje se 3-6 tretmana u razmaku od 2-4 nedelje.'
  ],
  idealCandidates: [
    'Osobe sa hiperpigmentacijom i neujednačenim tenom',
    'Osobe sa akne ožiljcima i proširenim porama',
    'Osobe sa finom mrežom bora i znacima foto-starenja',
    'Osobe sa masnom kožom i mitiserima',
    'Osobe koje žele osvežavanje i poboljšanje teksture kože',
    'Osobe sa keratozama i grubom teksturom kože'
  ],
  expectedResults: [
    'Ujednačeniji i svetliji ten',
    'Smanjena hiperpigmentacija i fleke',
    'Poboljšana tekstura kože',
    'Sužene pore i smanjena masnoća',
    'Smanjeni plitki ožiljci od akni',
    'Stimulisana produkcija kolagena',
    'Svežija i mlađe izgleda koža'
  ],
  faqs: [
    {
      question: 'Da li hemijski piling boli?',
      answer: 'Tokom površinskih pilinga oseća se blago peckanje koje je podnošljivo. Srednji i dublji pilinzi mogu izazvati intenzivnije peckanje, ali je kratkog trajanja. Po potrebi se koriste hladne obloge.'
    },
    {
      question: 'Koliko traje oporavak?',
      answer: 'Oporavak zavisi od dubine pilinga. Površinski: bez oporavka ili minimalno ljuštenje 2-3 dana. Srednji: ljuštenje 5-7 dana. Duboki: oporavak do 2 nedelje sa intenzivnim ljuštenjem.'
    },
    {
      question: 'Kada se može raditi piling?',
      answer: 'Pilinzi se mogu raditi tokom cele godine, ali se preporučuje izbegavanje intenzivnog sunca 2 nedelje pre i nakon tretmana. Obavezna je upotreba SPF 50+ zaštite.'
    },
    {
      question: 'Koliko tretmana je potrebno?',
      answer: 'Za optimalne rezultate preporučuje se serija od 3-6 tretmana u razmaku od 2-4 nedelje. Broj i tip tretmana zavise od problema koji se tretira i tipa kože.'
    },
    {
      question: 'Ko ne bi trebalo da radi hemijske pilinge?',
      answer: 'Pilinzi nisu preporučljivi za osobe sa aktivnim herpesnim infekcijama, otvorenim ranama, veoma osetljivom kožom, trudnice i dojilje, kao i osobe koje koriste retinoide ili su se nedavno sunčale.'
    }
  ],
  relatedServices: [
    { title: 'Medicinska dermatologija', href: '/usluge/akne' },
    { title: 'PRP tretman', href: '/usluge/prp' },
    { title: 'Morpheus8 RF Microneedling', href: '/usluge/morpheus8' }
  ]
}

export default function HemijskiPilinziPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/piling-treatment.jpg" />
}
