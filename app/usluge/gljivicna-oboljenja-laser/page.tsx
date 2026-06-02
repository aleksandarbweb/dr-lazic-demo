"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronRight, CheckCircle2 } from 'lucide-react'

const faqs = [
  {
    question: 'Zašto je laserski tretman bolji od lekova?',
    answer: 'Dugotrajna primena oralnih lekova za gljivice može dovesti do oštećenja jetre. Laserski tretman je neinvazivan, deluje lokalno i nema sistemskih neželjenih efekata na organizam.'
  },
  {
    question: 'Koliko tretmana je potrebno?',
    answer: 'Standardni protokol podrazumeva seriju od 4 tretmana koji se izvode jednom nedeljno. U nekim slučajevima upornih infekcija, broj tretmana se može korigovati prema proceni lekara.'
  },
  {
    question: 'Kada ću videti rezultate?',
    answer: 'Gljivice se uništavaju tokom samog tretmana, ali je potrebno vreme da nokat izraste kako bi se video zdrav deo. Oboleli deo nokta se polako pomera napred uobičajenom brzinom rasta nokta.'
  },
  {
    question: 'Da li je tretman bolan?',
    answer: 'Tokom tretmana pacijent oseća blagu toplotu u predelu nokatne ploče. Procedura je vrlo komforna i ne zahteva nikakvu anesteziju.'
  },
  {
    question: 'Zašto se tretiraju svi nokti?',
    answer: 'Gljivične infekcije se veoma lako šire sa jednog nokta na drugi. Kako bismo bili sigurni da smo eliminisali sve izvore infekcije, preventivno se tretiraju svi nokti na šakama ili stopalima.'
  }
]

const advantages = [
  {
    title: 'FDA Odobrenje',
    desc: 'Ova savremena metoda je zvanično odobrena od strane Američke agencije za hranu i lekove (FDA) kao bezbedna i efikasna.'
  },
  {
    title: 'Bezbednost jetre',
    desc: 'Izbegava se potreba za agresivnim oralnim lekovima koji mogu biti toksični za jetru, što je posebno važno kod starijih pacijenata.'
  },
  {
    title: 'Nema oporavka',
    desc: 'Nakon tretmana se možete odmah vratiti svojim svakodnevnim aktivnostima bez ikakvih ograničenja.'
  }
]

const processSteps = [
  'Konsultacija — pregled nokatnih ploča i potvrda gljivične infekcije.',
  'Priprema — nokat treba da bude očišćen od laka ili bilo kakvih premaza.',
  'Laserski tretman — aplikacija laserske svetlosti koja prodire kroz nokatnu ploču i uništava gljivice toplotom.',
  'Nega nakon — saveti o higijeni stopala i obuće kako bi se sprečila reinfekcija.',
  'Kontrola — detaljan pregled napretka rasta zdravog nokta nakon 2 meseca.'
]

export default function GljivicnaOboljenjaLaserPage() {
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
              Infekcije Noktiju
              <br />
              <span className="italic text-[#342f2a]">Laserska Terapija</span>
            </h1>
            <div className="w-24 h-[2px] bg-[#b91c1c] mt-8" />
            <p className="text-[#6b6b6b] text-lg mt-8 font-light leading-relaxed max-w-[56ch]">
              Savremena, neinvazivna i FDA odobrena metoda rešavanja gljivičnih infekcija nokatne ploče bez rizika po zdravlje jetre.
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
              <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Savremena metoda</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
                Rešenje za Gljivice
              </h2>
              <div className="w-16 h-[2px] bg-[#b91c1c] mb-8" />
              <div className="text-[#6b6b6b] leading-relaxed font-light space-y-5">
                <p>
                  Gljivična oboljenja nokatnih ploča ruku i nogu su vrlo čest i veliki problem zbog svoje upornosti, mogućnosti širenja i dugotrajne primene lekova koji mogu dovesti do oštećenja jetre.
                </p>
                <p>
                  Laserski tretman gljivičnih infekcija nokatne regije je savremena, neinvazivna metoda koja je odobrena od strane FDA. Deluje tako što laserski snop prodire kroz nokatnu ploču i eliminiše gljivice toplotom, bez oštećenja nokta ili okolne kože.
                </p>
                <p>
                  S obzirom na prirodu gljivičnih infekcija koje se dosta brzo prenose sa nokta na nokat, uvek se tretiraju svi nokti na zahvaćenom stopalu ili šaci kako bi se osiguralo potpuno izlečenje.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-[#e4ddd4] bg-[#f4eee8] p-1.5 shadow-[0_25px_50px_-30px_rgba(44,31,20,0.45)]">
              <div className="relative h-full w-full overflow-hidden rounded-[calc(1.75rem-0.375rem)]">
                <Image
                  src="/images/Services/Laserski tretmani/Gljivična oboljenja nokatnih ploča.png"
                  alt="Laserski tretman gljivičnih oboljenja nokatnih ploča"
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

      {/* Advantages Banner */}
      <section className="bg-[#faf9f7] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Prednosti</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              Zašto Odabrati Laser
            </h2>
            <div className="w-16 h-[2px] bg-[#b91c1c] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((item, index) => (
              <div key={index} className="rounded-[1.75rem] border border-[#e3dad1] bg-white p-1.5">
                <div className="rounded-[calc(1.75rem-0.375rem)] border border-[#f2ece5] bg-[#fffdfb] p-8 h-full">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#b91c1c] font-serif text-lg text-white shadow-sm mb-5">
                    {index + 1}
                  </div>
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-3">{item.title}</h3>
                  <p className="text-[#6b6b6b] font-light leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Proces lečenja</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              Tok Terapije
            </h2>
            <div className="w-16 h-[2px] bg-[#b91c1c] mx-auto mt-6" />
          </div>
          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
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

      {/* Results Section */}
      <section className="bg-[#faf9f7] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Očekivanja</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
                  Put do Zdravog Nokta
                </h2>
                <div className="w-16 h-[2px] bg-[#b91c1c] mb-8" />
                <div className="text-[#6b6b6b] leading-relaxed font-light space-y-5">
                  <p>
                    Nakon završene serije od 4 tretmana, nokat nastavlja da raste svojom uobičajenom brzinom. Kako novi, zdravi nokat izrasta, oboleli i promenjeni deo se postepeno pomera ka periferiji dok se potpuno ne ukloni sečenjem.
                  </p>
                  <div className="bg-white p-6 border border-[#e3dad1] rounded-2xl flex items-start gap-4">
                     <CheckCircle2 className="text-[#b91c1c] flex-shrink-0" />
                     <p className="text-sm italic">Kontrola se zakazuje za 2 meseca kako bi se medicinski procenio napredak i rast nove nokatne ploče.</p>
                  </div>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e5e0da] text-center">
                   <p className="text-3xl font-serif text-[#b91c1c] mb-2">4</p>
                   <p className="text-[10px] uppercase tracking-widest text-[#6b6b6b]">Tretmana</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e5e0da] text-center">
                   <p className="text-3xl font-serif text-[#b91c1c] mb-2">1x</p>
                   <p className="text-[10px] uppercase tracking-widest text-[#6b6b6b]">Nedeljno</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 md:py-28">
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

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#b91c1c] py-20">
        <div className="absolute left-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
        
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4">Vratite zdravlje Vašim noktima</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Rešite Gljivice Bezbedno
          </h2>
          <p className="text-white/80 mt-5 font-light max-w-xl mx-auto">
            Saznajte više o laserskom tretmanu i rešite se uporne infekcije na savremen način.
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
