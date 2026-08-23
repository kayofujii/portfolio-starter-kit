import PortfolioIndex from 'app/components/portfolio_index'
import { isLocale } from 'app/lib/i18n'
import { notFound } from 'next/navigation'

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <PortfolioIndex locale={locale} type="all" />
}
