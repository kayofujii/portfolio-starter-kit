import { notFound } from 'next/navigation'
import WorkDetail from 'app/components/work_detail'
import { getNextWorkByOrder, getWorkDetailBySlug, workDetails } from 'app/work/data'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  return workDetails.map((work) => ({
    slug: work.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const work = getWorkDetailBySlug(slug)
  if (!work) {
    return
  }

  return {
    title: work.title,
    description: work.subtitle,
    openGraph: {
      title: work.title,
      description: work.subtitle,
      type: 'article',
      url: `${baseUrl}/work/${work.slug}`,
      images: [
        {
          url: work.heroImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: work.title,
      description: work.subtitle,
      images: [work.heroImage],
    },
  }
}

export default async function WorkCaseStudy({ params }) {
  const { slug } = await params
  const work = getWorkDetailBySlug(slug)

  if (!work) {
    notFound()
  }

  const nextWork = getNextWorkByOrder(slug)
  const nextProject =
    nextWork
      ? {
          image: nextWork.heroImage,
          title: nextWork.title,
          description: nextWork.subtitle,
          ctaLabel: 'View Next Project',
          ctaHref: `/work/${nextWork.slug}`,
        }
      : work.nextProject

  return <WorkDetail {...work} nextProject={nextProject} />
}
