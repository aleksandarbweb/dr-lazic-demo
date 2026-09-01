import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Botoks i fileri | Ordinacija Dr. Terzić',
  description: 'Botulinum toksin i hijaluronski fileri u ordinaciji Dr. Terzić imaju zasebne stranice sa detaljnim opisom svakog tretmana.',
}

export default function BotoksFileriHubPage() {
  return (
    <section className="relative bg-background pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <Link
          href="/usluge"
          className="inline-flex items-center text-muted-foreground text-sm hover:text-primary transition-colors mb-8 tracking-wide group"
        >
          <ChevronRight size={16} className="rotate-180 mr-2 transition-transform group-hover:-translate-x-1" />
          Nazad na usluge
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground">
          Botulinum toksin i hijaluronski fileri
        </h1>
        <div className="w-24 h-[2px] bg-primary mt-8" />
        <p className="text-muted-foreground text-lg mt-8 font-light leading-relaxed">
          Ova usluga je podeljena na dve zasebne stranice kako bismo detaljnije predstavili svaki tretman.
        </p>
        <div className="mt-12 grid gap-6">
          {[
            {
              title: 'Primena botulinum toksina',
              href: '/usluge/botulinum-toksin',
              description: 'Precizna terapija za prirodan, odmoran i svež izgled uz očuvanje mimike.',
            },
            {
              title: 'Injektovanje hijaluronskih filera',
              href: '/usluge/hijaluronski-fileri',
              description: 'Suptilna korekcija, očuvanje prirodnih proporcija i podrška kvalitetu tkiva.',
            },
          ].map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group block rounded-[1.5rem] border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
            >
              <h2 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">{service.description}</p>
              <span className="text-primary text-sm inline-flex items-center gap-2 font-medium">
                Saznajte više
                <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
