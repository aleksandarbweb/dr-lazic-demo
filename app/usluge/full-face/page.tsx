import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personalizovani Full Face Tretmani | Ordinacija Dr. Terzić',
  description: 'Personalizovani full face pristup podmlađivanju lica dr Marte Terzić: MD Codes metodologija, individualna analiza lica, prirodan rezultat i dugoročna nega kože u Beogradu.',
}

const serviceData = {
  title: 'Personalizovani Full Face Tretmani',
  aboutHeading: 'Šta je Full Face tretman?',
  subtitle: 'Individualni estetski pristup dr Marte Terzić: harmonija celog lica za izbalansiran, prirodan i odmoran izgled',
  description: 'Dostojanstveno starenje uz umetnost prirodnog podmlađivanja',
  pendingNotice: 'Slika koju je dr Terzić dostavila za ovu uslugu još uvek nedostaje u fajlovima sajta — trenutno je prikazana privremena zamenska slika. Tekst na stranici je kompletan i zvaničan.',
  whatIsIt: `Lepota lica ne ogleda se u pojedinačnoj regiji, već u harmoniji svih njegovih struktura. Zato svakom pacijentu pristupam individualno, analizirajući celo lice, kvalitet kože, proporcije i znake starenja, kako bih postigla izbalansiran, prirodan, osvežen i autentičan izgled.

Najbolji estetski rezultat nije onaj koji se primećuje, već onaj zbog kojeg izgledate odmornije, svežije, negovanije i zadovoljnije sobom. Spojem medicine, iskustva i savremenih tehnologija kreiram tretmane prilagođene upravo vama.

Cilj nije boriti se protiv starenja, već kvalitetno i lepo stariti: u svetu estetske medicine, anti-age sve više postaje age-well. Poenta estetskih i regenerativnih tretmana nije promena identiteta, već isticanje najboljih osobina svakog pacijenta.`,
  whatIsItSections: [
    {
      heading: 'Svako lice ima svoju priču',
      body: 'Različita anatomija, tip kože, genetika, navike i izloženost spoljašnjim faktorima utiču na to kako lice izgleda i stari, a sve njegove strukture su međusobno povezane, zbog čega je neophodno sagledati ga kao celinu. Strukturne promene nastaju na koštanim strukturama, mišićima, masnim jastučićima i ligamentima, što dovodi do opuštanja lica. Najviše se primete u srednjem delu lica, gde nastaju podočnjaci i umoran, tužan izraz. Bore između obrva i marionetske bore daju ljutit izraz, promene na čelu i oko očiju dodaju godine, dok se u donjoj trećini lica najčešće javlja opuštenost. Spuštanje spoljašnjih uglova očiju i krajeva obrva dodatno pojačava tužan izraz, a sve ove promene zajedno čine da lice izgleda iscrpljenije i starije nego što se pacijent zaista oseća, uz gubitak konturisanosti i harmonije.',
    },
    {
      heading: 'Podmlađivanje za 5 do 10 godina',
      body: 'Često čujem od pacijenata da su odmorni, a izgledaju iscrpljeno i umorno: upravo promene u strukturi lica dovode do toga. Savremeni tretmani hijaluronskim filerima i, po potrebi, injektovanjem botulinum toksina mogu ublažiti promene vezane za fiziologiju starenja i podmladiti lice za 5 do 10 godina, vraćajući mu svežinu i sjaj, a u isto vreme popraviti kvalitet kože.',
    },
    {
      heading: 'Principi kojima se vodim',
      items: [
        'Bezbednost pacijenta na prvom mestu',
        'Prirodan i nenametljiv rezultat',
        'Individualan pristup',
        'Primena proverenih metoda i kvalitetnih preparata',
        'Dugoročna briga o zdravlju kože',
      ],
    },
    {
      heading: 'MD Codes™ metodologija',
      body: 'Za korekciju strukturnih promena koristim metodologiju i injekcione tehnike MD Codes™, koje je osmislio dr Mauricio de Maio, brazilski plastični hirurg, inovator i vizionar u polju neinvazivne estetske medicine. Metodologija podrazumeva odlično poznavanje anatomije lica: injektovanje hijaluronskih filera na tačno određene tačke, botulinum toksina za gornju trećinu lica i kolagen stimulatora, nepogrešivo i na bezbedan način. Očuvanje zdravlja je uvek na prvom mestu, zbog čega biram najkvalitetnije i najbezbednije preparate: Juvederm hijaluronske filere i Botulinum toksin tipa A brenda Allergan.',
    },
    {
      heading: 'Nega i kvalitet kože',
      body: 'Promene na koži se ogledaju u gubitku turgora, elastičnosti i jedrine: javljaju se bore, pigmentacije i kapilari, a čest je i problem proširenih pora i akni. U zavisnosti od problematike, kvalitet kože popravljamo kombinacijom sledećih tretmana:',
      items: [
        'Kolagen stimulatori: hibridni kolagen stimulator HarmonyCa, Juvelook',
        'Morpheus 8: RF microneedling',
        'Laserski tretmani: Fotona 3D, 4D i 5D, Clear Skin, Clear Lift i DVL za stimulaciju kolagenih vlakana, rejuvenaciju i zatezanje kože',
        'Laserski tretmani: Nd:YAG, Er:YAG i DVL za kapilare, rozaceu, akne i pigmentacije',
        'Biorevitalizacija: Jalupro Super Hydro, Volite',
        'Hemijski pilinzi, PRP, polinukleotidi i egzozomi',
      ],
    },
    {
      heading: 'Zašto su bitni konsultacija i pregled',
      body: 'Konsultacija i pregled podrazumevaju sagledavanje svih strukturnih promena na licu i uzroka problema, kao i stanja kože, nakon čega planiram personalizovan plan tretmana, uz savet za produženu negu kod kuće i dugoročni plan da bi se postignuti rezultati što duže održali. Ovim pristupom mogu se korigovati i urođene karakteristike lica, kao što su manja brada, tanke ili nesrazmerne usne ili asimetrične obrve, kao i konturisanje lica i korekcija strukturnih promena nastalih starenjem. Nakon postizanja željenog rezultata, savet je da se rezultat održava i da se prevenira i usporava dalje starenje.',
    },
    {
      heading: 'Kako izabrati pravi estetski tretman',
      items: [
        'Konsultacija i pregled kod doktora sa iskustvom',
        'Doktor koji tretira lice kao celinu, kombinujući procedure individualnim pristupom, a ne samo "puni bore"',
        'Poverenje i uvid u dosadašnje radove doktora',
        'Kvalitetni i sigurni materijali',
        'Jasan plan rada sa doktorom za postizanje krajnjeg rezultata',
        'Plan tretmana za održavanje postignutog rezultata',
        'Savet za produženu negu kod kuće',
      ],
    },
  ],
  methods: [
    'MD Codes™ injekciona metodologija (dr Mauricio de Maio)',
    'Hijaluronski fileri: Juvederm (Allergan)',
    'Botulinum toksin tipa A: Allergan',
    'Kolagen stimulatori: HarmonyCa, Juvelook',
    'Morpheus 8: RF microneedling',
    'Laserski tretmani: Fotona 3D/4D/5D, Clear Skin, Clear Lift, DVL, Nd:YAG, Er:YAG',
    'Biorevitalizacija: Jalupro Super Hydro, Volite',
    'Hemijski pilinzi, PRP, polinukleotidi i egzozomi',
  ],
  howItWorks: [
    'Razgovor o željama i očekivanjima pacijenta.',
    'Detaljna analiza kože i strukture lica.',
    'Predlog individualnog plana tretmana.',
    'Objašnjenje procedura i očekivanih rezultata.',
    'Saveti za negu i održavanje postignutih rezultata.',
  ],
  idealCandidates: [
    'Pacijenti koji žele izbalansiran, prirodan rezultat bez narušavanja karakteristika lica.',
    'Osobe kod kojih se javljaju znaci starenja: podočnjaci, opuštenost, bore između obrva, marionetske bore ili opuštenost donje trećine lica.',
    'Pacijenti sa urođenim karakteristikama koje žele blago korigovati: manja brada, tanke ili nesrazmerne usne, asimetrične obrve.',
    'Osobe svih životnih doba, u zavisnosti od cilja: prevencija starenja, harmonizacija, remodeliranje, konturisanje ili korekcija.',
    'Pacijenti koji traže konsultaciju zasnovanu na proverenim metodama i kvalitetnim preparatima.',
    'Osobe koje žele dugoročan plan nege i održavanja rezultata, ne samo pojedinačnu intervenciju.',
  ],
  expectedResults: [
    'Svežiji, odmorniji i manje umoran izraz lica, uz podmlađivanje i za 5 do 10 godina.',
    'Izbalansirane proporcije i harmonija facijalnih struktura.',
    'Prirodan rezultat bez narušavanja prepoznatljivosti lica.',
    'Poboljšan kvalitet kože: čvrstina, elastičnost i ujednačen ten.',
    'Jasan plan održavanja rezultata kroz vreme.',
  ],
  faqs: [
    {
      question: 'Šta podrazumeva full face pristup?',
      answer: 'Sagledavanje lica kao celine (analizu kože, proporcija i strukturnih promena) umesto tretiranja pojedinačnih regija odvojeno, kako bi rezultat bio usklađen i prirodan.',
    },
    {
      question: 'Da li se tretmanom menja izgled lica?',
      answer: 'Ne. Cilj nije promena identiteta, već isticanje prirodnih osobina pacijenta i postizanje odmornijeg, svežijeg izgleda: dostojanstveno i kulturno starenje, bez promene crta lica.',
    },
    {
      question: 'Šta je MD Codes™ metodologija?',
      answer: 'MD Codes™ je injekciona metodologija koju je osmislio dr Mauricio de Maio, brazilski plastični hirurg i inovator u polju neinvazivne estetske medicine. Podrazumeva injektovanje hijaluronskih filera, botulinum toksina i kolagen stimulatora na tačno određene tačke lica, na osnovu detaljnog poznavanja anatomije.',
    },
    {
      question: 'Koje preparate i tehnologije koristite?',
      answer: 'U zavisnosti od procene, kombinujemo hijaluronske filere Juvederm i botulinum toksin tipa A brenda Allergan, kolagen stimulatore HarmonyCa i Juvelook, Morpheus8, laserske tretmane (Fotona 3D/4D/5D, Clear Skin, Clear Lift, Nd:YAG, Er:YAG), biorevitalizaciju Jalupro Super Hydro i Volite, kao i hemijske pilinge, PRP, polinukleotide i egzozome za kvalitet kože.',
    },
    {
      question: 'Da li se mogu korigovati i urođene karakteristike lica, a ne samo znaci starenja?',
      answer: 'Da. Uz pažljivu analizu i konsultaciju mogu se blago korigovati i urođene karakteristike, poput manje brade, tankih ili nesrazmernih usana ili asimetričnih obrva, uvek uz prirodan i nenametljiv rezultat.',
    },
    {
      question: 'Da li je potreban plan održavanja rezultata?',
      answer: 'Da. Nakon postizanja željenog rezultata predlažemo plan održavanja i savete za produženu negu kod kuće kako bi efekat trajao što duže.',
    },
  ],
  relatedServices: [
    { title: 'Hijaluronski fileri – Botoks i fileri', href: '/usluge/botoks-fileri' },
    { title: 'Morpheus 8', href: '/usluge/morpheus8' },
    { title: 'Profhilo', href: '/usluge/profhilo' },
  ],
}

export default function FullFacePage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/profhilo-treatment.jpg" />
}
