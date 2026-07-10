import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uklanjanje Bradavica, Papiloma, Keratoza i Moluski | Ordinacija Dr. Terzić',
  description: 'Uklanjanje virusnih bradavica, kondiloma, moluski, papiloma i keratoza radiotalasnom hirurgijom, krioterapijom ili laserom u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Uklanjanje Bradavica, Papiloma, Keratoza i Moluski',
  subtitle: 'Uklanjanje virusnih bradavica, kondiloma, moluski, papiloma i seboroičnih keratoza — izborom modaliteta prilagođenim vrsti i lokaciji promene',
  description: 'Bezbedno uklanjanje benignih i virusnih kožnih promena',
  whatIsIt: `Virusne bradavice, kondilomi i moluske nastaju usled infekcije kože, dok su papilomi i seboroične keratoze benigne promene koje se najčešće javljaju sa godinama. Iako nisu opasne po zdravlje, mogu smetati estetski ili fizički, a nekada zahtevaju i uklanjanje radi sprečavanja širenja.

U ordinaciji Dr. Terzić uklanjanje ovih promena vršimo jednom od tri metode — radiotalasnom hirurgijom, krioterapijom tečnim azotom ili laserom — u zavisnosti od vrste, veličine i lokacije promene, kako bismo postigli precizan rezultat uz minimalno oštećenje okolne kože.`,
  howItWorks: [
    'Dermatološki pregled i određivanje vrste promene (bradavica, kondilom, moluska, papilom ili keratoza).',
    'Izbor odgovarajućeg modaliteta — radiotalasna hirurgija, krioterapija tečnim azotom ili laser.',
    'Sprovođenje procedure u kontrolisanim uslovima, uz lokalnu anesteziju po potrebi.',
    'Uputstva za negu kože nakon procedure.',
    'Kontrolni pregled radi provere zarastanja i, po potrebi, dodatnog tretmana.',
  ],
  idealCandidates: [
    'Osobe sa virusnim bradavicama na rukama, stopalima ili licu.',
    'Pacijenti sa kondilomima ili moluskama koji žele uklanjanje pod medicinskim nadzorom.',
    'Osobe sa papilomima ili seboroičnim keratozama koje smetaju estetski ili se nadražuju odećom/nakitom.',
    'Pacijenti koji žele preciznu dijagnostiku pre uklanjanja, radi isključivanja ozbiljnijih promena na koži.',
  ],
  expectedResults: [
    'Uklanjanje vidljive promene uz minimalan ožiljak pri pravilnoj nezi.',
    'Smanjen rizik širenja virusnih promena na okolnu kožu.',
    'Brz oporavak — većina procedura ne zahteva duži prekid svakodnevnih aktivnosti.',
    'Jasne instrukcije za naknadnu negu i prevenciju ponovne pojave.',
  ],
  faqs: [
    {
      question: 'Da li je uklanjanje bradavica i kondiloma bolno?',
      answer: 'Procedure se rade uz lokalnu anesteziju ili kratkotrajno neprijatno osećanje (kod krioterapije), tako da je nelagodnost minimalna i kratkotrajna.',
    },
    {
      question: 'Koja metoda se koristi za koju promenu?',
      answer: 'Izbor zavisi od vrste, veličine i lokacije promene — radiotalasna hirurgija i laser su precizniji za veće ili osetljivije regije, dok se krioterapija tečnim azotom često koristi za bradavice na rukama i stopalima.',
    },
    {
      question: 'Da li se virusne bradavice mogu vratiti?',
      answer: 'Kako su izazvane virusom (HPV), moguća je ponovna pojava, posebno ako imunitet kože nije potpuno savladao infekciju. Redovne kontrole pomažu u ranom otkrivanju i tretiranju eventualnog povratka.',
    },
    {
      question: 'Da li je potrebno više dolazaka?',
      answer: 'Manje i pojedinačne promene se često rešavaju u jednoj poseti; veće ili brojnije promene ponekad zahtevaju dodatnu kontrolnu proceduru.',
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
