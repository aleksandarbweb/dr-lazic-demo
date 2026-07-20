import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uklanjanje Papiloma i Keratoza | Ordinacija Dr. Terzić',
  description: 'Uklanjanje papiloma (mekih fibroma) i seboroičnih keratoza radiotalasnom hirurgijom, ablativnim Er:YAG laserom ili krioterapijom u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Uklanjanje Papiloma i Keratoza',
  aboutHeading: 'Šta su papilomi i keratoze?',
  subtitle: 'Bezbedno uklanjanje papiloma (mekih fibroma) i seboroičnih keratoza, metodom prilagođenom veličini i lokaciji promene',
  description: 'Precizno uklanjanje benignih kožnih promena uz minimalan rizik od ožiljaka',
  whatIsIt: `Papilomi i keratoze su benigne (dobroćudne) kožne promene koje se javljaju sa godinama i mogu predstavljati estetski problem. Zbog tendencije uvećavanja i umnožavanja preporučuje se njihovo pravovremeno uklanjanje, radiotalasnom hirurgijom, ablativnim Er:YAG laserom ili krioterapijom, u zavisnosti od tipa, veličine i lokacije promene.`,
  whatIsItSections: [
    {
      heading: 'Papilomi (meki fibromi)',
      body: 'Papilomi ili meki fibromi su benigne promene koje se najčešće javljaju na licu, pazuhu, ispod dojki, kao i u predelu prepona i genitalne regije. Obično su veličine 1 do 3 mm, ali mogu dostići i veličinu od 1 cm. Meki su na dodir, vise na peteljci i mogu biti boje kože ili braonkasto prebojeni. Promene koje su u nastanku su sitnije, u vidu tačkica, i mogu se osetiti prelaskom prstima preko kože. Zbog tendencije uvećavanja i umnožavanja treba ih što ranije ukloniti; metoda izbora za njihovo otklanjanje su radiotalasi.',
    },
    {
      heading: 'Keratoze',
      body: 'Keratoze se najčešće javljaju u formi seboroičnih keratoza, u predelu lica, grudi i leđa, ali i na koži stomaka i pregiba. U početku su žućkaste i malo iznad ravni kože, dok formirane dostižu dijametar i do 2-3 cm, smeđe do crno su prebojene, a površina im je hrapava. Uspešno se otklanjaju radiotalasnom hirurgijom, laserom i tečnim azotom.',
    },
    {
      heading: 'Tok intervencije i oporavak',
      body: 'Intervencije su bezbolne ili minimalno bolne, u zavisnosti od veličine i brojnosti promena, korišćenja anestetika, kao i odabira metode uklanjanja. Intervencije koje se obavljaju Er:YAG laserom su gotovo bezbolne, što olakšava uklanjanje većeg broja promena u jednoj poseti. Nakon intervencije, na mestu uklonjene promene ostaje površna ranica na kojoj se stvara krastica koja otpada za 7 do 14 dana, uz mogućnost nastanka ožiljaka svedenu na minimum.',
    },
  ],
  methods: [
    'Radiotalasna hirurgija',
    'Ablativni laser – Er:YAG laser',
    'Krioterapija',
  ],
  howItWorks: [
    'Dermatološki pregled i određivanje vrste promene (papilom ili keratoza).',
    'Izbor odgovarajuće metode prema lokalizaciji, veličini i tipu promene: radiotalasna hirurgija, Er:YAG laser ili krioterapija.',
    'Sprovođenje intervencije: kod Er:YAG lasera zahvat je gotovo bezbolan, što olakšava uklanjanje većeg broja promena u jednoj poseti.',
    'Nega kože nakon intervencije: na mestu zahvata ostaje površna ranica na kojoj se stvara krastica.',
    'Kontrolni pregled radi provere zarastanja i, po potrebi, dodatne intervencije.',
  ],
  idealCandidates: [
    'Osobe sa papilomima (mekim fibromima) na licu, vratu, pazuhu ili u predelu prepona.',
    'Osobe sa seboroičnim keratozama na licu, grudima ili leđima.',
    'Pacijenti kod kojih promene predstavljaju estetski problem ili se nadražuju odećom i nakitom.',
    'Osobe koje žele ukloniti promene pre nego što se uvećaju ili umnože.',
  ],
  expectedResults: [
    'Intervencija je bezbolna ili minimalno bolna, posebno uz Er:YAG laser.',
    'Krastica na mestu intervencije otpada za 7 do 14 dana, uz mogućnost ožiljka svedenu na minimum.',
    'Moguće je ukloniti veći broj promena u jednoj poseti.',
  ],
  faqs: [
    {
      question: 'Koja metoda se koristi za koju promenu?',
      answer: 'Izbor zavisi od vrste, veličine i lokacije promene. Papilomi se najčešće uklanjaju radiotalasima, dok se keratoze uspešno otklanjaju radiotalasnom hirurgijom, laserom ili tečnim azotom.',
    },
    {
      question: 'Da li je uklanjanje papiloma i keratoza bolno?',
      answer: 'Intervencije su bezbolne ili minimalno bolne, u zavisnosti od veličine i brojnosti promena, korišćenja anestetika i odabrane metode. Zahvati Er:YAG laserom su gotovo bezbolni.',
    },
    {
      question: 'Koliko traje oporavak?',
      answer: 'Na mestu zahvata ostaje površna ranica na kojoj se stvara krastica, koja otpada za 7 do 14 dana, uz mogućnost nastanka ožiljaka svedenu na minimum.',
    },
    {
      question: 'Da li se papilomi i keratoze mogu ponovo javiti?',
      answer: 'Ove promene se javljaju sa godinama, pa je moguća pojava novih papiloma ili keratoza na drugim mestima na koži. Zbog tendencije uvećavanja i umnožavanja, preporučuje se njihovo pravovremeno uklanjanje.',
    },
  ],
  relatedServices: [
    { title: 'Radiotalasna hirurgija', href: '/usluge/radiotalasna-hirurgija' },
    { title: 'Uklanjanje virusnih bradavica, kondiloma i moluski', href: '/usluge/bradavice-papilomi-keratoze-moluske' },
    { title: 'Uklanjanje vaskularnih promena – kapilari i hemangiomi', href: '/usluge/kapilari-i-hemangiomi-laser' },
    { title: 'Dijagnostika i lečenje kožnih i polnih bolesti', href: '/usluge/medicinska-dermatologija' },
  ],
}

export default function UklanjanjePapilomaIKeratozaPage() {
  return (
    <ServicePageLayout
      {...serviceData}
      imageSrc="/images/Services/opsta-dermatovenerologija/uklanjanje-papiloma-i-keratoza.png"
    />
  )
}
