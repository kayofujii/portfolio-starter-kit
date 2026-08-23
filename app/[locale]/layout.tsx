import { notFound } from 'next/navigation'
import Header from 'app/components/site_header'
import Footer from 'app/components/site_footer'
import { isLocale, locales } from 'app/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const japanese = locale === 'ja'
  return {
    title: japanese ? 'Kayo Fujii | プロダクトデザイナー・フルスタック開発者' : 'Kayo Fujii | Product Designer & Full-Stack Developer',
    description: japanese ? 'カナダを拠点に、デザインと開発をつなぐプロダクトデザイナー、Kayo Fujiiのポートフォリオです。' : 'Kayo Fujii portfolio.',
    alternates: { languages: { en: '/en', ja: '/ja' } },
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <><Header />{children}<Footer /></>
}
