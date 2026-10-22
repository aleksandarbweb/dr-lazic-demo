"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronRight, Sparkles } from 'lucide-react'

/* ────────────────────────────────────────────────────────────────────────────
   Sadržaj: tekst dr Terzić, uz ispravljene očigledne tipografske greške
   (Nd : YAG → Nd:YAG, poravak → oporavak, veliko "I" → "i", dvostruki razmaci).
   ──────────────────────────────────────────────────────────────────────────── */

const zones = ['Lice', 'Vrat', 'Dekolte', 'Šake']

// Kratki opisi modaliteta: izvedeni iz teksta dr Terzić, bez dodavanja novih tvrdnji.
const modalities = [
  { name: 'Nd:YAG', note: 'Dublji slojevi kože, čvrstina i tonus' },
  { name: 'Er:YAG', note: 'Površinski piling, tekstura i sjaj' },
  { name: 'Q-Switch Nd:YAG', note: 'Neablativno, bez uklanjanja površinskog sloja' },
  { name: 'Frakcioni Er:YAG', note: 'Kontrolisano zagrevanje i remodelovanje' },
  { name: 'IPL (Dye-VL)', note: 'Vaskularne i pigmentne promene' },
  { name: 'IR (NIR)', note: 'Infracrveno zagrevanje dubljih slojeva' },
]

const protocols = [
  {
    name: 'Fotona 3D',
    tag: 'Bez završnog pilinga',
    featured: false,
    body:
      'Lasersko podmlađivanje lica kombinacijom Nd i Er modaliteta, bez završnog površinskog laserskog pilinga. Namenjeno je poboljšanju kvaliteta, tonusa i čvrstine kože, uz blago i kratkotrajno crvenilo nakon tretmana.',
  },
  {
    name: 'Fotona 4D',
    tag: 'Četvorostepeni protokol',
    featured: true,
    body:
      'Četvorostepeni laserski protokol koji kombinuje različite modalitete Nd i Er lasera, uključujući intraoralnu bukalnu stimulaciju i završni površinski laserski piling. Cilj tretmana je poboljšanje čvrstine i teksture kože, ublažavanje finih bora i postizanje svežijeg izgleda lica.',
  },
  {
    name: 'Fotona 5D',
    tag: 'Sa SmoothEye® protokolom',
    featured: false,
    body:
      'Sveobuhvatno lasersko podmlađivanje celog lica, uz dodatni SmoothEye® protokol za periorbitalnu regiju. Ovaj pristup omogućava da se, pored kože lica, posebno tretira i osetljiva regija oko očiju, sa ciljem poboljšanja čvrstine kože i ublažavanja finih bora.',
  },
]

const fourDSteps = [
  {
    name: 'SmoothLiftin™',
    modality: 'Er:YAG',
    body:
      'Intraoralni tretman. Er:YAG laser deluje sa unutrašnje strane usana i obraza radi poboljšanja zategnutosti tkiva i ublažavanja perioralnih bora i nazolabijalnih brazdi.',
  },
  {
    name: 'FRAC3®',
    modality: 'Nd:YAG',
    body:
      'Nd:YAG laser ciljano deluje na dublje nepravilnosti kože i promene povezane sa starenjem, uz podsticanje remodelovanja kolagena.',
  },
  {
    name: 'PIANO®',
    modality: 'Nd:YAG',
    body:
      'Nd:YAG laser blago zagreva dublje slojeve tkiva radi poboljšanja čvrstine i zategnutosti kože.',
  },
  {
    name: 'SupErficial™',
    modality: 'Er:YAG',
    body:
      'Er:YAG laser za blag površinski piling, radi bolje teksture i sjaja kože.',
  },
]

