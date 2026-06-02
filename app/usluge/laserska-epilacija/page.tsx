"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronRight, CheckCircle2 } from 'lucide-react'

const faqs = [
  {
    question: 'Da li laser zrači i da li je zračenje štetno?',
    answer: 'Ne. Medicinski diodni laser emituje svetlost specifične talasne dužine koja deluje isključivo na melanin u folikulu dlake. Nije reč o jonizujućem zračenju — radi se o svetlosnoj energiji koja je potpuno bezbedna za organizam.'
  },
  {
    question: 'Koliko tretmana je potrebno za trajne rezultate?',
    answer: 'Za maksimalan efekat tj. trajni gubitak dlačica potrebno je minimum 3 tretmana, a prosek ukupnog broja tretmana u zavisnosti od dela tela koji se tretira je 3 do 5 puta. Najčešće se u tri tretmana postiže značajno proređenje dlaka od 70-90%.'
  },
  {
    question: 'Koliki je razmak između tretmana?',
    answer: 'Razmak između tretmana za regije lica i vrata je minimum 2 meseca, a za regije tela 2,5 do 3 meseca. Ovaj razmak je neophodan kako bi nove dlačice ušle u aktivnu fazu rasta (anagen) u kojoj ih laser jedino može trajno uništiti.'
  },
  {
    question: 'Da li se tretiraju svetle ili sede dlake?',
    answer: 'Osnovni uslov je da dlačice budu tamne (smeđe i crne) i dovoljno jake. Sede, plave i paperjaste dlačice je nemoguće tretirati jer ne sadrže melanin koji apsorbuje laserski snop.'
  },
  {
    question: 'Kada se ne sme raditi tretman?',
    answer: 'Koža dela tela koji se želi tretirati ne sme biti sveže tenirana na suncu ili u solarijumu. Najbolji rezultati se postižu u kombinaciji: "Bela koža – crna dlačica!". Apsolutne kontraindikacije za samu metodu ne postoje.'
  },
  {
    question: 'Da li je tretman bolan?',
    answer: 'U toku samog rada prisutan je subjektivni osećaj kratkotrajnog peckanja. Zahvaljujući aktivnom hlađenju Lumenis Light Sheer lasera, tretman je maksimalno komforan i bezbedan za okolne strukture kože.'
  }
]

const howItWorks = [
  'Direktan kontakt — laserski snop talasne dužine 800 nm usmerava se na kožu.',
  'Apsorpcija — snop se apsorbuje isključivo u melaninu (pigmentu) folikula dlake.',
  'Pretvaranje u toplotu — u intervalu od 30 milisekundi svetlost se pretvara u toplotu.',
  'Uništenje — trajno se uništavaju dlačice koje su u aktivnoj fazi rasta (anagen).',
  'Faza odmora — dlačice u katagenoj ili telogenoj fazi se uništavaju jednokratno, zato se tretman mora ponavljati.'
]

const preparationSteps = [
  'Bez čupanja — dlačice se ne smeju uklanjati pincetom ili voskom (min. 4 nedelje za lice, 6 nedelja za telo).',
  'Skraćivanje — dozvoljeno je korišćenje makazica, brijača ili depil kreme.',
  'Bez sunčanja — koža ne sme biti sveže osunčana ili tretirana u solarijumu.',
  'Čista koža — na dan tretmana koža treba da bude čista, bez losiona ili krema.'
]

const advantages = [
  {
    title: 'Aktivno hlađenje',
    desc: 'Hlađenje tretiranog dela tokom emisije snopa štiti sve strukture kože (žlezde, krvne sudove, nerve).'
  },
  {
    title: 'Golden Standard',
    desc: 'Light Sheer Lumenis diodni laser decenijama predstavlja najpriznatiji standard za trajno uklanjanje dlaka.'
  },
  {
    title: 'Maksimalna bezbednost',
    desc: 'Histološki je dokazano da laser ne oštećuje okolna tkiva, čime se izbegavaju ožiljci i trajne promene.'
  }
]

