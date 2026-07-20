import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PRP Tretman | Ordinacija Dr. Terzić',
  description: 'PRP tretman za prirodnu regeneraciju kože sopstvenom plazmom. Vampirski tretman za podmlađivanje u ordinaciji Dr. Terzić u Beogradu.',
}

const serviceData = {
  title: 'PRP Tretman',
  aboutHeading: 'Šta je PRP?',
  subtitle: 'Prirodna regeneracija kože sopstvenom plazmom bogatom trombocitima',
  description: 'Iskoristite regenerativnu moć vašeg organizma za podmlađivanje kože',
  whatIsIt: `PRP (Platelet-Rich Plasma) tretman, poznat i kao "vampirski tretman", koristi koncentrat trombocita iz vaše sopstvene krvi za stimulaciju regeneracije i podmlađivanje kože. Trombociti sadrže faktore rasta koji aktiviraju ćelije zadužene za obnovu tkiva, stimulišu produkciju kolagena i ubrzavaju zarastanje.

Procedura počinje vađenjem male količine krvi koja se zatim centrifugira kako bi se izolovala plazma bogata trombocitima. Ovaj koncentrat se zatim aplikuje na kožu microneedling-om ili injekcijama, zavisno od tretirane zone i željenih rezultata.`,
  whatIsItSections: [
    {
      heading: 'PRP tretman za kosu',
      body: 'Prvi korak je uzimanje male količine vaše krvi. Krv se zatim stavlja u specijalnu centrifugu kako bi se izdvojila plazma bogata faktorima rasta. Dermatolog tankim iglicama ubrizgava plazmu direktno u regije gde se kosa proređuje. Tretman traje oko 30 do 45 minuta.',
      items: [
        'Protokol: radi se jednom mesečno (ukupno 3 tretmana), a zatim održavanje na 6 meseci.',
        'Period oporavka: oporavka nema. Možete osetiti blago crvenilo ili zategnutost kože glave koji prolaze u roku od nekoliko sati. Istog dana se vraćate poslu. Jedino ograničenje je da ne perete kosu i izbegavate teži fizički trening 24 sata nakon procedure.',
      ],
    },
  ],
  howItWorks: [
    'Vađenje krvi - uzima se 10-20ml krvi iz vene, isto kao pri standardnoj analizi krvi.',
    'Centrifugiranje - krv se obrađuje u centrifugi kako bi se izolovala plazma bogata trombocitima.',
    'Priprema kože - tretirana zona se čisti i priprema, po potrebi se aplicira anestetička krema.',
    'Aplikacija PRP - plazma se aplikuje microneedling-om, mezo pištoljem ili direktnim injekcijama.',
    'Završetak - nanošenje umirujuće maske i seruma. Koža može biti crvena 24-48 sati.',
    'Serija tretmana - preporučuju se 3-4 tretmana u razmaku od 4 nedelje.'
  ],
  idealCandidates: [
    'Osobe sa znacima starenja kože - bore, gubitak elastičnosti',
    'Osobe sa oštećenom kožom od sunca',
    'Osobe sa ožiljcima od akni',
    'Osobe sa tamnim kolutovima ispod očiju',
    'Osobe sa opadanjem kose (PRP za skalp)',
    'Osobe koje preferiraju prirodne tretmane bez sintetičkih materijala'
  ],
  expectedResults: [
    'Poboljšana tekstura i tonus kože',
    'Smanjene fine bore i linije',
    'Ujednačeniji ten i smanjena hiperpigmentacija',
    'Smanjeni ožiljci od akni',
    'Stimulisana produkcija kolagena',
    'Prirodan sjaj i svežina kože',
    'Rezultati se postepeno poboljšavaju 2-3 meseca'
  ],
  faqs: [
    {
      question: 'Da li je PRP tretman bezbedan?',
      answer: 'Da, PRP je jedan od najbezbednijih estetskih tretmana jer koristi vaš sopstveni biološki materijal. Ne postoji rizik od alergijske reakcije ili odbacivanja.'
    },
    {
      question: 'Da li je tretman bolan?',
      answer: 'Vađenje krvi je isto kao standardna analiza. Aplikacija PRP može biti neugodna, ali se koristi lokalna anestetička krema koja značajno umanjuje nelagodnost.'
    },
    {
      question: 'Koliko tretmana je potrebno?',
      answer: 'Za optimalne rezultate preporučuje se serija od 3-4 tretmana u razmaku od 4 nedelje. Nakon toga, tretman održavanja jednom ili dva puta godišnje.'
    },
    {
      question: 'Kada se vide rezultati?',
      answer: 'Inicijalno poboljšanje se primećuje nakon 2-3 nedelje. Puni efekti se razvijaju tokom 2-3 meseca kako se odvija proces regeneracije i stvaranja novog kolagena.'
    },
    {
      question: 'Da li PRP pomaže kod opadanja kose?',
      answer: 'Da, PRP tretman skalpa stimuliše folikule dlake, produžava fazu rasta i može poboljšati gustinu kose kod osoba sa početnim opadanjem. Potrebna je serija tretmana za vidljive rezultate.'
    }
  ],
  relatedServices: [
    { title: 'Lečenje opadanja kose (alopecije)', href: '/usluge/opadanje-kose' },
    { title: 'Profhilo', href: '/usluge/profhilo' },
    { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' },
    { title: 'Morpheus8 RF Microneedling', href: '/usluge/morpheus8' }
  ]
}

export default function PRPPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/prp-treatment.jpg" />
}
