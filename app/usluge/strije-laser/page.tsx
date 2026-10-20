"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronRight, Sparkles } from 'lucide-react'

const faqs = [
  {
    question: 'Da li su rezultati uklanjanja strija trajni?',
    answer: 'Tretman podstiče sintezu novog kolagena (neokolageneza) koji popunjava i učvršćuje strukturu dermisa na mestu gde je nastala strija. Rezultati postignuti serijom tretmana su dugoročni.'
  },
  {
    question: 'Koliko tretmana je potrebno?',
    answer: 'Potrebno je 5 tretmana, koji se izvode naizmenično na 2 nedelje.'
  },
  {
    question: 'Kada se vide prvi rezultati?',
    answer: 'Novi kolagen počinje da se stvara za 3-4 nedelje od tretmana. Nivo kolagena se zatim višestruko povećava, čime se strije pune i postaju manje uočljive.'
  },
  {
    question: 'Kako koža izgleda neposredno nakon tretmana?',
    answer: 'Uobičajena reakcija je crvenilo i blag osećaj peckanja koji podseća na blagu sunčanicu. Oporavak je veoma kratak, najčešće svega 24 do 48 sati, a za nekoliko dana koža se peruta.'
  },
  {
    question: 'Da li se tretiraju i stare, bele strije?',
    answer: 'Da. Kombinacija Nd:YAG i frakcionisanog Er:YAG lasera uz injektovanje kolagen stimulatora efikasna je i kod hroničnih, belih strija.'
  }
]

const howItWorks = [
  'Kombinovana terapija: koristimo sinergiju Nd:YAG i frakcionisanog Er:YAG lasera uz injektovanje kolagen stimulatora za maksimalan efekat.',
  'Dvostruka dubinska stimulacija: laserski zraci prodiru u dublji sloj kože (dermis) i željenim mikropovredama stimulišu sintezu novih kolagenih vlakana, dok injektovani kolagen stimulatori stimulišu ćelije kože na neokolagenezu.',
  'Neokolageneza: snažno se podstiče i ubrzava proces sinteze novog kolagena i elastičnih vlakana.',
  'Regeneracija: novi kolagen počinje da se stvara za 3-4 nedelje od tretmana.',
  'Popunjavanje: nivo kolagena se višestruko povećava, čime se strije "pune" i postaju manje uočljive.'
]

const phases = [
  {
    name: 'Akutna faza',
    color: 'Crvene / Izdignute',
    scientific: 'Striae rubra'
  },
  {
    name: 'Subakutna faza',
    color: 'Ljubičaste',
    scientific: 'Striae violaceae'
  },
  {
    name: 'Hronična faza',
    color: 'Bele / Ulegnute',
    scientific: 'Striae alba'
  }
]

