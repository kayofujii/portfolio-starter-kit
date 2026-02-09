# My Portfolio using Next.js

Personal portfolio site built with Next.js App Router and Subframe UI components.

## Features

- Single-page homepage with sections for skills, work, recommendations, and about
- Work index and case study pages generated from a single data source
- SEO essentials: sitemap, robots.txt, and Open Graph images
- RSS feed for work updates
- Tailwind v4 and theme tokens (Subframe)
- Vercel Speed Insights / Analytics ready

## Demo

https://kayofujii.vercel.app/

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4 (alpha)
- Subframe UI (`@subframe/core`)

## Project Structure

- `app/page.tsx` Home page sections and layout
- `app/work/data.ts` Single source of truth for work/case study content
- `app/work/page.tsx` Work index page
- `app/work/[slug]/page.tsx` Case study detail pages
- `app/components/site_header.tsx` Header and navigation
- `app/components/site_footer.tsx` Footer and CTA
- `app/components/work_detail.tsx` Case study layout
- `app/sitemap.ts` Sitemap generator and `baseUrl`
- `app/rss/route.ts` RSS feed route
- `app/og/route.tsx` Open Graph image route
- `app/robots.ts` Robots metadata
- `app/global.css` Global styles and Tailwind imports
- `src/ui/theme.css` Design tokens and theme variables
- `public/images/work/*` Work images
- `public/videos/work/*` Work videos

## Content Updates

- Edit hero text, skills, recommendations, and about section in `app/page.tsx`.
- Add or update case studies in `app/work/data.ts`. The work list and detail pages are generated from this file.
- Update site metadata and `baseUrl` in `app/layout.tsx` and `app/sitemap.ts`.
- Update OG image output in `app/og/route.tsx`.
- Update navigation and contact links in `app/components/site_header.tsx` and `app/components/site_footer.tsx`.

## Running Locally

```bash
pnpm install
pnpm dev
```

## Build and Start

```bash
pnpm build
pnpm start
```

## Deployment

Deploy to Vercel or any platform that supports Next.js App Router. Update `baseUrl` in `app/sitemap.ts` for production.
