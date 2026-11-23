export type ServiceCatalogItem = {
  name: string
  slug: string
  category: string
  featured?: boolean
  /** Optional badge shown on the services index (e.g. free first exam). */
  highlight?: string
  /** Optional; when omitted, service pages use a typography/logo placeholder. */
  imageSrc?: string
  shortDescription: string
}

export const serviceCategories: {
  title: string
  id: string
  subtitle?: string
  services: ServiceCatalogItem[]
}[] = [
  {
    title: 'Stomatološke usluge',
    id: 'stomatoloske-usluge',
    subtitle: 'Kompletna dentalna nega, od prvog pregleda do estetske i hirurške rehabilitacije',
    services: [
      {
        name: 'Stomatološki pregled i konsultacije',
        slug: 'stomatoloski-pregled-i-konsultacije',
        category: 'Stomatološke usluge',
        featured: true,
        highlight: 'Prvi pregled besplatan',
        shortDescription: 'Detaljan klinički pregled, dijagnostika i individualni plan terapije.',
      },
      {
        name: 'Estetska stomatologija',
        slug: 'estetska-stomatologija',
        category: 'Stomatološke usluge',
        featured: true,
        shortDescription: 'Ispuni, beljenje, CAD/CAM i fasete za prirodan, skladan osmeh.',
      },
      {
        name: 'Estetski ispuni',
        slug: 'estetski-ispuni',
        category: 'Stomatološke usluge',
        featured: true,
        shortDescription: 'Kompozitni i keramički ispuni, inlay i onlay u boji prirodnog zuba.',
      },
      {
        name: 'Beljenje zuba',
        slug: 'beljenje-zuba',
        category: 'Stomatološke usluge',
        featured: true,
        shortDescription: 'Ordinacijsko i kućno beljenje, svetliji osmeh bezbedno i kontrolisano.',
      },
      {
        name: 'CAD/CAM',
        slug: 'cad-cam',
        category: 'Stomatološke usluge',
        featured: true,
        shortDescription: 'Digitalna izrada krunica, inlaya i faseta: često u jednoj poseti.',
      },
      {
        name: 'Fasete',
        slug: 'fasete',
        category: 'Stomatološke usluge',
        featured: true,
        shortDescription: 'Keramičke i no-prep fasete za boju, oblik i sklad osmeha.',
      },
      {
        name: 'Implantologija',
        slug: 'implantologija',
        category: 'Stomatološke usluge',
        featured: true,
        shortDescription: 'Nadoknada jednog ili više zuba implantatima vrhunskih sistema.',
      },
      {
        name: 'Oralna hirurgija',
        slug: 'oralna-hirurgija',
        category: 'Stomatološke usluge',
        shortDescription: 'Bezbolne hirurške intervencije uz minimalnu traumu tkiva.',
      },
      {
        name: 'Protetika',
        slug: 'protetika',
        category: 'Stomatološke usluge',
        featured: true,
        shortDescription: 'Krunice, mostovi i proteze od bezmetalne keramike i cirkonijuma.',
      },
      {
        name: 'Parodontologija',
        slug: 'parodontologija',
        category: 'Stomatološke usluge',
        shortDescription: 'Lečenje i regeneracija potpornog aparata zuba.',
      },
      {
        name: 'Endodoncija',
        slug: 'endodoncija',
        category: 'Stomatološke usluge',
        shortDescription: 'Savremeno lečenje kanala korena: sačuvajte svoj zub.',
      },
      {
        name: 'Ortodoncija',
        slug: 'ortodoncija',
        category: 'Stomatološke usluge',
        shortDescription: 'Fiksni i mobilni aparati za pravilan zagrižaj i skladan osmeh.',
      },
      {
        name: 'Terapija laserom',
        slug: 'terapija-laserom',
        category: 'Stomatološke usluge',
        featured: true,
        shortDescription: 'Laserski tretmani mekih i tvrdih tkiva, precizno i bezbolno.',
      },
    ],
  },
]

export const allServices = serviceCategories.flatMap((category) => category.services)

export const serviceBySlug = Object.fromEntries(
  allServices.map((service) => [service.slug, service])
) as Record<string, ServiceCatalogItem>
