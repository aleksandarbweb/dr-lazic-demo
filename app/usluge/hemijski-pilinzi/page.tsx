import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hemijski pilinzi | Ordinacija Dr. Terzić',
  description:
    'Hemijski pilinzi u ordinaciji Dr. Terzić: kontrolisana eksfolijacija i obnova kože, individualno planirana prema indikaciji, fototipu i stanju kože.',
}

const serviceData = {
  title: 'Hemijski pilinzi',
  aboutHeading: 'Hemijski pilinzi: obnova kože i povratak prirodnog sjaja',
  subtitle: 'Obnova kože i povratak prirodnog sjaja',
  description:
    'Kontrolisana eksfolijacija i obnova kože, planirana prema tipu kože i indikaciji',
  pendingNotice:
    'Fotografija za ovu uslugu još uvek nije dostavljena, pa je prikazana privremena zamenska slika. Tekst na stranici je kompletan i zvaničan.',
  whatIsIt: `Hemijski pilinzi predstavljaju jedan od klasičnih, naučno utemeljenih postupaka u dermatologiji, namenjenih poboljšanju kvaliteta kože, ujednačavanju tena i podsticanju njene prirodne obnove. Pravilnim izborom vrste i koncentracije kiselina, kao i dubine delovanja, moguće je ciljano tretirati različite estetske i dermatološke probleme kože.

U ordinaciji dr Terzić, hemijske pilinge biramo individualno, u skladu sa tipom kože, njenim stanjem, prisutnim promenama i željenim rezultatima. Naš pristup zasniva se na dermatološkoj proceni, pravilnom odabiru tretmana i očuvanju zdravlja kože.`,
  whatIsItSections: [
    {
      heading: 'Kako deluju hemijski pilinzi?',
      body: `Hemijski pilinzi podrazumevaju kontrolisanu primenu određenih kiselina koje pospešuju uklanjanje površinskih slojeva kože, ubrzavaju proces ćelijske obnove i, u zavisnosti od vrste preparata i dubine delovanja, mogu uticati na procese u dubljim slojevima kože.

Njihovo dejstvo može obuhvatiti poboljšanje teksture i tonusa kože, ublažavanje pigmentacija, smanjenje vidljivosti sitnih bora i nepravilnosti, kao i poboljšanje izgleda kože sklone aknama.

Hemijski piling nije samo postupak eksfolijacije. Pravilno odabran tretman može biti važan deo sveobuhvatnog dermatološkog pristupa zdravlju i kvalitetu kože.`,
    },
    {
      heading: 'Koje probleme kože tretiramo hemijskim pilinzima?',
      body: 'U zavisnosti od indikacije, hemijski pilinzi mogu biti namenjeni:',
      items: [
        'Koži sklonoj aknama: pomažu u uklanjanju viška površinskih ćelija, poboljšanju izgleda pora i smanjenju komedona.',
        'Postinflamatornim flekama i hiperpigmentacijama: doprinose ujednačavanju tena i ublažavanju tamnih mrlja.',
        'Fotostarenju kože: poboljšavaju teksturu, svežinu i blistavost kože oštećene UV zračenjem.',
        'Sitnim borama i nepravilnostima: mogu doprineti zaglađenijem i ujednačenijem izgledu kože.',
        'Sivoj, umornoj koži bez sjaja: podstiču površinsku obnovu i vraćaju koži svežiji izgled.',
        'Određenim oblicima ožiljaka nakon akni: mogu doprineti poboljšanju teksture, u zavisnosti od vrste i dubine ožiljaka.',
      ],
      outro:
        'Izbor pilinga zavisi od konkretne indikacije, fototipa kože, osetljivosti, prethodnih tretmana i godišnjeg doba.',
    },
    {
      heading: 'Vrste hemijskih pilinga',
      body: 'U dermatologiji se koriste različite vrste kiselina, čiji se efekti razlikuju u zavisnosti od koncentracije, pH vrednosti, formulacije i načina primene.',
      items: [
        'Glikolna kiselina: alfa-hidroksi kiselina koja se koristi za poboljšanje teksture i blistavosti kože, ublažavanje površinskih nepravilnosti i znakova fotostarenja.',
        'Mlečna kiselina: deluje na površinsku eksfolijaciju i može doprineti mekšoj, glađoj i hidriranijoj koži. Često se razmatra kod kože kojoj je potreban blaži pristup.',
        'Salicilna kiselina: beta-hidroksi kiselina sa afinitetom prema masnoj sredini, zbog čega je posebno korisna kod masne kože, komedona i kože sklone aknama.',
        'Mandelična kiselina: zbog svoje molekulske strukture prodire sporije kroz kožu i može biti opcija kod određenih tipova osetljive kože, kao i u tretmanima kože sklone nepravilnostima i pigmentacijama.',
        'Trihlorsirćetna kiselina (TCA): koristi se za odabrane indikacije i u različitim koncentracijama, uz pažljivu procenu dubine delovanja i rizika. Zahteva posebno iskustvo i strogo kontrolisanu primenu.',
        'Retinoična kiselina: koristi se za poboljšanje teksture kože, ublažavanje znakova fotostarenja, sitnih bora i pojedinih pigmentnih nepravilnosti, kao i kod kože sklone aknama i pigmentacijama.',
        'Traneksamična kiselina: koristi se za ublažavanje hiperpigmentacija, posebno melazme i neujednačenog tena, uz ciljano delovanje na procese nastanka pigmentacija.',
      ],
      outro:
        'U zavisnosti od potreba kože, mogu se koristiti i druge kiseline ili kombinacije aktivnih sastojaka. Nije svaki piling namenjen svakom tipu kože, niti je jači piling nužno i bolji piling.',
    },
    {
      heading: 'Kako izgleda tretman?',
      body: `Tretman počinje procenom kože i izborom odgovarajućeg preparata. Nakon pripreme kože, piling se nanosi na kontrolisan način, uz pažljivo praćenje reakcije kože. Postupak se završava prema protokolu odabranog preparata, uz odgovarajuću negu nakon tretmana.

Tokom primene mogu se javiti prolazno peckanje, osećaj toplote ili crvenilo. U zavisnosti od vrste i dubine pilinga, oporavak može biti minimalan, uz blago perutanje, ili izraženiji, sa potrebom za nekoliko dana oporavka.

Broj tretmana i razmak između njih određuju se individualno. Kod pojedinih indikacija najbolji rezultati postižu se serijom tretmana, dok je kod drugih potreban drugačiji terapijski pristup.`,
    },
    {
      heading: 'Nega kože nakon hemijskog pilinga',
      body: `Pravilna nega nakon tretmana važna je za postizanje rezultata i smanjenje rizika od neželjenih reakcija.

Preporučuju se:`,
      items: [
        'Nežno čišćenje kože i primena odgovarajuće hidratantne nege.',
        'Svakodnevna zaštita od sunca preparatom širokog spektra, sa visokim SPF faktorom.',
        'Izbegavanje čupkanja i uklanjanja kože koja se peruta.',
        'Privremena pauza od retinoida, drugih eksfolijansa i potencijalno iritirajućih aktivnih sastojaka, prema savetu dermatologa.',
        'Izbegavanje dodatnih iritativnih tretmana dok se koža potpuno ne oporavi.',
      ],
      outro:
        'Kod kože sklone pigmentacijama, dosledna fotoprotekcija posebno je važna, jer iritacija i izlaganje UV zračenju mogu pogoršati postojeće fleke.',
    },
    {
      heading: 'Da li su hemijski pilinzi bezbedni?',
      body: `Kada se pravilno odaberu i izvode uz poštovanje odgovarajućih protokola, hemijski pilinzi mogu biti efikasan deo dermatološke nege. Ipak, nisu bez rizika. Moguće komplikacije uključuju produženo crvenilo, iritaciju, opekotine, infekcije, promene pigmentacije i, kod dubljih pilinga, ožiljke.

Poseban oprez potreban je kod tamnijih fototipova, aktivnih upalnih promena, narušene kožne barijere, sklonosti ka postinflamatornim pigmentacijama i kod osoba sa određenim dermatološkim stanjima ili terapijama. Zato je stručna procena pre tretmana neophodna.`,
    },
    {
      heading: 'Individualni pristup u ordinaciji dr Terzić',
      body: `Cilj hemijskih pilinga nije samo trenutno osveženje kože, već poboljšanje njenog kvaliteta kroz pažljivo planiran i stručno vođen pristup.

U ordinaciji dr Terzić svaki tretman biramo prema stvarnim potrebama kože, bilo da je cilj kontrola akni, ublažavanje pigmentacija, poboljšanje teksture ili vraćanje prirodnog sjaja. Kada je potrebno, hemijske pilinge uključujemo u širi plan dermatološke terapije, u kombinaciji sa odgovarajućom kućnom negom i drugim procedurama.

Zdrava, ujednačena i negovana koža rezultat je pravilne dijagnoze, individualnog plana i dosledne nege.`,
    },
  ],
  relatedServices: [
    { title: 'Lečenje akni', href: '/usluge/akne' },
    { title: 'Uklanjanje pigmentnih promena', href: '/usluge/pigmentne-promene' },
    { title: 'Morpheus8 RF microneedling', href: '/usluge/morpheus8' },
  ],
}

export default function HemijskiPilinziPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/piling-treatment.jpg" />
}
