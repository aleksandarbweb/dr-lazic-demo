"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

const faqs = [
  {
    question: 'Da li je tretman botulinskim toksinom bolan?',
    answer: 'Tretman je minimalno bolan i traje oko 15 minuta. Na mestima injektovanja mogu se javiti mala ispupčenja koja prolaze za 30–40 minuta. Koriste se najtanje igle kako bi nelagodnost bila svedena na minimum.'
  },
  {
    question: 'Kada počinje dejstvo botoksa i koliko traje?',
    answer: 'Dejstvo botulinskog toksina počinje za 5–7 dana, a potpun rezultat je vidljiv dve nedelje nakon injektovanja. Efekat tretmana traje od 4 do 6 meseci i može se ponavljati više puta bez ikakvih posledica.'
  },
  {
    question: 'Da li botoks zamrzava izraz lica?',
    answer: 'Ne. Radi se o privremenoj parezi mišića, odnosno smanjenoj pokretljivosti — ne paralizi. Kod iskusnog doktora sa dobrom tehnikom rada rezultat je prirodan izgled, a ne zamrznut izraz lica. Vremenom lice izgleda sve bolje jer nema podsticaja za nastanak novih bora.'
  },
  {
    question: 'Kada se vide rezultati filera?',
    answer: 'Rezultati hijaluronskih filera su vidljivi odmah nakon tretmana. Definitivni rezultati se procenjuju nakon 3–4 nedelje, kada se povuče eventualni blag otok. Trajnost rezultata je od 12 do 24 meseca, zavisno od vrste preparata, tretiranog dela lica i metabolizma organizma.'
  },
  {
    question: 'Koje su moguće nuspojave filera?',
    answer: 'Neželjeni efekti su minimalni i najčešće podrazumevaju modrice na mestu uboda ili blag otok koji se povlači za nekoliko dana. Zbog toga se tretman ne savetuje minimum 7 dana pre značajnih događaja. Ozbiljne komplikacije su izuzetno retke kada tretman izvodi iskusan specijalista sa kvalitetnim preparatima.'
  },
  {
    question: 'Koji preparati se koriste?',
    answer: 'Koristimo isključivo originalne Allergan preparate. VISTABEL je u našoj zemlji jedini registrovan preparat botulinskog toksina za estetsku primenu. Za filere koristimo Juvederm liniju — najbezbednije i najčešće korišćene dermalne filere na svetu, koji sadrže integrisani anestetik za komfornije iskustvo.'
  },
  {
    question: 'Kako se pripremiti za tretman filerima?',
    answer: '4–5 dana pre tretmana izbegavati preparate sa acetilsalicilnom kiselinom (Andol, Aspirin), vitamin C, ginko bilobu i đumbir. Dan pre intervencije izbegavati alkohol.'
  }
]

const botoksSteps = [
  'Konsultacija i analiza — detaljan pregled lica, procena stanja kože i mimičnih mišića, definisanje individualnog plana tretmana.',
  'Priprema — čišćenje i dezinfekcija tretirane zone. Tretman ne zahteva anestetičku kremu.',
  'Aplikacija — injektovanje malih količina razblaženog botulinskog toksina u mimične mišiće korišćenjem najtanjih igala. Tretman traje oko 15 minuta.',
  'Procena rezultata — kontrolni pregled nakon 2 nedelje radi provere dejstva i eventualne korekcije.'
]

const filerSteps = [
  'Konsultacija i MD kodovi — pažljiva analiza lica i individualni plan rada korišćenjem metodologije MD kodova za Full Face pristup.',
  'Priprema — čišćenje i dezinfekcija. Nove generacije Juvederm filera sadrže anestetik koji obezbeđuje komforno iskustvo.',
  'Aplikacija — precizno injektovanje filera u kožu i potkožno tkivo na unapred određena mesta. Tretman traje 15–45 minuta zavisno od zone.',
  'Praćenje rezultata — efekti su vidljivi odmah, a definitivni rezultati se procenjuju nakon 3–4 nedelje.'
]

const idealCandidates = [
  'Osobe sa mimičnim borama na čelu, između obrva ili oko očiju (bore smejalice)',
  'Osobe kojima spoljašnji krajevi obrva počinju da se spuštaju dajući tužan izraz',
  'Osobe sa izraženim nazolabijanim, marionetskim ili pušačkim borama',
  'Osobe koje žele prirodnu korekciju volumena obraza, usana ili brade',
  'Osobe sa masnom kožom i proširenim porama u regiji čela',
  'Osobe koje žele podmlađivanje i konturisanje lica bez hirurške intervencije',
  'Osobe sa problemom pojačanog znojenja (hiperhidroza)'
]

