import { redirect } from 'next/navigation'

export default async function DevelpmentDetailRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  redirect(`/work/${slug}`)
}
