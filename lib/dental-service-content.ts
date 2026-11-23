export type DentalServiceContent = {
  title: string
  aboutHeading: string
  subtitle: string
  description: string
  whatIsIt: string
  howItWorks: string[]
  idealCandidates: string[]
  expectedResults: string[]
  faqs: { question: string; answer: string }[]
  relatedSlugs: string[]
}

export const dentalServiceContent: Record<string, DentalServiceContent> = {
  'stomatoloski-pregled-i-konsultacije': {
    title: 'Stomatološki pregled i konsultacije',
    aboutHeading: 'Prvi korak ka zdravom osmehu',
    subtitle: 'Prvi pregled je besplatan: detaljna dijagnostika i plan terapije samo za vas',
    description:
      'U prijatnom ambijentu ordinacije Dr Vesna Lazić dobijate jasnu dijagnozu, opcije lečenja i transparentne informacije o toku i ceni terapije.',
    whatIsIt: `Vaš prvi kontakt sa nama treba da bude prijatan i da omogući uzajamno poverenje. Razgovor sa iskusnim stručnim timom u ambijentu Dental Clinic Dr Vesna Lazić pruža vam mogućnost individualno izrađenog plana terapije.

Vršimo klinički pregled i, po potrebi, rendgen snimanja radi precizne dijagnoze. Nakon analize nalaza određuje se plan koji odgovara vašim potrebama, bilo da vas zanimaju implantati, hirurgija, protetika, estetika ili preventiva.

Prvi pregled je besplatan. Na njemu saznajete sve o svom stomatološkom problemu, metodama rešavanja i okvirnoj ceni usluga, bez obaveze i pritiska.`,
    howItWorks: [
      'Zakazivanje termina, telefonom, WhatsApp-om ili putem kontakt forme.',
      'Razgovor o tegobama, očekivanjima i eventualnoj medicinskoj anamnezi.',
      'Detaljan klinički pregled usne duplje i, po potrebi, rendgen dijagnostika.',
      'Predlog individualnog plana terapije sa jasnim koracima i prioritetima.',
      'Informacija o materijalima, trajanju i ceni, transparentno i bez skrivenih stavki.',
    ],
    idealCandidates: [
      'Osobe koje prvi put dolaze u ordinaciju ili žele drugo mišljenje',
      'Pacijenti sa nejasnim bolom, osetljivošću ili estetskim dilemama',
      'Osobe koje planiraju implantate, protetiku ili kompletnu rehabilitaciju',
      'Svi koji žele preventivni pregled i miran plan održavanja oralnog zdravlja',
    ],
    expectedResults: [
      'Jasna dijagnoza i razumevanje stanja u ustima',
      'Strukturisan plan terapije prilagođen vama',
      'Transparentne informacije o metodama i ceni',
      'Osećaj poverenja pre početka bilo kog zahvata',
    ],
    faqs: [
      {
        question: 'Da li je prvi pregled zaista besplatan?',
        answer:
          'Da. Prvi stomatološki pregled i konsultacije u Dental Clinic Dr Vesna Lazić su besplatni.',
      },
      {
        question: 'Da li se na pregledu radi i snimanje?',
        answer:
          'Po potrebi vršimo rendgen snimanja kako bismo postavili što precizniju dijagnozu i plan terapije.',
      },
      {
        question: 'Koliko traje konsultacija?',
        answer:
          'Obično 20–40 minuta, u zavisnosti od složenosti slučaja i broja pitanja koje imate.',
      },
      {
        question: 'Moram li odmah započeti terapiju?',
        answer:
          'Ne. Dobijate plan i informacije; odluku o početku terapije donosite vi, u svom ritmu.',
      },
    ],
    relatedSlugs: ['estetska-stomatologija', 'implantologija', 'protetika'],
  },

  'estetska-stomatologija': {
    title: 'Estetska stomatologija',
    aboutHeading: 'Šta je estetska stomatologija?',
    subtitle: 'Ispuni, beljenje, CAD/CAM i fasete, osmeh koji izgleda prirodno i skladno',
    description:
      'Oralna rehabilitacija koja spaja zdravlje i estetiku: od jednostavnih ispuna do kompletne transformacije osmeha.',
    whatIsIt: `Estetska stomatologija nastala je težnjom za lepšim, zdravijim osmehom. Podrazumeva oralnu rehabilitaciju koja maksimalno zadovoljava estetske zahteve pacijenta, uz očuvanje funkcije i dugovečnosti.

Obuhvata estetske ispune, krunice i mostove, beljenje zuba, CAD/CAM nadoknade i fasete (uključujući no-prep opcije), pa sve do procedura koje potpuno menjaju izgled osmeha. Cilj nije veštački izgled, već skladan, prirodan rezultat koji podiže samopouzdanje i ostavlja odličan prvi utisak.

U ordinaciji Dr Vesna Lazić radimo sa najboljim materijalima i savremenim tehnologijama, uz pažljivo planiranje boje, oblika i proporcija.`,
    howItWorks: [
      'Konsultacija i analiza osmeha, boje zuba i proporcija lica.',
      'Predlog rešenja: ispuni, beljenje, fasete, CAD/CAM ili kombinacija.',
      'Priprema i, po potrebi, digitalni ili klasični otisci.',
      'Izrada i proba nadoknada uz korekcije do potpunog sklada.',
      'Finalno cementiranje / završetak i uputstva za održavanje.',
    ],
    idealCandidates: [
      'Osobe nezadovoljne bojom, oblikom ili razmacima zuba',
      'Pacijenti sa starim, uočljivim ispunima ili oštećenom gleđi',
      'Osobe koje žele prirodan osmeh bez preteranog filmskog efekta',
      'Pacijenti koji kombinuju estetiku sa funkcionalnom rehabilitacijom',
    ],
    expectedResults: [
      'Harmoničniji, svetliji i prirodniji osmeh',
      'Bolja oralna estetika uz očuvanu funkciju žvakanja',
      'Veće samopouzdanje u svakodnevnim i profesionalnim situacijama',
      'Dugovečna rešenja uz pravilnu higijenu i kontrole',
    ],
    faqs: [
      {
        question: 'Da li beljenje šteti zubima?',
        answer:
          'Kada se radi kontrolisano u ordinaciji, beljenje je bezbedno. Prethodno se procenjuje stanje gleđi i eventualna osetljivost.',
      },
      {
        question: 'Šta su fasete?',
        answer:
          'Tanke keramičke ili kompozitne ljuspice koje se postavljaju na prednju površinu zuba radi korekcije boje, oblika ili manjih nepravilnosti.',
      },
      {
        question: 'Šta je CAD/CAM?',
        answer:
          'Digitalna tehnologija za preciznu izradu krunica, inlaya i drugih nadoknada, brže, preciznije i sa odličnom estetskom reprodukcijom.',
      },
    ],
    relatedSlugs: ['estetski-ispuni', 'beljenje-zuba', 'fasete'],
  },

  'estetski-ispuni': {
    title: 'Estetski ispuni',
    aboutHeading: 'Šta su estetski ispuni?',
    subtitle: 'Kompozit i keramika u boji zuba, plombe, inlay i onlay koji se ne ističu',
    description:
      'Savremena restauracija zuba oštećenih karijesom ili traumom materijalima koji prate prirodnu boju i prozirnost gleđi.',
    whatIsIt: `Estetski ispuni su redovan postupak popravke zuba oštećenih karijesom ili traumom, uz rezultat koji ne narušava prirodan izgled osmeha. Umesto starih amalgamskih plombi, danas koristimo kompozitne materijale i dentalnu keramiku koji u potpunosti prate boju i prozirnost prirodnog zuba.

U ordinaciji Dr Vesna Lazić radimo sa proverenim svetskim brendovima (Fuji GC, 3M, Coltene-Whaledent, Ivoclar i drugi). Kod manjih oštećenja dovoljan je direktan kompozitni ispun. Kod većih destrukcija predlažemo inlay (nadoknada u zubu) ili onlay (nadoknada na zubu): keramičke restauracije koje se izrađuju CAD/CAM tehnologijom u jednoj poseti ili u saradnji sa laboratorijom.

Cilj nije samo „zakrpati“ zub, već vratiti snagu, oblik i estetiku tako da restauracija bude neprimetna u osmehu.`,
    howItWorks: [
      'Pregled, procena obima oštećenja i izbor materijala (kompozit, inlay, onlay).',
      'Uklanjanje karijesa / stare plombe uz zaštitu zdravog tkiva.',
      'Izrada direktnog ispuna ili digitalni / klasični otisak za indirektnu nadoknadu.',
      'Kod CAD/CAM: skeniranje, dizajn i cementiranje u istoj poseti kad je moguće.',
      'Finalno poliranje, provera zagrižaja i uputstva za održavanje.',
    ],
    idealCandidates: [
      'Osobe sa karijesom, starom amalgamskom plombom ili frakturom gleđi',
      'Pacijenti koji žele restauraciju neprimetnu u boji i obliku',
      'Osobe sa većim oštećenjem kojima odgovara inlay ili onlay umesto krunice',
      'Svi koji kombinuju funkcionalnu popravku sa estetskim zahtevima',
    ],
    expectedResults: [
      'Prirodan izgled zuba bez metalnog ili sivkastog odsjaja',
      'Obnovljena snaga i oblik oštećenog zuba',
      'Dugovečna restauracija uz pravilnu higijenu',
      'Osmeh bez uočljivih „zakrpa“',
    ],
    faqs: [
      {
        question: 'Da li treba zameniti stare amalgamske plombe?',
        answer:
          'Ne uvek automatski. Predlažemo zamenu kada postoji propadanje, curenje, fraktura ili estetski razlog, nakon pregleda i dogovora.',
      },
      {
        question: 'Šta je razlika između ispuna, inlaya i onlaya?',
        answer:
          'Direktni ispun se modeluje u ustima. Inlay se izrađuje van usta i postavlja u zub; onlay pokriva i deo površine zuba. Veća oštećenja češće traže inlay/onlay.',
      },
      {
        question: 'Koliko traje estetski ispun?',
        answer:
          'Uz dobru higijenu i redovne kontrole, kvalitetni kompozitni i keramički ispuni traju godinama. Trajnost zavisi i od zagrižaja i navika (npr. bruksizam).',
      },
    ],
    relatedSlugs: ['estetska-stomatologija', 'cad-cam', 'protetika'],
  },

  'beljenje-zuba': {
    title: 'Beljenje zuba',
    aboutHeading: 'Šta je beljenje zuba?',
    subtitle: 'Ordinacijsko, kućno i unutrašnje beljenje, svetliji osmeh bezbedno i kontrolisano',
    description:
      'Neinvazivni estetski tretmani za ujednačenu, prirodno svetliju boju zuba, individualno prema vašim potrebama.',
    whatIsIt: `Beljenje zuba jedan je od najpopularnijih i najneinvazivnijih načina da osmeh deluje sveže i skladnije. U Dental Clinic Dr Vesna Lazić nudimo biološki proverene protokole, prilagođene stanju gleđi, osetljivosti i željenom stepenu posvetljenja.

Kućno beljenje podrazumeva individualno izrađen providni splint na osnovu otiska vaših zuba. U splint se nanosi gel; nosi se nekoliko sati danju ili tokom noći, prema uputstvu. Ordinacijsko beljenje radi se u jednoj poseti: usne i desni se štite, na zube se nanosi gel koji se aktivira svetlošću lampe: obično u tri ciklusa po oko 15 minuta, sa vidljivim rezultatom već za oko 45 minuta.

Posebna opcija je unutrašnje beljenje potamnelih „mrtvih“ zuba nakon endodoncije. Svaka metoda bira se nakon pregleda, bezbedno, bez preteranog beljenja i bez lažnih obećanja o „holivudskom“ belom.`,
    howItWorks: [
      'Pregled, procena boje, gleđi i eventualne osetljivosti.',
      'Izbor protokola: kućni splint, ordinacijsko beljenje ili unutrašnje beljenje.',
      'Priprema, zaštita desni / izrada individualnog splinta.',
      'Primena gela i, kod ordinacijskog tretmana, aktivacija lampom.',
      'Kontrola rezultata i saveti za održavanje beline.',
    ],
    idealCandidates: [
      'Osobe nezadovoljne žućkastom ili neujednačenom bojom zuba',
      'Pacijenti sa zdravom gleđi koji žele neinvazivnu estetsku promenu',
      'Osobe sa potamnjelim zubom nakon lečenja kanala',
      'Pacijenti koji žele prirodno posvetljenje pre faseta ili estetskih ispuna',
    ],
    expectedResults: [
      'Svetliji, svežiji i ujednačeniji osmeh',
      'Rezultat već u jednoj poseti kod ordinacijskog protokola',
      'Bezbedan tretman uz prethodnu procenu gleđi',
      'Veće samopouzdanje u svakodnevnim situacijama',
    ],
    faqs: [
      {
        question: 'Da li beljenje šteti zubima?',
        answer:
          'Kada se radi kontrolisano u ordinaciji, uz procenu gleđi i osetljivosti, beljenje je bezbedno. Izbegavamo agresivne protokole i „uradi sam“ rastvore nepoznatog porekla.',
      },
      {
        question: 'Koliko traje efekat?',
        answer:
          'Zavisi od ishrane, pušenja i higijene. Uz dobre navike i povremeno održavanje, rezultat može trajati mesecima do godinu i više.',
      },
      {
        question: 'Da li beljenje boli?',
        answer:
          'Većina pacijenata ne oseća bol. Moguća je prolazna osetljivost koja brzo jenjava. Po potrebi biramo blaži protokol ili kućno beljenje.',
      },
    ],
    relatedSlugs: ['estetska-stomatologija', 'fasete', 'terapija-laserom'],
  },

  'cad-cam': {
    title: 'CAD/CAM',
    aboutHeading: 'Šta je CAD/CAM u stomatologiji?',
    subtitle: 'Digitalni dizajn i izrada nadoknada, precizno naleganje, često u jednoj poseti',
    description:
      'Kompjuterski vođena izrada keramičkih krunica, inlaya, onlaya, faseta i manjih mostova od vrhunskih blokova.',
    whatIsIt: `CAD/CAM (computer-aided design / computer-aided manufacturing) zauzima ključno mesto u estetskoj stomatologiji i protetici. Umesto višednevnog čekanja laboratorije, digitalni protokol omogućava da se mnoge nadoknade izrade i cementiraju u istoj poseti, uz izuzetnu preciznost naleganja.

Preparisani zub skenira se direktno u ustima (npr. CEREC kamerom). Dobijaju se vrlo precizni snimci granice preparacije, ključ uspeha. Softverom se dizajnira nadoknada, a zatim se u ordinaciji frezira od estetskog keramičkog bloka. Od skeniranja do cementiranja često prođe 1–2 sata.

Nadoknade mogu biti fasete, inlayi, onlayi, krunice i manji mostovi. Koristimo CEREC blokove vodećih proizvođača (Vita Zahnfabrik, Ivoclar Vivadent, Sirona i drugi): biokompatibilne, dugovečne i dostupne u širokom spektru boja za prirodan estetski rezultat.`,
    howItWorks: [
      'Pregled, plan terapije i priprema zuba za nadoknadu.',
      'Intraoralno skeniranje (digitalni otisak) bez neprijatnih masa kad je moguće.',
      'Kompjuterski dizajn oblika, kontakta i boje.',
      'Freziranje keramičkog bloka i karakterizacija / poliranje.',
      'Proba, cementiranje i provera zagrižaja: često istog dana.',
    ],
    idealCandidates: [
      'Osobe kojima je potrebna krunica, inlay, onlay ili faseta',
      'Pacijenti koji žele manje poseta i brži završetak terapije',
      'Osobe koje traže precizno naleganje i visoku estetiku',
      'Pacijenti koji preferiraju digitalni otisak umesto klasičnih masa',
    ],
    expectedResults: [
      'Precizno naleganje nadoknade uz minimalne korekcije',
      'Prirodan estetski rezultat od kvalitetne keramike',
      'Kraće vreme terapije: često jedna poseta',
      'Biokompatibilna, dugovečna restauracija',
    ],
    faqs: [
      {
        question: 'Da li se sve nadoknade rade CAD/CAM-om u jednoj poseti?',
        answer:
          'Mnoge da: krunice, inlayi, onlayi i fasete. Složeniji mostovi ili posebni materijali ponekad zahtevaju laboratorijski korak; dogovaramo to unapred.',
      },
      {
        question: 'Da li je digitalni otisak neprijatan?',
        answer:
          'Većina pacijenata ga doživljava kao znatno prijatniji od klasičnih otisnih masa. Skeniranje traje kratko i bez gušenja.',
      },
      {
        question: 'Koje materijale koristite?',
        answer:
          'Radimo sa vrhunskim keramičkim blokovima (Vita, Ivoclar, Sirona i drugi), biranim prema indikaciji, boji i zahtevima čvrstoće.',
      },
    ],
    relatedSlugs: ['fasete', 'protetika', 'estetski-ispuni'],
  },

  fasete: {
    title: 'Fasete',
    aboutHeading: 'Šta su fasete?',
    subtitle: 'Tanke keramičke ljuspice, korekcija boje, oblika i razmaka uz minimalnu preparaciju',
    description:
      'Keramičke, no-prep i kompozitne fasete za prirodan, skladan osmeh, uključujući CEREC izradu u ordinaciji.',
    whatIsIt: `Fasete (veneers) su tanke ljuspice koje se postavljaju na prednju površinu zuba kako bi se korigovali boja, oblik, veličina ili manji razmaci, uz znatno manju preparaciju nego kod klasične krunice. Ostale površine zuba ostaju netaknute, što je biološki povoljnije rešenje kada indikacija to dozvoljava.

Keramičke fasete izrađujemo od visokokvalitetne keramike, često CEREC CAD/CAM tehnologijom: nakon minimalne preparacije uzima se optički otisak i izrada može biti istog dana. Kada radi tehničar, koristi se klasični otisak, a fasete stižu za nekoliko dana. Fiksiranje je specijalnom adhezivnom tehnikom.

No-prep fasete omogućavaju cementiranje ekstremno tankih ljuspica bez brušenja, tamo gde anatomija i indikacija to dozvoljavaju. Kompozitne fasete mogu dati dobar estetski efekat, ali dugoročna postojanost boje više zavisi od materijala i održavanja, zato pažljivo biramo opciju za svaki slučaj.`,
    howItWorks: [
      'Konsultacija, analiza osmeha i izbor tipa fasete (keramika, no-prep, kompozit).',
      'Po potrebi mock-up / proba oblika i boje.',
      'Minimalna preparacija ili no-prep protokol.',
      'Digitalni ili klasični otisak i izrada (CEREC istog dana ili laboratorija).',
      'Adhezivno cementiranje, poliranje i uputstva za negu.',
    ],
    idealCandidates: [
      'Osobe koje žele da promene boju, oblik ili veličinu prednjih zuba',
      'Pacijenti sa tetraciklinskim prebojenjima koja ne reaguju na beljenje',
      'Osobe sa razmacima, sitnim frakturama ili starim estetski neprihvatljivim ispunima',
      'Pacijenti koji žele manje invazivno rešenje od pune krunice',
    ],
    expectedResults: [
      'Skladan, prirodan osmeh bez „veštačkog“ sjaja',
      'Korekcija boje i oblika uz očuvanje što više zubne mase',
      'Dugovečan rezultat uz keramičke fasete i dobru higijenu',
      'Veće samopouzdanje u privatnom i profesionalnom životu',
    ],
    faqs: [
      {
        question: 'Da li se zubi uvek bruse za fasete?',
        answer:
          'Ne. Kod no-prep protokola brušenje nije potrebno. Kod klasičnih keramičkih faseta uklanja se tanak sloj sa prednje površine, znatno manje nego za krunicu.',
      },
      {
        question: 'Koliko traju fasete?',
        answer:
          'Keramičke fasete, uz pravilnu higijenu i izbegavanje navika kao što je grickanje tvrdih predmeta, mogu trajati mnogo godina. Redovne kontrole su deo održavanja.',
      },
      {
        question: 'Fasete ili beljenje?',
        answer:
          'Beljenje menja boju zdravih zuba bez nadoknade. Fasete rešavaju i oblik, razmake i prebojenja koja beljenje ne može. Često ih kombinujemo, beljenje susednih zuba pre faseta.',
      },
    ],
    relatedSlugs: ['cad-cam', 'beljenje-zuba', 'estetska-stomatologija'],
  },

  implantologija: {
    title: 'Implantologija',
    aboutHeading: 'Šta je implantologija?',
    subtitle: 'Nadoknada zuba bez brušenja susednih, pouzdani implantati i dugoročna stabilnost',
    description:
      'Savremena nadoknada jednog ili više zuba implantatima vrhunskih sistema, uključujući fiksna i mobilna rešenja.',
    whatIsIt: `Implantologija omogućava nadoknadu zuba koji nedostaje bez oštećenja preostalih zuba. Ugradnja implantata danas je rutinski zahvat, traje oko tridesetak minuta, radi se u lokalnoj anesteziji i potpuno je bezbolna. Implantat služi kao nosač za buduću protetsku nadoknadu.

Kada se odlučiti za implantat:
• Nedostatak jednog zuba: čuvamo susedne zube koji bi se inače brusili za klasičan most.
• Nedostatak više zuba: implantati nose most.
• Bezubost: fiksno rešenje (most na 6–8 implantata) ili mobilno (proteza na implantatima / mini implantatima) za znatno veću stabilnost.

Koristimo savremene metode: imedijatnu ugradnju, imedijatno opterećenje i regenerativne tehnike. Sistemi u ordinaciji uključuju Nobel Biocare, Zimmer Dental i druge proverene brendove.`,
    howItWorks: [
      'Pregled, 3D/rendgen dijagnostika i plan ugradnje.',
      'Ugradnja implantata u lokalnoj anesteziji.',
      'Period oseointegracije, srastanje implantata sa kosti.',
      'Postavljanje abutmenta i izrada protetske nadoknade.',
      'Kontrole i uputstva za dugoročno održavanje.',
    ],
    idealCandidates: [
      'Osobe sa nedostatkom jednog ili više zuba',
      'Pacijenti koji ne žele brušenje zdravih susednih zuba',
      'Osobe sa nestabilnom protezom koje žele fiksno ili polufiksno rešenje',
      'Pacijenti sa adekvatnom količinom kosti ili spremni na regenerativne procedure',
    ],
    expectedResults: [
      'Stabilna, funkcionalna i estetska nadoknada zuba',
      'Očuvanje susednih zuba i koštane strukture',
      'Poboljšano žvakanje i govor',
      'Dugoročna pouzdanost uz redovne kontrole',
    ],
    faqs: [
      {
        question: 'Da li je ugradnja bolna?',
        answer:
          'Ne. Zahvat se radi u lokalnoj anesteziji i pacijenti ga opisuju kao bezbolan. Nakon intervencije moguć je blagi otok koji brzo prolazi.',
      },
      {
        question: 'Koliko traje proces do gotove krunice?',
        answer:
          'Zavisi od slučaja. Kod imedijatnog opterećenja privremena nadoknada može biti ranije; trajna protetika sledi nakon uspešne oseointegracije.',
      },
      {
        question: 'Koje brendove implantata koristite?',
        answer:
          'Radimo sa Nobel Biocare, Zimmer Dental i drugim vrhunskim sistemima, u skladu sa indikacijom i planom terapije.',
      },
    ],
    relatedSlugs: ['oralna-hirurgija', 'protetika', 'stomatoloski-pregled-i-konsultacije'],
  },

  'oralna-hirurgija': {
    title: 'Oralna hirurgija',
    aboutHeading: 'Šta obuhvata oralna hirurgija?',
    subtitle: 'Bezbolne intervencije uz minimalnu traumu, od vađenja do pripreme za protetiku',
    description:
      'Hirurške procedure u usnoj duplji sa lokalnom anestezijom, savremenim protokolima i pažnjom prema okolnim tkivima.',
    whatIsIt: `Savremena stomatologija, odgovarajućim hirurškim postupcima i lokalnom anestezijom, omogućava bezbolne oralno-hirurške intervencije sa minimalnom traumom okolnih tkiva i retkim postoperativnim komplikacijama.

Oralna hirurgija obuhvata vađenje zuba, hirurško vađenje impaktiranih umnjaka i očnjaka, vađenje zaostalih korenova, apikotomiju, odstranjivanje tumora i cista, nivelaciju alveolarnog grebena, kao i pripremu mekih i koštanih struktura za protetsku rehabilitaciju.

Obuhvata i ugradnju implantata, vođenu regeneraciju tkiva, podizanje poda maksilarnog sinusa i korekcije nepravilnosti vilica i zuba. Svaki zub je dragocen, cilj je sačuvati ga kad god je to moguće.`,
    howItWorks: [
      'Pregled, dijagnostika i plan hirurške intervencije.',
      'Lokalna anestezija i bezbolno izvođenje zahvata.',
      'Minimalno invazivan pristup uz zaštitu okolnih struktura.',
      'Jasna postoperativna uputstva i terapija po potrebi.',
      'Kontrolni pregled i praćenje zarastanja.',
    ],
    idealCandidates: [
      'Osobe sa impaktiranim umnjacima ili problematičnim korenovima',
      'Pacijenti kojima je potrebna apikotomija ili uklanjanje cista',
      'Osobe u pripremi za implantate ili protetiku',
      'Pacijenti kojima je potreban hirurški pristup uz maksimalnu pažnju prema tkivima',
    ],
    expectedResults: [
      'Rešavanje akutnog ili hroničnog problema u usnoj duplji',
      'Minimalan otok i brži oporavak uz savremeni protokol',
      'Pripremljena osnova za protetiku ili implantate',
      'Očuvanje što većeg broja zdravih struktura',
    ],
    faqs: [
      {
        question: 'Da li ću osećati bol tokom zahvata?',
        answer:
          'Ne. Intervencije se rade u lokalnoj anesteziji. Nakon zahvata moguć je blagi otok ili nelagoda koji se kontrolišu standardnom terapijom.',
      },
      {
        question: 'Kada mogu da se vratim svakodnevnim aktivnostima?',
        answer:
          'Većina pacijenata se vraća uobičajenom ritmu već narednog dana, uz poštovanje postoperativnih uputstava.',
      },
    ],
    relatedSlugs: ['implantologija', 'endodoncija', 'parodontologija'],
  },

  protetika: {
    title: 'Protetika',
    aboutHeading: 'Šta je stomatološka protetika?',
    subtitle: 'Krunice, mostovi i proteze, estetska i funkcionalna rehabilitacija usne duplje',
    description:
      'Nadoknada izgubljenih zuba i tkiva najsavremenijim materijalima: bezmetalna keramika, cirkonijum, alumina, Empress i drugi.',
    whatIsIt: `Stomatološka protetika bavi se nadoknadom izgubljenih tkiva usne duplje, estetskom i funkcionalnom rehabilitacijom pomoću krunica, mostova i proteza. Izrada svake zubne nadoknade je medicinski zahvat sa terapijskim smislom: obnavljanje funkcije žvakanja, govora i sklada lica.

Nedostatak zuba može dovesti do tegoba u viličnim zglobovima, povećane pokretljivosti preostalih zuba i promena međuviličnih odnosa. Kod većeg gubitka zuba opada efikasnost žvakanja i menja se vertikalna dimenzija lica, protetsko zbrinjavanje to rešava.

U ordinaciji Dr Vesna Lazić jednaku pažnju posvećujemo funkciji i estetici. Koristimo najsavremenije metode i materijale: bezmetalnu keramiku (zirconia, alumina, Empress i dr.), uz precizan rad specijaliste stomatološke protetike.`,
    howItWorks: [
      'Pregled, analiza zagrižaja i plan tipa nadoknade.',
      'Priprema zuba / implantata i uzimanje otisaka (klasično ili digitalno).',
      'Proba i korekcije privremenih ili definitivnih nadoknada.',
      'Finalno cementiranje ili predaja proteze.',
      'Uputstva za higijenu i redovne kontrole.',
    ],
    idealCandidates: [
      'Osobe sa jednim ili više nedostajućih zuba',
      'Pacijenti sa oštećenim, prelomljenim ili estetski neprihvatljivim zubima',
      'Osobe sa nestabilnim ili zastarelim protezama',
      'Pacijenti nakon endodoncije kojima je potrebna krunica',
    ],
    expectedResults: [
      'Obnovljena funkcija žvakanja i govora',
      'Prirodan estetski izgled osmeha i lica',
      'Stabilniji međuvilični odnosi',
      'Dugovečna nadoknada uz pravilno održavanje',
    ],
    faqs: [
      {
        question: 'Šta je bolje, most ili implantat?',
        answer:
          'Zavisi od slučaja. Implantat čuva susedne zube; most može biti odgovarajući kada implantacija nije indicirana. Predlažemo rešenje nakon pregleda.',
      },
      {
        question: 'Koliko traje izrada krunice?',
        answer:
          'Od nekoliko dana do par nedelja, u zavisnosti od materijala, CAD/CAM protokola i složenosti slučaja.',
      },
    ],
    relatedSlugs: ['implantologija', 'estetska-stomatologija', 'endodoncija'],
  },

  parodontologija: {
    title: 'Parodontologija',
    aboutHeading: 'Šta je parodontologija?',
    subtitle: 'Lečenje bolesti potpornog aparata zuba, od čišćenja do regeneracije tkiva',
    description:
      'Konzervativne i hirurške metode za kontrolu parodontopatije i učvršćivanje zuba.',
    whatIsIt: `Parodontologija se bavi lečenjem bolesti parodoncijuma, potpornog aparata zuba. Parodontopatija se nekada smatrala neizlečivom, a danas je stav da se može držati pod kontrolom konzervativnim i hirurškim metodama.

Konzervativno lečenje obuhvata uklanjanje mekih naslaga, zubnog kamenca, subgingivalnih konkremenata i kiretažu parodontalnih džepova. Osnova hirurškog lečenja je režanj operacija: čišćenje dubokih koštanih džepova i aplikacija koštanih zamenika (Geistlich Bio-Oss®), membrana (Geistlich Bio-Gide®) ili gleđnog proteina rasta (Straumann Emdogain®) radi regeneracije tkiva i učvršćivanja zuba.

Laser dodatno pomaže antiinflamatornim i baktericidnim dejstvom, ubrzava izlečenje gingivitisa i usporava napredovanje bolesti.`,
    howItWorks: [
      'Procena stanja desni, džepova i kosti.',
      'Profesionalno čišćenje i uklanjanje kamenca / konkremenata.',
      'Kiretaža ili hirurški pristup po indikaciji.',
      'Regenerativne procedure i laserska podrška terapiji.',
      'Plan održavanja: higijena, kontrole i preventiva.',
    ],
    idealCandidates: [
      'Osobe sa krvarenjem desni, lošim zadahom ili pokretljivim zubima',
      'Pacijenti sa dijagnostikovanom parodontopatijom',
      'Osobe pre protetike ili implantata kojima je potrebna stabilna osnova',
      'Pacijenti koji žele da sačuvaju sopstvene zube što duže',
    ],
    expectedResults: [
      'Smanjeno krvarenje i zapaljenje desni',
      'Kontrola dubine džepova i progresije bolesti',
      'Učvršćivanje rasklaćenih zuba gde je regeneracija moguća',
      'Bolje oralno zdravlje i svežiji dah',
    ],
    faqs: [
      {
        question: 'Da li se parodontopatija može izlečiti?',
        answer:
          'Može se uspešno držati pod kontrolom. Ključ su rana dijagnoza, terapija i dosledna oralna higijena uz redovne kontrole.',
      },
      {
        question: 'Da li laser pomaže?',
        answer:
          'Da. Laser ima baktericidno i antiinflamatorno dejstvo i često je deo savremenog protokola lečenja desni.',
      },
    ],
    relatedSlugs: ['terapija-laserom', 'oralna-hirurgija', 'stomatoloski-pregled-i-konsultacije'],
  },

  endodoncija: {
    title: 'Endodoncija',
    aboutHeading: 'Šta je endodoncija?',
    subtitle: 'Lečenje kanala korena, sačuvajte zub kad god je to moguće',
    description:
      'Mašinsko čišćenje NiTi instrumentima, apex lokator, laserska sterilizacija i precizno zatvaranje kanala.',
    whatIsIt: `Iako implantati nude rešenje za mnoge oblike krezubosti, uvek je bolje sačuvati zub koji ima šansu da ostane u ustima. Endodoncija (lečenje inficiranog kanala korena) omogućava brži završetak tretmana, protetsku rehabilitaciju i manji trošak u odnosu na ekstrakciju i implantat.

Savremeno lečenje zasniva se na preciznom mašinskom čišćenju i oblikovanju kanala NiTi (nikl-titanijumskim) instrumentima, temeljnom ispiranju, snažnoj dezinfekciji i preciznom zatvaranju kanalnog sistema. Apex lokator određuje tačnu dužinu kanala, a laser obezbeđuje potpuno obeskličavanje, vrhunac savremene endodoncije.

Tokom zahvata pacijent ne oseća bol. Izlečeni zub može dugo funkcionisati, uz adekvatnu rekonstrukciju (ispun ili krunica).`,
    howItWorks: [
      'Dijagnostika i procena da li se zub može sačuvati.',
      'Lokalna anestezija i pristup kanalnom sistemu.',
      'Mašinsko čišćenje NiTi instrumentima i ispiranje.',
      'Laserska sterilizacija i hermetično zatvaranje kanala.',
      'Rekonstrukcija kruničnog dela, ispun ili krunica.',
    ],
    idealCandidates: [
      'Osobe sa bolom, otokom ili infekcijom zuba',
      'Pacijenti sa dubokim karijesom koji je zahvatio pulpu',
      'Osobe kojima je potrebna revizija starog lečenja kanala',
      'Pacijenti koji žele da izbegnu vađenje zuba',
    ],
    expectedResults: [
      'Uklanjanje infekcije i bola',
      'Očuvan sopstveni zub u vilici',
      'Stabilna osnova za estetsku ili protetsku nadoknadu',
      'Bezbolan tok tretmana uz savremeni protokol',
    ],
    faqs: [
      {
        question: 'Da li je lečenje kanala bolno?',
        answer:
          'Ne. Zahvat se radi u anesteziji. Savremeni protokoli čine tretman ugodnim i predvidivim.',
      },
      {
        question: 'Zašto je potreban laser u endodonciji?',
        answer:
          'Laser dodatno sterilizuje kanalni sistem i pomaže u terapiji periapikalnih lezija, što podiže uspešnost lečenja.',
      },
    ],
    relatedSlugs: ['protetika', 'terapija-laserom', 'oralna-hirurgija'],
  },

  ortodoncija: {
    title: 'Ortodoncija',
    aboutHeading: 'Šta je ortodoncija?',
    subtitle: 'Fiksni i mobilni aparati, pravilan zagrižaj, zdravlje zglobova i lepši osmeh',
    description:
      'Korekcija položaja zuba i međuviličnih odnosa za estetiku, funkciju žvakanja i zdravlje viličnog zgloba.',
    whatIsIt: `Ortodoncija se bavi rastom, razvojem i održavanjem dentofacijalnog kompleksa, kao i korekcijom poremećaja zagrižaja. Cilj nije samo estetika, pravilan odnos zuba važan je i za zdravlje mišića, viličnog zgloba i celokupnog sistema za žvakanje.

Aparati mogu biti fiksni i mobilni; ne postoji „bolji“ ili „lošiji", svaki ima svoje indikacije. Mobilni aparati su uglavnom namenjeni periodu rasta i razvoja. Kod odraslih se najčešće koriste fiksni aparati (bravice) koji blagim kontinuiranim silama pomeraju zube.

Tokom terapije neophodna je besprekorna oralna higijena i redovne kontrole. Nakon fiksne terapije nosi se mobilni retainer kako bi se zubi stabilizovali.`,
    howItWorks: [
      'Ortodontska konsultacija, analize i plan terapije.',
      'Izbor fiksnog ili mobilnog aparata prema indikaciji.',
      'Postavljanje aparata i period aktivne korekcije.',
      'Redovne kontrole i korekcije sila.',
      'Retencija, održavanje postignutog rezultata.',
    ],
    idealCandidates: [
      'Deca i adolescenti sa nepravilnim zagrižajem ili položajem zuba',
      'Odrasli koji žele korekciju estetike ili funkcije',
      'Osobe sa tegobama viličnog zgloba povezanim sa zagrižajem',
      'Pacijenti pre ili posle protetike kojima je potrebna ortodontska priprema',
    ],
    expectedResults: [
      'Pravilniji položaj zuba i skladniji osmeh',
      'Bolja funkcija žvakanja',
      'Smanjen rizik od prekomernog trošenja i problema zgloba',
      'Stabilan rezultat uz retenciju i higijenu',
    ],
    faqs: [
      {
        question: 'Da li ortodoncija ima smisla kod odraslih?',
        answer:
          'Da. Kod odraslih se najčešće koriste fiksni aparati; rezultati mogu biti odlični uz dobru saradnju i higijenu.',
      },
      {
        question: 'Koliko traje terapija?',
        answer:
          'Od nekoliko meseci do par godina, u zavisnosti od težine nepravilnosti i tipa aparata.',
      },
    ],
    relatedSlugs: ['estetska-stomatologija', 'protetika', 'stomatoloski-pregled-i-konsultacije'],
  },

  'terapija-laserom': {
    title: 'Terapija laserom',
    aboutHeading: 'Zašto laser u stomatologiji?',
    subtitle: 'Precizno, bezbolno i sa manje komplikacija, meka i tvrda tkiva usne duplje',
    description:
      'Laserska tehnologija za hirurgiju bez krvi, parodontalnu terapiju, endodonciju, beljenje i tretman afti, herpesa i osetljivosti.',
    whatIsIt: `Laseri se u stomatologiji ističu jednostavnošću rada i bezbolnim tretmanom, naročito kod dece i pacijenata sa strahom od stomatoloških intervencija. Efikasno deluju na meka i tvrda tkiva usne duplje.

Na mekim tkivima laser omogućava manje invazivnu „hirurgiju bez krvi", minimum postoperativnih komplikacija i intervenciju bez bola: gingivektomija, uklanjanje frenuluma, incizija i drenaža apscesa, zatvaranje fistula, otkrivanje implantata, tretman periimplantitisa i drugo.

U parodontologiji ima antiinflamatorno i baktericidno dejstvo. U endodonciji se koristi za sterilizaciju kanala i terapiju periapikalnih lezija. Ostale indikacije uključuju afte, heilitis, herpes labialis, leukoplakiju, hipersenzitivni dentin i beljenje zuba.

Za sigurnu primenu neophodna je edukacija tima i poštovanje zaštitnih mera, što je standard u našoj ordinaciji.`,
    howItWorks: [
      'Procena indikacije i izbor laserskog protokola.',
      'Priprema i zaštita pacijenta (zaštitne mere).',
      'Precizna laserska intervencija na mekim ili tvrdim tkivima.',
      'Minimalan oporavak uz jasna uputstva.',
      'Kontrola i, po potrebi, nastavak terapije.',
    ],
    idealCandidates: [
      'Pacijenti sa strahom od stomatoloških intervencija i deca',
      'Osobe sa parodontalnim problemima ili infekcijama kanala',
      'Pacijenti kojima je potrebna hirurška intervencija na mekim tkivima',
      'Osobe sa aftama, herpesom, osetljivošću zuba ili željom za beljenjem',
    ],
    expectedResults: [
      'Manje bola i krvarenja tokom i nakon zahvata',
      'Brži oporavak i manje komplikacija',
      'Bolja kontrola infekcije u desnima i kanalima',
      'Širok spektar indikacija u jednoj ordinaciji',
    ],
    faqs: [
      {
        question: 'Da li je laserski tretman bolan?',
        answer:
          'U većini slučajeva je bezbolan ili značajno manje neprijatan od klasičnih metoda. Po potrebi se koristi lokalna anestezija.',
      },
      {
        question: 'Za koje probleme se laser najčešće koristi?',
        answer:
          'Parodontologija, endodoncija, hirurgija mekih tkiva, beljenje, afte, herpes i hipersenzitivnost dentina.',
      },
    ],
    relatedSlugs: ['parodontologija', 'endodoncija', 'estetska-stomatologija'],
  },
}
