import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hirurško uklanjanje mladeža sa patohistološkom dijagnostikom | Ordinacija Dr. Terzić',
  description: 'Hirurško uklanjanje mladeža sa obaveznom patohistološkom analizom u ordinaciji Dr. Terzić: bezbedna ekscizija, precizna dijagnostika i pažljivo planiranje estetskog rezultata.',
}

const serviceData = {
  title: 'Hirurško uklanjanje mladeža sa patohistološkom dijagnostikom',
  aboutHeading: 'Bezbedno uklanjanje promena uz obaveznu patohistološku analizu',
  subtitle: 'Medicinska procedura sa histološkom verifikacijom i pažnjom posvećenom estetskom rezultatu',
  description: 'Hirurška ekscizija mladeža u lokalnoj anesteziji sa obaveznom PH analizom uklonjenog tkiva',
  whatIsIt: `Mladeži (nevusi) su najčešće benigne pigmentne promene kože. Ipak, određene promene mogu zahtevati uklanjanje zbog sumnje na atipiju, promena u izgledu ili simptomatologije, dok se neke uklanjaju iz estetskih ili mehaničkih razloga.

Odluka o uklanjanju mladeža donosi se nakon dermatološkog i dermoskopskog pregleda. Kada postoji indikacija za hirurško uklanjanje, promena se uklanja u celosti, a tkivo se obavezno šalje na patohistološku analizu (PH).`,
  idealCandidates: [
    'Pokazuje promene u obliku, veličini ili boji',
    'Ima nepravilne ili asimetrične karakteristike',
    'Počinje da raste ili se menja',
    'Krvari, svrbi ili se ponavljano povređuje',
    'Zbog lokalizacije stalno trpi mehaničku iritaciju',
    'Dermoskopski pokazuje karakteristike koje zahtevaju dodatnu dijagnostiku',
    'Predstavlja estetsku ili funkcionalnu smetnju, kada je njegovo uklanjanje medicinski opravdano',
  ],
  whatIsItSections: [
    {
      heading: 'Kada je hirurško uklanjanje preporučeno?',
      body: 'Hirurška ekscizija može biti preporučena kada mladež pokazuje promene u izgledu, ima sumnjive dermoskopske karakteristike, predstavlja estetsku ili funkcionalnu smetnju ili kada je medicinski opravdano uklanjanje. Posebno je važno da se promena koja je klinički ili dermoskopski sumnjiva ne uklanja destruktivnim metodama poput lasera ili kauterizacije, jer se time može izgubiti mogućnost adekvatne histopatološke analize.',
    },
    {
      heading: 'Kako izgleda procedura?',
      body: 'Pre intervencije dermatolog obavlja klinički i dermoskopski pregled i procenjuje da li je hirurška ekscizija odgovarajući način uklanjanja. Procedura se izvodi u lokalnoj anesteziji, tako da je bezbolna. Promena se hirurški uklanja zajedno sa odgovarajućim rubom zdravog tkiva, u zavisnosti od kliničke i dermoskopske procene. Nakon uklanjanja rana se zatvara šavovima, a pacijent dobija precizna uputstva za negu operativne regije. Uklonjeno tkivo se šalje na patohistološku analizu, kojom se pod mikroskopom određuje priroda promene.',
    },
    {
      heading: 'Patohistološka dijagnostika – zašto je važna?',
      body: 'PH analiza predstavlja završni dijagnostički korak nakon hirurškog uklanjanja promene. Ona omogućava da se utvrdi tačna histološka priroda mladeža, odnosno da li se radi o benignom nevusu, atipičnoj promeni ili drugoj leziji koja zahteva dalje praćenje ili lečenje. Zato je kod hirurški uklonjenih pigmentnih promena patohistološka analiza sastavni deo postupka, a ne samo dodatna mogućnost.',
    },
    {
      heading: 'Oporavak',
      body: 'Neposredno nakon procedure moguće je blago crvenilo, otok ili osećaj zatezanja u predelu rane. Veoma je važno održavati ranu čistom i pridržavati se uputstava za njenu negu. Šavovi se uklanjaju u zavisnosti od lokalizacije i tipa intervencije, najčešće nakon nekoliko dana do dve nedelje. Nakon zarastanja, zaštita ožiljka od sunca je važna kako bi se smanjila mogućnost njegove trajne pigmentacije.',
    },
    {
      heading: 'Ožiljak i estetski rezultat',
      body: 'Svaka hirurška intervencija na koži ostavlja ožiljak. Njegov izgled zavisi od veličine i lokalizacije promene, načina zatvaranja rane, tipa kože i individualnog procesa zarastanja. Cilj je da se promena ukloni bezbedno i u skladu sa medicinskim principima, uz istovremeno postizanje što boljeg estetskog rezultata. Bezbednost i tačna dijagnoza imaju prednost nad estetskim uklanjanjem promene.',
    },
    {
      heading: 'Naš pristup',
      body: 'Dermoskopija → procena indikacije → hirurška ekscizija → PH analiza → kontrola i dalje praćenje po potrebi. Hirurško uklanjanje mladeža posmatramo pre svega kao medicinsku proceduru koja omogućava definitivno uklanjanje promene i njenu histološku verifikaciju, uz pažnju posvećenu i estetskom rezultatu.',
    },
  ],
  relatedServices: [
    { title: 'Dermoskopski pregled mladeža', href: '/usluge/dermoskopija' },
    { title: 'Uklanjanje virusnih bradavica, kondiloma i moluski', href: '/usluge/bradavice-papilomi-keratoze-moluske' },
    { title: 'Dijagnostika i lečenje kožnih i polnih bolesti', href: '/usluge/medicinska-dermatologija' },
  ],
}

export default function HirurskoUklanjanjeMladezaPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/dermatology-treatment.jpg" />
}