const almaTechnologies = [
  {
    name: 'ClearLift',
    tagline: 'Q-Switch Nd:YAG laser',
    image: '/images/usluge/lasers/alma-clearlift.webp',
    alt: 'Alma Harmony ClearLift ručni aplikator sa nastavcima različitih veličina',
    width: 800,
    height: 734,
    background: '#ffffff',
    intro: [
      'ClearLift je neablativni laserski tretman namenjen poboljšanju kvaliteta kože bez uklanjanja površinskog sloja. Deluje na pigmentne promene i podstiče procese dermalnog remodelovanja, doprinoseći poboljšanju teksture i ujednačenosti tena.',
    ],
    uses: [
      'Poboljšanje teksture i kvaliteta kože',
      'Ublažavanje određenih pigmentnih promena',
      'Stimulaciju procesa regeneracije',
      'Osvežavanje kože uz minimalan period oporavka',
    ],
    extra: null,
    protocol:
      'Najčešće 3–5 tretmana u razmaku od 3–4 nedelje, u zavisnosti od indikacije i reakcije kože.',
    aftercare:
      'Nakon tretmana može se javiti blago, prolazno crvenilo. Uobičajeno nije potreban period oporavka.',
  },
  {
    name: 'ClearSkin',
    tagline: 'Er:YAG glass laser',
    image: '/images/usluge/lasers/alma-clearskin.webp',
    alt: 'Alma Harmony ClearSkin frakcioni Er:YAG aplikator',
    width: 800,
    height: 800,
    // Slika ima svetlo sivu pozadinu (#f8f8f8); kartica koristi istu boju
    // kako se pozadina slike ne bi videla kao zaseban pravougaonik.
    background: '#f8f8f8',
    intro: [
      'ClearSkin je frakcioni, neablativni Er:YAG laser koji omogućava kontrolisano zagrevanje ciljnih zona kože, uz podsticanje procesa remodelovanja.',
      'Posebno je koristan kod pacijenata sa masnijom kožom, proširenim porama i kožom sklonom aknama, kod kojih istovremeno želimo da poboljšamo teksturu i ublažimo vidljive znake starenja.',
    ],
    uses: [
      'Tretman aktivnih akni',
      'Poboljšanje teksture kože, smanjenje finih bora i izgleda proširenih pora',
      'Ublažavanje ožiljaka od akni, prema indikaciji',
      'Poboljšanje kvaliteta i čvrstine kože',
      'Kombinovani pristup koži sklonoj aknama i promenama povezanim sa starenjem',
    ],
    extra:
      'Kontrolisano termičko delovanje može doprineti smanjenju aktivnosti lojnih žlezda i poboljšanju inflamatornih promena kod odgovarajuće odabranih pacijenata.',
    protocol: 'Najčešće 3–5 tretmana u razmaku od 3–4 nedelje.',
    aftercare:
      'Tretman je neablativan i uglavnom ne zahteva oporavak. Moguće su prolazne i kratkotrajne reakcije kože, u zavisnosti od intenziteta tretmana.',
  },
  {
    name: 'DVL / Dye-VL',
    tagline: 'IPL svetlosna tehnologija',
    image: '/images/usluge/lasers/alma-dye-vl.webp',
    alt: 'Alma Harmony DVL odnosno Dye-VL IPL aplikator',
    width: 800,
    height: 762,
    background: '#ffffff',
    intro: [
      'Dye-VL je svetlosna IPL tehnologija koja omogućava ciljano delovanje na određene vaskularne i pigmentne promene. Posebno je korisna kod kože sa crvenilom, vidljivim površinskim kapilarima i neujednačenim tenom.',
    ],
    uses: [
      'Smanjenje crvenila i vidljivih vaskularnih promena kod rozacee',
      'Ublažavanje određenih pigmentnih promena',
      'Ujednačavanje tena',
      'Poboljšanje ukupnog izgleda i kvaliteta kože',
    ],
    extra:
      'Kod pažljivo odabranih pacijenata može biti deo šireg plana za kožu sa neujednačenim tenom i proširenim porama. Kod masnije kože i seboreje plan se prilagođava dominantnom problemu, jer se ovi poremećaji ne tretiraju isključivo vaskularnom tehnologijom.',
    protocol: 'Najčešće 5 tretmana u razmaku od 3 nedelje.',
    aftercare:
      'Tretman je neablativan i uglavnom ne zahteva poseban period oporavka. Mogu se javiti prolazno crvenilo i privremeno potamnjenje pojedinih pigmentnih promena.',
  },
  {
    name: 'NIR',
    tagline: 'Infracrveno zagrevanje',
    image: '/images/usluge/lasers/alma-nir.webp',
    alt: 'Alma Harmony NIR aplikator za infracrveno zagrevanje kože, prikazan u ruci tokom tretmana',
    width: 750,
    height: 750,
    background: '#ffffff',
    intro: [
      'NIR koristi kontrolisano infracrveno zagrevanje dubljih slojeva kože kako bi podstakao kontrakciju postojećih kolagenih vlakana i procese stvaranja novog kolagena.',
      'Namenjen je poboljšanju čvrstine i tonusa kože, posebno kod početne opuštenosti i smanjene elastičnosti. Može se uključiti u individualni plan podmlađivanja lica i drugih regija, prema indikaciji.',
    ],
    uses: null,
    extra:
      'Dobar je izbor pred neki važan događaj, zbog čega se popularno zove „Cinderella” tretman.',
    protocol:
      'Broj tretmana i razmak između njih određuju se individualno, u zavisnosti od početnog stanja kože i cilja terapije.',
    aftercare:
      'Tokom tretmana oseća se toplota, a procedura se prilagođava toleranciji pacijenta i karakteristikama kože. Moguće je prolazno crvenilo, dok duži oporavak uglavnom nije potreban.',
  },
]

