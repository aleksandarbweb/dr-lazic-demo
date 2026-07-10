import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uklanjanje Bradavica, Papiloma, Keratoza i Moluski | Ordinacija Dr. Terzić',
  description: 'Uklanjanje virusnih bradavica, kondiloma, moluski, papiloma i seboroičnih keratoza radiotalasnom hirurgijom, ErYAG laserom ili krioterapijom u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Uklanjanje Bradavica, Papiloma, Keratoza i Moluski',
  subtitle: 'Uklanjanje virusnih bradavica, kondiloma, moluski, papiloma i seboroičnih keratoza — metodom prilagođenom tipu i lokaciji promene',
  description: 'Bezbedno uklanjanje benignih i virusnih kožnih promena',
  whatIsIt: `Virusne bradavice su zarazno kožno oboljenje izazvano humanim papiloma virusima (HPV) — do sada je identifikovano više od 70 tipova. Prenose se sa čoveka na čoveka, a moguća je i autoinokulacija: dodirivanjem postojeće bradavice pacijent može izazvati pojavu novih promena na zdravoj koži. Obično se javljaju 2 do 6 meseci nakon kontakta sa virusom, mada se u praksi tačan trenutak infekcije često ne može utvrditi.

Najčešće se javljaju kao obične (vulgarne) bradavice na šakama dece i mladih ili kao plantarne veruke na stopalima, koje zbog pritiska pri hodanju mogu biti bolne. Polne bradavice (kondilomi) prenose se seksualnim kontaktom, izuzetno su zarazne pa je uvek preporučljivo pregledati i partnera, a kod žena je zbog moguće povezanosti pojedinih tipova HPV sa promenama na grliću materice važna redovna kolposkopska i citološka kontrola.

Papilomi (meki fibromi) su benigne promene koje se najčešće javljaju na licu, pazuhu, ispod grudi i u predelu prepona — obično veličine 1 do 3 mm, mekane na dodir, vise na peteljci. Seboroične keratoze javljaju se u predelu lica, grudi i leđa; u početku su žućkaste i tek malo iznad ravni kože, a vremenom mogu dostići 2 do 3 cm u prečniku, hrapave i tamnije obojene površine. Obe promene su benigne, ali se zbog tendencije uvećavanja i estetskog utiska preporučuje njihovo pravovremeno uklanjanje.`,
  methods: [
    'Krioterapija tečnim azotom',
    'Radiotalasna hirurgija',
    'Ablativni Er:YAG laser',
    'Lokalna terapija — izbor dermatovenerologa prema lokalizaciji i kliničkoj slici',
  ],
  howItWorks: [
    'Dermatološki pregled i određivanje vrste promene (bradavica, kondilom, moluska, papilom ili keratoza).',
    'Izbor odgovarajuće metode prema lokalizaciji, veličini i tipu promene.',
    'Sprovođenje intervencije — kod Er:YAG lasera zahvat je gotovo bezbolan, što olakšava uklanjanje većeg broja promena u jednoj poseti.',
    'Nega kože nakon intervencije — na mestu zahvata ostaje površna ranica na kojoj se stvara krastica.',
    'Kontrolni pregled radi provere zarastanja i, po potrebi, dodatne intervencije.',
  ],
  idealCandidates: [
    'Osobe sa virusnim bradavicama na rukama, stopalima ili licu.',
    'Pacijenti sa kondilomima ili moluskama koji žele uklanjanje pod medicinskim nadzorom.',
    'Osobe sa papilomima ili seboroičnim keratozama koje smetaju estetski ili se nadražuju odećom i nakitom.',
    'Pacijenti koji žele preciznu dijagnostiku pre uklanjanja, radi isključivanja ozbiljnijih promena na koži.',
  ],
  expectedResults: [
    'Krastica na mestu intervencije otpada za 7 do 14 dana, uz mogućnost ožiljka svedenu na minimum.',
    'Kod papiloma i keratoza intervencija je bezbolna ili minimalno bolna, posebno uz Er:YAG laser.',
    'Smanjen rizik širenja virusnih promena na okolnu kožu uz pravovremeno uklanjanje.',
    'Kod žena sa kondilomima redovna kolposkopska kontrola dodatno čuva zdravlje grlića materice.',
  ],
  faqs: [
    {
      question: 'Da li se bradavice mogu potpuno izlečiti, bez povratka?',
      answer: 'Nijedan terapijski metod ne uklanja HPV virus iz tkiva u potpunosti, pa je moguće ponovno javljanje bradavica. To ne znači da ih treba zapostaviti — naprotiv, što ranije se uklone, manji je rizik od širenja. Vremenom, kako jača imunitet, periodi bez bradavica postaju sve duži.',
    },
    {
      question: 'Koja metoda se koristi za koju promenu?',
      answer: 'Izbor zavisi od vrste, veličine i lokacije promene. Papilomi i keratoze se najčešće uklanjaju radiotalasima, Er:YAG laserom ili krioterapijom, dok se kod bradavica metoda bira prema kliničkoj slici — nekad je potrebna kombinacija više metoda.',
    },
    {
      question: 'Da li je uklanjanje kondiloma bolno i da li treba pregledati partnera?',
      answer: 'Zahvat se radi uz lokalnu anesteziju po potrebi. Kondilomi su izuzetno zarazni, pa je uvek preporučljivo pregledati i partnera, a kod žena su važne i redovne kolposkopske i citološke kontrole.',
    },
    {
      question: 'Koliko traje oporavak nakon uklanjanja papiloma ili keratoza?',
      answer: 'Na mestu zahvata ostaje površna ranica na kojoj se stvara krastica — ona otpada za 7 do 14 dana, uz mogućnost ožiljka svedenu na minimum.',
    },
  ],
  relatedServices: [
    { title: 'Dijagnostika i lečenje kožnih i polnih bolesti', href: '/usluge/medicinska-dermatologija' },
    { title: 'Dermoskopija – pregled mladeža', href: '/usluge/dermoskopija' },
    { title: 'Kapilari i hemangiomi', href: '/usluge/kapilari-i-hemangiomi-laser' },
  ],
}

export default function BradaviceePapilomiKeratozeMoluskePage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/dermatology-treatment.jpg" />
}
