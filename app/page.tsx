import HashScroller from "app/components/hash_scroller";
import Link from "next/link";
import { getWorkHref, isExternalCaseStudy, workDetails } from "app/development/data";

const featuredWorks = workDetails
  .filter((work) => work.featured)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export default function Page() {
  return (
    <main className="w-full bg-white text-[#282828]">
      <HashScroller />
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-6 py-16 md:px-12 md:py-24 lg:px-[120px]">
          <div className="max-w-[980px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-[2.5rem] font-extrabold leading-[1.15] tracking-normal text-[#282828] md:text-[4rem] md:leading-[1.12]">
              Driving product growth by bridging UX, development, and real user
              insights.
            </h1>
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/about"
              className="mt-5 text-[1.05rem] text-[rgba(40,40,40,0.8)] underline-offset-4 hover:underline"
            >
              More about me
            </Link>
              <Link
                href="https://www.linkedin.com/in/kayo-fujii/"
                className="mt-5 text-[1.05rem] text-[rgba(40,40,40,0.8)] underline-offset-4 hover:underline"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/kayofujii"
                className="mt-5 text-[1.05rem] text-[rgba(40,40,40,0.8)] underline-offset-4 hover:underline"
              >
                GitHub
              </Link>
              <Link
                href="https://drive.google.com/file/d/1S8YAI-QvWzMSxtb6_pej-KB_lnNSscsM/view?usp=sharing"
                className="mt-5 text-[1.05rem] text-[rgba(40,40,40,0.8)] underline-offset-4 hover:underline" 
              >
                Resume
              </Link>
              <Link
                href="https://medium.com/@kayosamu1025"
                className="mt-5 text-[1.05rem] text-[rgba(40,40,40,0.8)] underline-offset-4 hover:underline"
              >
                Medium
              </Link>
            </div>
        </div>
      </section>

      <section className="w-full bg-[#f9f9f9]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-16 md:px-12 md:py-24 lg:gap-20 lg:px-[120px]">
          {featuredWorks.map((work) => {
            const href = getWorkHref(work);
            const media = (
              <div
                className="overflow-hidden rounded-[16px] bg-[#fafafa]"
              >
                {work.heroVideo ? (
                  <video
                    className="h-auto w-full object-cover"
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
                    src={work.heroImage}
                    alt={work.title}
                    className="h-auto w-full object-cover"
                  />
                )}
              </div>
            );

            const paragraphs = [
              work.overview.background,
              work.overview.challenge,
              work.overview.solution,
            ];

            return (
              <article
                key={work.slug}
                id={work.slug}
                className="scroll-mt-28 rounded-[24px] bg-white p-5 shadow-[0px_1px_5px_3px_rgba(63,88,87,0.03)] md:p-10"
              >
                <div className="flex flex-col gap-8">
                  <div className="max-w-[1120px] space-y-4">
                    <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.8rem] font-bold leading-[1.35] tracking-normal text-[#282828] md:text-[2rem]">
                      {work.subtitle}
                    </h2>
                    {work.meta ? (
                      <p className="text-[1rem] text-[rgba(40,40,40,0.8)] md:text-[1.125rem]">
                        {work.meta}
                      </p>
                    ) : null}
                    {work.tags ? (
                      <div className="flex flex-wrap gap-3">
                        {work.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#c0c0c0] px-[13px] py-[8px] text-[0.95rem] text-[#282828]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {work.metricValue ? (
                      <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                        {work.metricPrefix ? (
                          <p className="text-[1.2rem] font-medium leading-[1.4] text-[#282828] md:text-[1.5rem]">
                            {work.metricPrefix}
                          </p>
                        ) : null}
                        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.75rem] font-bold leading-none text-[#005f5d] md:text-[2rem]">
                          {work.metricValue}
                        </p>
                        {work.metricSuffix ? (
                          <p className="text-[1.2rem] font-medium leading-[1.4] text-[#282828] md:text-[1.5rem]">
                            {work.metricSuffix}
                          </p>
                        ) : null}
                      </div>
                    ) : null}
                    <div className="space-y-7 py-2 text-[1rem] leading-7 text-[rgba(40,40,40,0.8)] md:text-[1.25rem] md:leading-9">
                      {paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {isExternalCaseStudy(work) ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex text-[1.05rem] text-[#005f5d] hover:underline"
                      >
                        View case study
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="inline-flex text-[1.05rem] text-[#005f5d] hover:underline"
                      >
                        View case study
                      </Link>
                    )}
                  </div>
                  {isExternalCaseStudy(work) ? (
                    <a href={href} target="_blank" rel="noreferrer">
                      {media}
                    </a>
                  ) : (
                    <Link href={href}>{media}</Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
