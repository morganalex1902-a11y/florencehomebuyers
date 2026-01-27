import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Sell My House Fast Florence, Alabama - Florence Home Buyers',
  description: 'Get a fair cash offer for your house in Florence, Alabama within 24 hours. No fees, no commissions. Sell on your terms with Florence Home Buyers by Jeffreys Investment Properties.',
  metadataBase: new URL('https://florencehomebuyers.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://florencehomebuyers.com',
    title: 'Sell My House Fast Florence, Alabama - Florence Home Buyers',
    description: 'Get a fair cash offer for your house in Florence, Alabama within 24 hours. No fees, no commissions.',
    siteName: 'Florence Home Buyers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell My House Fast Florence, Alabama - Florence Home Buyers',
    description: 'Get a fair cash offer for your house in Florence, Alabama within 24 hours.',
  },
  keywords: ['sell house fast', 'cash home buyer', 'Florence Alabama', 'home buyers', 'fair cash offer'],
  authors: [{ name: 'Jeffreys Investment Properties' }],
  creator: 'Jeffreys Investment Properties',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2563EB',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
