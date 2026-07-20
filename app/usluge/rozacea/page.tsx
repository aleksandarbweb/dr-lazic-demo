import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lečenje rozacee | Ordinacija Dr. Terzić',
  description: 'Individualno prilagođeno lečenje rozacee: lokalna i sistemska terapija u kombinaciji sa Nd:YAG i DVL laserskim tretmanima za kontrolu crvenila i proširenih kapilara, u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Lečenje rozacee',
  aboutHeading: 'Šta je rozacea?',
  subtitle: 'Individualni pristup lečenju rozacee, kombinacija lokalne, sistemske i laserske terapije za dugotrajnu kontrolu crvenila i vidljivih kapilara',
  description: 'Dugotrajna kontrola simptoma rozacee uz individualno prilagođenu terapiju',
  whatIsIt: `Rozacea je hronično, zapaljensko oboljenje kože lica koje se najčešće ispoljava crvenilom, proširenim kapilarima (telangiektazijama), povremenim ili trajnim rumenilom, kao i pojavom papula i pustula. Kod pojedinih pacijenata prisutni su peckanje, osećaj toplote, povećana osetljivost kože i narušena funkcija kožne barijere.

Iako se rozacea ne može trajno izlečiti, savremenim terapijskim pristupom moguće je postići dugotrajnu kontrolu bolesti, značajno smanjiti simptome i poboljšati kvalitet kože.

Uspešno lečenje rozacee zahteva iskustvo, kontinuirano praćenje i pažljivo prilagođavanje terapije. Tokom pregleda procenjujemo dominantan oblik bolesti, prisustvo vaskularnih i zapaljenskih promena, stanje kožne barijere i faktore koji dovode do pogoršanja. Na osnovu detaljne procene izrađujemo individualni plan lečenja koji može uključivati lokalnu i sistemsku terapiju, savete o pravilnoj nezi kože, preporuke za izbegavanje okidača bolesti i primenu najodgovarajućih laserskih procedura. Naš cilj nije samo trenutno poboljšanje izgleda kože, već dugoročna kontrola rozacee, očuvanje zdravlja kože i postizanje prirodnog, svežeg izgleda uz terapiju prilagođenu svakom pacijentu.`,
  whatIsItSections: [
    {
      heading: 'Individualni plan lečenja',
      body: 'Ne postoje dva ista pacijenta sa rozaceom. Zato se terapija u našoj ordinaciji planira individualno, u zavisnosti od kliničkog oblika bolesti, stepena izraženosti simptoma, tipa kože i životnih navika pacijenta. Cilj nije samo smanjenje trenutnih simptoma, već dugoročna kontrola bolesti i prevencija novih pogoršanja. Lečenje može uključivati kombinaciju:',
      items: [
        'odgovarajuće dermokozmetičke nege',
        'lokalne terapije',
        'sistemske terapije, kada je indikovana',
        'vaskularnih laserskih tretmana',
      ],
    },
    {
      heading: 'Nd:YAG laser: tretman proširenih kapilara i crvenila',
      body: 'Kod pacijenata sa izraženim telangiektazijama i trajnim crvenilom koristimo Nd:YAG laser (1064 nm), koji selektivno deluje na proširene krvne sudove. Laserska energija dovodi do njihove koagulacije i postepenog povlačenja, uz maksimalno očuvanje okolnog tkiva. Terapijski protokol u našoj ordinaciji najčešće obuhvata pet tretmana u razmaku od jedne nedelje, tokom kojih se postepeno tretira inflamirana koža i koaguliraju prošireni kapilari. Nakon završene inicijalne terapije preporučuju se održavajući tretmani jednom mesečno, u skladu sa kliničkim nalazom i tokom bolesti.',
    },
    {
      heading: 'DVL laser: ujednačavanje tena i redukcija difuznog crvenila',
      body: 'Kod pacijenata kod kojih dominira difuzno crvenilo i površinska vaskularna komponenta, u terapiju uključujemo i DVL (Dye-VL) laser, koji ciljano deluje na površinske krvne sudove i doprinosi ujednačenijem tenu kože. Standardni protokol podrazumeva pet tretmana u razmaku od približno tri nedelje, uz individualno prilagođavanje parametara svakom pacijentu. DVL tretmani mogu se primenjivati samostalno ili u kombinaciji sa Nd:YAG laserom, u zavisnosti od tipa vaskularnih promena i kliničke slike.',
    },
    {
      heading: 'Dodatni efekti laserske terapije kod rozacee',
      body: 'Pored ciljanog delovanja na vaskularne promene, laserski tretmani imaju i dodatne blagotvorne efekte na kvalitet kože. Kontrolisana laserska energija stimuliše remodelovanje kože, doprinosi poboljšanju njene strukture i može dovesti do:',
      items: [
        'smanjenja vidljivosti proširenih pora',
        'regulacije pojačanog lučenja sebuma kod pacijenata sa masnijim tipom kože',
        'poboljšanja teksture i glatkoće kože',
        'ujednačavanja tena',
        'povećanja kvaliteta i otpornosti kožne barijere',
      ],
    },
    {
      heading: 'Zašto kombinovana terapija?',
      body: 'Na ovaj način laserska terapija ne deluje samo na vidljive kapilare i crvenilo, već doprinosi ukupnom poboljšanju izgleda i kvaliteta kože, što je posebno značajno kod pacijenata sa hronično osetljivom kožom sklonom rozacei. Najbolji rezultati u lečenju rozacee postižu se kombinovanjem različitih terapijskih modaliteta. Dok lokalna i sistemska terapija smanjuju zapaljenje i broj novih promena, laserski tretmani efikasno deluju na proširene kapilare i trajno crvenilo, koje se lekovima često ne može u potpunosti ukloniti. Kombinovani pristup omogućava:',
    },
  ],
  expectedResults: [
    'smanjenje difuznog crvenila',
    'uklanjanje vidljivih kapilara',
    'smanjenje učestalosti pogoršanja bolesti',
    'poboljšanje teksture i izgleda kože',
    'prirodan i dugotrajan estetski rezultat',
  ],
  relatedServices: [
    { title: 'Uklanjanje vaskularnih promena – kapilari i hemangiomi', href: '/usluge/kapilari-i-hemangiomi-laser' },
    { title: 'Lečenje akni', href: '/usluge/akne' },
    { title: 'Dermoskopski pregled mladeža', href: '/usluge/dermoskopija' },
  ],
}

export default function RozaceaPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/dermatology-treatment.jpg" />
}
