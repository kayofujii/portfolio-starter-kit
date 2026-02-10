import Link from 'next/link'
import { workDetails } from 'app/work/data'
import { Badge } from "@/ui/components/Badge";

export const metadata = {
  title: 'Work',
  description: 'Case studies and project highlights.',
}

export default function WorkIndexPage() {
  return (
    <div className="flex w-full flex-col items-center bg-[#fafaf8ff] px-6 py-24 text-[#2C2C2C]">
      <div className="flex w-full max-w-[1024px] flex-col items-start gap-12">
        <div className="flex w-full flex-col items-start gap-2">
          <span className="text-heading-2 font-heading-2 text-[#2c2c2cff]">
            Work
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1024px] flex-wrap items-start gap-8">
          {workDetails
            .slice()
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
            .map((work) => (
            <Link
              key={work.slug}
              href={`/work/${work.slug}`}
              className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg bg-default-background px-6 py-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
                <div className="w-full overflow-hidden rounded-md aspect-[12/7]">
                  {work.heroVideo ? (
                    <video
                      className="h-full w-full object-cover object-center"
                      src={work.heroVideo}
                      poster={work.heroImage}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      className="h-full w-full object-cover object-center"
                      src={work.heroImage}
                    />
                  )}
                </div>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    {work.title}
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    {work.subtitle}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {work.details.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="neutral" icon={null}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex w-full items-center justify-between">
                  <span className="text-caption font-caption text-subtext-color">
                    {work.details.company}
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    {work.details.period}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
  </div>
  )
}
