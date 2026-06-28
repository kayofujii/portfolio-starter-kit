import { getWorkHref, workDetails } from 'app/development/data'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let works = workDetails.map((work) => {
    const href = getWorkHref(work)
    return {
      url: href.startsWith('http') ? href : `${baseUrl}${href}`,
      lastModified: work.publishedAt ?? new Date().toISOString().split('T')[0],
    }
  })

  let routes = ['', '/development'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...works]
}