export default function UklanjanjeStrijaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background pt-36 pb-24">
        <div className="hidden md:block absolute left-8 top-1/3 w-[1px] h-32 bg-primary/30" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <Link
              href="/usluge"
              className="inline-flex items-center text-muted-foreground text-sm hover:text-primary transition-colors mb-8 tracking-wide"
            >
              <ChevronRight size={16} className="rotate-180 mr-2" />
              Nazad na usluge
            </Link>
            <div className="flex items-center gap-5 mb-6">
              <div className="h-6 w-px bg-[#d6cec4]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Estetska dermatologija</p>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
              Uklanjanje strija
            </h1>
            <div className="w-24 h-[2px] bg-primary mt-8" />
            <p className="text-muted-foreground text-lg mt-8 font-light leading-relaxed max-w-[56ch]">
              Savremena terapija strija podrazumeva kombinovanje tretmana laserima i injektovanje kolagen stimulatora, efikasno tretirajući strije u svim fazama, od crvenih do hroničnih belih ožiljaka.
            </p>
            <Link
              href="/kontakt"
              className="mt-10 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#991b1b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              Saznajte više
            </Link>
          </div>
        </div>
      </section>

      {/* What Are Striae Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">O indikaciji</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                Razumevanje Strija
              </h2>
              <div className="w-16 h-[2px] bg-primary mb-8" />
              <div className="text-muted-foreground leading-relaxed font-light space-y-5">
                <p>
                  Strije (Striae distensae) su zapravo linearni ožiljci u dubljem sloju kože, dermisu. Nastaju usled naglog, prebrzog ili prevelikog rastezanja kože čime se trajno oštećuju kolagena i elastična vlakna vezivnog tkiva.
                </p>
                <p>
                  Tretmani frakcionisanim <strong className="text-[#3d3832] font-medium">Er:YAG laserom</strong> u kombinaciji sa <strong className="text-[#3d3832] font-medium">Nd:YAG laserom</strong>, uz injektovanje kolagen stimulatora, snažno podstiču procese neokolageneze, čime se nivo kolagena višestruko povećava, a time poboljšava izgled strija.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  {phases.map((phase) => (
                    <div key={phase.name} className="p-4 bg-background border border-border rounded-xl text-center">
                       <p className="text-[10px] uppercase tracking-widest text-primary mb-1">{phase.name}</p>
                       <p className="text-xs font-medium text-foreground">{phase.color}</p>
                       <p className="text-[10px] italic text-muted-foreground mt-1">{phase.scientific}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-[#e4ddd4] bg-[#f4eee8] p-1.5 shadow-[0_25px_50px_-30px_rgba(44,31,20,0.45)]">
              <div className="relative h-full w-full overflow-hidden rounded-[calc(1.75rem-0.375rem)]">
                <Image
                  src="/images/Services/Laserski tretmani/laserski tretmani strija.png"
                  alt="Tretman strija, rezultati i metoda"
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
              <div className="absolute left-5 top-5 h-12 w-12 border-l border-t border-primary/60" />
              <div className="absolute bottom-5 right-5 h-12 w-12 border-b border-r border-primary/60" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Proces</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Kako Funkcioniše Terapija
            </h2>
            <div className="w-16 h-[2px] bg-primary mx-auto mt-6" />
          </div>
          <div className="max-w-3xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex gap-8 mb-10 last:mb-0">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-primary font-serif text-2xl text-white shadow-lg">
                  {index + 1}
                </div>
                <div className="pt-3">
                  <p className="text-muted-foreground leading-relaxed font-light">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Plan & Recovery Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-background p-8 md:p-12 rounded-[2.5rem] border border-border">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">Plan Tretmana</h3>
              </div>
              <p className="text-[#3d3832] leading-relaxed font-light">
                Potrebno je <strong className="font-medium">5 tretmana</strong>, koji se izvode naizmenično na <strong className="font-medium">2 nedelje</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light text-sm mt-5">
                Tretmani kombinuju lasere i injektovanje kolagen stimulatora. Kolagen stimulator se injektuje mezoterapijskim iglicama i odlično se podnosi.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Oporavak</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                Oporavak i Podnošljivost
              </h2>
              <div className="w-16 h-[2px] bg-primary mb-8" />
              <div className="text-muted-foreground leading-relaxed font-light space-y-5">
                <p>
                  Tretmani laserom se odlično podnose. Reakcija kože je crvenilo, praćeno osećajem blagog peckanja koji podseća na blagu sunčanicu.
                </p>
                <p>
                  Vreme oporavka je veoma kratko, najčešće svega <strong className="text-[#3d3832] font-medium">24 do 48 sati</strong>. Za nekoliko dana koža se peruta, čime se završava površinska faza regeneracije, dok dubinska sinteza kolagena nastavlja da radi za vas nedeljama kasnije.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">FAQ</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Često Postavljana Pitanja
            </h2>
            <div className="w-16 h-[2px] bg-primary mx-auto mt-6" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
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
                    <p className="text-muted-foreground leading-relaxed pt-5 font-light">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute left-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4">Spremni za promenu?</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Uklanjanje Strija: Saznajte Više
          </h2>
          <p className="text-white/80 mt-5 font-light max-w-xl mx-auto">
            Dozvolite našim stručnjacima da kreiraju individualan plan tretmana prilagođen vašoj koži.
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
