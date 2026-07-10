import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personalizovani Full Face Tretmani | Ordinacija Dr. Terzić',
  description: 'Personalizovani full face pristup podmlađivanju lica dr Marte Terzić — MD Codes metodologija, individualna analiza lica, prirodan rezultat i dugoročna nega kože u Beogradu.',
}

const serviceData = {
  title: 'Personalizovani Full Face Tretmani',
  subtitle: 'Individualni estetski pristup dr Marte Terzić za izbalansiran, prirodan i odmoran izgled lica',
  description: 'Full face pristup podmlađivanju lica',
  whatIsIt: `Lepota lica ne ogleda se u pojedinačnoj regiji, već u harmoniji svih njegovih struktura. Full face pristup dr Marte Terzić podrazumeva analizu celog lica — kvaliteta kože, proporcija i znakova starenja — kako bi rezultat bio izbalansiran, prirodan i autentičan.

Znaci starenja lica nisu samo promene na koži — nastaju usled promena na koštanim strukturama, mišićima, masnim jastučićima i ligamentima, što dovodi do opuštanja lica. Najčešće se prvo primete u srednjem delu lica: podočnjaci i umoran izraz, bore između obrva i marionetske bore, kao i opuštenost u donjoj trećini lica. Sve ove promene zajedno čine da lice izgleda iscrpljenije i starije nego što se pacijent zaista oseća.

Za korekciju strukturnih promena koristimo MD Codes™ metodologiju, koju je osmislio dr Mauricio de Maio — injekcione tehnike zasnovane na detaljnom poznavanju anatomije lica, uz hijaluronske filere, botulinum toksin i kolagen stimulatore. Cilj nije promena identiteta pacijenta, već isticanje njegovih najboljih osobina — jer nije reč o borbi protiv starenja, već o tome da se stari kvalitetno i lepo.`,
  methods: [
    'MD Codes™ injekciona metodologija (dr Mauricio de Maio)',
    'Hijaluronski fileri — Juvederm (Allergan)',
    'Botulinum toksin tipa A — Allergan',
    'Kolagen stimulatori — HarmonyCa, Juvelook',
    'Morpheus 8 — RF microneedling',
    'Laserski tretmani — Fotona 3D/4D/5D, Clear Skin, Clear Lift, DVL, Nd:YAG, Er:YAG',
    'Biorevitalizacija, PRP, polinukleotidi i egzozomi',
  ],
  howItWorks: [
    'Razgovor o željama i očekivanjima pacijenta.',
    'Detaljna analiza kože i strukture lica.',
    'Predlog individualnog plana tretmana.',
    'Objašnjenje procedura i očekivanih rezultata.',
    'Saveti za negu i održavanje postignutih rezultata.',
  ],
  idealCandidates: [
    'Pacijenti koji žele izbalansiran, prirodan rezultat bez narušavanja karakteristika lica.',
    'Osobe kod kojih se javljaju znaci starenja — podočnjaci, opuštenost, bore između obrva, marionetske bore ili opuštenost donje trećine lica.',
    'Pacijenti koji traže konsultaciju zasnovanu na proverenim metodama i kvalitetnim preparatima.',
    'Osobe koje žele dugoročan plan nege i održavanja rezultata, ne samo pojedinačnu intervenciju.',
  ],
  expectedResults: [
    'Svežiji, odmorniji i manje umoran izraz lica.',
    'Izbalansirane proporcije i harmonija facijalnih struktura.',
    'Prirodan rezultat bez narušavanja prepoznatljivosti lica.',
    'Poboljšan kvalitet kože — čvrstina, elastičnost i ujednačen ten.',
    'Jasan plan održavanja rezultata kroz vreme.',
  ],
  faqs: [
    {
      question: 'Šta podrazumeva full face pristup?',
      answer: 'Sagledavanje lica kao celine — analizu kože, proporcija i strukturnih promena — umesto tretiranja pojedinačnih regija odvojeno, kako bi rezultat bio usklađen i prirodan.',
    },
    {
      question: 'Da li se tretmanom menja izgled lica?',
      answer: 'Ne. Cilj nije promena identiteta, već isticanje prirodnih osobina pacijenta i postizanje odmornijeg, svežijeg izgleda.',
    },
    {
      question: 'Šta je MD Codes™ metodologija?',
      answer: 'MD Codes™ je injekciona metodologija koju je osmislio dr Mauricio de Maio, brazilski plastični hirurg i inovator u polju neinvazivne estetske medicine. Podrazumeva injektovanje hijaluronskih filera, botulinum toksina i kolagen stimulatora na tačno određene tačke lica, na osnovu detaljnog poznavanja anatomije.',
    },
    {
      question: 'Koje preparate i tehnologije koristite?',
      answer: 'U zavisnosti od procene, kombinujemo hijaluronske filere Juvederm i botulinum toksin tipa A brenda Allergan, kolagen stimulatore HarmonyCa i Juvelook, Morpheus8, laserske tretmane (Fotona 3D/4D/5D, Clear Skin, Clear Lift, Nd:YAG, Er:YAG), kao i biorevitalizaciju, PRP, polinukleotide i egzozome za kvalitet kože.',
    },
    {
      question: 'Da li je potreban plan održavanja rezultata?',
      answer: 'Da. Nakon postizanja željenog rezultata predlažemo plan održavanja i savete za produženu negu kod kuće kako bi efekat trajao što duže.',
    },
  ],
  relatedServices: [
    { title: 'Hijaluronski fileri – Botoks i fileri', href: '/usluge/botoks-fileri' },
    { title: 'Morpheus 8', href: '/usluge/morpheus8' },
    { title: 'Profhilo', href: '/usluge/profhilo' },
  ],
}

export default function FullFacePage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/profhilo-treatment.jpg" />
}
