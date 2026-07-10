import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medicinska Dermatologija | Ordinacija Dr. Terzić',
  description:
    'Dijagnostika i lečenje kožnih i polnih bolesti uz individualni plan terapije, kontrole i savremene dermatološke protokole.',
}

const serviceData = {
  title: 'Medicinska Dermatologija',
  subtitle: 'Precizna dijagnostika i terapija kožnih i polnih bolesti u ordinacijskom režimu',
  description: 'Sveobuhvatan dermatološki pristup od prvog pregleda do kontrole rezultata',
  whatIsIt: `Specijalistički pregled u ordinaciji Dr. Terzić namenjen je i deci i odraslima, a obuhvata sveobuhvatan pregled kože, vidljivih sluzokoža i kožnih tvorevina — noktiju i dlake. Medicinska dermatologija tako obuhvata dijagnostiku, lečenje i dugoročno praćenje akutnih i hroničnih stanja kože, kose i noktiju. U našoj ordinaciji tretman započinje detaljnim kliničkim pregledom i analizom istorije bolesti, a nastavlja se planom terapije prilagođenim tipu kože, intenzitetu promena i životnim navikama pacijenta.

Poseban fokus stavljamo na akne, rozaceu, dermatitis, infekcije kože, poremećaje pigmentacije i stanja sa pojačanim opadanjem kose. Cilj je jasan: stabilizacija stanja kože, smanjenje recidiva i dugoročno očuvanje zdravlja kožne barijere.`,
  howItWorks: [
    'Dermatološki pregled i anamneza: procena simptoma, prethodne terapije i faktora koji pogoršavaju stanje.',
    'Dijagnostička procena: diferencijalna dijagnoza i po potrebi plan dodatnih analiza.',
    'Individualni protokol: kombinacija topikalne i sistemske terapije, uz jasan raspored primene.',
    'Plan kućne nege: odabir dermokozmetike koja podržava terapiju i smanjuje iritaciju.',
    'Kontrolni pregledi: praćenje odgovora na terapiju i pravovremeno prilagođavanje protokola.',
  ],
  idealCandidates: [
    'Pacijenti sa aknama, rozaceom, perioralnim dermatitisom i masnom kožom',
    'Pacijenti sa upornim crvenilom, svrbežom, iritacijom ili osetljivom kožnom barijerom',
    'Pacijenti sa pigmentacijama i postinflamatornim promenama',
    'Pacijenti sa gljivičnim i bakterijskim infekcijama kože i noktiju',
    'Pacijenti sa pojačanim opadanjem kose ili promenama vlasišta',
  ],
  expectedResults: [
    'Smanjenje aktivne upale i bolja kontrola simptoma',
    'Stabilnija i otpornija koža uz manje recidiva',
    'Ujednačeniji ten i smanjenje tragova nakon upala',
    'Bolja tolerancija kože na aktivne preparate',
    'Jasan plan održavanja koji čuva rezultat kroz vreme',
  ],
  faqs: [
    {
      question: 'Koliko često su potrebne kontrole?',
      answer:
        'U početnoj fazi kontrole su najčešće na 4-8 nedelja, a kasnije ređe, u zavisnosti od stanja kože i odgovora na terapiju.',
    },
    {
      question: 'Da li mogu da kombinujem medicinsku terapiju sa estetskim tretmanima?',
      answer:
        'Da, uz pravilan redosled i izbor procedura. Tokom pregleda pravimo bezbedan plan kombinacije kako bi terapija i estetski tretmani radili u korist istog cilja.',
    },
    {
      question: 'Kada mogu očekivati prve rezultate?',
      answer:
        'Prve promene se obično vide nakon 3-6 nedelja, dok su stabilniji rezultati očekivani nakon nekoliko meseci disciplinovane terapije.',
    },
    {
      question: 'Da li je potrebna posebna kućna nega?',
      answer:
        'Da. Pravilno odabrana kućna rutina je ključna za uspeh terapije. Dobijate precizna uputstva o preparatima, redosledu i učestalosti upotrebe.',
    },
  ],
  relatedServices: [
    { title: 'Lečenje akni', href: '/usluge/akne' },
    { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' },
    { title: 'Dermoskopija', href: '/usluge/dermoskopija' },
  ],
}

export default function MedicinskaDermatologijaPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/dermatology-treatment.jpg" />
}
