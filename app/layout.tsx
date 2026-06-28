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
  title: 'Ordinacija Dr. Terzić | Specijalistička Dermatovenerološka Ordinacija',
  description: 'Specijalistička dermatovenerološka ordinacija u Beogradu. Više od 20 godina iskustva u medicinskoj i estetskoj dermatologiji. Botoks, fileri, laserski tretmani, Morpheus8.',
  keywords: 'dermatolog, dermatovenerolog, Beograd, botoks, fileri, laserska epilacija, Morpheus8, PRP, dermoskopija, akne',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#faf9f7] text-[#1a1a1a]`}>
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
