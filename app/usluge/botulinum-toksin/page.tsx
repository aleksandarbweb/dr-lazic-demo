import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Primena botulinum toksina | Ordinacija Dr. Terzić',
  description: 'Botulinum toksin u ordinaciji Dr. Terzić: precizna terapija za prirodan, odmoran i svež izgled uz očuvanje mimike i individualno planiranje tretmana.',
}

const serviceData = {
  title: 'Primena botulinum toksina',
  aboutHeading: 'Precizna terapija za prirodan, odmoran i svež izgled',
  subtitle: 'Minimalno invazivan tretman dinamičkih bora uz očuvanje prirodne mimike',
  description: 'Jedan od najbolje proučenih estetskih tretmana sa dugogodišnjim iskustvom u primeni',
  pendingNotice: 'Fotografija za ovu uslugu još uvek nije dostavljena, pa je trenutno prikazana privremena zamenska slika. Tekst na stranici je kompletan i zvaničan.',
  whatIsIt: `Botulinum toksin je biološki lek koji se u dermatologiji i estetskoj medicini koristi više decenija. U estetskim indikacijama primenjuje se u veoma malim, precizno doziranim količinama kako bi se privremeno smanjila aktivnost određenih mišića.

Kada se pravilno aplikuje, omogućava smanjenje dinamičkih bora uz očuvanje prirodne mimike. Cilj savremene primene nije „zamrznuto lice“, već odmorniji i svežiji izgled.

Botulinum toksin je jedan od najbolje proučenih i najčešće primenjivanih minimalno invazivnih estetskih tretmana, sa dugogodišnjim iskustvom u primeni i dobro poznatim profilom bezbednosti kada ga primenjuje odgovarajuće obučen lekar.`,
  whatIsItSections: [
    {
      heading: 'Kada se koristi?',
      body: 'Najčešća estetska primena je kod dinamičkih bora koje nastaju ponavljanim kontrakcijama mišića. Najčešće tretiramo:',
      items: [
        'horizontalne bore čela',
        'glabelarne bore („bore mrštenja“)',
        'bore oko očiju („smejalice“)',
        'podizanje i oblikovanje obrva',
        'određene bore i nepravilnosti u donjoj trećini lica',
        'bore oko usana u pažljivo odabranim indikacijama',
        'bradu sa izraženom mišićnom aktivnošću',
        'platizmalne trake i određene promene konture vrata',
      ],
    },
    {
      heading: 'Kako deluje?',
      body: 'Botulinum toksin privremeno blokira oslobađanje neurotransmitera acetilholina na neuromišićnom spoju. Na taj način se smanjuje kontrakcija ciljanog mišića, što dovodi do postepenog omekšavanja bora koje nastaju njegovom aktivnošću. Efekat nije trenutan. Prve promene se obično uočavaju nakon nekoliko dana, dok se konačan efekat procenjuje nakon približno 10–14 dana. Trajanje efekta je individualno, a najčešće iznosi oko 4 meseca, uz mogućnost dužeg trajanja kod pojedinih pacijenata.',
    },
    {
      heading: 'Kako izgleda tretman?',
      body: 'Pre aplikacije lekar procenjuje anatomiju lica, mišićnu aktivnost, postojeće bore, proporcije i način na koji pacijent koristi mimiku. To je posebno važno jer se botulinum toksin ne primenjuje po univerzalnoj šemi. Tretman se izvodi veoma tankom iglom, kroz nekoliko precizno određenih tačaka. Količina toksina i mesto aplikacije prilagođavaju se individualno. Procedura je kratka i najčešće traje oko 15 minuta, u zavisnosti od broja regija koje se tretiraju.',
    },
    {
      heading: 'Šta pre tretmana?',
      body: 'Posebna priprema uglavnom nije potrebna. Na konsultaciji je važno obavestiti lekara o:',
      items: [
        'svim lekovima i suplementima koje koristite',
        'eventualnim prethodnim reakcijama na botulinum toksin',
        'neuromišićnim oboljenjima',
        'trudnoći ili dojenju',
        'prethodnim estetskim tretmanima i procedurama u regiji koja se tretira',
      ],
    },
    {
      heading: 'Šta nakon tretmana?',
      body: 'Nakon aplikacije možete se odmah vratiti svakodnevnim aktivnostima. Moguće su sitne papule, blago crvenilo ili diskretne modrice na mestima aplikacije. Ove reakcije su najčešće prolazne. Nakon tretmana preporučujemo:',
      items: [
        'biti u uspravnom položaju 6 sati nakon tretmana',
        'prvu noć spavati na leđima',
        'izbegavati intenzivnu fizičku aktivnost 5–7 dana',
        'ne ići u saunu i izbegavati zagrevanje tretirane regije 5–7 dana',
        'ne planirati masažu lica i intenzivne procedure u tretiranoj regiji 3–4 nedelje nakon tretmana',
      ],
    },
    {
      heading: 'Kada se vidi rezultat?',
      body: 'Efekat se razvija postepeno. Prve promene se uočavaju nekoliko dana nakon tretmana, procena konačnog efekta obavlja se oko 10–14 dana, a trajanje je najčešće oko 4 meseca. Tretman se može ponoviti kada se mišićna aktivnost i efekat postepeno vrate.',
    },
    {
      heading: 'Prirodan rezultat je naš cilj',
      body: 'Savremena primena botulinum toksina nije usmerena na potpuno eliminisanje mimike. Pravilno doziran toksin omogućava kontrolu prekomerne mišićne aktivnosti, uz očuvanje izražajnosti lica. Tretman planiramo individualno, na osnovu anatomije lica, mišićne aktivnosti, kvaliteta kože i željenog rezultata. Cilj nije promeniti lice. Cilj je da lice izgleda odmornije, svežije i prirodno.',
    },
  ],
  howItWorks: [
    'Na dan tretmana koža treba da bude čista, bez šminke i aktivnih iritacija ili infekcije u regiji aplikacije.',
    'Botulinum toksin se koristi i u medicinskim indikacijama, uključujući hiperhidrozu, bruksizam, hroničnu migrenu i određene poremećaje mišićne aktivnosti.',
    'Konkretna uputstva zavise od tretirane regije i individualne procene lekara.',
  ],
  relatedServices: [
    { title: 'Hijaluronski fileri', href: '/usluge/hijaluronski-fileri' },
    { title: 'Personalizovani Full Face tretmani', href: '/usluge/full-face' },
    { title: 'Lečenje pojačanog znojenja', href: '/usluge/pojacano-znojenje' },
  ],
}

export default function BotulinumToksinPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/botoks-treatment.jpg" />
}
