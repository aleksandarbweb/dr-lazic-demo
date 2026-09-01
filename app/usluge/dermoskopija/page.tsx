import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dermoskopski pregled mladeža | Ordinacija Dr. Terzić',
  description: 'Dermoskopski pregled mladeža uz DermLite DL5 i Canfield DermoSight® Evo 200 sa AI podrškom: precizna dijagnostika i rano otkrivanje melanoma u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Dermoskopski pregled mladeža',
  aboutHeading: 'Šta je dermoskopija?',
  subtitle: 'Pregled i mapiranje mladeža sa digitalnom fotodokumentacijom i AI podrškom',
  description: 'Najsavremenija dijagnostika za rano otkrivanje promena na koži',
  whatIsIt: `Dermoskopija je savremena, neinvazivna i bezbolna dijagnostička metoda koja omogućava detaljan pregled mladeža i drugih promena na koži uz višestruko uvećanje. Zahvaljujući dermoskopiji, dermatolog može da uoči strukture koje nisu vidljive golim okom i sa znatno većom preciznošću razlikuje benigne od sumnjivih promena.

U našoj ordinaciji dermoskopske preglede obavljamo korišćenjem dve vrhunske tehnologije: DermLite DL5 ručnog dermoskopa i Canfield DermoSight® Evo 200 sistema za kompjuterizovanu digitalnu dermoskopiju sa podrškom veštačke inteligencije (AI).

DermLite DL5 omogućava izuzetno precizan pregled pigmentnih i nepigmentnih promena na koži u realnom vremenu, uz vrhunsku optiku i mogućnost polarizovanog i nepolarizovanog osvetljenja, što doprinosi tačnijoj dijagnostici.

Canfield DermoSight® Evo 200 omogućava visokorezolutno digitalno snimanje, kompjuterizovanu analizu i trajno arhiviranje dermoskopskih nalaza. Sistem sa AI podrškom pomaže u proceni karakteristika pigmentnih promena i omogućava precizno poređenje sa prethodnim pregledima, što je od posebnog značaja za praćenje atipičnih mladeža i rano otkrivanje melanoma.

Kombinacijom kliničkog pregleda, dermoskopije i savremene digitalne tehnologije pružamo najviši nivo dijagnostičke preciznosti i omogućavamo individualni plan praćenja za svakog pacijenta.

Svaki dermoskopski pregled u našoj ordinaciji podrazumeva detaljnu procenu svih pigmentnih i drugih promena na koži, uz digitalnu dokumentaciju kada je to potrebno. Na osnovu kliničkog i dermoskopskog nalaza određujemo da li je promena potpuno benigna, zahteva redovno praćenje ili je potrebno njeno hirurško uklanjanje i patohistološka analiza. Naš cilj je rano otkrivanje melanoma i drugih tumora kože, uz pravovremenu dijagnozu i individualni plan praćenja za svakog pacijenta.`,
  whatIsItSections: [
    {
      heading: 'Kada se preporučuje dermoskopski pregled?',
      items: [
        'svim osobama radi preventivnog pregleda mladeža',
        'osobama sa velikim brojem mladeža',
        'osobama sa atipičnim (displastičnim) mladežima',
        'osobama svetle puti koje lako izgore na suncu',
        'osobama koje imaju ličnu ili porodičnu istoriju melanoma',
        'nakon intenzivnog ili dugotrajnog izlaganja UV zračenju',
        'kada pacijent primeti novu promenu ili promenu postojećeg mladeža',
      ],
    },
    {
      heading: 'ABCDE pravilo: kako prepoznati sumnjiv mladež?',
      body: 'Redovan samopregled kože predstavlja važan deo prevencije melanoma. Posebnu pažnju treba obratiti na promene koje ispunjavaju jedno ili više kriterijuma ABCDE pravila: A, Asymmetry (Asimetrija) - jedna polovina mladeža nije ista kao druga. B, Border (Ivice) - nepravilne, nazubljene ili nejasno ograničene ivice. C, Color (Boja) - više nijansi braon, crne, crvene, plave ili bele boje u istoj promeni. D, Diameter (Prečnik) - promena veća od približno 6 mm, naročito ako raste. E, Evolution (Evolucija) - svaka promena veličine, oblika, boje ili površine, kao i pojava svraba, krvarenja ili ranice. Pored ABCDE pravila, važno je obratiti pažnju i na takozvani "ružni pačić" (Ugly Duckling sign): mladež koji se izgledom razlikuje od svih ostalih na telu i zahteva dermatološku procenu.',
      imageSrc: '/images/Services/dermoskopija/abcde-pravilo.png',
      imageAlt: 'ABCDE pravilo za pregled mladeža',
    },
    {
      heading: 'Koliko često treba pregledati mladeže?',
      body: 'Preporučuje se da svaka odrasla osoba jednom mesečno obavi samopregled kože ispred ogledala, uz pomoć drugog ogledala ili člana porodice za pregled teško dostupnih regija. Preventivni dermoskopski pregled kod dermatologa savetuje se najmanje jednom godišnje, dok osobe sa povećanim rizikom mogu zahtevati češće kontrole, u skladu sa preporukom dermatologa.',
    },
    {
      heading: 'UV zračenje i rizik od melanoma',
      body: 'Najznačajniji faktor rizika za nastanak melanoma i drugih karcinoma kože jeste prekomerno izlaganje ultraljubičastom (UV) zračenju, bilo prirodnom (sunce) ili veštačkom (solarijumi). Posebno je štetno povremeno intenzivno izlaganje suncu koje dovodi do opekotina, naročito u detinjstvu i adolescenciji. Zaštita kože podrazumeva:',
      items: [
        'izbegavanje sunca u periodu od 10 do 16 časova',
        'svakodnevnu primenu krema sa širokim spektrom zaštite (SPF 50+)',
        'nošenje zaštitne odeće, šešira i naočara za sunce',
        'izbegavanje korišćenja solarijuma',
      ],
    },
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
