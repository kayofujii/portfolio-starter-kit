import type { WorkDetailFeature } from "app/development/data";
import MediaCarousel from "./media_carousel";
import type { Locale } from 'app/lib/i18n';

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
  locale?: Locale;
};

const sectionHeadingClass = "text-[1.75rem] font-bold text-[#006a68]";
const subheadingClass =
  "text-[1.25rem] font-bold tracking-normal text-[#161d1c]";
const bodyLargeClass = "text-[1.125rem] leading-[1.55] text-[#333333]";
const bodyClass = "text-[1rem] leading-7 text-[#333333]";
const labelClass = "text-[1.125rem] font-bold text-[rgba(40,40,40,0.8)]";
const contentSectionClass =
  "mx-auto flex w-full max-w-[840px] flex-col gap-10 px-6 py-12 md:px-10 md:py-16";

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
  locale = 'en',
}: WorkDetailProps) {
  const labels = locale === 'ja'
    ? { overview: 'プロジェクト概要', timeline: '期間', role: '担当', company: '会社', team: 'チーム', stack: '技術スタック／ツール', impact: '成果', situation: '背景と課題', background: '背景', challenge: '課題', solution: '解決策', myRole: '私の役割', features: '主な取り組み・画面', outcomes: '成果', live: '公開URL', password: '公開URLのパスワード', github: 'GitHub URL', repository: 'GitHubリポジトリを見る' }
    : { overview: 'Project Overview', timeline: 'Timeline', role: 'Role', company: 'Company', team: 'Team', stack: 'Tech Stack/ Tool', impact: 'Impact', situation: 'The Situation', background: 'Background', challenge: 'The Challenge', solution: 'The Solution', myRole: 'My Role', features: 'Key Features & Screenshots', outcomes: 'Outcomes', live: 'Live URL', password: 'Live URL Password', github: 'Github URL', repository: 'View GitHub Repository' };
  const overviewItems = [
    { label: labels.timeline, value: details.period },
    { label: labels.role, value: details.role },
    { label: labels.company, value: details.company },
    { label: labels.team, value: `${details.team} — ${details.teamDetails}` },
    { label: labels.stack, value: details.techStack.join(", ") },
    { label: labels.impact, value: details.outcome },
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
          <h2 className={sectionHeadingClass}>{labels.overview}</h2>
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

      {liveUrl?.trim() || githubUrl?.trim() || liveUrlPassword?.trim() ? (
        <section className={contentSectionClass}>
          <div className="space-y-6">
            {liveUrl?.trim() ? (
              <div className="space-y-3">
                <h3 className={subheadingClass}>{labels.live}</h3>
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.125rem] text-[#007cff] underline underline-offset-4"
                >
                  {labels.live}
                </a>
              </div>
            ) : null}
            {liveUrlPassword?.trim() ? (
              <div className="space-y-3">
                <h3 className={subheadingClass}>{labels.password}</h3>
                <p className={bodyLargeClass}>{liveUrlPassword}</p>
              </div>
            ) : null}
            {githubUrl?.trim() ? (
              <div className="space-y-3">
                <h3 className={subheadingClass}>{labels.github}</h3>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.125rem] text-[#007cff] underline underline-offset-4"
                >
                  {labels.repository}
                </a>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className={contentSectionClass}>
        <div className="text-center">
          <h2 className={sectionHeadingClass}>{labels.situation}</h2>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <h3 className={subheadingClass}>{labels.background}</h3>
            <div className="space-y-3 pl-5 text-[1.125rem] leading-[1.55]">
              <p>{overview.background}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={subheadingClass}>{labels.challenge}</h3>
            <div className="space-y-3 pl-5 text-[1.125rem] leading-[1.55]">
              <p>{overview.challenge}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={subheadingClass}>{labels.solution}</h3>
            <div className="space-y-3 pl-5 text-[1.125rem] leading-[1.55]">
              <p className="whitespace-pre-line">{overview.solution}</p>
            </div>
          </div>

          {details.roleDescription ? (
            <div className="space-y-3">
              <h3 className={subheadingClass}>{labels.myRole}</h3>
              <div className="space-y-3 pl-5 text-[1.125rem] leading-[1.55]">
                <p>{details.roleDescription}</p>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {features.length > 0 ? (
        <section className="mx-auto flex w-full max-w-[1080px] flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
          <div className="mx-auto w-full max-w-[840px] text-center">
            <h2 className={sectionHeadingClass}>
              {labels.features}
            </h2>
          </div>

          <div className="flex w-full flex-col items-center gap-16">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex w-full flex-col items-center gap-6"
              >
                <div className="w-full max-w-[1000px] overflow-hidden">
                  {feature.media.length > 1 ? (
                    <MediaCarousel media={feature.media} title={feature.title} />
                  ) : (
                    feature.media.map((item) => (
                      <div
                        key={item.src}
                        className="w-full overflow-hidden rounded-lg shadow-md bg-neutral-100"
                      >
                        {item.type === "image" ? (
                          <img
                            className="h-auto w-full object-contain mx-auto"
                            src={item.src}
                            alt={item.alt ?? feature.title}
                          />
                        ) : (
                          <video
                            className="h-auto w-full object-contain mx-auto"
                            src={item.src}
                            poster={item.poster}
                            controls
                            playsInline
                          />
                        )}
                      </div>
                    ))
                  )}
                </div>
                <div className="w-full max-w-[840px] space-y-2 px-4 md:px-0">
                  <h3 className={subheadingClass}>{feature.title}</h3>
                  <p className={`${bodyLargeClass} whitespace-pre-line`}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}


      {details.outcome.trim() ? (
        <section className={contentSectionClass}>
          <div className="text-center">
            <h2 className={sectionHeadingClass}>{labels.outcomes}</h2>
          </div>

          <p className="text-[1.125rem] leading-[1.55] text-[#333333]">
            {details.outcome}
          </p>
        </section>
      ) : null}

    </main>
  );
}
