import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lečenje Akni | Ordinacija Dr. Terzić',
  description: 'Profesionalno lečenje akni i drugih kožnih oboljenja. Medicinska dermatologija u ordinaciji Dr. Terzić u Beogradu.',
}

const serviceData = {
  title: 'Medicinska Dermatologija',
  subtitle: 'Dijagnostika i lečenje akni, rozacee i drugih kožnih oboljenja',
  description: 'Stručna medicinska nega za sve probleme sa kožom',
  whatIsIt: `Medicinska dermatologija bavi se dijagnostikom i lečenjem širokog spektra kožnih oboljenja. U našoj ordinaciji pružamo sveobuhvatnu negu za pacijente sa aknama, rozaceom, ekcemom, psorijazom, gljivičnim infekcijama i drugim dermatološkim problemima.

Akne su jedno od najčešćih kožnih oboljenja koje pogađa ne samo tinejdžere već i odrasle osobe. Pravilna dijagnoza i individualizovan plan lečenja ključni su za uspešno rešavanje ovog problema i prevenciju trajnih ožiljaka. Kombinujemo savremenu farmakoterapiju sa profesionalnim tretmanima u ordinaciji.`,
  howItWorks: [
    'Detaljan pregled - analiza tipa kože, težine oboljenja, prethodnih tretmana i medicinske istorije.',
    'Dijagnoza - precizno određivanje tipa i uzroka kožnog problema.',
    'Plan lečenja - kreiranje individualnog protokola koji kombinuje preparate za kućnu negu i tretmane u ordinaciji.',
    'Terapija kod kuće - propisivanje adekvatnih preparata (retinoidi, antibiotici, antiseptici) prilagođenih vašoj koži.',
    'Tretmani u ordinaciji - hemijski pilinzi, medicinska čišćenja lica, LED terapija, injekcije za teške ciste.',
    'Praćenje - redovne kontrole radi prilagođavanja terapije i praćenja napretka.'
  ],
  idealCandidates: [
    'Osobe sa blagim, umerenim ili teškim aknama',
    'Osobe sa rozaceom i crvenilom lica',
    'Osobe sa hiperpigmentacijom i flaekama',
    'Osobe sa seborejom i masnom kožom',
    'Osobe sa ekcemom ili psorijazom',
    'Osobe sa gljivičnim infekcijama kože ili noktiju',
    'Osobe sa urastalim dlakama i folkulitisom'
  ],
  expectedResults: [
    'Smanjenje broja i intenziteta akni',
    'Kontrola masnoće i suženje pora',
    'Smanjenje crvenila i iritacije',
    'Ujednačeniji ten bez fleka',
    'Prevencija nastanka novih akni',
    'Smanjenje postojećih ožiljaka',
    'Zdrava, čista koža bez upala'
  ],
  faqs: [
    {
      question: 'Koliko dugo traje lečenje akni?',
      answer: 'Vidljivo poboljšanje se obično primećuje nakon 6-8 nedelja. Kompletno lečenje može trajati 3-6 meseci, a kod težih slučajeva i duže. Terapija održavanja je često potrebna za prevenciju recidiva.'
    },
    {
      question: 'Da li lečenje akni ostavlja ožiljke?',
      answer: 'Naprotiv - pravilno lečenje sprečava nastanak ožiljaka. Ožiljci nastaju kada se akne ne leče ili pogrešno tretiraju (npr. istiskivanje). Što ranije započnete lečenje, manji je rizik od ožiljaka.'
    },
    {
      question: 'Da li ishrana utiče na akne?',
      answer: 'Novija istraživanja pokazuju da hrana sa visokim glikemijskim indeksom i mlečni proizvodi mogu pogoršati akne kod nekih osoba. Preporučujemo uravnoteženu ishranu, ali ishrana sama ne može izlečiti akne.'
    },
    {
      question: 'Šta je rozacea i može li se izlečiti?',
      answer: 'Rozacea je hronično stanje koje izaziva crvenilo, vidljive kapilare i ponekad bubuljice na licu. Ne može se potpuno izlečiti, ali se može uspešno kontrolisati kombinacijom preparata i laserskih tretmana.'
    },
    {
      question: 'Kada treba posetiti dermatologa za akne?',
      answer: 'Preporučujemo posetu ako kozmetički preparati ne pomažu nakon 2-3 meseca, ako imate ciste ili čvorove, ako akne ostavljaju ožiljke, ili ako akne negativno utiču na vaše samopouzdanje.'
    }
  ],
  relatedServices: [
    { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' },
    { title: 'PRP tretman', href: '/usluge/prp' },
    { title: 'Dermoskopija', href: '/usluge/dermoskopija' }
  ]
}

export default function AknePage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/dermatology-treatment.jpg" />
}
