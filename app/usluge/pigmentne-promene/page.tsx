import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uklanjanje pigmentnih promena | Ordinacija Dr. Terzić',
  description: 'Uklanjanje pigmentnih promena u ordinaciji Dr. Terzić: hemijski pilinzi, laserska i svetlosna terapija, mezoterapija i kombinovani protokoli za melazmu, lentigo solaris i postinflamatornu hiperpigmentaciju.',
}

const serviceData = {
  title: 'Uklanjanje pigmentnih promena',
  aboutHeading: 'Ujednačen ten počinje preciznom dijagnozom',
  subtitle: 'Individualni pristup pigmentacijama uz dugoročnu kontrolu i prevenciju ponovnog nastanka',
  description: 'Precizna dijagnostika i ciljana terapija za melazmu, solarne pege i postinflamatorne pigmentacije',
  whatIsIt: `Pigmentne promene nastaju kada dođe do povećane produkcije i/ili nakupljanja melanina u koži. Najčešći uzroci su izlaganje UV zračenju, hormonske promene, inflamacija i prethodna oštećenja kože.

Pigmentacijama pristupamo individualno – najpre određujemo vrstu i dubinu pigmentacije, fototip i stanje kože, a zatim biramo odgovarajuću terapiju. Cilj nije samo uklanjanje postojeće pigmentacije, već i dugoročna kontrola i prevencija njenog ponovnog nastanka.`,
  whatIsItSections: [
    {
      heading: 'Najčešće tretiramo',
      items: [
        'Melazmu – nepravilne smeđe ili sivkastosmeđe promene, najčešće na čelu, obrazima, iznad gornje usne i bradi',
        'Lentigo solaris („staračke pege“) – jasno ograničene pigmentacije nastale kao posledica hroničnog izlaganja suncu',
        'Postinflamatornu hiperpigmentaciju – pigmentacije koje nastaju nakon akni, upala, trauma ili neadekvatnih tretmana',
      ],
    },
    {
      heading: '01. Hemijski pilinzi',
      body: 'Hemijski pilinzi predstavljaju kontrolisanu eksfolijaciju kože kojom se uklanjaju površinski slojevi epidermisa i podstiču procesi obnove kože. U zavisnosti od preparata, koncentracije i dubine delovanja, primenjuju se površinski i srednje duboki pilinzi, dok se izbor preparata i protokol prilagođavaju konkretnom problemu i tipu kože. Pored smanjenja hiperpigmentacija, hemijski pilinzi mogu doprineti ujednačavanju tena, poboljšanju teksture kože, smanjenju vidljivosti pora, smanjenju komedona, poboljšanju blažih oblika akni i ublažavanju postinflamatornih promena. Kod kože sklone pigmentacijama posebno je važan pravilan izbor preparata i intenziteta tretmana kako bi se izbegla dodatna inflamacija i rizik od postinflamatorne hiperpigmentacije. Najčešće se izvode tokom jeseni i zime, uz obaveznu fotoprotekciju.',
    },
    {
      heading: '02. Lasersko i svetlosno uklanjanje hiperpigmentacija',
      body: 'Savremene laserske i svetlosne tehnologije omogućavaju ciljano delovanje na različite oblike pigmentacije. U zavisnosti od indikacije, koristimo Q/switched Nd:YAG laser, Dye-VL i Er:YAG laser, pri čemu se izbor tehnologije i parametara određuje individualno. Različite pigmentacije zahtevaju različit pristup. Kod površinskih pigmentnih promena moguće je delovati direktnije na melanin, dok se kod drugih oblika pigmentacije primenjuju protokoli koji postepeno utiču na pigment i kvalitet kože. Posebno je važno naglasiti da ne postoji jedan laserski tretman koji je idealan za sve pigmentacije. Melazma, solarni lentigo i postinflamatorna hiperpigmentacija imaju različitu biologiju i zahtevaju različite terapijske strategije. Zbog toga se pre tretmana procenjuju tip pigmentacije, dubina, fototip i rizik od nastanka postinflamatorne hiperpigmentacije.',
    },
    {
      heading: '03. Mezoterapija',
      body: 'Mezoterapija je minimalno invazivna procedura kojom se pažljivo odabrani preparati aplikuju u površinske slojeve kože. U terapiji pigmentacija može biti deo kombinovanog protokola, posebno kada želimo istovremeno da utičemo na kvalitet kože, hidrataciju i ujednačenost tena. Izbor preparata zavisi od stanja kože i cilja tretmana. Nakon procedure mogu se pojaviti sitne papule i diskretno crvenilo na mestima aplikacije. Ove reakcije su prolazne i povlače se u kratkom periodu. Mezoterapija se najčešće primenjuje u seriji tretmana, a dinamika se određuje individualno.',
    },
    {
      heading: '04. Kombinovani protokoli',
      body: 'Pigmentacije su često kompleksan problem i najbolji rezultat ne mora uvek biti moguće postići jednom metodom. Zato, kada je potrebno, kombinujemo različite pristupe – hemijske pilinge, laserske i svetlosne tretmane, mezoterapiju i odgovarajuću kućnu terapiju. Redosled i razmak između procedura pažljivo se planiraju kako bi se postigao terapijski efekat uz što manji rizik od iritacije i postinflamatorne hiperpigmentacije. Kod melazme je posebno važan dugoročan pristup, jer se pigmentacija može ponovo aktivirati pod uticajem sunca, vidljive svetlosti, hormona i inflamacije. Cilj nije samo „ukloniti fleku“, već uspostaviti kontrolu nad procesom koji do pigmentacije dovodi.',
    },
    {
      heading: 'Koliko tretmana je potrebno?',
      body: 'Broj tretmana ne određuje se unapred kao univerzalni protokol. Zavisi od:',
      items: [
        'vrste pigmentacije',
        'njene dubine',
        'lokalizacije',
        'fototipa kože',
        'sklonosti ka postinflamatornoj hiperpigmentaciji',
        'izabrane metode ili kombinacije metoda',
        'odgovora kože na prethodni tretman',
      ],
    },
    {
      heading: 'Oporavak',
      body: 'Period oporavka zavisi od izabrane procedure. Nakon površinskih pilinga i određenih svetlosnih tretmana može se javiti prolazno crvenilo, osećaj zatezanja ili blago perutanje kože. Nakon intenzivnijih tretmana reakcija kože može biti izraženija, zbog čega se pacijentu daju precizna uputstva za kućnu negu. Tokom perioda oporavka važno je:',
      items: [
        'izbegavati intenzivno izlaganje suncu',
        'ne iritirati i ne mehanički uklanjati perutavu kožu',
        'koristiti preporučenu regenerativnu negu',
        'svakodnevno nanositi SPF 50+',
      ],
    },
    {
      heading: 'Zašto je fotoprotekcija ključna?',
      body: 'Bez adekvatne zaštite od svetlosti, terapija pigmentacija ima ograničen i često kratkotrajan efekat. UV zračenje stimuliše melanogenezu i može ponovo aktivirati pigmentaciju. Kod melazme značajnu ulogu može imati i vidljiva svetlost, zbog čega je kod određenih pacijenata važan izbor odgovarajuće fotoprotekcije. Zato je SPF 50+ svakodnevno, tokom cele godine, sastavni deo terapije pigmentacija, a ne samo preporuka nakon tretmana. U zavisnosti od tipa pigmentacije i stanja kože, fotoprotekcija se kombinuje sa odgovarajućom kućnom terapijom koja može uključivati preparate usmerene na regulaciju melanogeneze i održavanje rezultata.',
    },
    {
      heading: 'Naš pristup',
      body: 'Pigmentacija se ne tretira samo površinski. Terapiju planiramo na osnovu dermatološke procene, vrste i dubine pigmentacije i individualnih karakteristika kože. Dijagnoza → individualni protokol → kontrolisana terapija → kućna nega → fotoprotekcija → dugoročna kontrola. Jer dobar rezultat nije samo koža bez fleka, već ujednačen, zdrav i dugoročno stabilan ten.',
    },
  ],
  idealCandidates: [
    'Solarni lentigino i druge površinske pigmentne promene',
    'Melazmu',
    'Postinflamatorne hiperpigmentacije',
    'Neujednačen ten',
    'Pigmentacije nakon akni ili drugih inflamatornih procesa',
  ],
  howItWorks: [
    'Pre svakog tretmana neophodan je dermatološki pregled i procena pigmentne promene.',
    'Kod novih, promenjenih ili atipičnih pigmentnih lezija, naročito onih koje pokazuju promenu boje, oblika ili veličine, prioritet je dermatološka procena i dermoskopski pregled, a ne samo estetsko uklanjanje.',
    'Kod određenih površinskih pigmentacija rezultat može biti vidljiv već nakon jednog tretmana, dok je kod melazme i drugih hroničnih pigmentacija najčešće potreban serijski i dugoročan pristup.',
    'Kod određenih površinskih pigmentacija rezultat može biti vidljiv već nakon jednog tretmana, dok je kod melazme i drugih hroničnih pigmentacija najčešće potreban serijski i dugoročan pristup.',
  ],
  relatedServices: [
    { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' },
    { title: 'Mezoterapija', href: '/usluge/mezoterapija' },
    { title: 'Dermoskopski pregled mladeža', href: '/usluge/dermoskopija' },
  ],
}

export default function PigmentnePromenePage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/piling-treatment.jpg" />
}
