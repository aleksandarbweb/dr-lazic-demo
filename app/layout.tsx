import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { IntroOverlay } from '@/components/intro-overlay'
import { SkipLink } from '@/components/skip-link'
import { ScrollToTop } from '@/components/scroll-to-top'
import { businessData } from '@/lib/business-data'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dr-terzic-site.vercel.app'),
  title: 'Ordinacija Dr. Terzić | Specijalistička Dermatovenerološka Ordinacija',
  description: 'Specijalistička dermatovenerološka ordinacija u Beogradu. Više od 20 godina iskustva u medicinskoj i estetskoj dermatologiji. Botoks, fileri, laserski tretmani.',
  keywords: 'dermatolog, dermatovenerolog, Beograd, botoks, fileri, laserska epilacija, PRP, dermoskopija, akne',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: businessData.name,
  legalName: businessData.legalName,
  url: businessData.url,
  telephone: businessData.telephone,
  email: businessData.email,
  image: `${businessData.url}/images/Logos/dr%20terzic%20crni%20logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: businessData.address.streetAddress,
    addressLocality: businessData.address.addressLocality,
    postalCode: businessData.address.postalCode,
    addressCountry: businessData.address.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: businessData.geo.latitude,
    longitude: businessData.geo.longitude,
  },
  sameAs: [businessData.instagram],
  medicalSpecialty: 'Dermatologic',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: businessData.openingHours.days,
    opens: businessData.openingHours.opens,
    closes: businessData.openingHours.closes,
  },
  employee: [
    {
      '@type': 'Physician',
      name: 'dr Marta Terzić',
      medicalSpecialty: 'Dermatology',
    },
    {
      '@type': 'Physician',
      name: 'dr Biljana Petković',
      medicalSpecialty: 'Dermatology',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <SkipLink />
          <IntroOverlay />
          <Navbar />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
