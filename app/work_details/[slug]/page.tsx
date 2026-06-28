import HealthELearningCaseStudy from 'app/components/health_e_learning_case_study'
import { notFound } from 'next/navigation'
import OccupationalHealthCaseStudy from 'app/components/occupational_health_case_study'
import WorkDetail from 'app/components/work_detail'
import WorkplaceStressCaseStudy from 'app/components/workplace_stress_case_study'
import {
  getNextWorkByOrder,
  getWorkDetailBySlug,
  isExternalCaseStudy,
  workDetails,
} from 'app/development/data'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  return workDetails
    .filter((work) => !isExternalCaseStudy(work))
    .map((work) => ({
      slug: work.slug,
    }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const work = getWorkDetailBySlug(slug)
  if (!work || isExternalCaseStudy(work)) {
    return
  }

  return {
    title: work.title,
    description: work.subtitle,
    openGraph: {
      title: work.title,
      description: work.subtitle,
      type: 'article',
      url: `${baseUrl}/work_details/${work.slug}`,
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

  if (!work || isExternalCaseStudy(work)) {
    notFound()
  }

  if (slug === 'occupational-health-consultation-tool') {
    return <OccupationalHealthCaseStudy />
  }

  if (slug === 'health-e-learning') {
    return <HealthELearningCaseStudy />
  }

  if (slug === 'workplace-stress-program-analysis') {
    return <WorkplaceStressCaseStudy />
  }

  const nextWork = getNextWorkByOrder(slug)
  const nextProject =
    nextWork
      ? {
          image: nextWork.heroImage,
          title: nextWork.title,
          description: nextWork.subtitle,
          ctaLabel: 'View Next Project',
          ctaHref: `/work_details/${nextWork.slug}`,
        }
      : work.nextProject

  return <WorkDetail {...work} nextProject={nextProject} />
}
