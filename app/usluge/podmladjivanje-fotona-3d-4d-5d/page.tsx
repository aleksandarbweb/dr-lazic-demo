"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

const faqs = [
  {
    question: 'Da li je lasersko podmlađivanje bolno?',
    answer: 'Neinvazivni Nd:YAG tretman je potpuno bezbolna procedura — tokom tretmana osećate samo prijatno zagrevanje kože. Er:YAG frakcionisani tretman podrazumeva aplikaciju lokalne anestetičke kreme pre procedure, nakon čega je tretman vrlo komforan sa minimalnom nelagodom.'
  },
  {
    question: 'Koliko tretmana je potrebno za vidljive rezultate?',
    answer: 'Za neinvazivno podmlađivanje Nd:YAG laserom preporučuje se serija od 5 tretmana jednom nedeljno. Za Er:YAG frakcionisano podmlađivanje preporučuje se 2 do 5 tretmana godišnje sa pauzom od 4 do 6 nedelja između tretmana. Rezultati su kumulativni i postaju sve izraženiji nakon svake sesije.'
  },
  {
    question: 'Koliko traje oporavak?',
    answer: 'Neinvazivni Nd:YAG tretman nema period oporavka — moguće je blago crvenilo koje se povlači za 10–20 minuta. Nakon Er:YAG frakcionisanog tretmana oporavak je minimalan, a šminkanje je dozvoljeno već nakon 24 sata.'
  },
  {
    question: 'Da li tretman može pomoći kod akni i rozacee?',
    answer: 'Da. Zahvaljujući snažnoj protivupalnoj aktivnosti, Nd:YAG laser je izuzetno efikasan kod problematične kože sklone aknama — naročito u donjoj trećini lica. Takođe pokazuje odlične rezultate kod difuznog crvenila kože i rozacee u početnoj fazi, regulišući lučenje sebuma i poboljšavajući lokalni imunitet kože.'
  },
  {
    question: 'Šta je GF (Growth Factor) i zašto se koristi?',
    answer: 'GF — faktor rasta — je ćelijski protein koji učestvuje u prirodnim mehanizmima regeneracije kože. Procesom starenja njegova koncentracija se smanjuje. Aplikacijom GF-a na kožu prethodno pripremljenu laserom ili hemijskim pilinzima, budi se prirodni regenerativni potencijal kože sa kumulativnim i dugotrajnim efektom.'
  },
  {
    question: 'Kada se vide prvi rezultati?',
    answer: 'Kod Nd:YAG tretmana rezultat je vidljiv za par nedelja i postaje sve bolji u narednom periodu. Kod Er:YAG frakcionisanog tretmana kumulativni efekat dovodi do regeneracije koja se nastavlja više meseci nakon procedure.'
  },
  {
    question: 'Da li je tretman bezbedan za sve tipove kože?',
    answer: 'Da. Neinvazivno podmlađivanje laserom pogodno je za sve tipove kože, i za žene i za muškarce sa prvim znacima starenja. Er:YAG laser se primenjuje individualno prema proceni dermatologa u zavisnosti od stanja i tipa kože.'
  }
]

const howItWorks = [
  'Konsultacija i dijagnostika — detaljan pregled stanja kože, definisanje indikacije i kreiranje personalizovanog protokola tretmana.',
  'Neinvazivno podmlađivanje (Nd:YAG) — infracrvena svetlost precizno zagreja dermis, stimulišući fibroblaste na pojačanu produkciju kolagena. Tretman traje oko 20 minuta i oseća se kao blago, opuštajuće zagrevanje.',
  'Ablativno podmlađivanje (Er:YAG) — kontrolisana ablacija pokreće sintezu novog kolagena. Laserski piling i frakcionisano podmlađivanje se primenjuju pojedinačno ili kombinovano, u zavisnosti od stanja kože.',
  'Aplikacija Growth Factora (GF) — nakon laserske pripreme kože, aplikuje se faktor rasta koji budi prirodni regenerativni potencijal i pojačava kumulativni efekat tretmana.',
  'Plan održavanja — nakon inicijalne serije tretmana, definišemo individualni raspored mesečnih tretmana održavanja za dugotrajne rezultate.'
]

const idealCandidates = [
  'Osobe sa prvim znacima starenja kože — gubitak elastičnosti, fine bore i neravnomeran ten',
  'Osobe sa proširenim porama i difuznim crvenilom kože',
  'Osobe sa problematičnom kožom sklonom aknama, posebno u donjoj trećini lica',
  'Osobe sa rozaceom u početnoj fazi',
  'Osobe koje žele nehirurško osveženje i zatezanje kože lica, vrata i dekoltea',
  'Žene i muškarci svih tipova kože koji traže prirodno podmlađivanje bez dugog oporavka'
]

