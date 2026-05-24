export type MediumArticle = {
  title: string;
  link: string;
  publishedAt: string;
  image: string | null;
  sourceLabel: string;
};

const MEDIUM_FEED_URL = "https://medium.com/feed/@kayosamu1025";

const fallbackArticles: MediumArticle[] = [
  {
    title:
      "How We Built a “Functional” Design System in an Early-Stage Product Team",
    link: "https://www.designsystemscollective.com/how-we-built-a-functional-design-system-in-an-early-stage-product-team-78552b67d71a",
    publishedAt: "2026-05-17T20:26:41.000Z",
    image:
      "https://cdn-images-1.medium.com/max/1024/1*urpYFKH_ObnP_K3UFGFzIQ.png",
    sourceLabel: "Medium",
  },
  {
    title: "Has Vibe Coding Made Us Less Efficient?",
    link: "https://medium.com/@kayosamu1025/has-vibe-coding-made-us-less-efficient-fb1058e92e90",
    publishedAt: "2026-04-19T20:51:14.000Z",
    image: "https://cdn-images-1.medium.com/max/1024/0*6591RZaXhuYwkICe",
    sourceLabel: "Medium",
  },
  {
    title: "Create Rapid Professional UI for Web Development",
    link: "https://medium.com/@kayosamu1025/create-rapid-professional-ui-for-web-development-fabef7e98d59",
    publishedAt: "2026-02-15T23:02:03.000Z",
    image:
      "https://cdn-images-1.medium.com/max/1024/1*yXI06RpZH4_BY0jpNjN4OQ.png",
    sourceLabel: "Medium",
  },
];

function stripCdata(value: string) {
  return value
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .trim();
}

function decodeXml(value: string) {
  return value
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function getTagValue(block: string, tagName: string) {
  const match = block.match(new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`));
  if (!match) return null;
  return decodeXml(stripCdata(match[1]));
}

function getImageFromContent(content: string | null) {
  if (!content) return null;
  const imageRegex = /<img[^>]+src="([^"]+)"/g;
  let match = imageRegex.exec(content);

  while (match) {
    const src = match[1];
    if (!src.includes("/_/stat?event=")) {
      return src;
    }
    match = imageRegex.exec(content);
  }

  return null;
}

function stripMediumQueryParams(url: string) {
  return url.replace(/\?source=.*$/, "");
}

function parseMediumFeed(xml: string, limit = 3): MediumArticle[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

  return items.slice(0, limit).map((item) => {
    const title = getTagValue(item, "title") ?? "Untitled";
    const link = stripMediumQueryParams(getTagValue(item, "link") ?? "#");
    const publishedAt = getTagValue(item, "pubDate") ?? new Date().toUTCString();
    const content = getTagValue(item, "content:encoded");

    return {
      title,
      link,
      publishedAt: new Date(publishedAt).toISOString(),
      image: getImageFromContent(content),
      sourceLabel: "Medium",
    };
  });
}

export async function getLatestMediumArticles(limit = 3) {
  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
      },
    });

    if (!response.ok) {
      throw new Error(`Medium feed request failed: ${response.status}`);
    }

    const xml = await response.text();
    const articles = parseMediumFeed(xml, limit);

    if (articles.length === 0) {
      throw new Error("Medium feed returned no articles");
    }

    return articles;
  } catch {
    return fallbackArticles.slice(0, limit);
  }
}