const faqs = [
  {
    question: 'Da li su laserski tretmani bolni?',
    answer:
      'Tretmani se izvode u ordinaciji, uz individualno odabrane parametre i odgovarajuće laserske modalitete. Postupak se uglavnom dobro podnosi, uz osećaj toplote tokom primene lasera. Kod NIR-a se procedura prilagođava toleranciji pacijenta i karakteristikama kože.',
  },
  {
    question: 'Koliko tretmana je potrebno?',
    answer:
      'Broj tretmana i razmak između njih određuju se individualno, prema stanju kože i cilju terapije. Za ClearLift i ClearSkin najčešće se preporučuje 3–5 tretmana u razmaku od 3–4 nedelje, za DVL 5 tretmana u razmaku od 3 nedelje, dok se kod NIR-a i Fotona 3D/4D/5D protokola plan određuje prema proceni kože.',
  },
  {
    question: 'Koliko traje oporavak?',
    answer:
      'Nakon neablativnih tretmana, kao što su ClearLift, ClearSkin, DVL, NIR i Nd:YAG, najčešće se javlja blago i prolazno crvenilo, bez značajnog perioda oporavka. Kod intenzivnijih tretmana Er:YAG laserom crvenilo i osećaj žarenja mogu biti izraženiji, pa se tokom prva dva dana savetuje izbegavanje šminkanja i fizičkih aktivnosti.',
  },
  {
    question: 'Koja je razlika između Fotona 3D, 4D i 5D protokola?',
    answer:
      'Fotona 3D kombinuje Nd i Er modalitete bez završnog površinskog laserskog pilinga. Fotona 4D je četvorostepeni protokol koji uključuje intraoralnu bukalnu stimulaciju i završni površinski laserski piling. Fotona 5D obuhvata celo lice uz dodatni SmoothEye® protokol za regiju oko očiju.',
  },
  {
    question: 'Šta je SmoothEye® protokol?',
    answer:
      'SmoothEye® je protokol namenjen podmlađivanju osetljive periorbitalne regije, odnosno regije oko očiju. Uključen je u Fotona 5D pristup, koji pored kože lica posebno tretira i ovu osetljivu zonu.',
  },
  {
    question: 'Šta znači „Cinderella” tretman?',
    answer:
      '„Cinderella” je popularni naziv za NIR tretman, jer je dobar izbor pred neki važan događaj: moguće je prolazno crvenilo, dok duži oporavak uglavnom nije potreban.',
  },
  {
    question: 'Da li su tretmani unapred definisani paketi?',
    answer:
      'Ne. Laserske procedure u ordinaciji dr Terzić nisu unapred definisani paketi, već deo individualno osmišljenog dermatološkog plana. Izbor tehnologije, parametara i broja tretmana zavisi od procene kože i promena koje želimo da korigujemo.',
  },
  {
    question: 'Kako da negujem kožu nakon tretmana?',
    answer:
      'Nakon svakog laserskog ili svetlosnog tretmana važni su odgovarajuća hidratacija, zaštita kože od sunca i pridržavanje individualnih preporuka za negu. Kod intenzivnijih tretmana Er:YAG laserom tokom prva dva dana savetuje se izbegavanje šminkanja i fizičkih aktivnosti.',
  },
]

/* ────────────────────────────────────────────────────────────────────────────
   Stranica
   ──────────────────────────────────────────────────────────────────────────── */

