import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personalizovani Full Face Tretmani | Ordinacija Dr. Terzić',
  description: 'Personalizovani full face pristup podmlađivanju lica dr Marte Terzić — individualna analiza lica, prirodan rezultat i dugoročna nega kože u Beogradu.',
}

const serviceData = {
  title: 'Personalizovani Full Face Tretmani',
  subtitle: 'Individualni estetski pristup dr Marte Terzić za izbalansiran, prirodan i odmoran izgled lica',
  description: 'Full face pristup podmlađivanju lica',
  whatIsIt: `Lepota lica ne ogleda se u pojedinačnoj regiji, već u harmoniji svih njegovih struktura. Full face pristup dr Marte Terzić podrazumeva analizu celog lica — kvaliteta kože, proporcija i znakova starenja — kako bi rezultat bio izbalansiran, prirodan i autentičan.

Cilj nije promena identiteta pacijenta, već isticanje njegovih najboljih osobina: odmoran i svež izgled uz očuvanu prepoznatljivost lica. Tretman kombinuje medicinsko znanje, dugogodišnje iskustvo i savremene tehnologije, uz plan prilagođen svakom pacijentu ponaosob.`,
  howItWorks: [
    'Razgovor o željama i očekivanjima pacijenta.',
    'Detaljna analiza kože i strukture lica.',
    'Predlog individualnog plana tretmana.',
    'Objašnjenje procedura i očekivanih rezultata.',
    'Saveti za negu i održavanje postignutih rezultata.',
  ],
  idealCandidates: [
    'Pacijenti koji žele izbalansiran, prirodan rezultat bez narušavanja karakteristika lica.',
    'Osobe kod kojih se javljaju znaci starenja — podočnjaci, opuštenost, bore između obrva ili marionetske bore.',
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
      question: 'Koje tehnike i preparate koristite?',
      answer: 'U zavisnosti od procene, kombinujemo hijaluronske filere, botulinum toksin, biostimulatore kolagena, biorevitalizaciju, PRP, hemijske pilinge i laserske tretmane, uz metodologiju injekcionog rada zasnovanu na detaljnom poznavanju anatomije lica.',
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
