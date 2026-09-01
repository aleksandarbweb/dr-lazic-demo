export type ServiceCatalogItem = {
  name: string
  slug: string
  category: string
  featured?: boolean
  imageSrc: string
}

// Note on duplicate `slug` values below: the SAME service intentionally appears under multiple
// categories (e.g. "Lečenje akni" is listed under Opšta dermatovenerologija, Estetska
// dermatologija, and Laseri u dermatologiji) and those entries correctly share one slug/page —
// that's the same content viewed through a different category lens, not a bug.
// Within a SINGLE category, however, every bullet must resolve to its own distinct page. Two
// different services silently sharing one slug inside the same category is a content bug (it
// happened once with "Uklanjanje papiloma i keratoza" briefly sharing
// bradavice-papilomi-keratoze-moluske before it got its own dedicated page) — check for this
// before reusing a slug across two different-named bullets in the same category array below.
export const serviceCategories: { title: string; id: string; subtitle?: string; services: ServiceCatalogItem[] }[] = [
  {
    title: 'Opšta dermatovenerologija',
    id: 'opsta-dermatovenerologija',
    subtitle: 'Dermatologija za celu porodicu',
    services: [
      { name: 'Dijagnostika i lečenje kožnih i polnih bolesti', slug: 'medicinska-dermatologija', category: 'Opšta dermatovenerologija', imageSrc: '/images/Services/opsta-dermatovenerologija/lecenje-koznih-i-polnih-bolesti.png' },
      { name: 'Uklanjanje virusnih bradavica, kondiloma i moluski', slug: 'bradavice-papilomi-keratoze-moluske', category: 'Opšta dermatovenerologija', imageSrc: '/images/Services/opsta-dermatovenerologija/uklanjanje-bradavica-kondiloma-papiloma.png' },
      { name: 'Uklanjanje papiloma i keratoza', slug: 'uklanjanje-papiloma-i-keratoza', category: 'Opšta dermatovenerologija', imageSrc: '/images/Services/opsta-dermatovenerologija/uklanjanje-papiloma-i-keratoza.png' },
      { name: 'Uklanjanje vaskularnih promena – kapilari i hemangiomi', slug: 'kapilari-i-hemangiomi-laser', category: 'Opšta dermatovenerologija', imageSrc: '/images/Services/opsta-dermatovenerologija/uklanjanje-vaskularnih-promena.png' },
      { name: 'Lečenje rozacee', slug: 'rozacea', category: 'Opšta dermatovenerologija', imageSrc: '/images/Services/dermatology-treatment.jpg' },
      { name: 'Dermoskopski pregled mladeža', slug: 'dermoskopija', category: 'Opšta dermatovenerologija', imageSrc: '/images/Services/dermoscopy-treatment.jpg' },
      { name: 'Lečenje opadanja kose', slug: 'opadanje-kose', category: 'Opšta dermatovenerologija', imageSrc: '/images/Services/dermatology-treatment.jpg' },
      { name: 'Lečenje gljivičnih oboljenja noktiju', slug: 'gljivicna-oboljenja-laser', category: 'Opšta dermatovenerologija', imageSrc: '/images/Services/Laserski tretmani/Gljivična oboljenja nokatnih ploča.png' },
      { name: 'Lečenje akni', slug: 'akne', category: 'Opšta dermatovenerologija', imageSrc: '/images/Services/opsta-dermatovenerologija/lecenje-akni.png' },
      { name: 'Uklanjanje pigmentnih promena', slug: 'pigmentne-promene', category: 'Opšta dermatovenerologija', imageSrc: '/images/Services/piling-treatment.jpg' },
      { name: 'Lečenje pojačanog znojenja', slug: 'pojacano-znojenje', category: 'Opšta dermatovenerologija', imageSrc: '/images/Services/botoks-treatment.jpg' },
      { name: 'Hirurško uklanjanje mladeža sa PH dijagnostikom', slug: 'hirursko-uklanjanje-mladeza', category: 'Opšta dermatovenerologija', imageSrc: '/images/Services/dermatology-treatment.jpg' },
    ],
  },
  {
    title: 'Estetska dermatologija',
    id: 'estetska-dermatologija',
    services: [
      { name: 'Personalizovani Full Face tretmani by dr Marta Terzić', slug: 'full-face', category: 'Estetska dermatologija', imageSrc: '/images/Services/profhilo-treatment.jpg', featured: true },
      { name: 'Hijaluronski fileri', slug: 'hijaluronski-fileri', category: 'Estetska dermatologija', imageSrc: '/images/Services/botoks-treatment.jpg', featured: true },
      { name: 'Botulinum toksin – botox', slug: 'botulinum-toksin', category: 'Estetska dermatologija', imageSrc: '/images/Services/botoks-treatment.jpg', featured: true },
      { name: 'Kolagen stimulatori', slug: 'kolagen-stimulatori', category: 'Estetska dermatologija', imageSrc: '/images/Services/prp-treatment.jpg' },
      { name: 'Biorevitalizacije', slug: 'profhilo', category: 'Estetska dermatologija', imageSrc: '/images/Services/profhilo-treatment.jpg', featured: true },
      { name: 'Mezoterapija', slug: 'mezoterapija', category: 'Estetska dermatologija', imageSrc: '/images/Services/prp-treatment.jpg' },
      { name: 'PRP', slug: 'prp', category: 'Estetska dermatologija', imageSrc: '/images/Services/prp-treatment.jpg', featured: true },
      { name: 'Personalizovano podmlađivanje laserom: lica, vrata, dekoltea i šaka', slug: 'podmladjivanje-fotona-3d-4d-5d', category: 'Estetska dermatologija', imageSrc: '/images/Services/Fotona/fotonainfo.png', featured: true },
      { name: 'Tretmani radiofrekventnim mikronidlingom – Morpheus8', slug: 'morpheus8', category: 'Estetska dermatologija', imageSrc: '/images/Services/morpheus8-treatment.jpg', featured: true },
      { name: 'Epilacija laserom – trajno uklanjanje dlačica', slug: 'laserska-epilacija', category: 'Estetska dermatologija', imageSrc: '/images/Services/Laserski tretmani/Epilacija-laserom-–-trajno-uklanjanje-dlacica.png', featured: true },
      { name: 'Laserski tretman problema uraslih dlačica (folikulitis)', slug: 'urastanje-dlaka-folikulitis', category: 'Estetska dermatologija', imageSrc: '/images/Services/laser-treatment.jpg' },
      { name: 'Lečenje rozacee', slug: 'rozacea', category: 'Estetska dermatologija', imageSrc: '/images/Services/dermatology-treatment.jpg' },
      { name: 'Uklanjanje ožiljaka', slug: 'uklanjanje-oziljaka', category: 'Estetska dermatologija', imageSrc: '/images/Services/laser-treatment.jpg' },
      { name: 'Uklanjanje strija', slug: 'strije-laser', category: 'Estetska dermatologija', imageSrc: '/images/Services/Laserski tretmani/laserski tretmani strija.png' },
      { name: 'Lasersko uklanjanje kapilara i hemangioma', slug: 'kapilari-i-hemangiomi-laser', category: 'Estetska dermatologija', imageSrc: '/images/Services/laser-treatment.jpg' },
      { name: 'Lečenje akni', slug: 'akne', category: 'Estetska dermatologija', imageSrc: '/images/Services/dermatology-treatment.jpg' },
      { name: 'Hemijski pilinzi', slug: 'hemijski-pilinzi', category: 'Estetska dermatologija', imageSrc: '/images/Services/piling-treatment.jpg', featured: true },
      { name: 'Laserski pilinzi', slug: 'laserski-piling', category: 'Estetska dermatologija', imageSrc: '/images/Services/piling-treatment.jpg' },
      { name: 'Uklanjanje pigmentnih promena: melasma, PIH, lentigo', slug: 'pigmentne-promene', category: 'Estetska dermatologija', imageSrc: '/images/Services/piling-treatment.jpg' },
    ],
  },
  {
    title: 'Laseri u dermatologiji',
    id: 'laseri-u-dermatologiji',
    services: [
      { name: 'Epilacija medicinskim laserom – trajno uklanjanje dlačica', slug: 'laserska-epilacija', category: 'Laseri u dermatologiji', imageSrc: '/images/Services/Laserski tretmani/Epilacija-laserom-–-trajno-uklanjanje-dlacica.png', featured: true },
      { name: 'Laserski tretman problema uraslih dlačica (folikulitis)', slug: 'urastanje-dlaka-folikulitis', category: 'Laseri u dermatologiji', imageSrc: '/images/Services/laser-treatment.jpg' },
      { name: 'Personalizovano podmlađivanje laserom: lica, vrata, dekoltea i šaka', slug: 'podmladjivanje-fotona-3d-4d-5d', category: 'Laseri u dermatologiji', imageSrc: '/images/Services/Fotona/fotonainfo.png', featured: true },
      { name: 'Laserski tretmani rozacee', slug: 'rozacea', category: 'Laseri u dermatologiji', imageSrc: '/images/Services/laser-treatment.jpg' },
      { name: 'Laserski tretmani ožiljaka', slug: 'uklanjanje-oziljaka', category: 'Laseri u dermatologiji', imageSrc: '/images/Services/laser-treatment.jpg' },
      { name: 'Laserski tretmani strija', slug: 'strije-laser', category: 'Laseri u dermatologiji', imageSrc: '/images/Services/Laserski tretmani/laserski tretmani strija.png' },
      { name: 'Lasersko uklanjanje vaskularnih promena', slug: 'kapilari-i-hemangiomi-laser', category: 'Laseri u dermatologiji', imageSrc: '/images/Services/laser-treatment.jpg' },
      { name: 'Lasersko uklanjanje pigmentnih promena: melasma, lentigo', slug: 'pigmentne-promene', category: 'Laseri u dermatologiji', imageSrc: '/images/Services/laser-treatment.jpg' },
      { name: 'Lasersko uklanjanje benignih promena: keratoze, papilomi, bradavice', slug: 'bradavice-papilomi-keratoze-moluske', category: 'Laseri u dermatologiji', imageSrc: '/images/Services/laser-treatment.jpg' },
      { name: 'Laserski tretman gljivičnih infekcija nokatne regije', slug: 'gljivicna-oboljenja-laser', category: 'Laseri u dermatologiji', imageSrc: '/images/Services/Laserski tretmani/Gljivična oboljenja nokatnih ploča.png', featured: true },
      { name: 'Laserski tretman akni', slug: 'akne', category: 'Laseri u dermatologiji', imageSrc: '/images/Services/laser-treatment.jpg' },
      { name: 'Fotona HAIRestart – laserska stimulacija rasta kose', slug: 'fotona-hairestart', category: 'Laseri u dermatologiji', imageSrc: '/images/Services/dermatology-treatment.jpg' },
    ],
  },
  {
    title: 'Radiotalasna hirurgija',
    id: 'radiotalasna-hirurgija',
    services: [
      { name: 'Radiotalasna hirurgija', slug: 'radiotalasna-hirurgija', category: 'Radiotalasna hirurgija', imageSrc: '/images/Services/dermatology-treatment.jpg' },
    ],
  },
  {
    title: 'Kriohirurgija – terapija tečnim azotom',
    id: 'kriohirurgija',
    services: [
      { name: 'Krioterapija (terapija tečnim azotom)', slug: 'krioterapija', category: 'Kriohirurgija', imageSrc: '/images/Services/dermatology-treatment.jpg' },
    ],
  },
  {
    title: 'Kompjuterizovana dermoskopija',
    id: 'kompjuterizovana-dermoskopija',
    services: [
      { name: 'Pregled mladeža', slug: 'dermoskopija', category: 'Kompjuterizovana dermoskopija', imageSrc: '/images/Services/dermoscopy-treatment.jpg', featured: true },
    ],
  },
  {
    title: 'Kozmetologija',
    id: 'kozmetologija',
    services: [
      { name: 'Medicinski higijenski tretmani lica', slug: 'medicinski-higijenski-tretmani-lica', category: 'Kozmetologija', imageSrc: '/images/Services/dermatology-treatment.jpg' },
      { name: 'Biološki tretmani lica', slug: 'bioloski-tretmani-lica', category: 'Kozmetologija', imageSrc: '/images/Services/dermatology-treatment.jpg' },
      { name: 'Dermapen', slug: 'dermapen', category: 'Kozmetologija', imageSrc: '/images/Services/prp-treatment.jpg' },
      { name: 'Savetovanje za negu lica', slug: 'savetovanje-za-negu-lica', category: 'Kozmetologija', imageSrc: '/images/Services/dermatology-treatment.jpg' },
    ],
  },
]

export const allServices = serviceCategories.flatMap((category) => category.services)

export const serviceBySlug = Object.fromEntries(allServices.map((service) => [service.slug, service]))
