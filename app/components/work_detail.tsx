import Link from "next/link";
import type { WorkDetailFeature } from "app/development/data";

type WorkDetailProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  heroVideo?: string;
  githubUrl?: string;
  liveUrl?: string;
  liveUrlPassword?: string;
  overview: {
    background: string;
    challenge: string;
    solution: string;
  };
  details: {
    period: string;
    techStack: string[];
    company: string;
    role: string;
    roleDescription: string;
    outcome: string;
    team: string;
    teamDetails: string;
  };
  features: WorkDetailFeature[];
  nextProject?: {
    image: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref?: string;
  };
};

const sectionHeadingClass = "text-[1.75rem] font-bold text-[#006a68]";
const subheadingClass =
  "text-[1.25rem] font-bold tracking-normal text-[#161d1c]";
const bodyLargeClass = "text-[1.125rem] leading-[1.55] text-[#333333]";
const bodyClass = "text-[1rem] leading-7 text-[#333333]";
const labelClass = "text-[1.125rem] font-bold text-[rgba(40,40,40,0.8)]";
const contentSectionClass =
  "mx-auto flex w-full max-w-[840px] flex-col gap-10 px-6 py-12 md:px-10 md:py-16";
const mediaOuterClass = "overflow-hidden rounded-[20px] p-4 md:p-8";
const mediaInnerClass =
  "h-auto w-full rounded-[14px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]";

function MediaFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${mediaOuterClass}`}>{children}</div>
  );
}

export default function WorkDetail({
  title,
  subtitle,
  heroImage,
  heroVideo,
  githubUrl,
  liveUrl,
  liveUrlPassword,
  overview,
  details,
  features,
  nextProject,
}: WorkDetailProps) {
  const overviewItems = [
    { label: "Timeline", value: details.period },
    { label: "Role", value: details.role },
    { label: "Company", value: details.company },
    { label: "Team", value: `${details.team} — ${details.teamDetails}` },
    { label: "Tech Stack", value: details.techStack.join(", ") },
    { label: "Impact", value: details.outcome },
  ];

  return (
    <main className="w-full bg-white text-[#333333]">
      <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pb-10 pt-10 md:px-10">
        <div className="w-full max-w-[980px] text-center">
          <h1 className="text-[2rem] font-bold leading-[1.4] tracking-normal text-[#333333] md:text-[2.5rem]">
            {title}
          </h1>
        </div>
        <div className="mt-10 w-full overflow-hidden bg-[#d8efe2]">
          {heroVideo ? (
            <video
              className="h-full w-full object-cover"
              src={heroVideo}
              poster={heroImage}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={heroImage}
              alt={title}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </section>

      <section className={contentSectionClass}>
        <div className="text-center">
          <h2 className={sectionHeadingClass}>Project Overview</h2>
        </div>

        <div className="border-b border-[#f0eeee] pb-8 text-[1.125rem] leading-[1.65]">
          <p>{subtitle}</p>
        </div>

        <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
          {overviewItems.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className={labelClass}>{item.label}</p>
              <p className={bodyClass}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={contentSectionClass}>
        <div className="text-center">
          <h2 className={sectionHeadingClass}>The Situation</h2>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <h3 className={subheadingClass}>Background</h3>
            <div className="space-y-3 pl-5 text-[1.125rem] leading-[1.55]">
              <p>{overview.background}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={subheadingClass}>The Challenge</h3>
            <div className="space-y-3 pl-5 text-[1.125rem] leading-[1.55]">
              <p>{overview.challenge}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={subheadingClass}>The Solution</h3>
            <div className="space-y-3 pl-5 text-[1.125rem] leading-[1.55]">
              <p className="whitespace-pre-line">{overview.solution}</p>
            </div>
          </div>

          {details.roleDescription ? (
            <div className="space-y-3">
              <h3 className={subheadingClass}>My Role</h3>
              <div className="space-y-3 pl-5 text-[1.125rem] leading-[1.55]">
                <p>{details.roleDescription}</p>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {features.length > 0 ? (
        <section className={contentSectionClass}>
          <div className="text-center">
            <h2 className={sectionHeadingClass}>
              Key Features &amp; Screenshots
            </h2>
          </div>

          <div className="flex w-full flex-col items-start gap-12">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex w-full flex-col items-start gap-4"
              >
                {feature.media.map((item) => (
                  <div
                    key={item.src}
                    className="w-full max-w-[1200px] overflow-hidden rounded-lg shadow-md"
                  >
                    {item.type === "image" ? (
                      <img
                        className="h-full w-full object-cover object-center"
                        src={item.src}
                        alt={item.alt ?? feature.title}
                      />
                    ) : (
                      <video
                        className="h-full w-full object-cover object-center"
                        src={item.src}
                        poster={item.poster}
                        controls
                        playsInline
                      />
                    )}
                  </div>
                ))}
                <h3 className={subheadingClass}>{feature.title}</h3>
                <p className={bodyLargeClass}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {liveUrl?.trim() || githubUrl?.trim() || liveUrlPassword?.trim() ? (
        <section className={contentSectionClass}>
          <div className="space-y-6">
            {liveUrl?.trim() ? (
              <div className="space-y-3">
                <h3 className={subheadingClass}>Live URL</h3>
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.125rem] text-[#007cff] underline underline-offset-4"
                >
                  Live URL
                </a>
              </div>
            ) : null}
            {liveUrlPassword?.trim() ? (
              <div className="space-y-3">
                <h3 className={subheadingClass}>Live URL Password</h3>
                <p className={bodyLargeClass}>{liveUrlPassword}</p>
              </div>
            ) : null}
            {githubUrl?.trim() ? (
              <div className="space-y-3">
                <h3 className={subheadingClass}>Github URL</h3>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.125rem] text-[#007cff] underline underline-offset-4"
                >
                  View GitHub Repository
                </a>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {details.outcome.trim() ? (
        <section className={contentSectionClass}>
          <div className="text-center">
            <h2 className={sectionHeadingClass}>Outcomes</h2>
          </div>

          <p className="text-[1.125rem] leading-[1.55] text-[#333333]">
            {details.outcome}
          </p>
        </section>
      ) : null}

      {nextProject ? (
        <section className={contentSectionClass}>
          <div className="text-center">
            <h2 className={sectionHeadingClass}>Up Next</h2>
          </div>

          <MediaFrame>
            <img
              src={nextProject.image}
              alt={nextProject.title}
              className={mediaInnerClass}
            />
          </MediaFrame>

          <div className="space-y-3 text-center">
            <h3 className={subheadingClass}>{nextProject.title}</h3>
            <p className={bodyLargeClass}>{nextProject.description}</p>
            {nextProject.ctaHref ? (
              <Link
                href={nextProject.ctaHref}
                className="inline-block text-[1.25rem] text-[#005f5d] underline underline-offset-4"
              >
                {nextProject.ctaLabel} -&gt;
              </Link>
            ) : (
              <span className="text-[1.25rem] text-[#005f5d]">
                {nextProject.ctaLabel}
              </span>
            )}
          </div>
        </section>
      ) : null}
    </main>
  );
}
