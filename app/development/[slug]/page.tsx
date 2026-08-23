import { redirect } from 'next/navigation'

export default async function WorkCaseStudy({ params }) {
  const { slug } = await params
  redirect(`/en/work/${slug}`)
}
