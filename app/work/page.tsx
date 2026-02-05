import Link from 'next/link'
import { workDetails } from 'app/work/data'

export const metadata = {
  title: 'Work',
  description: 'Case studies and project highlights.',
}

export default function WorkIndexPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Work</h1>
      <div className="flex flex-col gap-6">
        {workDetails.map((work) => (
          <Link
            key={work.slug}
            href={`/work/${work.slug}`}
            className="group rounded-lg border border-neutral-200 p-6 transition-colors hover:border-neutral-300"
          >
            <div className="flex flex-col gap-2">
              <span className="text-lg font-semibold text-neutral-900">
                {work.title}
              </span>
              <span className="text-sm text-neutral-600">
                {work.subtitle}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
