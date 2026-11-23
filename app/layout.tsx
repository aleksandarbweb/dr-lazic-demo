import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { IntroOverlay } from '@/components/intro-overlay'
import { SkipLink } from '@/components/skip-link'
import { ScrollToTop } from '@/components/scroll-to-top'
import { businessData } from '@/lib/business-data'

// next/font/google is broken in this Next 16.2 + Turbopack setup
// (@vercel/turbopack-next/internal/font/google/font resolve failure → HTTP 500).
// Load Inter / Playfair via CSS instead so the demo can boot.
export const metadata: Metadata = {
  metadataBase: new URL('https://drlazic.demo'),
  title: {
    default: 'Dental Clinic Dr Vesna Lazić | Stomatološka ordinacija Beograd',
    template: '%s | Dental Clinic Dr Vesna Lazić',
  },
  description:
    'Dental Clinic Dr Vesna Lazić — moderna stomatološka ordinacija u Beogradu. Preventiva, estetska stomatologija, implantati i individualan pristup. Prvi pregled besplatan. Od 1998.',
  keywords: [
    'stomatolog Beograd',
    'dental clinic',
    'Dr Vesna Lazić',
    'estetska stomatologija',
    'preventiva',
    'implantati',
    'Dental Clinic Lazić',
  ],
  authors: [{ name: 'Dental Clinic Dr Vesna Lazić' }],
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    siteName: 'Dental Clinic Dr Vesna Lazić',
    title: 'Dental Clinic Dr Vesna Lazić',
    description:
      'Moderna stomatološka ordinacija u Beogradu. Preventiva, estetika, implantati. Prvi pregled besplatan. Od 1998.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Dental Clinic Dr Vesna Lazić',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Clinic Dr Vesna Lazić',
    description:
      'Moderna stomatološka ordinacija u Beogradu. Preventiva, estetika, implantati. Prvi pregled besplatan.',
    images: ['/twitter-image.png'],
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png', type: 'image/png' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: businessData.name,
  legalName: businessData.legalName,
  url: businessData.url,
  telephone: businessData.telephone,
  email: businessData.email,
  image: `${businessData.url}/images/Logos/dr-lazic-full-logo.png`,
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
  sameAs: [businessData.instagram, businessData.youtube, businessData.facebook],
  medicalSpecialty: 'Dentistry',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: businessData.hours.weekdays.opens,
      closes: businessData.hours.weekdays.closes,
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: businessData.hours.saturday.opens,
      closes: businessData.hours.saturday.closes,
    },
  ],
  employee: [
    {
      '@type': 'Dentist',
      name: 'dr Vesna Lazić',
      medicalSpecialty: 'Dentistry',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
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
