import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dermoskopija | Ordinacija Dr. Terzić',
  description: 'Profesionalni dermoskopski pregled i mapiranje mladeža sa fotodokumentacijom. Rano otkrivanje melanoma u ordinaciji Dr. Terzić u Beogradu.',
}

const serviceData = {
  title: 'Dermoskopija',
  aboutHeading: 'Šta je dermoskopija?',
  subtitle: 'Pregled i mapiranje mladeža sa digitalnom fotodokumentacijom',
  description: 'Najsavremenija dijagnostika za rano otkrivanje promena na koži',
  pendingNotice: 'Tekst ispod opisuje opremu i opšti tok dermoskopskog pregleda. Zvaničan klinički opis ove usluge od dr Terzić je i dalje u pripremi i biće dodat čim ga dostavi.',
  whatIsIt: `Dermoskopija je neinvazivna dijagnostička metoda koja omogućava detaljan pregled kožnih promena, posebno mladeža, pomoću specijalnog uređaja - dermatoskopa. Ovaj uređaj koristi uveličavanje i polarizovano svetlo za vizualizaciju struktura kože koje nisu vidljive golim okom.

Dermomapiranje je unapređena verzija dermoskopije koja uključuje fotografisanje i digitalno mapiranje svih mladeža na telu. Ovo omogućava praćenje promena tokom vremena i rano otkrivanje potencijalno opasnih promena, uključujući melanom - najopasnije kožno oboljenje.

Koristimo DermLite DL5 i Canfield D200EVO dermatoskop, koji uz digitalnu AI dijagnostiku dodatno podržavaju analizu i praćenje promena. Istim uređajima radimo i trihoskopiju, AI dermoskopsku analizu kose i vlasišta, korisnu kod opadanja kose i drugih promena na vlasištu.`,
  howItWorks: [
    'Pregled kože - specijalista sistematski pregleda celo telo tražeći atipične mladeže i kožne promene.',
    'Dermoskopija - svaki sumnjivi mladež se detaljno pregleda dermatoskopom koji pruža 10-20x uveličanje.',
    'Fotodokumentacija - digitalno fotografisanje svih mladeža i kreiranje mape tela za buduće poređenje.',
    'Analiza - specijalista analizira strukturu, boju, ivice i druge karakteristike svake promene.',
    'Preporuke - na osnovu pregleda daju se preporuke za praćenje, biopsiju ili uklanjanje sumnjivih promena.',
    'Kontrola - preporučuje se godišnji kontrolni pregled za poređenje sa prethodnim snimcima.'
  ],
  idealCandidates: [
    'Osobe sa velikim brojem mladeža (više od 50)',
    'Osobe sa atipičnim mladežima ili porodičnom istorijom melanoma',
    'Osobe svetle puti koje su se često izlagale suncu',
    'Osobe koje primete promenu na postojećem mladežu',
    'Osobe sa novonastalim mladežom nakon 30. godine života',
    'Sve odrasle osobe kao preventivni pregled jednom godišnje'
  ],
  expectedResults: [
    'Detaljan uvid u stanje svih mladeža na telu',
    'Rano otkrivanje potencijalno opasnih promena',
    'Digitalna dokumentacija za praćenje promena tokom vremena',
    'Mirna savest - ili pravovremena dijagnoza',
    'Preporuke za dalje postupanje kod sumnjivih promena',
    'Personalizovan plan praćenja'
  ],
  faqs: [
    {
      question: 'Zašto je dermoskopija važna?',
      answer: 'Melanom je najopasnije kožno oboljenje, ali je izlečivo u 95%+ slučajeva ako se otkrije rano. Dermoskopija omogućava otkrivanje sumnjivih promena pre nego što postanu opasne.'
    },
    {
      question: 'Koliko često treba raditi dermoskopski pregled?',
      answer: 'Za većinu ljudi preporučuje se godišnji pregled. Osobe sa faktorima rizika (mnogo mladeža, porodična istorija melanoma, svetla put) trebalo bi da se pregledaju svakih 6 meseci.'
    },
    {
      question: 'Da li je pregled bolan?',
      answer: 'Ne, dermoskopija je potpuno bezbolna i neinvazivna procedura. Dermatoskop se samo prislanja na kožu, nema uboda niti bilo kakve nelagodnosti.'
    },
    {
      question: 'Koliko traje pregled?',
      answer: 'Kompletan pregled celog tela sa fotodokumentacijom traje 30-45 minuta. Kontrolni pregled sa poređenjem snimaka traje oko 20-30 minuta.'
    },
    {
      question: 'Šta ako se otkrije sumnjiva promena?',
      answer: 'Ako se otkrije sumnjiva promena, preporučuje se biopsija ili hirurško uklanjanje radi patohistološke analize. Većina sumnjivih promena ispostavi se kao benigna, ali je bolje proveriti.'
    }
  ],
  relatedServices: [
    { title: 'Dijagnostika i lečenje kožnih i polnih bolesti', href: '/usluge/medicinska-dermatologija' },
    { title: 'Hirurško uklanjanje mladeža sa PH dijagnostikom', href: '/usluge/hirursko-uklanjanje-mladeza' },
    { title: 'Uklanjanje virusnih bradavica, kondiloma i moluski', href: '/usluge/bradavice-papilomi-keratoze-moluske' }
  ]
}

export default function DermoskopiyaPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/dermoscopy-treatment.jpg" />
}
