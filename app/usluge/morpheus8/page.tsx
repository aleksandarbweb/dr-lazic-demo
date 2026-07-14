import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morpheus8 RF Microneedling | Ordinacija Dr. Terzić',
  description: 'Morpheus8 RF microneedling tretman za nehiruški lifting i zatezanje kože. Najnovija tehnologija za podmlađivanje lica u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Morpheus8',
  aboutHeading: 'Šta je Morpheus8?',
  subtitle: 'Nehiruški lifting lica najnovijom RF microneedling tehnologijom',
  description: 'Revolucionarna procedura za dubinsko zatezanje i remodeling kože',
  whatIsIt: `Morpheus8 je najsavremenija tehnologija koja kombinuje frakcioni microneedling sa radiofrekvencijskom (RF) energijom za dubinsko zatezanje kože i stimulaciju produkcije kolagena. Ovaj tretman deluje na dublje slojeve kože i potkožno masno tkivo, čime se postiže efekat zatezanja i remodelinga koji ranije nije bio moguć bez hirurške intervencije.

Uređaj koristi specijalne igle koje prodiru u kožu na kontrolisanu dubinu (do 4mm) i emituju RF energiju direktno u dermis i subdermalnu mast. Ova kombinacija stimuliše prirodne procese obnove kože i produkciju novog kolagena i elastina.`,
  howItWorks: [
    'Konsultacija i analiza - detaljan pregled kože, utvrđivanje problematičnih zona i kreiranje individualnog protokola tretmana.',
    'Priprema - temeljno čišćenje kože i aplikacija lokalne anestetičke kreme (30-45 minuta pre tretmana).',
    'Tretman - aplikacija Morpheus8 uređaja na tretirane zone. Igle prodiru u kožu i emituju RF energiju na precizno određenu dubinu.',
    'Hlađenje i nega - nakon tretmana se aplikuje hladna maska i specijalna krema za smirenje kože.',
    'Serija tretmana - optimalni rezultati postižu se nakon 2-4 tretmana u razmaku od 4-6 nedelja.'
  ],
  idealCandidates: [
    'Osobe sa opuštenom kožom lica, vrata ili tela',
    'Osobe sa finom mrežom bora i gubitkom elastičnosti kože',
    'Osobe koje žele poboljšanje teksture kože i suženje pora',
    'Osobe sa strijama ili ožiljcima od akni',
    'Osobe koje žele nehirurško zatezanje podbratka i vilične linije',
    'Osobe koje ne žele ili ne mogu hirurški zahvat'
  ],
  expectedResults: [
    'Vidljivo zatezanje i lifting kože',
    'Poboljšana tekstura i tonus kože',
    'Smanjena pojava bora i finih linija',
    'Definisanija vilična linija i konture lica',
    'Smanjena vidljivost ožiljaka i strija',
    'Sužene pore i ujednačeniji ten',
    'Rezultati se postepeno poboljšavaju tokom 3-6 meseci'
  ],
  faqs: [
    {
      question: 'Da li je Morpheus8 tretman bolan?',
      answer: 'Uz lokalnu anesteziju koja se aplicira pre tretmana, većina pacijenata oseća samo blagu nelagodnost. Moderni Morpheus8 uređaji imaju integrisano hlađenje koje dodatno povećava udobnost.'
    },
    {
      question: 'Koliko traje oporavak?',
      answer: 'Period oporavka je minimalan - 2-3 dana blago crvenilo i otok. Većina pacijenata se vraća normalnim aktivnostima već sutradan, a šminka se može nanositi nakon 24-48 sati.'
    },
    {
      question: 'Koliko tretmana je potrebno?',
      answer: 'Za optimalne rezultate preporučuje se serija od 2-4 tretmana u razmaku od 4-6 nedelja. Broj tretmana zavisi od stanja kože i željenih rezultata.'
    },
    {
      question: 'Kada se vide rezultati?',
      answer: 'Inicijalno poboljšanje je vidljivo nakon 1-2 nedelje, ali puni rezultati se razvijaju tokom 3-6 meseci kako se odvija proces remodelinga kolagena.'
    },
    {
      question: 'Koliko traju rezultati?',
      answer: 'Rezultati Morpheus8 tretmana traju 1-3 godine, zavisno od starosti, tipa kože i životnog stila. Preporučuje se tretman održavanja jednom godišnje.'
    }
  ],
  relatedServices: [
    { title: 'Botoks i Fileri', href: '/usluge/botoks-fileri' },
    { title: 'PRP tretman', href: '/usluge/prp' },
    { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' }
  ]
}

export default function Morpheus8Page() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/morpheus8-treatment.jpg" />
}
