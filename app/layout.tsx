import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { site } from '@/lib/config'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  keywords: site.meta.keywords,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
