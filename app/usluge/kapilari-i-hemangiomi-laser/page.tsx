import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uklanjanje vaskularnih promena | Ordinacija Dr. Terzić',
  description: 'Nd:YAG laser za bezbedno i efikasno uklanjanje proširenih kapilara, spider nevusa i hemangioma na licu i telu, u ordinaciji Dr. Terzić.',
}

const serviceData = {
  title: 'Uklanjanje vaskularnih promena',
  aboutHeading: 'Šta su vaskularne promene kože?',
  subtitle: 'Nd:YAG laser, savremena i bezbedna metoda za uklanjanje proširenih kapilara, spider nevusa i hemangioma',
  description: 'Laserski tretman vaskularnih promena na licu i telu',
  whatIsIt: `Kapilari su sitni, najbrojniji krvni sudovi koji se nalaze u površnom sloju kože. Usled dejstva nepovoljnih faktora kao što su izlaganje suncu, vetru, hormonski disbalans i genetika, kapilari se proširuju i postaju uočljivi u predelu nosa, obraza i na bradi u vidu crvene, ljubičaste ili plave promene na koži, i mogu izgledati kao grane drveta ili imati oblik paukove mreže. Predstavljaju estetski problem, a poželjno ih je ukloniti kako bi se sprečilo njihovo dalje širenje.

Hemangiomi kože su benigni tumori koji su posledica hiperplazije krvnih sudova. Na samom početku izgledaju kao mala crvena tačka u ravni kože prečnika 1 mm i predstavljaju površne hemangiome. Tokom vremena mogu da porastu iznad površine kože i da izgledaju kao deo zrna graška. Pri povređivanju jako krvare. Hemangiomi mogu biti i duboki, kada imaju tamno ljubičastu boju.`,
  whatIsItSections: [
    {
      heading: 'Vrste vaskularnih promena koje tretiramo',
      items: [
        'Prošireni kapilari (teleangiektazije)',
        'Spider nevusi',
        'Hemangiomi / cherry angiomi',
      ],
    },
    {
      heading: 'Nd:YAG laser: tretman vaskularnih promena',
      body: 'Nd:YAG laser predstavlja savremenu i efikasnu metodu za lečenje površinskih i dubljih vaskularnih promena na licu i telu. Zahvaljujući talasnoj dužini od 1064 nm, energija lasera selektivno deluje na krvni sud, koji se zagreva i zatvara, dok okolno tkivo ostaje maksimalno pošteđeno. Ova tehnologija omogućava bezbedan tretman različitih vaskularnih promena uz minimalan period oporavka i odlične estetske rezultate.',
    },
    {
      heading: 'Kada se preporučuje?',
      items: [
        'Telangiektazija (proširenih kapilara) na licu i telu',
        'Proširenih kapilara oko nosa i na obrazima',
        'Cherry angioma (rubin hemangioma)',
        'Pojedinih hemangioma',
        'Venous lake na usnama',
        'Drugih benignih vaskularnih promena, prema proceni dermatologa',
      ],
    },
    {
      heading: 'Kako deluje Nd:YAG laser?',
      body: 'Laserska energija se selektivno apsorbuje u hemoglobinu unutar krvnog suda. Toplotna energija dovodi do njegovog zatvaranja, nakon čega organizam prirodnim putem postepeno resorbuje tretirani krvni sud. Koža ostaje očuvana, bez rezova i oštećenja okolnog tkiva.',
    },
    {
      heading: 'Oporavak nakon tretmana',
      body: 'Nakon procedure može se javiti prolazno crvenilo, blagi otok ili osećaj toplote, koji uglavnom nestaju u roku od nekoliko sati do nekoliko dana. Kod tretmana hemangioma i većih telangiektazija moguće je prolazno potamnjenje tretirane promene pre njenog postepenog povlačenja. Neposredno nakon tretmana preporučuje se izbegavanje intenzivnog izlaganja suncu, saune, toplih kupki i intenzivne fizičke aktivnosti tokom nekoliko dana, kao i svakodnevna primena preparata sa visokim zaštitnim faktorom (SPF 50+).',
    },
    {
      heading: 'Individualni pristup lečenju',
      body: 'Svaka vaskularna promena se pre tretmana pažljivo procenjuje dermatološkim pregledom kako bi se odabrala najefikasnija terapija. Plan lečenja je individualan i prilagođen vrsti promene, njenoj lokalizaciji, tipu kože i očekivanim rezultatima. Naš cilj je bezbedno i efikasno uklanjanje vaskularnih promena uz postizanje prirodnog izgleda kože i dugotrajnih estetskih rezultata.',
    },
  ],
  methods: [
    'Nd:YAG laser, talasna dužina 1064 nm',
  ],
  howItWorks: [
    'Nakon pregleda i procene promene, laserski impulsi se usmeravaju direktno na krvni sud. Tokom tretmana može se osetiti kratkotrajan osećaj peckanja ili toplote, koji većina pacijenata dobro podnosi. U zavisnosti od veličine i broja promena, procedura traje od nekoliko minuta do oko 30 minuta.',
    'Broj potrebnih tretmana zavisi od vrste, veličine i lokalizacije vaskularne promene. Manji hemangiomi često se uklanjaju jednim tretmanom, dok je za izraženije telangiektazije ili promene na nogama obično potrebno više sesija, na 4 do 6 nedelja.',
  ],
  expectedResults: [
    'Precizno i selektivno delovanje na krvne sudove',
    'Efikasan tretman površinskih i dubljih vaskularnih promena',
    'Bez rezova i šavova',
    'Minimalan period oporavka',
    'Odlični estetski rezultati',
    'Bezbedna procedura uz očuvanje okolnog tkiva',
    'Mogućnost tretmana lica i tela',
  ],
  relatedServices: [
    { title: 'Lečenje rozacee', href: '/usluge/rozacea' },
    { title: 'Podmlađivanje – Fotona 3D, 4D i 5D laserski lifting', href: '/usluge/podmladjivanje-fotona-3d-4d-5d' },
    { title: 'Dermoskopija – pregled mladeža', href: '/usluge/dermoskopija' },
  ],
}

export default function KapilariHemangiomiLaserPage() {
  return (
    <ServicePageLayout
      {...serviceData}
      imageSrc="/images/Services/opsta-dermatovenerologija/uklanjanje-vaskularnih-promena.png"
    />
  )
}