export default function FotonaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background pt-36 pb-20 md:pb-24">
        <div className="pointer-events-none absolute -right-32 top-20 h-[460px] w-[460px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="hidden md:block absolute left-8 top-1/3 w-[1px] h-32 bg-primary/30" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Link
              href="/usluge"
              className="inline-flex items-center text-muted-foreground text-sm hover:text-primary transition-colors mb-8 tracking-wide"
            >
              <ChevronRight size={16} className="rotate-180 mr-2" />
              Nazad na usluge
            </Link>

            <div className="flex items-center gap-5 mb-7">
              <Image
                src="/images/Logos/fotona-logo.png"
                alt="Fotona"
                width={2500}
                height={1227}
                sizes="120px"
                className="h-9 w-auto md:h-11"
              />
              <div className="h-9 w-px bg-[#d6cec4]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Laserski tretmani
              </p>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.08]">
              Personalizovano{' '}
              <span className="block italic text-[#342f2a]">podmlađivanje laserom</span>
            </h1>

            <div className="w-24 h-[2px] bg-primary mt-8" />

            <p className="text-muted-foreground text-lg mt-8 font-light leading-relaxed max-w-[56ch]">
              Personalizovano podmlađivanje i regeneracija kože uz savremene laserske i svetlosne
              tehnologije.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              {zones.map((zone) => (
                <span
                  key={zone}
                  className="rounded-full border border-[#ddd5ca] bg-white px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#5c5348]"
                >
                  {zone}
                </span>
              ))}
            </div>

            <Link
              href="/kontakt"
              className="mt-10 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#991b1b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              Zakažite pregled
            </Link>
          </div>

          <div className="lg:col-span-5">
            <figure className="mx-auto w-full max-w-[520px] lg:mr-0">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[1.75rem] border border-[#e4ddd4] bg-white p-1.5 shadow-[0_30px_60px_-34px_rgba(44,31,20,0.5)]">
                <div className="relative h-full w-full overflow-hidden rounded-[calc(1.75rem-0.375rem)] bg-white">
                  <Image
                    src="/images/Logos/fotona-info.png"
                    alt="Fotona infografika: laserski tretmani prema regijama lica, Fotona 4D, SmoothEye®, VectorLift®, LipLase®, HAIReStart®, Skin Resurfacing"
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 34vw"
                    className="object-contain"
                  />
                </div>
              </div>
              <figcaption className="mt-4 px-2 text-center text-[11px] uppercase tracking-[0.18em] text-[#8a7f72] lg:text-left">
                Fotona tretmani po regijama lica
              </figcaption>
            </figure>
          </div>
          </div>
        </div>
      </section>

      {/* ── Laserski tretmani kože ───────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            <div>
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
                Laserski tretmani kože
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                Prava tehnologija za vašu kožu
              </h2>
              <div className="w-16 h-[2px] bg-primary mb-8" />

              <div className="text-muted-foreground leading-relaxed font-light space-y-5">
                <p>
                  U ordinaciji dr Terzić primenjujemo različite laserske modalitete i svetlosne
                  tehnologije za poboljšanje kvaliteta kože, ublažavanje znakova starenja i tretman
                  brojnih dermatoloških problema. Izbor procedure zasniva se na dermatološkom
                  pregledu, proceni stanja kože i individualnim potrebama svakog pacijenta.
                </p>

                <h3 className="font-serif text-xl md:text-2xl text-foreground pt-3">
                  Individualni pristup: prava tehnologija za vašu kožu
                </h3>

                <p>
                  Ne postoji jedan laserski tretman koji odgovara svakoj koži. U zavisnosti od
                  indikacije, kombinujemo različite modalitete{' '}
                  <strong className="text-[#3d3832] font-medium">Nd:YAG</strong> i{' '}
                  <strong className="text-[#3d3832] font-medium">Er:YAG</strong> lasera, Q-Switch
                  tehnologiju, neablativni Er:YAG laser, IPL i IR.
                </p>
                <p>
                  Naš cilj je da odaberemo odgovarajuću tehnologiju, parametre i broj tretmana kako
                  bismo postigli vidljivo poboljšanje kvaliteta kože, uz optimalnu bezbednost i
                  realno planiran oporavak.
                </p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#e4ddd4] bg-white p-7 shadow-[0_25px_50px_-30px_rgba(44,31,20,0.35)] md:p-8">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#8a7f72]">
                Modaliteti koje koristimo
              </p>
              <ul className="mt-6 divide-y divide-[#eee7de]">
                {modalities.map((modality, index) => (
                  <li key={modality.name} className="flex items-baseline gap-4 py-3.5 first:pt-0 last:pb-0">
                    <span className="w-6 flex-shrink-0 font-serif text-[13px] text-primary/70 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="font-serif text-lg text-foreground">{modality.name}</p>
                      <p className="text-[13px] font-light leading-snug text-muted-foreground">
                        {modality.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tehnologije koje primenjujemo ────────────────────────────────── */}
      <section className="bg-background pt-20 md:pt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Tehnologije koje primenjujemo
            </h2>
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary md:pb-1.5">
              Fotona · Alma Harmony
            </p>
          </div>
        </div>
      </section>

      {/* ── Fotona ───────────────────────────────────────────────────────── */}
      <section className="bg-background pt-12 pb-20 md:pt-14 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <Image
                src="/images/Logos/fotona-logo.png"
                alt="Fotona"
                width={2500}
                height={1227}
                sizes="160px"
                className="h-10 w-auto md:h-12"
              />
              <h2 className="mt-6 font-serif text-3xl md:text-4xl text-foreground">
                Fotona: Nd:YAG i Er:YAG laseri
              </h2>
              <p className="mt-4 max-w-[62ch] text-muted-foreground leading-relaxed font-light">
                Personalizovano lasersko podmlađivanje kože lica uz primenu Nd:YAG i Er:YAG
                tehnologije. Nehirurški pristup poboljšanju kvaliteta kože, njene čvrstine i tonusa,
                uz očuvanje prirodnog izgleda.
              </p>
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary md:pb-2">01 / 02</p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-4">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">O tretmanu</p>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                Kako deluje lasersko podmlađivanje
              </h3>
              <div className="w-16 h-[2px] bg-primary mt-7" />
            </div>

            <div className="lg:col-span-8 text-muted-foreground leading-relaxed font-light space-y-5">
              <p>
                Savremeno lasersko podmlađivanje omogućava ciljano delovanje na različite nivoe
                kože, podstičući procese obnove i stvaranja kolagena. Rezultat je postepeno
                poboljšanje teksture, elastičnosti i čvrstine kože, uz ublažavanje finih bora i
                svežiji izgled lica.
              </p>
              <p>
                Različiti modaliteti Nd:YAG i Er:YAG lasera omogućavaju individualno planirano
                podmlađivanje kože lica, vrata i šaka. U zavisnosti od indikacije, mogu se
                kombinovati radi poboljšanja čvrstine, teksture i tonusa kože, ublažavanja finih
                bora i podsticanja procesa remodelovanja kolagena.
              </p>
              <div className="flex items-start gap-4 rounded-[1.25rem] border border-[#e3dad1] bg-white px-6 py-5">
                <Sparkles size={20} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm md:text-base text-[#4a423a]">
                  Poseban pristup predstavlja{' '}
                  <strong className="font-medium text-foreground">SmoothEye®</strong> protokol,
                  namenjen podmlađivanju osetljive periorbitalne regije.
                </p>
              </div>
              <p>
                Izbor modaliteta, intenzitet tretmana i uključivanje površinskog Er pilinga određuju
                se prema stanju kože i željenom rezultatu.
              </p>
              <p>
                U zavisnosti od potreba kože i željenog rezultata, primenjujemo Fotona 3D, 4D ili 5D
                protokol. Svaki od njih omogućava drugačiji pristup podmlađivanju, a izbor se
                zasniva na dermatološkom pregledu i individualnoj proceni.
              </p>
            </div>
          </div>

          {/* Protokoli 3D / 4D / 5D */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {protocols.map((protocol) => (
              <div
                key={protocol.name}
                className={`flex h-full flex-col rounded-[1.75rem] border p-1.5 transition-colors duration-500 ${
                  protocol.featured
                    ? 'border-primary/35 bg-white shadow-[0_25px_50px_-32px_rgba(185,28,28,0.35)]'
                    : 'border-[#e3dad1] bg-white'
                }`}
              >
                <div className="flex h-full flex-col rounded-[calc(1.75rem-0.375rem)] border border-[#f2ece5] bg-[#fffdfb] p-7 md:p-8">
                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.24em] mb-3 ${
                      protocol.featured ? 'text-primary' : 'text-[#8a7f72]'
                    }`}
                  >
                    {protocol.tag}
                  </p>
                  <h3 className="font-serif text-2xl text-foreground">{protocol.name}</h3>
                  <div className="w-10 h-[2px] bg-primary/70 mt-4 mb-5" />
                  <p className="text-muted-foreground leading-relaxed font-light text-[15px]">
                    {protocol.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fotona 4D: infografika + četiri koraka kao tekst ──────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Fotona 4D</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Četiri koraka, jedan protokol
            </h2>
            <div className="w-16 h-[2px] bg-primary mt-7" />
            <p className="mt-6 text-muted-foreground leading-relaxed font-light">
              Četvorostepeni protokol kombinuje Er:YAG i Nd:YAG modalitete, od intraoralne
              stimulacije do završnog površinskog pilinga.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
            <figure className="lg:col-span-7 relative w-full overflow-hidden rounded-[1.75rem] border border-[#e4ddd4] bg-white p-1.5 shadow-[0_25px_50px_-30px_rgba(44,31,20,0.45)]">
              <div className="relative overflow-hidden rounded-[calc(1.75rem-0.375rem)] bg-white">
                <Image
                  src="/images/usluge/lasers/fotona-4d-protokol.webp"
                  alt="Fotona 4D protokol: četiri koraka laserskog podmlađivanja, SmoothLiftin™, FRAC3®, PIANO® i SupErficial™"
                  width={1536}
                  height={1023}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="h-auto w-full"
                />
              </div>
            </figure>

            <ol className="lg:col-span-5 space-y-6">
              {fourDSteps.map((step, index) => (
                <li key={step.name} className="flex gap-5">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-primary font-serif text-lg text-white shadow-sm">
                    {index + 1}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-serif text-xl text-foreground">{step.name}</h3>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-primary">
                        {step.modality}
                      </span>
                    </div>
                    <p className="mt-2 text-muted-foreground leading-relaxed font-light text-[15px]">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Kako izgleda tretman / Oporavak ──────────────────────────────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Tok tretmana</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                Kako izgleda tretman?
              </h2>
              <div className="w-16 h-[2px] bg-primary mb-8" />
              <div className="text-muted-foreground leading-relaxed font-light space-y-5">
                <p>
                  Tretmani se izvode u ordinaciji, uz individualno odabrane parametre i odgovarajuće
                  laserske modalitete. Postupak se uglavnom dobro podnosi, uz osećaj toplote tokom
                  primene lasera.
                </p>
                <p>
                  U zavisnosti od odabranog protokola, tretman može biti praćen prolaznim crvenilom
                  i osećajem žarenja kože.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#e3dad1] bg-white p-8 md:p-10">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Oporavak</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-7">
                Oporavak nakon tretmana
              </h2>
              <div className="text-muted-foreground leading-relaxed font-light space-y-5 text-[15px]">
                <p>
                  Nakon Fotona 3D najčešće se javlja blago crvenilo koje se brzo povlači, pa je
                  period oporavka kratak.
                </p>
                <p>
                  Nakon Fotona 4D i 5D crvenilo može biti izraženije i praćeno osećajem žarenja.
                  Tokom prva dva dana preporučuje se izbegavanje šminkanja i fizičkih aktivnosti, uz
                  pridržavanje preporuka lekara za negu kože.
                </p>
                <p className="text-[#4a423a]">
                  Trajanje i intenzitet reakcije zavise od primenjenog protokola i individualnih
                  karakteristika kože.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Individualni pristup (citat) ─────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-primary text-xs tracking-[0.28em] uppercase mb-8">
            Individualni pristup, prirodan rezultat
          </p>
          <p className="font-serif text-2xl md:text-3xl lg:text-[2.1rem] leading-[1.4] text-[#2b2621]">
            „Jer lepo podmlađena koža izgleda negovano, sveže i prirodno.”
          </p>
          <div className="w-16 h-[2px] bg-primary mx-auto mt-9 mb-9" />
          <p className="text-muted-foreground leading-relaxed font-light max-w-[64ch] mx-auto">
            U ordinaciji dr Terzić, izbor laserskog tretmana uvek počinje procenom kože i promena
            koje želimo da korigujemo. Cilj nije promena crta lica, već poboljšanje kvaliteta kože,
            njene čvrstine i teksture, uz očuvanje autentičnog izgleda.
          </p>
        </div>
      </section>

      {/* ── Alma Harmony ─────────────────────────────────────────────────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <Image
                src="/images/Logos/alma-logo.png"
                alt="Alma"
                width={1500}
                height={502}
                sizes="140px"
                className="h-9 w-auto md:h-10"
              />
              <h2 className="mt-6 font-serif text-3xl md:text-4xl text-foreground">
                Alma Harmony modaliteti
              </h2>
              <p className="mt-4 max-w-[62ch] text-muted-foreground leading-relaxed font-light">
                Q-Switch Nd:YAG, neablativni Er:YAG, IPL (Dye-VL) i IR tehnologija u individualno
                planiranom tretmanu kože.
              </p>
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary md:pb-2">02 / 02</p>
          </div>

          <div className="mt-6">
            {almaTechnologies.map((tech, index) => {
              const imageOnRight = index % 2 === 1
              return (
                <div
                  key={tech.name}
                  className={`grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-12 lg:gap-14 ${
                    index === 0 ? 'lg:pt-16' : ''
                  } ${index < almaTechnologies.length - 1 ? 'border-b border-[#e7e0d6]' : ''}`}
                >
                  <div
                    className={`lg:col-span-5 ${imageOnRight ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div
                      className="overflow-hidden rounded-[1.75rem] p-4 md:p-6 shadow-[0_25px_50px_-34px_rgba(44,31,20,0.4)]"
                      style={{ backgroundColor: tech.background }}
                    >
                      <Image
                        src={tech.image}
                        alt={tech.alt}
                        width={tech.width}
                        height={tech.height}
                        sizes="(max-width: 1024px) 90vw, 40vw"
                        className="mx-auto h-auto w-full max-w-[420px] object-contain"
                      />
                    </div>
                  </div>

                  <div className={`lg:col-span-7 ${imageOnRight ? 'lg:order-1' : 'lg:order-2'}`}>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#8a7f72] mb-3">
                      Alma Harmony
                    </p>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                        {tech.name}
                      </h3>
                      <span className="text-[11px] uppercase tracking-[0.16em] text-primary">
                        {tech.tagline}
                      </span>
                    </div>
                    <div className="w-14 h-[2px] bg-primary mt-5 mb-6" />

                    <div className="text-muted-foreground leading-relaxed font-light space-y-4">
                      {tech.intro.map((paragraph) => (
                        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                      ))}
                    </div>

                    {tech.uses && (
                      <div className="mt-6">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#8a7f72] mb-3">
                          Koristi se za
                        </p>
                        <ul className="space-y-2.5">
                          {tech.uses.map((use) => (
                            <li key={use} className="flex items-start gap-3">
                              <span className="mt-[0.55rem] h-1.5 w-1.5 flex-shrink-0 bg-primary" />
                              <span className="text-muted-foreground font-light text-[15px] leading-relaxed">
                                {use}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {tech.extra && (
                      <p className="mt-6 text-muted-foreground leading-relaxed font-light text-[15px]">
                        {tech.extra}
                      </p>
                    )}

                    <div className="mt-7 grid gap-4 sm:grid-cols-[1fr_1fr]">
                      <div className="rounded-2xl border border-[#e3dad1] bg-white p-5">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-primary mb-2">
                          Preporučeni protokol
                        </p>
                        <p className="text-[#3d3832] text-sm leading-relaxed font-light">
                          {tech.protocol}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-[#e3dad1] bg-white/60 p-5">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a7f72] mb-2">
                          Nakon tretmana
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed font-light">
                          {tech.aftercare}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Kako izgleda tretman laserima / Oporavak i nega ──────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
                Pre procedure
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                Kako izgleda tretman laserima?
              </h2>
              <div className="w-16 h-[2px] bg-primary mb-8" />
              <div className="text-muted-foreground leading-relaxed font-light space-y-5">
                <p>
                  Pre svake procedure obavlja se dermatološka procena kože i odabir odgovarajuće
                  tehnologije. U zavisnosti od indikacije, tretman se sprovodi pojedinačnim
                  modalitetom ili kombinacijom različitih tehnologija.
                </p>
                <p>
                  Broj tretmana, razmaci između procedura i očekivane reakcije kože zavise od
                  izabranog protokola. Kod nekih procedura poboljšanje se razvija postepeno tokom
                  narednih nedelja, dok je za optimalan rezultat često potrebno više tretmana.
                </p>
              </div>
            </div>

            <div>
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Nega</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                Oporavak i nega kože
              </h2>
              <div className="w-16 h-[2px] bg-primary mb-8" />
              <div className="text-muted-foreground leading-relaxed font-light space-y-5">
                <p>
                  Nakon neablativnih tretmana, kao što su ClearLift, ClearSkin, DVL, NIR i Nd:YAG,
                  najčešće se javlja blago i prolazno crvenilo, bez značajnog perioda oporavka.
                </p>
                <p>
                  Kod intenzivnijih tretmana Er:YAG laserom crvenilo i osećaj žarenja mogu biti
                  izraženiji. U tim slučajevima savetuje se izbegavanje šminkanja i fizičkih
                  aktivnosti tokom prva dva dana, uz negu kože prema preporuci lekara.
                </p>
                <p>
                  Nakon svakog laserskog ili svetlosnog tretmana važni su odgovarajuća hidratacija,
                  zaštita kože od sunca i pridržavanje individualnih preporuka za negu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dermatološka ekspertiza ──────────────────────────────────────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="rounded-[2.25rem] border border-[#e3dad1] bg-white p-8 md:p-14">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4 text-center">
              Ordinacija dr Terzić
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center">
              Dermatološka ekspertiza za prirodne rezultate
            </h2>
            <div className="w-16 h-[2px] bg-primary mx-auto mt-7 mb-9" />
            <div className="text-muted-foreground leading-relaxed font-light space-y-5 max-w-[68ch] mx-auto">
              <p>
                U ordinaciji dr Terzić laserske procedure nisu unapred definisani paketi, već deo
                individualno osmišljenog dermatološkog plana. Pažljiv izbor tehnologije omogućava da
                se tretman usmeri na konkretan problem kože, od akni i rozacee do pigmentacija,
                nepravilne teksture i znakova starenja.
              </p>
              <p className="text-[#3d3832]">
                Posebno dobri rezultati se dobijaju kombinovanjem aparaturnih tehnologija i
                injekcionih procedura.
              </p>
              <p>
                Cilj je zdravija, ujednačenija i kvalitetnija koža, uz očuvanje prirodnog izgleda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">FAQ</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Često Postavljana Pitanja
            </h2>
            <div className="w-16 h-[2px] bg-primary mx-auto mt-6" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border border-border bg-background shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                >
                  <span className="text-foreground font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-primary transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed pt-5 font-light">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Povezane usluge ──────────────────────────────────────────────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Istražite</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Povezane Usluge</h2>
            <div className="w-16 h-[2px] bg-primary mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: 'Uklanjanje strija', href: '/usluge/strije-laser' },
              { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' },
              { title: 'Lečenje akni', href: '/usluge/akne' },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block rounded-[1.5rem] border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
              >
                <h3 className="text-foreground font-medium mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <span className="text-primary text-sm inline-flex items-center gap-2">
                  Saznajte više
                  <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute left-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-8 mb-9">
            <Image
              src="/images/Logos/fotona-logo.png"
              alt="Fotona"
              width={2500}
              height={1227}
              sizes="140px"
              className="h-11 w-auto brightness-0 invert opacity-80"
            />
            <div className="h-10 w-px bg-white/30" />
            <Image
              src="/images/Logos/alma-logo.png"
              alt="Alma"
              width={1500}
              height={502}
              sizes="110px"
              className="h-8 w-auto brightness-0 invert opacity-80"
            />
          </div>
          <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4">Spremni ste?</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Saznajte koji laserski protokol odgovara vašoj koži
          </h2>
          <p className="text-white/80 mt-5 font-light max-w-xl mx-auto">
            Kontaktirajte nas za dermatološku procenu i individualno planirano podmlađivanje.
          </p>
          <Link
            href="/kontakt"
            className="mt-10 inline-flex rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98]"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </section>
    </>
  )
}
