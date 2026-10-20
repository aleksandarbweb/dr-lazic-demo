import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profhilo | Ordinacija Dr. Terzić',
  description: 'Profhilo bioremodeling tretman za dubinsku hidrataciju i podmlađivanje kože. Inovativni anti-aging tretman u ordinaciji Dr. Terzić u Beogradu.',
}

const serviceData = {
  title: 'Profhilo',
  aboutHeading: 'Šta je Profhilo?',
  subtitle: 'Bioremodeling lica, vrata i tela - nova dimenzija hijaluronske terapije',
  description: 'Revolucionarni tretman za dubinsku hidrataciju i prirodno podmlađivanje',
  pendingNotice: 'Zvaničan tekst za ovu uslugu od dr Terzić je i dalje u pripremi. Sadržaj ispod je opšti opis tretmana i biće zamenjen/dopunjen kada ga dostavi.',
  whatIsIt: `Profhilo je inovativni injekcioni tretman koji koristi jednu od najčistijih formi hijaluronske kiseline na tržištu. Za razliku od klasičnih filera, Profhilo nije namenjen popunjavanju bora ili volumena, već bioremodeling-u kože - dubinskoj hidrataciji i stimulaciji produkcije kolagena i elastina.

Jedinstvena formula kombinuje visoko i niskomolekularnu hijaluronsku kiselinu bez hemijskih povezivača (crosslinking agenasa), što omogućava ravnomerno širenje preparata kroz kožu i stimulaciju svih slojeva derma. Profhilo je posebno efikasan za tretiranje zone lica, vrata, dekoltea i ruku.`,
  howItWorks: [
    'Konsultacija - analiza kvaliteta kože, stepena hidratacije i starenja, te kreiranje individualnog plana tretmana.',
    'Priprema - čišćenje i dezinfekcija tretirane zone. Anestetička krema obično nije potrebna.',
    'Aplikacija - preparat se ubrizgava tehnikom BAP (Bio Aesthetic Points) na 5 strateških tačaka sa svake strane lica.',
    'Završetak - blaga masaža tretirane zone i uputstva za negu kod kuće.',
    'Drugi tretman - za optimalne rezultate potrebna su 2 tretmana u razmaku od 4 nedelje.'
  ],
  idealCandidates: [
    'Osobe sa dehidriranom, tankom ili mlohavom kožom',
    'Osobe sa gubitkom elastičnosti i tonusa kože',
    'Osobe koje primećuju znake starenja na vratu i dekolteu',
    'Osobe koje žele preventivni anti-aging tretman',
    'Osobe sa starosnim promenama na rukama',
    'Osobe koje žele prirodan rezultat bez efekta "punjenja"'
  ],
  expectedResults: [
    'Dubinska hidratacija kože koja traje mesecima',
    'Poboljšana elastičnost i čvrstina kože',
    'Prirodniji i svežiji izgled bez efekta filera',
    'Poboljšana tekstura i sjaj kože',
    'Blago zatezanje i lifting kože',
    'Rezultati se razvijaju tokom 2-3 meseca',
    'Efekti traju do 6 meseci'
  ],
  faqs: [
    {
      question: 'Po čemu se Profhilo razlikuje od filera?',
      answer: 'Fileri popunjavaju bore i dodaju volumen na specifičnim mestima. Profhilo deluje na celu tretiranu zonu, hidratizuje sve slojeve kože i stimuliše produkciju kolagena i elastina. Ne stvara volumen već poboljšava kvalitet kože.'
    },
    {
      question: 'Da li je tretman bolan?',
      answer: 'Profhilo se aplikuje veoma tankim iglama, a sam preparat je tečan i lako se širi kroz tkivo. Većina pacijenata oseća samo blagu nelagodnost. Tretman traje svega 15-20 minuta.'
    },
    {
      question: 'Koliko tretmana je potrebno?',
      answer: 'Standardni protokol podrazumeva 2 tretmana u razmaku od 4 nedelje. Za održavanje rezultata preporučuje se tretman svakih 6 meseci.'
    },
    {
      question: 'Kada se vide rezultati?',
      answer: 'Hidratacija je primetna već nakon prvog tretmana. Puni efekti - poboljšana elastičnost i čvrstina - razvijaju se tokom 2-3 meseca kako se odvija proces remodelinga kože.'
    },
    {
      question: 'Da li postoji period oporavka?',
      answer: 'Oporavak je minimalan. Mogu se javiti male kvržice na mestima uboda koje nestaju za 24-48 sati. Moguće je blago crvenilo koje prolazi u toku dana.'
    }
  ],
  relatedServices: [
    { title: 'Hijaluronski fileri', href: '/usluge/hijaluronski-fileri' },
    { title: 'PRP tretman', href: '/usluge/prp' },
    { title: 'Kolagen stimulatori', href: '/usluge/kolagen-stimulatori' }
  ]
}

export default function ProfhiloPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/profhilo-treatment.jpg" />
}