const expectedResults = [
  'Smanjenje i nestanak mimičnih bora — ljutit i umoran izraz ustupa mesto svežem i mlađem',
  'Blago podizanje obrva i otvoren pogled',
  'Sužene pore i smanjeno lučenje sebuma u tretiranoj regiji',
  'Prirodno popunjen volumen lica — podočnjaci nestaju, konture se definišu',
  'Full Face efekat — vidljiv rezultat, nevidljiv tretman. Podmlađivanje za 5–10 godina',
  'Trajnost rezultata botoksa 4–6 meseci, filera 12–24 meseca',
  'Kumulativni efekat — vremenom lice izgleda sve bolje jer nema podsticaja za bore'
]

export default function BotoksFilerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#faf9f7] pt-36 pb-24">
        <div className="hidden md:block absolute left-8 top-1/3 w-[1px] h-32 bg-[#b91c1c]/30" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <Link 
              href="/usluge" 
              className="inline-flex items-center text-[#6b6b6b] text-sm hover:text-[#b91c1c] transition-colors mb-8 tracking-wide"
            >
              <ChevronRight size={16} className="rotate-180 mr-2" />
              Nazad na usluge
            </Link>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#b91c1c] mb-4">Estetska dermatologija</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a]">
              Botoks
              <br />
              <span className="italic text-[#342f2a]">i Hijaluronski Fileri</span>
            </h1>
            <div className="w-24 h-[2px] bg-[#b91c1c] mt-8" />
            <p className="text-[#6b6b6b] text-lg mt-8 font-light leading-relaxed max-w-[56ch]">
              Precizna korekcija bora, vraćanje volumena i konturisanje lica premium Allergan preparatima — najčešće izvođena estetska procedura na svetu.
            </p>
            <Link
              href="/kontakt"
              className="mt-10 inline-flex rounded-full bg-[#b91c1c] px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#991b1b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c] focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              Saznajte više
            </Link>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">O tretmanu</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
                Botoks i Fileri — Šta Trebate Znati
              </h2>
              <div className="w-16 h-[2px] bg-[#b91c1c] mb-8" />
              <div className="text-[#6b6b6b] leading-relaxed font-light space-y-5">
                <p>
                  <strong className="text-[#3d3832] font-medium">Botulinski toksin</strong> se koristi za korigovanje bora u gornjoj trećini lica, nastalih kao posledica kontrakcije mimičnih mišića. Bore između obrva daju ljutit izraz, bore oko očiju i horizontalne bore na čelu čine da lice izgleda starije, a spušteni spoljašnji krajevi obrva daju tužan izraz.
                </p>
                <p>
                  Injektovanjem malih količina razblaženog botulinskog toksina u mimične mišiće sprečavaju se kontrakcije — postojeće bore nestaju ili se ublažavaju, moguće je blago podizanje obrva, a u tretiranoj regiji se popravlja kvalitet kože i sužavaju pore.
                </p>
                <p>
                  <strong className="text-[#3d3832] font-medium">Hijaluronski fileri</strong> su preparati na bazi hijaluronske kiseline — prirodne supstance koja se nalazi u vezivnom tkivu kože. Koriste se za korekciju bora, prirodno oblikovanje usana, jagodica i brade, i za Full Face pristup kojim se briše umorni izgled i lice podmladjuje za 5–10 godina.
                </p>
                <p>
                  Hijaluronski filer se u telu biološki razgrađuje na prirodan način, a zbog pozitivnog uticaja na kvalitet tkiva i kože obezbeđeno je usporenje starenja i očuvanje prirodnosti.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-[#e4ddd4] bg-[#f4eee8] p-1.5 shadow-[0_25px_50px_-30px_rgba(44,31,20,0.45)]">
              <div className="relative h-full w-full overflow-hidden rounded-[calc(1.75rem-0.375rem)]">
                <Image
                  src="/images/Services/botoks-treatment.jpg"
                  alt="Tretman botulinskim toksinom i hijaluronskim filerima"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24160f]/10 via-transparent to-transparent" />
              </div>
              <div className="absolute left-5 top-5 h-12 w-12 border-l border-t border-[#b91c1c]/60" />
              <div className="absolute bottom-5 right-5 h-12 w-12 border-b border-r border-[#b91c1c]/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Two Methods Section */}
      <section className="bg-[#faf9f7] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Proces</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              Kako Funkcioniše
            </h2>
            <div className="w-16 h-[2px] bg-[#b91c1c] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Botoks Card */}
            <div className="rounded-[1.75rem] border border-[#e3dad1] bg-white p-1.5">
              <div className="rounded-[calc(1.75rem-0.375rem)] border border-[#f2ece5] bg-[#fffdfb] p-8 md:p-10 h-full">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b91c1c] mb-3">Botulinski toksin</p>
                <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-6">Botoks — VISTABEL®</h3>
                <div className="w-12 h-[2px] bg-[#b91c1c] mb-6" />
                <div className="space-y-6">
                  {botoksSteps.map((step, index) => (
                    <div key={index} className="flex gap-5">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#b91c1c] font-serif text-lg text-white shadow-sm">
                        {index + 1}
                      </div>
                      <p className="text-[#6b6b6b] leading-relaxed font-light pt-2">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fileri Card */}
            <div className="rounded-[1.75rem] border border-[#e3dad1] bg-white p-1.5">
              <div className="rounded-[calc(1.75rem-0.375rem)] border border-[#f2ece5] bg-[#fffdfb] p-8 md:p-10 h-full">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b91c1c] mb-3">Dermalni fileri</p>
                <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-6">Fileri — Juvederm®</h3>
                <div className="w-12 h-[2px] bg-[#b91c1c] mb-6" />
                <div className="space-y-6">
                  {filerSteps.map((step, index) => (
                    <div key={index} className="flex gap-5">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#b91c1c] font-serif text-lg text-white shadow-sm">
                        {index + 1}
                      </div>
                      <p className="text-[#6b6b6b] leading-relaxed font-light pt-2">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Post-treatment Recommendations */}
          <div className="mt-10 rounded-[1.75rem] border border-[#e3dad1] bg-white p-1.5">
            <div className="rounded-[calc(1.75rem-0.375rem)] border border-[#f2ece5] bg-[#fffdfb] p-8 md:p-10">
              <h3 className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-6">Preporuke Nakon Tretmana</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                {[
                  '6 sati nakon tretmana biti u uspravnom položaju',
                  'Spavati na leđima na blago uzdignutom uzglavlju prve noći',
                  'Šminkanje je dozvoljeno sutradan',
                  '5–7 dana bez fizičke aktivnosti i saune',
                  '3–4 nedelje bez tretmana i masaža lica',
                  'Za usne — 24h izbegavati tople napitke, pušenje i alkohol'
                ].map((rec, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#b91c1c] mt-2 flex-shrink-0 rounded-full" />
                    <span className="text-[#6b6b6b] font-light text-sm">{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Candidates & Results Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Idealni kandidati</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
                Za Koga Je Tretman
              </h2>
              <div className="w-16 h-[2px] bg-[#b91c1c] mb-8" />
              <ul className="space-y-5">
                {idealCandidates.map((candidate, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-[#b91c1c] mt-2 flex-shrink-0" />
                    <span className="text-[#6b6b6b] font-light">{candidate}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Rezultati</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
                Očekivani Rezultati
              </h2>
              <div className="w-16 h-[2px] bg-[#b91c1c] mb-8" />
              <ul className="space-y-5">
                {expectedResults.map((result, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-[#b91c1c] mt-2 flex-shrink-0" />
                    <span className="text-[#6b6b6b] font-light">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#faf9f7] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">FAQ</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              Često Postavljana Pitanja
            </h2>
            <div className="w-16 h-[2px] bg-[#b91c1c] mx-auto mt-6" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-[#e5e0da] bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70"
                >
                  <span className="text-[#1a1a1a] font-medium pr-4">{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-[#b91c1c] transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 border-t border-[#e5e0da]">
                    <p className="text-[#6b6b6b] leading-relaxed pt-5 font-light">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Istražite</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              Povezane Usluge
            </h2>
            <div className="w-16 h-[2px] bg-[#b91c1c] mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: 'Profhilo', href: '/usluge/profhilo' },
              { title: 'Morpheus8 RF Microneedling', href: '/usluge/morpheus8' },
              { title: 'Podmlađivanje Fotona 3D·4D·5D', href: '/usluge/podmladjivanje-fotona-3d-4d-5d' }
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block rounded-[1.5rem] border border-[#e5e0da] bg-[#faf9f7] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#b91c1c] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70"
              >
                <h3 className="text-[#1a1a1a] font-medium mb-3 group-hover:text-[#b91c1c] transition-colors">
                  {service.title}
                </h3>
                <span className="text-[#b91c1c] text-sm inline-flex items-center gap-2">
                  Saznajte više
                  <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#b91c1c] py-20">
        <div className="absolute left-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
        
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4">Spremni ste?</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Botoks i Fileri — Saznajte Više
          </h2>
          <p className="text-white/80 mt-5 font-light max-w-xl mx-auto">
            Kontaktirajte nas za individualan plan tretmana prilagođen vašim potrebama i ciljevima
          </p>
          <Link
            href="/kontakt"
            className="mt-10 inline-flex rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#b91c1c] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#faf9f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#b91c1c] active:scale-[0.98]"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </section>
    </>
  )
}
