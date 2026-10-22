import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lečenje opadanja kose (alopecije) | Ordinacija Dr. Terzić',
  description: 'Dijagnostika i lečenje opadanja kose (alopecije): trihoskopija, PRP, mezoterapija koktelima i Fotona HAIRestart® laserska terapija u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Lečenje opadanja kose (alopecije)',
  aboutHeading: 'Šta je opadanje kose?',
  subtitle: 'Stručna dijagnostika i individualan pristup lečenju gubitka kose, od trihoskopije do PRP-a, mezoterapije i laserske terapije',
  description: 'Zaustavite dalje opadanje i podstaknite rast nove, zdrave kose uz pravovremenu dijagnostiku',
  whatIsIt: `Gubitak kose je medicinski problem koji zahteva stručnu dijagnostiku i individualan pristup. Iako se opadanje kose često posmatra kao estetski nedostatak, ono je najčešće signal dubljih promena u organizmu. Bilo da primetite pojačano proređivanje, pečate bez dlake ili promenu kvaliteta same vlasi, ključ uspeha leži u pravovremenoj poseti dermatologu.

U našoj ordinaciji primenjujemo najsavremenije medicinske metode koje efikasno zaustavljaju dalji gubitak i stimulišu rast nove, zdrave kose.`,
  whatIsItSections: [
    {
      heading: 'Kada je vreme da posetite dermatologa?',
      body: 'Normalno je izgubiti do 100 vlasi dnevno tokom pranja i češljanja. Međutim, trebalo bi da zakažete pregled ako primetite:',
      items: [
        'gubitak kose u vidu pravilnih pečata (krugova)',
        'vidno proređivanje na temenu ili povlačenje linije kose na čelu',
        'naglo i obilno opadanje nakon pranja ili na jastuku',
        'prateće simptome poput svraba, perutanja, crvenila ili bola na koži glave',
      ],
    },
    {
      heading: 'Androgena alopecija (nasledni gubitak kose)',
      body: 'Najčešći uzrok gubitka kose kod muškaraca i žena. Nastaje pod uticajem genetike i muških polnih hormona (androgena) koji postepeno smanjuju i slabe folikule dlake.',
    },
    {
      heading: 'Telogeni efluvijum (privremeno opadanje)',
      body: 'Naglo i difuzno opadanje kose koje se obično javlja 2 do 3 meseca nakon velikog stresa, preležane infekcije (poput Covid-19), rigoroznih dijeta, porođaja ili operacija.',
    },
    {
      heading: 'Alopecija areata (opadanje na pečate)',
      body: 'Autoimuno stanje gde imuni sistem greškom napada sopstvene folikule dlake, što dovodi do naglog opadanja kose u obliku okruglih pečata na glavi ili telu.',
    },
  ],
  howItWorks: [
    'Detaljna dermatološka dijagnostika: anamneza (razgovor o istoriji bolesti, genetici, načinu života i stresu), trihoskopija (dermoskopski pregled kože glave pod velikim uvećanjem kojim analiziramo stanje folikula, gustinu dlake i zdravlje vlasišta) i, po potrebi, laboratorijske analize krvi (status gvožđa, hormoni štitne žlezde, polni hormoni, vitamini).',
    'PRP tretman (plazma bogata trombocitima): potpuno prirodna metoda ubrizgavanja sopstvene plazme bogate faktorima rasta, koja regeneriše folikule i budi "uspavanu" kosu.',
    'Mezoterapija koktelima za kosu: direktno unošenje sterilisanih koktela vitamina, minerala, aminokiselina i vazodilatatora u koren dlake. Radi se u seriji od 5 tretmana, u razmaku od 7 do 14 dana; kožu glave ne treba prati narednih 24 sata kako bi aktivne supstance u potpunosti delovale.',
    'Terapija laserom: Fotona HAIRestart®, neinvazivan tretman laserom koji stimuliše folikule dlake na regeneraciju.',
    'Lokalna i sistemska medicinska terapija: propisivanje ciljanih losiona, lekova i suplemenata sa klinički dokazanim dejstvom.',
  ],
  relatedServices: [
    { title: 'PRP tretman', href: '/usluge/prp' },
    { title: 'Fotona HAIRestart®: laserska stimulacija rasta kose', href: '/usluge/fotona-hairestart' },
  ],
}

export default function OpadanjeKosePage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/dermatology-treatment.jpg" />
}
