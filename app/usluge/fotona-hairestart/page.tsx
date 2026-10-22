import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fotona HAIRestart®: laserska stimulacija rasta kose | Ordinacija Dr. Terzić',
  description: 'Fotona HAIRestart®: neinvazivni laserski tretman koji stimuliše rast kose, sprečava opadanje i poboljšava gustinu dlake, u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Fotona HAIRestart®: laserska stimulacija rasta kose',
  aboutHeading: 'Šta je Fotona HAIRestart®?',
  subtitle: 'Neinvazivni laserski tretman koji stimuliše rast kose, sprečava opadanje i poboljšava gustinu dlake',
  description: 'Patentirana Fotona SMOOTH® tehnologija koja budi uspavane folikule dlake',
  whatIsIt: 'Fotona HAIRestart® predstavlja najsavremeniji, neinvazivni laserski tretman namenjen stimulaciji rasta kose, sprečavanju opadanja i poboljšanju gustine dlake. Ova inovativna procedura koristi patentiranu Fotona SMOOTH® tehnologiju koja ciljano šalje svetlosne impulse u vlasište, bezbedno zagrevajući tkivo i aktivirajući uspavane folikule dlake.',
  whatIsItSections: [
    {
      heading: 'Kako funkcioniše Fotona laser za kosu?',
      items: [
        'Aktivacija ćelija: laserska energija podstiče međućelijske reakcije i oslobađanje faktora rasta',
        'Bolja prokrvljenost: tretman značajno povećava mikrocirkulaciju i dotok kiseonika u kožu glave',
        'Regeneracija folikula: termalni impulsi bude uspavane (dormantne) folikule i prebacuju ih iz faze mirovanja u fazu aktivnog rasta',
        'Bez lekova i igala: postupak je potpuno prirodan i ne zahteva upotrebu medikamenata ili invazivnih metoda',
      ],
    },
    {
      heading: 'Tok i efekti tretmana',
      items: [
        'Trajanje: procedura je brza i traje svega 15 do 30 minuta',
        'Osećaj: tretman je bezbolan, pacijent oseća samo blagu toplotu i povremeno peckanje',
        'Oporavak: nema perioda oporavka, a blago crvenilo ili minimalno perutanje prolaze brzo',
        'Broj sesija: preporučuje se serija od 4 do 10 tretmana (u zavisnosti od stanja), sa razmakom od 2 do 4 nedelje',
      ],
    },
    {
      heading: 'Opšte preporuke nakon dermatoloških tretmana kose',
      body: 'Da biste maksimalno iskoristili potencijal svakog tretmana, pridržavajte se sledećih pravila tokom prva dva dana:',
      items: [
        'Izbegavajte toplotu: bez feniranja vrućim vazduhom, saune ili solarijuma 48 sati',
        'Bez hemijskih tretmana: farbanje i blajhanje kose odložite za najmanje 7 do 10 dana nakon tretmana',
        'Zaštitite se od sunca: ako je indeks UV zračenja visok, nosite lagani, čisti pamučni šešir prilikom boravka na otvorenom',
      ],
    },
  ],
  relatedServices: [
    { title: 'Lečenje opadanja kose (alopecije)', href: '/usluge/opadanje-kose' },
    { title: 'PRP tretman', href: '/usluge/prp' },
  ],
}

export default function FotonaHairestartPage() {
  return <ServicePageLayout {...serviceData} />
}
