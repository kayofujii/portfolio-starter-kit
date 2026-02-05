import { workDetails } from 'app/work/data'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let works = workDetails.map((work) => ({
    url: `${baseUrl}/work/${work.slug}`,
    lastModified: work.publishedAt ?? new Date().toISOString().split('T')[0],
  }))

  let routes = ['', '/work'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...works]
}
