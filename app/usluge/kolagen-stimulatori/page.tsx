import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kolagen stimulatori | Ordinacija Dr. Terzić',
  description: 'Kolagen stimulatori u ordinaciji Dr. Terzić: HArmonyCa™ i Juvelook® za stimulaciju sopstvenog kolagena, čvršću kožu i prirodno podmlađivanje bez prekomerne volumizacije.',
}

const serviceData = {
  title: 'Kolagen stimulatori',
  aboutHeading: 'Stimulacija sopstvenog kolagena za čvršću, kvalitetniju i prirodnije podmlađenu kožu',
  subtitle: 'Biostimulativni pristup regeneraciji kože uz postepeno poboljšanje strukture i kvaliteta tkiva',
  description: 'Savremena alternativa klasičnim filerima za pacijente koji žele prirodan, suptilan rezultat',
  whatIsIt: `Kolagen je jedan od osnovnih strukturnih proteina kože i odgovoran je za njenu čvrstinu, elastičnost i potporu. Sa godinama se njegova proizvodnja postepeno smanjuje, što dovodi do starenja kože, tj. gubitka čvrstine, pojave opuštenosti, finih bora i promena u kvalitetu kože. Od 25. godine se svake godine gubi 1% kolagenih vlakana u koži, a u prvih 3–5 godina nakon menopauze količina kolagenih vlakana se smanjuje za 30%.

Kolagen stimulatori predstavljaju savremeni pristup regeneraciji kože. Za razliku od klasičnih filera, čiji je osnovni cilj neposredna nadoknada volumena, kolagen-stimulišući preparati deluju tako što podstiču sopstvene regenerativne procese kože i stvaranje novog kolagena. Rezultat se zato ne zasniva samo na dodatom volumenu, već na postepenom poboljšanju strukture i kvaliteta tkiva.`,
  whatIsItSections: [
    {
      heading: 'Kada se koriste?',
      body: 'Kolagen stimulatore koristimo kada želimo da poboljšamo:',
      items: [
        'čvrstinu i elastičnost kože',
        'kvalitet i jedrinu kože',
        'fine i površinske bore',
        'početnu do umerenu opuštenost',
        'konture lica',
        'teksturu kože',
        'znakove fotostarenja',
        'kvalitet kože vrata i dekoltea',
        'kvalitet kože šaka',
      ],
    },
    {
      heading: 'Kako deluju?',
      body: 'Kolagen-stimulišući preparati (biostimulatori) postavljaju se u odgovarajući sloj tkiva, gde pokreću procese koji dovode do stvaranja novog kolagena i remodelovanja ekstracelularnog matriksa. Zbog toga rezultat nije trenutan. Koža se postepeno menja, postaje čvršća, kompaktnija i kvalitetnija, a efekat se razvija tokom narednih nedelja i meseci. Krajnji efekat se najčešće vidi nakon 3 meseca. Upravo je postepenost jedna od najvažnijih prednosti ovog pristupa: rezultat je suptilan i ne menja naglo volumen i proporcije lica.',
    },
    {
      heading: 'HArmonyCa™ – hibridni biostimulator',
      body: 'U našoj praksi koristimo HArmonyCa™, hibridni injekcioni preparat koji kombinuje hijaluronsku kiselinu (HA) i kalcijum-hidroksiapatit (CaHA). HA daje neposredan efekat potpore i hidratacije, dok CaHA ima biostimulativnu komponentu povezanu sa stimulacijom sopstvenog kolagena. Ovakav koncept omogućava istovremeno delovanje na strukturu, konturu i kvalitet kože lica. HArmonyCa™ se zato može koristiti kada želimo diskretno poboljšanje kontura i potporu tkivu, bez stvaranja efekta prekomerne volumizacije. Koristi se za regiju lica, a efekat traje oko 18 meseci.',
    },
    {
      heading: 'Juvelook®',
      body: 'Juvelook® je kolagen-stimulišući preparat na bazi PDLLA (poly-D,L-lactic acid) i hijaluronske kiseline, koji je posebno zanimljiv kada je cilj poboljšanje kvaliteta kože, njene elastičnosti i teksture. Dostupni podaci opisuju njegovu primenu kod finih bora, poboljšanja elastičnosti i različitih atrofičnih ožiljaka, uključujući ožiljke nakon akni. U našoj praksi Juvelook koristimo i za regije koje zahtevaju posebno suptilan pristup, kao što su lice, regija podočnjaka, vrat, šake, određene vrste ožiljaka nakon akni i strije. Kod vrata je posebno važna pravilna tehnika i odgovarajuća dubina aplikacije, jer je koža tanka i površna aplikacija može povećati rizik od vidljivih nepravilnosti. Juvelook je jedini bezbedni kolagenstimulator za regiju podočnjaka i pažljivo se injektuje kanilom. Potrebno je uraditi 2 tretmana na 4–6 nedelja i po potrebi treći za 6–8 nedelja.',
    },
    {
      heading: 'Da li se mogu kombinovati sa drugim procedurama?',
      body: 'Da. Upravo kombinovanje različitih tehnologija i injekcionih procedura može dati najbolje rezultate kada je pravilno planirano. Međutim, redosled i razmak između procedura moraju biti pažljivo planirani. Kombinovanje ne znači da sve procedure treba uraditi istovremeno. Savremeni pristup podrazumeva da se tretmani rasporede tako da svaki od njih ima svoju ulogu u ukupnom planu.',
    },
    {
      heading: 'Kako izgleda tretman?',
      body: 'Pre aplikacije obavlja se detaljan pregled i procena kvaliteta kože, anatomije i stepena gubitka čvrstine. Na osnovu toga određujemo: koji preparat, koja regija, koji sloj tkiva, koja količina, koja tehnika i koji interval između tretmana. Preparat se aplikuje tankom iglom ili kanilom, u zavisnosti od regije i izabranog preparata. Neposredno nakon tretmana mogu se javiti blago crvenilo, otok, osetljivost ili modrice, koji se uglavnom spontano povlače.',
    },
    {
      heading: 'Zašto su kolagen stimulatori drugačiji od klasičnih filera?',
      body: 'Klasični hijaluronski filer prvenstveno koristimo kada želimo nadoknadu volumena, definiciju ili strukturnu potporu. Kod kolagen stimulatora cilj je pre svega biološka stimulacija tkiva. Zato se ova dva pristupa ne isključuju – naprotiv, kod pravilno odabranih pacijenata mogu biti deo istog dugoročnog plana. Filer vraća strukturu. Kolagen stimulator podstiče kvalitet tkiva. Botulinum toksin kontroliše mišićnu aktivnost. Biorevitalizacija hidrira i revitalizuje kožu. Energy-based procedure dodatno utiču na kvalitet kože. Kombinacijom ovih principa moguće je postići mnogo prirodniji rezultat nego agresivnim tretiranjem samo jedne komponente starenja.',
    },
    {
      heading: 'Prirodan rezultat je cilj',
      body: 'Kolagen-stimulišući tretmani nisu namenjeni stvaranju „novog lica“. Njihov cilj je da se postepeno poboljša ono što se vremenom izgubilo – čvrstina, elastičnost, kvalitet i struktura kože. Zato su posebno važni kod pacijenata koji žele da izgledaju svežije i odmornije, ali bez promene svojih karakteristika i proporcija. U ordinaciji Dr Terzić biramo preparat i tehniku prema anatomiji, kvalitetu kože i cilju tretmana – jer nije svaki kolagen stimulator namenjen svakoj regiji, niti svaki pacijent zahteva isti protokol.',
    },
    {
      heading: 'Naš princip',
      body: 'Ne dodajemo ono što nije potrebno. Ne menjamo lice. Stimulišemo kožu da ponovo bude kvalitetnija. Pregled → procena → individualni plan → odgovarajući biostimulator → precizna tehnika → postepena regeneracija → prirodan rezultat.',
    },
  ],
  howItWorks: [
    'Određeni preparati mogu imati posebno mesto u tretmanu atrofičnih ožiljaka nakon akni i strija, kao deo pažljivo planiranog kombinovanog protokola.',
  ],
  relatedServices: [
    { title: 'Hijaluronski fileri', href: '/usluge/hijaluronski-fileri' },
    { title: 'Personalizovani Full Face tretmani', href: '/usluge/full-face' },
    { title: 'Biorevitalizacije (Profhilo)', href: '/usluge/profhilo' },
  ],
}

export default function KolagenStimulatoriPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/prp-treatment.jpg" />
}
