import './global.css'
import type { Metadata } from 'next'
import { baseUrl } from './sitemap'
import Header from './components/site_header'
import Footer from './components/site_footer'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Kayo Fujii | Full-Stack Developer',
    template: '%s | Kayo Fujii',
  },
  description: 'I’m Kayo Fujii, a full-stack web developer with 5 years of experience based in Canada. I connect design and development to build high-quality websites that help businesses grow.',
  openGraph: {
    title: 'Kayo Fujii | Full-Stack Developer',
    description: 'I’m Kayo Fujii, a full-stack web developer with 5 years of experience based in Canada. I connect design and development to build high-quality websites that help businesses grow.',
    url: baseUrl,
    siteName: 'Kayo Fujii Portfolio',
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
