import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'TechRhym | Transform Your Business with Technology',
  description: 'Enterprise solutions for Zoho CRM, AI automation, custom software, and digital transformation. Helping businesses streamline operations and scale smarter.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  keywords: 'Zoho CRM, AI automation, custom software development, digital transformation, business automation',
  authors: [{ name: 'TechRhym' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techrhym.com',
    siteName: 'TechRhym',
    title: 'TechRhym | Transform Your Business with Technology',
    description: 'Enterprise solutions for Zoho CRM, AI automation, custom software, and digital transformation.',
    images: [{
      url: 'https://techrhym.com/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f9fa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
