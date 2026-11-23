import type { Metadata } from 'next'
import { businessData } from '@/lib/business-data'

export const metadata: Metadata = {
  title: 'Kontakt | Dental Clinic Dr Vesna Lazić',
  description: `Zakažite pregled u Dental Clinic Dr Vesna Lazić. Adresa: ${businessData.addressDisplay}. Telefon: ${businessData.phoneDisplay}. ${businessData.hoursDisplay}.`,
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
