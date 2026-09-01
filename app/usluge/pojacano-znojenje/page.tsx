import { ServicePageLayout } from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lečenje pojačanog znojenja (hiperhidroza) | Ordinacija Dr. Terzić',
  description: 'Botulinski toksin za tretman hiperhidroze u ordinaciji Dr. Terzić: efikasno i ciljano smanjenje prekomernog znojenja uz brz oporavak i dugotrajan efekat.',
}

const serviceData = {
  title: 'Pojačano znojenje – hiperhidroza',
  aboutHeading: 'Efikasno i ciljano smanjenje prekomernog znojenja',
  subtitle: 'Botulinski toksin za bezbedno i dugotrajno smanjenje pojačanog znojenja',
  description: 'Minimalno invazivan tretman hiperhidroze uz brz povratak svakodnevnim aktivnostima',
  whatIsIt: `Hiperhidroza je stanje karakterisano prekomernim znojenjem koje prevazilazi fiziološke potrebe organizma i može značajno uticati na svakodnevni život, samopouzdanje i društvene aktivnosti. Najčešće se javlja u predelu pazuha, dlanova i tabana, a može biti prisutna i na drugim regijama tela.`,
  whatIsItSections: [
    {
      heading: 'Botulinski toksin',
      body: 'Botulinski toksin predstavlja jednu od najefikasnijih bezbednih metoda za tretman hiperhidroze. Aplikacijom veoma malih količina botulinskog toksina u kožu, privremeno se blokira prenos nervnih impulsa do znojnih žlezda. Na taj način se smanjuje njihova aktivnost i količina proizvedenog znoja, dok se prirodni procesi termoregulacije organizma nastavljaju. Tretman je precizan i prilagođava se regiji koja se tretira.',
    },
    {
      heading: 'Kome je tretman namenjen?',
      body: 'Tretman je namenjen osobama kod kojih je prekomerno znojenje izraženo i predstavlja smetnju u svakodnevnom životu, naročito kod aksilarne (pazušne) hiperhidroze. Pre tretmana procenjuju se intenzitet i lokalizacija znojenja, kao i eventualni drugi uzroci pojačanog znojenja.',
    },
    {
      heading: 'Koliko traje efekat?',
      body: 'Smanjenje znojenja obično se primećuje tokom prvih nekoliko dana nakon tretmana, dok se puni efekat razvija u narednim danima. Efekat najčešće traje oko 4–6 meseci, nakon čega se aktivnost znojnih žlezda postepeno vraća. Tretman se tada može ponoviti. Trajanje efekta je individualno i može se razlikovati od osobe do osobe.',
    },
    {
      heading: 'Oporavak',
      body: 'Procedura je minimalno invazivna i nije potreban period oporavka. Neposredno nakon tretmana mogu se javiti sitna crvenila ili blagi otoci na mestima aplikacije, koji se najčešće brzo povlače. Nakon intervencije se 5 do 7 dana ne savetuje boravak u sauni, treniranje i upotreba antiperspiranata.',
    },
    {
      heading: 'Naš pristup',
      body: 'Kod hiperhidroze cilj nije potpuno zaustavljanje znojenja, već kontrolisano smanjenje prekomernog znojenja u regiji koja pacijentu predstavlja problem. Tretman planiramo individualno, sa preciznom aplikacijom botulinskog toksina i doziranjem prilagođenim regiji i intenzitetu hiperhidroze.',
    },
  ],
  expectedResults: [
    'Značajno smanjuje prekomerno znojenje',
    'Deluje ciljano na tretiranu regiju',
    'Procedura je brza i minimalno invazivna',
    'Nema perioda oporavka',
    'Efekat traje više meseci',
    'Tretman se može bezbedno ponavljati',
  ],
  relatedServices: [
    { title: 'Botulinum toksin – botox', href: '/usluge/botulinum-toksin' },
    { title: 'Dijagnostika i lečenje kožnih i polnih bolesti', href: '/usluge/medicinska-dermatologija' },
    { title: 'Lečenje akni', href: '/usluge/akne' },
  ],
}

export default function PojacanoZnojenjePage() {
  return <ServicePageLayout {...serviceData} imageSrc="/images/Services/botoks-treatment.jpg" />
}
