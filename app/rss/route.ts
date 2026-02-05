import { baseUrl } from 'app/sitemap'
import { workDetails } from 'app/work/data'

export async function GET() {
  let allWorks = workDetails

  const itemsXml = allWorks
    .sort((a, b) => {
      let aDate = new Date(a.publishedAt ?? 0)
      let bDate = new Date(b.publishedAt ?? 0)
      if (aDate > bDate) {
        return -1
      }
      return 1
    })
    .map(
      (work) =>
        `<item>
          <title>${work.title}</title>
          <link>${baseUrl}/work/${work.slug}</link>
          <description>${work.subtitle || ''}</description>
          <pubDate>${new Date(
            work.publishedAt ?? new Date().toISOString()
          ).toUTCString()}</pubDate>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
