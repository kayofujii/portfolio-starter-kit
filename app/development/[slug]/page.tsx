import { redirect } from 'next/navigation'

export async function generateStaticParams() {
  return []
}

export default async function WorkCaseStudy({ params }) {
  const { slug } = await params
  redirect(`/work_details/${slug}`)
}
