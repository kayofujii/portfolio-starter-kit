import './global.css'
import type { Metadata } from 'next'
import { baseUrl } from './sitemap'
import Header from './components/site_header'
import Footer from './components/site_footer'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Kayo Fujii Portfolio',
    template: '%s | Kayo Fujii Portfolio',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      </head>
      <body suppressHydrationWarning>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
