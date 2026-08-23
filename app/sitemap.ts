import { workDetails } from 'app/development/data'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  const locales = ['en', 'ja']
  const works = locales.flatMap((locale) => workDetails
    .filter((work) => !work.caseStudyUrl)
    .map((work) => ({
      url: `${baseUrl}/${locale}/work/${work.slug}`,
      lastModified: work.publishedAt ?? new Date().toISOString().split('T')[0],
    })))

  const routes = locales.flatMap((locale) => ['', '/work', '/about'].map((route) => ({
    url: `${baseUrl}/${locale}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  })))

  return [...routes, ...works]
}