const expectedResults = [
  'Vidljivo osveženje i ujednačeniji ten kože lica',
  'Značajno poboljšanje čvrstine i elastičnosti kože',
  'Smanjenje i gubitak finih bora i proširenih pora',
  'Regulisano lučenje sebuma kod problematične kože',
  'Smirivanje kožnih zapaljenja i akni',
  'Popravljanje kvaliteta kože kroz stimulaciju novog kolagena',
  'Kumulativni efekat — rezultati se postepeno poboljšavaju mesecima nakon tretmana'
]

export default function FotonaPage() {
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
              <Image
                src="/images/Services/Fotona/fotonalogo.png"
                alt="Fotona"
                width={120}
                height={48}
                className="h-10 w-auto md:h-12"
              />
              <div className="h-10 w-px bg-[#d6cec4]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#b91c1c]">Laserski tretmani</p>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a]">
              Podmlađivanje
              <br />
              <span className="italic text-[#342f2a]">Fotona 3D · 4D · 5D</span>
            </h1>
            <div className="w-24 h-[2px] bg-[#b91c1c] mt-8" />
            <p className="text-[#6b6b6b] text-lg mt-8 font-light leading-relaxed max-w-[56ch]">
              Personalizovano lasersko podmlađivanje kože sa Nd:YAG i Er:YAG laserima — nehiruška alternativa sa vidljivim, dugoročnim rezultatima.
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
                Šta je Fotona podmlađivanje?
              </h2>
              <div className="w-16 h-[2px] bg-[#b91c1c] mb-8" />
              <div className="text-[#6b6b6b] leading-relaxed font-light space-y-5">
                <p>
                  Laseri u dermatologiji su moćno oružje u borbi protiv starenja i svih nepravilnosti kože. Za personalizovano podmlađivanje koriste se dva vrhunska Fotona lasera: <strong className="text-[#3d3832] font-medium">Nd:YAG laser</strong> i <strong className="text-[#3d3832] font-medium">Er:YAG laser</strong>.
                </p>
                <p>
                  Osnovni uzrok starenja kože je smanjena aktivnost fibroblasta u vezivnom tkivu, što dovodi do smanjene sinteze kolagenih vlakana. Dejstvo spoljašnjih faktora — prekomerno sunčanje, pušenje, nepravilna ishrana — dodatno ubrzava ovaj proces. Koža postepeno gubi elastičnost i jedrinu, pojavljuju se bore, fleke i proširen vaskularni crtež.
                </p>
                <p>
                  Fotona laserski tretmani deluju na same uzroke starenja stimulišući produkciju novog kolagena, obnavljajući strukturu kože iznutra i vraćajući joj mladalački izgled — bez hirurške intervencije i sa minimalnim oporavkom.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-[#e4ddd4] bg-[#f4eee8] p-1.5 shadow-[0_25px_50px_-30px_rgba(44,31,20,0.45)]">
              <div className="relative h-full w-full overflow-hidden rounded-[calc(1.75rem-0.375rem)]">
                <Image
                  src="/images/Services/Fotona/fotonainfo.png"
                  alt="Fotona lasersko podmlađivanje — pregled zona tretmana"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24160f]/10 via-transparent to-transparent" />
              </div>
              <div className="absolute left-5 top-5 h-12 w-12 border-l border-t border-[#b91c1c]/60" />
              <div className="absolute bottom-5 right-5 h-12 w-12 border-b border-r border-[#b91c1c]/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Two Methods Deep-Dive Section */}
      <section className="bg-[#faf9f7] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Dva pristupa</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              Metode Laserskog Podmlađivanja
            </h2>
            <div className="w-16 h-[2px] bg-[#b91c1c] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Nd:YAG Card */}
            <div className="rounded-[1.75rem] border border-[#e3dad1] bg-white p-1.5">
              <div className="rounded-[calc(1.75rem-0.375rem)] border border-[#f2ece5] bg-[#fffdfb] p-8 md:p-10 h-full">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b91c1c] mb-3">Neinvazivno</p>
                <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-6">Nd:YAG Laser</h3>
                <div className="w-12 h-[2px] bg-[#b91c1c] mb-6" />
                <div className="text-[#6b6b6b] leading-relaxed font-light space-y-4">
                  <p>
                    Primena infracrvene svetlosti Nd:YAG lasera dovodi do fotohemijske reakcije u krvnim sudovima kože, tokom koje se svetlosna energija pretvara u toplotu. Ovo precizno dermalno zagrevanje stimuliše razmenu materija, podstiče regenerativne procese i značajno pojačava aktivnost fibroblasta odgovornu za produkciju novog kolagena.
                  </p>
                  <p>
                    Postiže se vidljivo osveženje kože lica, poboljšanje čvrstine i elastičnosti, ujednačenje boje kože, poravnanje finih bora, kao i smanjenje proširenih pora i difuznog crvenila.
                  </p>
                  <p>
                    Tretman traje oko <strong className="text-[#3d3832] font-medium">20 minuta</strong>, bez bola — oseća se samo blago, opuštajuće zagrevanje. Moguće blago crvenilo se povlači za 10–20 minuta. Preporučuje se serija od <strong className="text-[#3d3832] font-medium">5 tretmana jednom nedeljno</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Er:YAG Card */}
            <div className="rounded-[1.75rem] border border-[#e3dad1] bg-white p-1.5">
              <div className="rounded-[calc(1.75rem-0.375rem)] border border-[#f2ece5] bg-[#fffdfb] p-8 md:p-10 h-full">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b91c1c] mb-3">Ablativno</p>
                <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-6">Er:YAG Laser</h3>
                <div className="w-12 h-[2px] bg-[#b91c1c] mb-6" />
                <div className="text-[#6b6b6b] leading-relaxed font-light space-y-4">
                  <p>
                    Er:YAG laser predstavlja metodu izbora za podmlađivanje kože. Emituje laserski zrak talasne dužine od 2940nm koji se apsorbuje u vodi, dajući kontrolisanu, bezbolnu hladnu ablaciju kože merenu mikronima — bez oštećenja okolnog tkiva.
                  </p>
                  <p>
                    Primenjuju se dva moda: <strong className="text-[#3d3832] font-medium">laserski piling</strong> za istovremeno uklanjanje keratoza, papiloma, pigmentacija i pojedinačno tretiranje bora, i <strong className="text-[#3d3832] font-medium">frakcionisano podmlađivanje</strong> koje pravi mikrokanale u koži pokretanjem sinteze kolagena sa minimalnim oštećenjem površnog sloja.
                  </p>
                  <p>
                    Šminkanje je dozvoljeno nakon <strong className="text-[#3d3832] font-medium">24 sata</strong>. Preporučuje se <strong className="text-[#3d3832] font-medium">2–5 tretmana godišnje</strong> sa pauzom od 4–6 nedelja.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Factor Banner */}
          <div className="mt-10 rounded-[1.75rem] border border-[#e3dad1] bg-white p-1.5">
            <div className="rounded-[calc(1.75rem-0.375rem)] border border-[#f2ece5] bg-[#fffdfb] p-8 md:p-10 md:flex md:items-center md:gap-10">
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-[#b91c1c]/10 flex items-center justify-center">
                  <span className="font-serif text-2xl text-[#b91c1c] font-medium">GF</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-3">Growth Factor — Faktor Rasta</h3>
                <p className="text-[#6b6b6b] leading-relaxed font-light">
                  Nakon tretmana laserom može se aplikovati GF — ćelijski protein uključen u prirodne mehanizme regeneracije kože. Procesom starenja njegova koncentracija se smanjuje. Dodavanjem Faktora Rasta na kožu pripremljenu laserom, nanovo se budi prirodni potencijal regeneracije sa kumulativnim i dugotrajnim efektom koji daleko prevazilazi &quot;instant&quot; metode podmlađivanja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Proces</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
              Kako Funkcioniše
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

      {/* Ideal Candidates & Results Section */}
      <section className="bg-[#faf9f7] py-20 md:py-28">
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

      {/* Related Services Section */}
      <section className="bg-[#faf9f7] py-20 md:py-28">
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
              { title: 'Morpheus8 RF Microneedling', href: '/usluge/morpheus8' },
              { title: 'Hemijski pilinzi', href: '/usluge/hemijski-pilinzi' },
              { title: 'PRP tretman', href: '/usluge/prp' }
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block rounded-[1.5rem] border border-[#e5e0da] bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#b91c1c] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70"
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
          <Image
            src="/images/Services/Fotona/fotonalogo.png"
            alt="Fotona"
            width={140}
            height={56}
            className="h-12 w-auto mx-auto mb-8 brightness-0 invert opacity-70"
          />
          <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4">Spremni ste?</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Fotona Tretman — Saznajte Više
          </h2>
          <p className="text-white/80 mt-5 font-light max-w-xl mx-auto">
            Kontaktirajte nas danas za konsultaciju i personalizovan plan laserskog podmlađivanja
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