export default function LaserskaEpilacijaPage() {
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
            <div className="flex items-center gap-5 mb-6">
              <div className="h-6 w-px bg-[#d6cec4]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#b91c1c]">Laserski tretmani</p>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a]">
              Laserska Epilacija
              <br />
              <span className="italic text-[#342f2a]">Lumenis Light Sheer</span>
            </h1>
            <div className="w-24 h-[2px] bg-[#b91c1c] mt-8" />
            <p className="text-[#6b6b6b] text-lg mt-8 font-light leading-relaxed max-w-[56ch]">
              Medicinski najbezbednija i najefikasnija metoda trajnog uklanjanja dlačica diodnim laserom — zlatni standard svetske dermatologije od 2000. godine.
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
              <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Metoda izbora</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
                Golden Standard Epilacije
              </h2>
              <div className="w-16 h-[2px] bg-[#b91c1c] mb-8" />
              <div className="text-[#6b6b6b] leading-relaxed font-light space-y-5">
                <p>
                  Epilacija diodnim laserom predstavlja metodu izbora u rešavanju problema neželjene i / ili prekomerne maljavosti. Radi se o medicinski najbezbednijoj i najefikasnijoj metodi, danas dostupnoj u svetu. Ova metoda je od 2000. godine prisutna i u našoj zemlji.
                </p>
                <p>
                  Medicinski, visokosnažni, pulsni, diodni laser <strong className="text-[#3d3832] font-medium">&quot;Light Sheer&quot; firme Lumenis</strong> i dalje predstavlja &quot;Golden Standard&quot; među triholaserima (laseri za trajno uništavanje dlačica).
                </p>
                <p>
                  Diodnim laserom je potpuno bezbedno tretirati sve regije na telu osim predela oko samih očiju. Podjednako uspešno je moguće tretirati oba pola, rešavajući kako estetske tako i medicinske probleme poput hormonskog disbalansa ili urastanja dlaka (Folliculitis recurvans).
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-[#e4ddd4] bg-[#f4eee8] p-1.5 shadow-[0_25px_50px_-30px_rgba(44,31,20,0.45)]">
              <div className="relative h-full w-full overflow-hidden rounded-[calc(1.75rem-0.375rem)]">
                <Image
                  src="/images/Services/Laserski tretmani/Epilacija-laserom-–-trajno-uklanjanje-dlacica.png"
                  alt="Laserska epilacija Lumenis Light Sheer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24160f]/10 via-transparent to-transparent" />
                
                {/* Logo Overlay */}
                <div className="absolute bottom-6 right-6 w-24 md:w-32 opacity-80 decoration-transparent">
                   <Image 
                    src="/images/Logos/dr terzic beli logo.png"
                    alt="Logo Overlay"
                    width={128}
                    height={48}
                    className="w-full h-auto"
                   />
                </div>
              </div>
              <div className="absolute left-5 top-5 h-12 w-12 border-l border-t border-[#b91c1c]/60" />
              <div className="absolute bottom-5 right-5 h-12 w-12 border-b border-r border-[#b91c1c]/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Principles & Advantages */}
      <section className="bg-[#faf9f7] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Tehnologija</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              Princip Rada i Prednosti
            </h2>
            <div className="w-16 h-[2px] bg-[#b91c1c] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {advantages.map((item, index) => (
              <div key={index} className="rounded-[1.75rem] border border-[#e3dad1] bg-white p-1.5">
                <div className="rounded-[calc(1.75rem-0.375rem)] border border-[#f2ece5] bg-[#fffdfb] p-8 h-full">
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">{item.title}</h3>
                  <div className="w-10 h-[2px] bg-[#b91c1c] mb-5" />
                  <p className="text-[#6b6b6b] font-light leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 md:p-12 bg-white border border-[#e3dad1] rounded-[2rem] shadow-sm">
            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-6">Selektivna Fototermoliza</h3>
            <p className="text-[#6b6b6b] font-light leading-relaxed max-w-4xl">
              Diodni laser radi na principu selektivne fototermolize. Direktnim kontaktom laserski snop talasne dužine 800 nm usmerava se na kožu. Snop se apsorbuje jedino u melaninu (pigmentu) folikula dlake gde se u veoma kratkom vremenskom intervalu (30 milisekundi) pretvara u toplotu, čime se trajno uništavaju dlačice u anagenoj fazi.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Proces</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              Kako Funkcioniše Tretman
            </h2>
            <div className="w-16 h-[2px] bg-[#b91c1c] mx-auto mt-6" />
          </div>
          <div className="max-w-3xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex gap-8 mb-10 last:mb-0">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-[#b91c1c] font-serif text-2xl text-white shadow-lg">
                  {index + 1}
                </div>
                <div className="pt-3">
                  <p className="text-[#6b6b6b] leading-relaxed font-light">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation & Candidates */}
      <section className="bg-[#faf9f7] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Priprema</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
                Kako se Pripremiti
              </h2>
              <div className="w-16 h-[2px] bg-[#b91c1c] mb-8" />
              <ul className="space-y-5">
                {preparationSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 size={20} className="text-[#b91c1c] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6b6b6b] font-light">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Indikacije</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
                Medicinske i Estetske
              </h2>
              <div className="w-16 h-[2px] bg-[#b91c1c] mb-8" />
              <div className="text-[#6b6b6b] font-light leading-relaxed space-y-4">
                <p><strong>Estetski indikacije:</strong> Neželjena maljavost na regijama pazuha, prepona, nogu, leđa, ramena ili lica.</p>
                <p><strong>Medicinske indikacije:</strong> Prekomerna maljavost usled sindroma policističnih jajnika ili hormonskog disbalansa, kao i hronično urastanje dlačica (Folliculitis recurvans).</p>
                <div className="p-6 bg-white border border-[#e3dad1] rounded-2xl mt-6">
                   <p className="text-sm italic">&quot;U toku samog rada prisutan je subjektivni osećaj peckanja, dok koža može odreagovati kratkotrajnim crvenilom koje prolazi brzo nakon tretmana.&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Česta Pitanja</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              Istine o Epilaciji
            </h2>
            <div className="w-16 h-[2px] bg-[#b91c1c] mx-auto mt-6" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-[#e5e0da] bg-[#faf9f7] shadow-sm"
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

      {/* Brzo do Cilja Table/Checklist */}
      <section className="bg-[#faf9f7] py-20 md:py-12">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl text-[#1a1a1a] mb-12">Brzo do Cilja</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               <div className="bg-white p-8 border border-[#e3dad1] rounded-[2rem]">
                  <h4 className="font-serif text-xl mb-4 text-[#b91c1c]">Odabir aparata</h4>
                  <p className="text-sm font-light text-[#6b6b6b]">Medicinski Light Sheer Lumenis ostaje golden standard u rešavanju neželjene maljavosti širom sveta.</p>
               </div>
               <div className="bg-white p-8 border border-[#e3dad1] rounded-[2rem]">
                  <h4 className="font-serif text-xl mb-4 text-[#b91c1c]">Stručna preporuka</h4>
                  <p className="text-sm font-light text-[#6b6b6b]">Poverite brigu o koži specijalisti sa višedecenijskim iskustvom za najbezbednije rezultate.</p>
               </div>
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
            Laserska Epilacija — Saznajte Više
          </h2>
          <p className="text-white/80 mt-5 font-light max-w-xl mx-auto">
            Kontaktirajte nas danas i obezbedite sebi glatku kožu uz najefikasniju tehnologiju na tržištu.
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
