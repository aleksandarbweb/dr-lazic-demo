import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Injektovanje hijaluronskih filera | Ordinacija Dr. Terzić',
  description: 'Hijaluronski fileri u ordinaciji Dr. Terzić: suptilna korekcija, očuvanje prirodnih proporcija i podrška kvalitetu tkiva uz individualno planiranje i preciznu tehniku.',
}

const serviceData = {
  title: 'Injektovanje hijaluronskih filera',
  aboutHeading: 'Suptilna korekcija, očuvanje prirodnih proporcija i podrška kvalitetu tkiva',
  subtitle: 'Precizno oblikovanje i harmonizacija lica uz prirodan, nenametljiv rezultat',
  description: 'Savremeni pristup filerima zasnovan na analizi lica kao celine',
  pendingNotice: 'Fotografija za ovu uslugu još uvek nije dostavljena — trenutno je prikazana privremena zamenska slika. Tekst na stranici je kompletan i zvaničan.',
  whatIsIt: `Hijaluronski fileri su jedan od najčešće korišćenih tretmana u savremenoj estetskoj medicini. Njihova primena danas se ne zasniva samo na „popunjavanju bora“, već na preciznom oblikovanju, nadoknadi izgubljenog volumena, podršci tkivima i harmonizaciji proporcija lica.

Savremeni pristup filerima podrazumeva da se ne tretira samo ono što pacijent vidi u ogledalu, već da se analizira lice kao celina – njegove proporcije, struktura, kvalitet kože, gubitak volumena i promene koje nastaju procesom starenja. Zato je detaljna konsultacija i pregled pre tretmana od ključnog značaja.`,
  whatIsItSections: [
    {
      heading: 'Šta su hijaluronski fileri?',
      body: 'Hijaluronska kiselina je supstanca koja se prirodno nalazi u našem organizmu, posebno u koži i vezivnom tkivu. Ima sposobnost vezivanja vode i učestvuje u održavanju hidratacije, elastičnosti i strukture kože. Hijaluronski fileri sadrže stabilizovanu hijaluronsku kiselinu, čije su osobine prilagođene različitim potrebama tkiva. U zavisnosti od njihove strukture, gustine i stepena umrežavanja, različiti fileri imaju različita svojstva – od suptilne hidratacije i poboljšanja kvaliteta kože do potpore dubljim strukturama i nadoknade volumena.',
    },
    {
      heading: 'Konsultacija i planiranje – prvi korak do dobrog rezultata',
      body: 'Dobar rezultat ne počinje aplikacijom filera, već dobrom procenom i planom. Pre tretmana analiziramo:',
      items: [
        'anatomiju i proporcije lica',
        'simetriju',
        'kvalitet i debljinu kože',
        'gubitak volumena',
        'položaj i karakteristike mekih tkiva',
        'izraženost bora i pregiba',
        'mimiku',
        'prethodne estetske tretmane',
        'želje i očekivanja pacijenta',
      ],
    },
    {
      heading: 'Šta se može postići hijaluronskim filerima?',
      body: 'Pravilno odabrani filer može se koristiti za nadoknadu izgubljenog volumena, oblikovanje i definisanje kontura lica, diskretno naglašavanje jagodica, definisanje brade i donje vilice, korekciju određenih proporcija lica, ublažavanje nazolabijalnih i marionetskih pregiba, korekciju podočnjaka kod pažljivo odabranih pacijenata, oblikovanje i diskretno povećanje usana, korekciju određenih asimetrija i poboljšanje hidratacije i kvaliteta kože kod odgovarajućih preparata. Filer može biti deo strategije podmlađivanja, ali i deo preventivnog pristupa kojim se nastoji očuvati sklad i struktura lica tokom vremena.',
    },
    {
      heading: 'Prirodnost je naš standard',
      body: 'Najbolji rezultat filera nije onaj koji se odmah uočava kao „urađen“. Cilj je da lice izgleda odmoreno, svežije, skladnije i proporcionalnije, bez gubitka individualnih karakteristika. To zahteva mnogo više od samog izbora proizvoda. Na prirodan rezultat utiču: znanje doktora, poznavanje anatomije, pravilna procena tkiva, kvalitet proizvoda, odgovarajuća tehnika, pravilna količina i dobar plan. Upravo zato isti filer može dati potpuno različit rezultat u različitim rukama.',
    },
    {
      heading: 'Kvalitet filera i tehnika aplikacije',
      body: 'Bezbednost i kvalitet rezultata počinju izborom proverenog, registrovanog i medicinski ispitanog proizvoda. Ali kvalitet proizvoda sam po sebi nije dovoljan. Lekar mora poznavati anatomiju regije, ponašanje različitih preparata u tkivu, njihove fizičke karakteristike i moguće rizike. Tehnika aplikacije, dubina postavljanja, količina proizvoda i način raspoređivanja u tkivu jednako su važni kao i sam izbor filera. Zato u estetskoj medicini kvalitet proizvoda i znanje i iskustvo lekara moraju biti posmatrani zajedno.',
    },
    {
      heading: 'Kako izgleda intervencija?',
      body: 'Nakon konsultacije i definisanja plana, koža se priprema za proceduru. Filer se aplikuje tankom iglom ili kanilom, u zavisnosti od regije, anatomije i tehnike koja se koristi. Aplikacija se vrši precizno i u odgovarajući sloj tkiva, uz kontinuiranu kontrolu količine i rasporeda preparata. Procedura najčešće traje 30–60 minuta, u zavisnosti od broja regija koje se tretiraju. Većina savremenih filera sadrži lidokain, a po potrebi se mogu koristiti i dodatne metode lokalne anestezije kako bi tretman bio što komforniji.',
    },
    {
      heading: 'Koliko traje efekat?',
      body: 'Trajanje efekta zavisi od vrste i karakteristika filera, tretirane regije, količine proizvoda, individualnog metabolizma, pokretljivosti regije i životnih navika. U zavisnosti od preparata i regije, efekat može trajati oko 6–18 meseci, a kod pojedinih dubljih i strukturnih aplikacija i duže. Filer se vremenom postepeno razgrađuje i njegov efekat se smanjuje. Tretman se ne ponavlja po unapred određenom kalendaru, već kada je to potrebno, odnosno kada se efekat značajno smanji i nakon ponovne procene.',
    },
    {
      heading: 'Šta pre tretmana?',
      body: 'Pre aplikacije je važno obavestiti lekara o svim lekovima i suplementima koje koristite, prethodnim estetskim tretmanima, eventualnim alergijama ili ranijim reakcijama, postojanju aktivne infekcije, upale ili herpesa u regiji koja se tretira, kao i prethodno aplikovanim filerima, posebno ako su rađeni u drugoj ordinaciji. Ukoliko je moguće, nekoliko dana pre tretmana treba izbegavati nepotrebnu upotrebu lekova i suplemenata koji povećavaju sklonost ka krvarenju ili stvaranju modrica — isključivo uz prethodni dogovor sa lekarom i nikada samostalnim prekidanjem propisane terapije. Na dan tretmana preporučuje se da koža bude čista i bez aktivne iritacije.',
    },
    {
      heading: 'Šta posle tretmana?',
      body: 'Odmah nakon aplikacije mogu se javiti blagi otok, crvenilo, osetljivost, modrice i osećaj zatezanja u tretiranoj regiji. Ove reakcije su uglavnom prolazne. Tokom prvih 24–48 sati preporučuje se ne pritiskati i ne masirati tretiranu regiju (osim ako lekar drugačije ne preporuči), prvu noć spavati na leđima, izbegavati intenzivan fizički napor 5–7 dana, izbegavati saunu, veoma toplu kupku i intenzivno zagrevanje 5–7 dana, te ne planirati druge invazivne estetske procedure 3–4 nedelje. Kod tretmana usana ili regija sklonih otoku, otok može biti izraženiji i trajati nekoliko dana. U ovim slučajevima, nakon tretmana izbegavati alkohol, tople napitke, slamčice, cigarete i ljubljenje.',
    },
    {
      heading: 'Kada se vidi konačan rezultat?',
      body: 'Rezultat je vidljiv odmah nakon aplikacije, ali neposredno nakon tretmana mogu biti prisutni otok i blaga asimetrija, zbog čega se konačan rezultat ne procenjuje odmah. Nakon smirivanja reakcije tkiva se za 3–4 nedelje obavlja kontrolni pregled i procenjuje da li je potrebna dodatna korekcija.',
    },
    {
      heading: 'Bezbednost na prvom mestu',
      body: 'Hijaluronski fileri imaju veoma dobar profil bezbednosti kada se koriste odgovarajući, medicinski odobreni proizvodi i kada ih primenjuje iskusan lekar sa dobrim poznavanjem anatomije lica. Ipak, kao i svaka medicinska procedura, injektovanje filera nosi određene rizike. Zato je pravilna selekcija pacijenta, poznavanje anatomije, odgovarajuća tehnika i spremnost lekara da prepozna i pravovremeno zbrine eventualnu komplikaciju sastavni deo bezbednog tretmana.',
    },
    {
      heading: 'Naš princip',
      body: 'Manje je često više. Filer ne koristimo da bismo promenili lice, već da bismo vratili ono što je vremenom izgubljeno, poboljšali proporcije i sačuvali prirodnu harmoniju lica. Naš cilj je da rezultat bude vidljiv u najboljem smislu – da izgledate bolje, ali da i dalje izgledate kao vi. Dobra procena → individualni plan → kvalitetan proizvod → precizna tehnika → prirodan rezultat.',
    },
  ],
  howItWorks: [
    'Na osnovu pregleda određujemo da li je filer uopšte potreban, koji preparat je odgovarajući, u koju regiju ga treba aplikovati i koja količina je dovoljna.',
    'U nekim slučajevima najbolji rezultat nije dodavanje volumena, već kombinovanje filera sa drugim procedurama ili odlaganje tretmana.',
  ],
  relatedServices: [
    { title: 'Botulinum toksin – botox', href: '/usluge/botulinum-toksin' },
    { title: 'Kolagen stimulatori', href: '/usluge/kolagen-stimulatori' },
    { title: 'Personalizovani Full Face tretmani', href: '/usluge/full-face' },
  ],
}

export default function HijaluronskiFileriPage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/botoks-treatment.jpg" />
}
