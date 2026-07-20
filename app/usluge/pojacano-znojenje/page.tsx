import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lečenje pojačanog znojenja pazuha (aksilarne hiperhidroze) | Ordinacija Dr. Terzić',
  description: 'Botulinum toksin tipa A za lečenje aksilarne hiperhidroze (pojačanog znojenja pazuha) u ordinaciji Dr. Terzić: bezbedan i efikasan tretman uz brz povratak svakodnevnim aktivnostima.',
}

const serviceData = {
  title: 'Lečenje pojačanog znojenja pazuha (aksilarne hiperhidroze)',
  aboutHeading: 'Šta je aksilarna hiperhidroza?',
  subtitle: 'Botulinum toksin tipa A za bezbedno, efikasno i dugotrajno smanjenje pojačanog znojenja pazuha',
  description: 'Minimalno invazivan tretman aksilarne hiperhidroze uz brz oporavak i vidljive rezultate',
  whatIsIt: `Aksilarna hiperhidroza predstavlja pojačano znojenje pazuha koje prevazilazi potrebe organizma za regulacijom telesne temperature. Osobe sa ovim problemom često imaju vidljive mokre fleke na odeći, neprijatan osećaj vlažnosti i značajno narušen kvalitet života, bez obzira na godišnje doba ili nivo fizičke aktivnosti.

Primena botulinum toksina tipa A predstavlja jednu od najefikasnijih i naučno najispitivanijih metoda za lečenje aksilarne hiperhidroze. Tretman je minimalno invazivan, bezbedan i omogućava dugotrajno smanjenje znojenja uz brz povratak svakodnevnim aktivnostima.`,
  whatIsItSections: [
    {
      heading: 'Kada se preporučuje?',
      items: [
        'Izraženo znojenje pazuha koje ometa svakodnevni život',
        'Nedovoljan odgovor na antiperspirante i lokalnu terapiju',
        'Potrebu za dugotrajnim i efikasnim smanjenjem znojenja',
        'Pojačano znojenje koje utiče na profesionalne, društvene ili sportske aktivnosti',
      ],
    },
    {
      heading: 'Kako deluje botulinum toksin?',
      body: 'Botulinum toksin privremeno blokira oslobađanje acetilholina, neurotransmitera koji aktivira ekrine znojne žlezde. Na taj način dolazi do značajnog smanjenja stvaranja znoja u tretiranom području, dok se sposobnost organizma da reguliše telesnu temperaturu ne narušava, jer ostale znojne žlezde nastavljaju normalno da funkcionišu.',
    },
    {
      heading: 'Kada se vide rezultati?',
      body: 'Prvi efekti terapije najčešće se primećuju nakon 5 do 7 dana, dok se maksimalan efekat razvija u roku od oko dve nedelje. Kod većine pacijenata znojenje se smanjuje za više od 80 do 90%, što značajno poboljšava kvalitet života i svakodnevno funkcionisanje. Efekat tretmana traje u proseku 4 do 6 meseci, a kod pojedinih osoba i duže. Nakon postepenog vraćanja znojenja, terapija se može bezbedno ponoviti.',
    },
    {
      heading: 'Priprema i plan lečenja',
      body: 'Pre početka terapije obavlja se dermatološki pregled kako bi se potvrdila dijagnoza primarne aksilarne hiperhidroze i isključili mogući sekundarni uzroci pojačanog znojenja. Na osnovu kliničkog nalaza izrađujemo individualni plan lečenja i određujemo optimalnu dozu botulinum toksina, sa ciljem postizanja maksimalnog efekta uz očuvanje prirodne funkcije kože i visok nivo bezbednosti. Naš cilj je da pacijentima omogućimo dugotrajnu kontrolu pojačanog znojenja, veću sigurnost u svakodnevnim i profesionalnim aktivnostima i značajno bolji kvalitet života.',
    },
  ],
  howItWorks: [
    'Nakon pregleda i određivanja zone pojačanog znojenja, botulinum toksin se aplikuje veoma tankom iglom u više površinskih tačaka u regiji pazuha.',
    'Procedura traje približno 15 do 30 minuta. Većina pacijenata oseća samo blag osećaj peckanja, a po potrebi se može primeniti lokalna anestetička krema radi dodatnog komfora.',
    'Po završetku tretmana pacijent se odmah vraća svojim svakodnevnim aktivnostima.',
  ],
  expectedResults: [
    'Visoka efikasnost u smanjenju znojenja',
    'Minimalno invazivna procedura',
    'Brz tretman bez perioda oporavka',
    'Dugotrajan efekat',
    'Značajno poboljšanje kvaliteta života',
    'Bezbedna i klinički dokazana metoda',
  ],
  relatedServices: [
    { title: 'Botulinum toksin – botox', href: '/usluge/botoks-fileri' },
    { title: 'Lečenje akni', href: '/usluge/akne' },
    { title: 'Dijagnostika i lečenje kožnih i polnih bolesti', href: '/usluge/medicinska-dermatologija' },
  ],
}

export default function PojacanoZnojenjePage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/botoks-treatment.jpg" />
}
