import WorkDetail from 'app/components/work_detail'
import { getLocalizedWork } from 'app/lib/localized-work'
import { isLocale, localePath } from 'app/lib/i18n'
import { isExternalCaseStudy, workDetails } from 'app/development/data'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return ['en', 'ja'].flatMap((locale) => workDetails.filter((work) => !isExternalCaseStudy(work)).map((work) => ({ locale, slug: work.slug })))
}

export default async function LocalizedWorkDetail({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const work = getLocalizedWork(slug, locale)
  if (!work || isExternalCaseStudy(work)) notFound()
  return <WorkDetail {...work} locale={locale} nextProject={work.nextProject ? { ...work.nextProject, ctaHref: localePath(locale, work.nextProject.ctaHref) } : undefined} />
}
