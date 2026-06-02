export type ServiceCatalogItem = {
  name: string
  slug: string
  category: string
  featured?: boolean
  imageSrc: string
}

export const serviceCategories: { title: string; id: string; services: ServiceCatalogItem[] }[] = [
  {
    title: 'Dermatologija',
    id: 'dermatologija',
    services: [
      { name: 'Akne', slug: 'akne', category: 'Dermatologija', imageSrc: '/images/dermatology-treatment.jpg', featured: true },
      { name: 'Masna koža i proširene pore', slug: 'masna-koza-i-prosirene-pore', category: 'Dermatologija', imageSrc: '/images/dermatology-treatment.jpg' },
      { name: 'Dehidrirana koža', slug: 'dehidrirana-koza', category: 'Dermatologija', imageSrc: '/images/dermatology-treatment.jpg' },
      { name: 'Fleke', slug: 'fleke', category: 'Dermatologija', imageSrc: '/images/dermatology-treatment.jpg' },
      { name: 'Prošireni kapilari', slug: 'prosireni-kapilari', category: 'Dermatologija', imageSrc: '/images/dermatology-treatment.jpg' },
      { name: 'Ožiljci od akni i hiruških intervencija', slug: 'oziljci-od-akni-i-hiruskih-intervencija-dermatologija', category: 'Dermatologija', imageSrc: '/images/dermatology-treatment.jpg' },
      { name: 'Bradavice, papilomi, keratoze, moluske', slug: 'bradavice-papilomi-keratoze-moluske', category: 'Dermatologija', imageSrc: '/images/dermatology-treatment.jpg' },
      { name: 'Infekcije kože', slug: 'infekcije-koze', category: 'Dermatologija', imageSrc: '/images/dermatology-treatment.jpg' },
      { name: 'Gljivične infekcije nokatnih ploča', slug: 'gljivicne-infekcije-nokatnih-ploca', category: 'Dermatologija', imageSrc: '/images/dermatology-treatment.jpg' },
      { name: 'Pojačano znojenje', slug: 'pojacano-znojenje-dermatologija', category: 'Dermatologija', imageSrc: '/images/botoks-treatment.jpg' },
      { name: 'Opadanje kose', slug: 'opadanje-kose', category: 'Dermatologija', imageSrc: '/images/dermatology-treatment.jpg' },
      { name: 'Urastanje dlaka – folikulitis', slug: 'urastanje-dlaka-folikulitis', category: 'Dermatologija', imageSrc: '/images/dermatology-treatment.jpg' },
    ],
  },
  {
    title: 'Estetika',
    id: 'estetika',
    services: [
      { name: 'Bore na licu', slug: 'bore-na-licu', category: 'Estetika', imageSrc: '/images/botoks-treatment.jpg' },
      { name: 'Mimične bore oko očiju, na čelu između obrva', slug: 'mimicne-bore-oko-ociju', category: 'Estetika', imageSrc: '/images/botoks-treatment.jpg' },
      { name: 'Podočnjaci', slug: 'podocnjaci', category: 'Estetika', imageSrc: '/images/botoks-treatment.jpg' },
      { name: 'Usne', slug: 'usne', category: 'Estetika', imageSrc: '/images/botoks-treatment.jpg' },
      { name: 'Nazolabijalne bore', slug: 'nazolabijalne-bore', category: 'Estetika', imageSrc: '/images/botoks-treatment.jpg' },
      { name: 'Opuštena koža lica', slug: 'opustena-koza-lica', category: 'Estetika', imageSrc: '/images/botoks-treatment.jpg' },
      { name: 'Gubitak volumena', slug: 'gubitak-volumena', category: 'Estetika', imageSrc: '/images/botoks-treatment.jpg' },
      { name: 'Podmlađivanje', slug: 'podmladjivanje-estetika', category: 'Estetika', imageSrc: '/images/botoks-treatment.jpg' },
      { name: 'Mala brada', slug: 'mala-brada', category: 'Estetika', imageSrc: '/images/botoks-treatment.jpg' },
      { name: 'Podbradak', slug: 'podbradak', category: 'Estetika', imageSrc: '/images/botoks-treatment.jpg' },
      { name: 'Vrat', slug: 'vrat', category: 'Estetika', imageSrc: '/images/botoks-treatment.jpg' },
      { name: 'Dekolte', slug: 'dekolte', category: 'Estetika', imageSrc: '/images/botoks-treatment.jpg' },
    ],
  },
  {
    title: 'Estetska dermatologija',
    id: 'estetska-dermatologija',
    services: [
      { name: 'Full face – dr Marta Terzić', slug: 'full-face', category: 'Estetska dermatologija', imageSrc: '/images/profhilo-treatment.jpg', featured: true },
      { name: 'Hijaluronski fileri – Juvederm Allergan', slug: 'botoks-fileri', category: 'Estetska dermatologija', imageSrc: '/images/botoks-treatment.jpg', featured: true },
      { name: 'Botox – Vistabel Allergan', slug: 'botoks', category: 'Estetska dermatologija', imageSrc: '/images/botoks-treatment.jpg', featured: true },
      { name: 'HarmonyCa – Allergan', slug: 'harmonyca', category: 'Estetska dermatologija', imageSrc: '/images/botoks-treatment.jpg' },
      { name: 'PRP', slug: 'prp', category: 'Estetska dermatologija', imageSrc: '/images/prp-treatment.jpg', featured: true },
      { name: 'Profhilo', slug: 'profhilo', category: 'Estetska dermatologija', imageSrc: '/images/profhilo-treatment.jpg', featured: true },
      { name: 'Biorevitalizacija', slug: 'biorevitalizacija', category: 'Estetska dermatologija', imageSrc: '/images/profhilo-treatment.jpg' },
      { name: 'Mezoterapija iglom i dermapenom', slug: 'mezoterapija-iglom-i-dermapenom', category: 'Estetska dermatologija', imageSrc: '/images/prp-treatment.jpg' },
      { name: 'Morpheus 8 – RF microneedling – nehiruški lifting lica', slug: 'morpheus8', category: 'Estetska dermatologija', imageSrc: '/images/morpheus8-treatment.jpg', featured: true },
      { name: 'Hemijski pilinzi', slug: 'hemijski-pilinzi', category: 'Estetska dermatologija', imageSrc: '/images/piling-treatment.jpg', featured: true },
      { name: 'Tretmani za hiperpigmentacije (fleke)', slug: 'tretmani-za-hiperpigmentacije', category: 'Estetska dermatologija', imageSrc: '/images/piling-treatment.jpg' },
    ],
  },
  {
    title: 'Laserski tretmani',
    id: 'laserski-tretmani',
    services: [
      { name: 'Podmlađivanje – Fotona 3D, 4D i 5D laserski lifting', slug: 'podmladjivanje-fotona-3d-4d-5d', category: 'Laserski tretmani', imageSrc: '/images/Services/Fotona/fotonainfo.png', featured: true },
      { name: 'Laserski piling', slug: 'laserski-piling', category: 'Laserski tretmani', imageSrc: '/images/laser-treatment.jpg' },
      { name: 'Rozacea', slug: 'rozacea-laser', category: 'Laserski tretmani', imageSrc: '/images/laser-treatment.jpg' },
      { name: 'Kapilari i hemangiomi', slug: 'kapilari-i-hemangiomi-laser', category: 'Laserski tretmani', imageSrc: '/images/laser-treatment.jpg' },
      { name: 'Akne', slug: 'akne-laser', category: 'Laserski tretmani', imageSrc: '/images/laser-treatment.jpg' },
      { name: 'Ožiljci od akni i hiruških intervencija', slug: 'oziljci-laser', category: 'Laserski tretmani', imageSrc: '/images/laser-treatment.jpg' },
      { name: 'Strije', slug: 'strije-laser', category: 'Laserski tretmani', imageSrc: '/images/Services/Laserski tretmani/laserski tretmani strija.png' },
      { name: 'Uklanjanje keratoza, bradavica, papiloma', slug: 'uklanjanje-keratoza-laser', category: 'Laserski tretmani', imageSrc: '/images/laser-treatment.jpg' },
      { name: 'Gljivična oboljenja nokatnih ploča', slug: 'gljivicna-oboljenja-laser', category: 'Laserski tretmani', imageSrc: '/images/Services/Laserski tretmani/Gljivična oboljenja nokatnih ploča.png' },
      { name: 'Trajno uklanjanje dlaka – epilacija medicinskim diodnim laserom (Light Sheer Lumenis)', slug: 'laserska-epilacija', category: 'Laserski tretmani', imageSrc: '/images/Services/Laserski tretmani/Epilacija-laserom-–-trajno-uklanjanje-dlacica.png', featured: true },
    ],
  },
  {
    title: 'Dermatovenerologija',
    id: 'dermatovenerologija',
    services: [
      { name: 'Dijagnostika i lečenje kožnih i polnih bolesti', slug: 'medicinska-dermatologija', category: 'Dermatovenerologija', imageSrc: '/images/dermatology-treatment.jpg', featured: true },
      { name: 'Dermoskopija – pregled mladeža', slug: 'dermoskopija', category: 'Dermatovenerologija', imageSrc: '/images/dermoscopy-treatment.jpg', featured: true },
      { name: 'Dermomapiranje – pregled mladeža celog tela sa fotodokumentacijom', slug: 'dermomapiranje', category: 'Dermatovenerologija', imageSrc: '/images/dermoscopy-treatment.jpg' },
      { name: 'Radiotalasna dermohirurgija – uklanjanje bradavica, papiloma, keratoza, moluski, kondiloma', slug: 'radiotalasna-dermohirurgija', category: 'Dermatovenerologija', imageSrc: '/images/dermatology-treatment.jpg' },
      { name: 'Tečni azot za uklanjanje bradavica, keratoza', slug: 'tecni-azot', category: 'Dermatovenerologija', imageSrc: '/images/dermatology-treatment.jpg' },
      { name: 'Lečenje akni – individualna lokalna i opšta terapija, tretmani lica, elektroforeza, hemijski pilinzi, laserska terapija', slug: 'lecenje-akni', category: 'Dermatovenerologija', imageSrc: '/images/dermatology-treatment.jpg' },
      { name: 'Pojačano znojenje – hiperhidroza', slug: 'pojacano-znojenje-hiperhidroza', category: 'Dermatovenerologija', imageSrc: '/images/botoks-treatment.jpg' },
      { name: 'Opadanje kose', slug: 'opadanje-kose-dermatovenerologija', category: 'Dermatovenerologija', imageSrc: '/images/dermatology-treatment.jpg' },
    ],
  },
  {
    title: 'Kozmetologija',
    id: 'kozmetologija',
    services: [
      { name: 'Medicinski tretmani lica', slug: 'medicinski-tretmani-lica', category: 'Kozmetologija', imageSrc: '/images/dermatology-treatment.jpg' },
      { name: 'Biološki tretmani lica', slug: 'bioloski-tretmani-lica', category: 'Kozmetologija', imageSrc: '/images/dermatology-treatment.jpg' },
      { name: 'Medicinski pedikir', slug: 'medicinski-pedikir', category: 'Kozmetologija', imageSrc: '/images/dermatology-treatment.jpg' },
    ],
  },
]

export const allServices = serviceCategories.flatMap((category) => category.services)

export const serviceBySlug = Object.fromEntries(allServices.map((service) => [service.slug, service]))
