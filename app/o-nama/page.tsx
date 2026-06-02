"use client"

import Image from 'next/image'
import { SectionTitle } from '@/components/section-title'
import { Target, Shield, Award } from 'lucide-react'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/motion-primitives'// Metadata must be handled in a separate layout or page wrapper if this is "use client"
// But since this is a simple page, let's keep the client component here and move metadata to layout if needed,
// Actually Next.js 13+ app router requires metadata to be exported from a Server Component.
// Let's just remove metadata from here and assume layout handles it, or I'll just remove it for now.


const values = [
  {
    icon: Target,
    title: 'Preciznost',
    description: 'Svaki tretman sprovodimo sa maksimalnom preciznošću i pažnjom, koristeći najsavremeniju opremu i proverene metode.'
  },
  {
    icon: Shield,
    title: 'Poverenje',
    description: 'Gradimo dugoročne odnose sa našim pacijentima zasnovane na iskrenosti, transparentnosti i profesionalnom integritetu.'
  },
  {
    icon: Award,
    title: 'Rezultati',
    description: 'Posvećeni smo postizanju vidljivih i trajnih rezultata koji prevazilaze očekivanja naših pacijenata.'
  },
]

export default function ONamaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#faf9f7] pt-36 pb-20">
        <div className="hidden md:block absolute left-8 top-1/3 w-[1px] h-32 bg-[#b91c1c]/30" />
        <FadeUp>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <p className="text-[#b91c1c] text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              Upoznajte nas
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a]">
              O Nama
            </h1>
            <div className="w-24 h-[2px] bg-[#b91c1c] mx-auto mt-8" />
          </div>
        </FadeUp>
      </section>

      {/* Clinic Story Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp delay={0.1}>
                <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Naša priča</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
                  Tradicija Izvrsnosti
                </h2>
                <div className="w-16 h-[2px] bg-[#b91c1c] mb-8" />
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-[#6b6b6b] leading-relaxed mb-5 font-light">
                  Ordinacija Dr. Terzić osnovana je sa vizijom pružanja vrhunske dermatološke nege u Beogradu. 
                  Od samog početka, naša misija je bila kombinovanje medicinskog znanja sa najsavremenijim 
                  tehnologijama kako bismo našim pacijentima omogućili najbolje moguće rezultate.
                </p>
                <p className="text-[#6b6b6b] leading-relaxed mb-5 font-light">
                  Danas, sa više od 20 godina iskustva, naša ordinacija predstavlja sinonim za kvalitet 
                  i pouzdanost u oblasti dermatovenerologije. Ponosni smo na poverenje koje nam ukazuju 
                  hiljade zadovoljnih pacijenata.
                </p>
                <p className="text-[#6b6b6b] leading-relaxed font-light">
                  Naš tim čine dva specijalista dermatovenerologije koji kontinuirano usavršavaju svoje 
                  znanje i prate najnovije trendove u medicinskoj i estetskoj dermatologiji. Opremljeni 
                  smo najsavremenijim uređajima vodećih svetskih proizvođača poput Lumenis i Fotona.
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={0.3} className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl">
              <Image
                src="/images/ordinacijaonama.png"
                alt="Unutrašnjost ordinacije Dr. Terzić"
                fill
                className="object-cover"
              />
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#b91c1c]" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#b91c1c]" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="bg-[#f5f3f0] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionTitle title="Naši Specijalisti" />
          
          {/* Dr. Marta Terzić */}
          <div id="marta-terzic" className="mb-24 scroll-mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
              <div className="lg:col-span-1">
                <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto overflow-hidden shadow-2xl">
                  <Image
                    src="/images/people/Marta/marta new in labcoat 1.png"
                    alt="Dr. Marta Terzić"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#b91c1c]" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#b91c1c]" />
                </div>
              </div>
              <div className="lg:col-span-2 border-l-2 border-[#b91c1c] pl-8">
                <h3 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-3">
                  Dr. Marta Terzić
                </h3>
                <p className="text-[#b91c1c] font-medium text-sm tracking-[0.15em] uppercase mb-8">
                  Specijalista dermatovenerologije
                </p>
                <p className="text-[#6b6b6b] leading-relaxed mb-5 font-light">
                  Dr. Marta Terzić je specijalista dermatovenerologije sa više od 20 godina iskustva 
                  u medicinskoj i estetskoj dermatologiji. Diplomirala je na Medicinskom fakultetu 
                  Univerziteta u Beogradu, gde je kasnije završila i specijalizaciju iz dermatovenerologije.
                </p>
                <p className="text-[#6b6b6b] leading-relaxed mb-5 font-light">
                  Posebno se bavi estetskim procedurama lica, uključujući Morpheus8 RF microneedling, 
                  laserske tretmane, biorevitalizaciju i anti-age protokole. U svom radu insistira na 
                  prirodnim rezultatima i tretmanima koji su u skladu sa individualnim potrebama pacijenta.
                </p>
                <div className="mt-8">
                  <h4 className="text-[#1a1a1a] font-medium mb-4 text-sm tracking-wide uppercase">Specijalizacije:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Botoks i hijaluronski fileri', 'Morpheus8 RF tretmani', 'Laserski tretmani', 'Biorevitalizacija', 'Hemijski pilinzi', 'Anti-aging procedure'].map((spec) => (
                      <li key={spec} className="text-[#6b6b6b] text-sm flex items-center gap-3 font-light">
                        <span className="w-2 h-2 bg-[#b91c1c]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dr. Biljana Petković */}
          <div id="biljana-petkovic" className="scroll-mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
              <div className="lg:col-span-1 lg:order-2">
                <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto overflow-hidden shadow-2xl">
                  <Image
                    src="/images/people/Biljana/drbiljanapetkovicheadshot.png"
                    alt="Dr. Biljana Petković"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#b91c1c]" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#b91c1c]" />
                </div>
              </div>
              <div className="lg:col-span-2 lg:order-1 border-r-2 border-[#b91c1c] pr-8 lg:text-right">
                <h3 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-3">
                  Dr. Biljana Petković
                </h3>
                <p className="text-[#b91c1c] font-medium text-sm tracking-[0.15em] uppercase mb-8">
                  Specijalista dermatovenerologije
                </p>
                <p className="text-[#6b6b6b] leading-relaxed mb-5 font-light">
                  Dr. Biljana Petković je specijalista dermatovenerologije. Diplomirala je u Beogradu, 
                  a specijalizaciju završila na Klinici za dermatovenerologiju Kliničkog centra Srbije.
                </p>
                <p className="text-[#6b6b6b] leading-relaxed mb-5 font-light">
                  Pored opšte i dečije dermatologije, njen fokus su dermoskopija, radiotalasne procedure, 
                  laserski tretmani, estetske procedure i anti-age medicina. Član je domaćih i međunarodnih 
                  udruženja i znanja kontinuirano unapređuje na kongresima i simpozijumima.
                </p>
                <div className="mt-8">
                  <h4 className="text-[#1a1a1a] font-medium mb-4 text-sm tracking-wide uppercase">Specijalizacije:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Dermoskopija', 'Radiotalasne procedure', 'Laserski tretmani', 'Estetske procedure', 'Anti-age medicina', 'Opšta i dečija dermatologija'].map((spec) => (
                      <li key={spec} className="text-[#6b6b6b] text-sm flex items-center lg:flex-row-reverse gap-3 font-light">
                        <span className="w-2 h-2 bg-[#b91c1c]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp>
            <SectionTitle title="Naše Vrednosti" />
          </FadeUp>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center border border-[#e5e0da] transition-all duration-500 group-hover:border-[#b91c1c]/40 group-hover:bg-[#b91c1c]/5 group-hover:-translate-y-1">
                    <value.icon size={36} className="text-[#b91c1c] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[-3deg]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4 transition-colors duration-300 group-hover:text-[#b91c1c]">
                    {value.title}
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  )
}
