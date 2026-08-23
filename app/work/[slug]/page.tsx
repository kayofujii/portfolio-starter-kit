import { redirect } from 'next/navigation'

export default async function WorkRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  redirect(`/en/work/${slug}`)
}
