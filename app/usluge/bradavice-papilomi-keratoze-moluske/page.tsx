import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uklanjanje Virusnih Bradavica, Kondiloma i Moluski | Ordinacija Dr. Terzić',
  description: 'Uklanjanje virusnih bradavica, kondiloma i moluski radiotalasnom hirurgijom, ErYAG laserom ili krioterapijom u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Uklanjanje Virusnih Bradavica, Kondiloma i Moluski',
  aboutHeading: 'Šta su virusne bradavice, kondilomi i moluske?',
  subtitle: 'Uklanjanje virusnih bradavica, kondiloma i moluski, metodom prilagođenom tipu i lokaciji promene',
  description: 'Bezbedno uklanjanje virusnih kožnih promena',
  whatIsIt: `Virusne bradavice spadaju među najčešće virusne promene na koži, sa preko 70 identifikovanih tipova humanog papiloma virusa (HPV) koji ih izazivaju. U ordinaciji Dr Terzić dijagnostikujemo vrstu promene i biramo metodu uklanjanja prilagođenu lokalizaciji, veličini i kliničkoj slici, uz jasna objašnjenja toka lečenja i mogućnosti ponovnog javljanja.`,
  whatIsItSections: [
    {
      heading: 'Šta su bradavice i HPV',
      body: 'Bradavice su često zarazno kožno oboljenje izazvano humanim papiloma virusima (HPV). Do sada je identifikovano više od 70 tipova ovih virusa, a za različite oblike bradavica odgovorni su različiti tipovi. Promene se obično javljaju 2 do 6 meseci nakon kontakta sa virusom, mada se u praksi često ne može utvrditi tačan trenutak infekcije.',
    },
    {
      heading: 'Kako se prenose',
      body: 'Bradavice se prenose sa čoveka na čoveka, kao i autoinokulacijom: dodirivanjem postojeće bradavice pacijent može izazvati pojavu novih promena na zdravoj koži.',
    },
    {
      heading: 'Tipovi bradavica',
      items: [
        'Obične (vulgarne) bradavice: bradavičaste kružne promene sa neravnom, hrapavom površinom, veličine do 1 cm. Najčešće se javljaju na šakama dece i mladih, a zbog grickanja noktiju mogu zahvatiti i nokatnu ploču.',
        'Plantarne veruke: bradavice na stopalima, tipične za decu školskog uzrasta i odrasle. Vlažna sredina zbog pojačanog znojenja i neadekvatne obuće pogoduje njihovom nastanku; oko njih se stvara zadebljali sloj kože nalik žuljevima, često bolan pri hodanju.',
        'Ravne mladalačke (juvenilne) bradavice: kružne, blago izdignute promene prečnika 1 do 4 mm, boje kože ili blago pigmentovane. Najčešće se javljaju na licu i gornjoj strani šaka kod mlađih osoba i mogu se sliti u veće površine.',
        'Filiformne (končaste) bradavice: javljaju se na licu, vratu, obrvama i nosu, izolovano ili u grupama. Kod muškaraca su posebno uporne na bradi jer se šire autoinokulacijom prilikom brijanja.',
      ],
    },
    {
      heading: 'Kondilomi (polne bradavice)',
      body: 'Kondilomi se najčešće prenose seksualnim kontaktom i javljaju se u anogenitalnoj regiji u vidu karfiolastih izraslina. Zbog visoke zaraznosti uvek treba pregledati i partnera. Kod žena su posebno važne promene na grliću materice, jer pojedini tipovi HPV mogu imati ulogu u nastanku karcinoma grlića, a redovne kolposkopske i citološke kontrole tu su ključne. Prevencija, pre svega korišćenje kondoma, ostaje izuzetno važna.',
    },
    {
      heading: 'Važno je znati: mogućnost recidiva',
      body: 'Kod nekih pacijenata moguća je spontana regresija promena, ali nije uputno predugo čekati da bradavice prođu same od sebe, jer se najčešće brzo šire i zahvataju veću površinu kože. Nijedan terapijski metod ne uklanja HPV iz tkiva u potpunosti, pa je moguće ponovno javljanje bradavica. To ne znači da ih treba zapostaviti, naprotiv, što ranije se uklone, manji je rizik od širenja. Vremenom, kako jača imunitet, periodi bez bradavica postaju sve duži, a kod upornijih promena u lečenju se kombinuje više terapijskih metoda.',
    },
  ],
  methods: [
    'Krioterapija tečnim azotom',
    'Radiotalasna hirurgija',
    'Ablativni Er:YAG laser',
    'Lokalna terapija: izbor dermatovenerologa prema lokalizaciji i kliničkoj slici',
  ],
  expectedResults: [
    'Krastica na mestu intervencije otpada za 7 do 14 dana, uz mogućnost ožiljka svedenu na minimum.',
    'Smanjen rizik širenja virusnih promena na okolnu kožu uz pravovremeno uklanjanje.',
  ],
  faqs: [
    {
      question: 'Da li se bradavice mogu potpuno izlečiti, bez povratka?',
      answer: 'Nijedan terapijski metod ne uklanja HPV virus iz tkiva u potpunosti, pa je moguće ponovno javljanje bradavica. To ne znači da ih treba zapostaviti, naprotiv, što ranije se uklone, manji je rizik od širenja. Vremenom, kako jača imunitet, periodi bez bradavica postaju sve duži.',
    },
    {
      question: 'Da li bradavice mogu same da nestanu?',
      answer: 'Kod nekih pacijenata moguća je spontana regresija bradavica, ali nije preporučljivo predugo čekati da nestanu same od sebe, jer se često brzo šire na veću površinu kože. Bolje je krenuti u lečenje što ranije, uz procenu dermatovenerologa.',
    },
    {
      question: 'Koja metoda se koristi za koju bradavicu?',
      answer: 'Izbor zavisi od vrste, veličine i lokacije promene, a metoda se bira prema kliničkoj slici; nekad je potrebna kombinacija više terapijskih pristupa.',
    },
    {
      question: 'Da li je uklanjanje kondiloma bolno i da li treba pregledati partnera?',
      answer: 'Zahvat se radi uz lokalnu anesteziju po potrebi. Kondilomi su izuzetno zarazni, pa je uvek preporučljivo pregledati i partnera, a kod žena su važne i redovne kolposkopske i citološke kontrole.',
    },
  ],
  relatedServices: [
    { title: 'Uklanjanje papiloma i keratoza', href: '/usluge/uklanjanje-papiloma-i-keratoza' },
    { title: 'Dijagnostika i lečenje kožnih i polnih bolesti', href: '/usluge/medicinska-dermatologija' },
    { title: 'Dermoskopija – pregled mladeža', href: '/usluge/dermoskopija' },
  ],
}

export default function BradaviceePapilomiKeratozeMoluskePage() {
  return (
    <ServicePageLayout
      {...serviceData}
      imageSrc="/images/Services/opsta-dermatovenerologija/uklanjanje-bradavica-kondiloma-papiloma.png"
    />
  )
}
