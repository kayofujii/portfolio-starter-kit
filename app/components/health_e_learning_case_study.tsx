import Link from "next/link";

const overviewItems = [
  { label: "Timeline", value: "2 person-months" },
  { label: "Role", value: "Product Designer" },
  { label: "Tool", value: "Figma" },
  { label: "Company", value: "mediPhone, inc." },
  {
    label: "Team",
    value: "Product owner, engineers, designer (me)",
  },
  {
    label: "Impact",
    value:
      "Enabled scalable employee health education and created a feature strong enough to support upsell growth.",
  },
];

const findings = [
  {
    title: "Education needed to scale beyond 1:1 support",
    body:
      "The product team needed a way to deliver health education to many employees without relying only on labor-intensive human support.",
  },
  {
    title: "The experience had to work for both buyers and learners",
    body:
      "The feature needed to make sense to HR stakeholders evaluating business value while also feeling simple and approachable for employees taking courses.",
  },
  {
    title: "Course structure needed to feel lightweight",
    body:
      "Users were not looking for a heavy LMS. They needed clear course information, straightforward participation steps, and a calm visual flow.",
  },
];

const designPrinciples = [
  "Make the course path easy to understand from selection to completion.",
  "Create a modular structure so different health education topics can be added without redesigning the whole experience.",
  "Use friendly, low-pressure visuals so the learning flow feels supportive rather than clinical.",
];

const outcomes = [
  "Created a scalable e-learning experience for employee health education.",
  "Clarified the learning workflow for both administrators and employees.",
  "Helped position the feature as an upsell opportunity by making the value of education more visible.",
];

function MockupPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[20px] bg-[#d8efe2] p-4 md:p-8">
      <div className="rounded-[14px] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
        <p className="mb-4 font-['Plus_Jakarta_Sans',sans-serif] text-[1rem] font-bold text-[#005f5d]">
          {title}
        </p>
        {children}
      </div>
    </div>
  );
}

export default function HealthELearningCaseStudy() {
  return (
    <main className="w-full bg-white text-[#333333]">
      <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pb-10 pt-10 md:px-10">
        <div className="w-full max-w-[980px] text-center">
          <h1 className="text-[2rem] font-bold leading-[1.4] tracking-normal text-[#333333] md:text-[2.5rem]">
            Health E-Learning for Employees
          </h1>
        </div>
        <div className="mt-10 w-full overflow-hidden bg-[#d8efe2]">
          <img
            src="/images/work/health_e_learning.webp"
            alt="Health e-learning hero"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[840px] flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
        <div className="text-center">
          <h2 className="text-[1.75rem] font-bold text-[#006a68]">
            Project Overview
          </h2>
        </div>

        <div className="space-y-5 border-b border-[#f0eeee] pb-8 text-[1.125rem] leading-[1.55]">
          <p>
            The platform needed a scalable way to help companies educate
            employees about health topics without relying only on one-to-one
            support from specialists.
          </p>
          <p>
            I designed an e-learning feature that made course participation,
            progress, and educational content easier to understand for
            employees, while also helping the product team package the feature
            as a meaningful upsell opportunity.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
          {overviewItems.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-[1.125rem] font-bold text-[rgba(40,40,40,0.8)]">
                {item.label}
              </p>
              <p className="text-[1rem] leading-7 text-[#333333]">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[840px] flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
        <div className="text-center">
          <h2 className="text-[1.75rem] font-bold text-[#006a68]">
            The Challenge
          </h2>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <h3 className="text-[1.25rem] font-bold tracking-normal text-[#161d1c]">
              Context
            </h3>
            <div className="space-y-3 pl-5 text-[1.125rem] leading-[1.55]">
              <p>
                The product already supported occupational health workflows, but
                education at scale was still missing. The team wanted a feature
                that could deliver learning content to employees in a more
                consistent and reusable way.
              </p>
              <p>
                At the same time, the experience had to feel simple enough for
                busy employees and structured enough for stakeholders to see its
                commercial value.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-[1.25rem] font-bold tracking-normal text-[#161d1c]">
              Key Findings
            </h3>
            <div className="grid gap-5 md:grid-cols-3">
              {findings.map((finding) => (
                <article
                  key={finding.title}
                  className="rounded-[18px] bg-[#eff7f3] px-5 py-5"
                >
                  <h4 className="text-[1.05rem] font-bold text-[#005f5d]">
                    {finding.title}
                  </h4>
                  <p className="mt-3 text-[1rem] leading-7 text-[#333333]">
                    {finding.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] bg-[#eff7f3] px-6 py-14 md:px-10">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-10">
          <div className="text-center">
            <h2 className="text-[1.75rem] font-bold text-[#006a68]">
              Learning Flow
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            <div className="rounded-[18px] bg-white px-5 py-6 text-center shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              <p className="text-[0.95rem] font-bold text-[#005f5d]">Admin</p>
              <p className="mt-2 text-[1rem] leading-7">
                Creates a course and sets participation conditions.
              </p>
            </div>
            <div className="hidden text-[2rem] text-[#005f5d] md:block">→</div>
            <div className="rounded-[18px] bg-white px-5 py-6 text-center shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              <p className="text-[0.95rem] font-bold text-[#005f5d]">Employee</p>
              <p className="mt-2 text-[1rem] leading-7">
                Reviews the course, joins, and learns through a guided flow.
              </p>
            </div>
            <div className="hidden text-[2rem] text-[#005f5d] md:block">→</div>
            <div className="rounded-[18px] bg-white px-5 py-6 text-center shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              <p className="text-[0.95rem] font-bold text-[#005f5d]">Business</p>
              <p className="mt-2 text-[1rem] leading-7">
                Gains a reusable education feature that can support upsell
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[840px] flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
        <div className="text-center">
          <h2 className="text-[1.75rem] font-bold text-[#006a68]">
            Design Direction
          </h2>
        </div>

        <div className="space-y-4">
          <h3 className="text-[1.25rem] font-bold tracking-normal text-[#161d1c]">
            Principles
          </h3>
          <ul className="space-y-3 pl-6 text-[1.125rem] leading-[1.55]">
            {designPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-6 py-6 md:px-10">
        <div className="space-y-12">
          <MockupPanel title="Course Overview">
            <div className="grid gap-4 md:grid-cols-[220px_1fr]">
              <div className="rounded-[12px] bg-[#4fc3cf] px-4 py-5 text-white">
                <div className="space-y-3 text-[0.9rem]">
                  <p className="font-semibold">Sidebar</p>
                  <div className="space-y-2 opacity-90">
                    <div className="h-2 rounded bg-white/60" />
                    <div className="h-2 rounded bg-white/50" />
                    <div className="h-2 rounded bg-white/40" />
                    <div className="h-2 rounded bg-white/50" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-5 w-48 rounded bg-[#d4ecef]" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[12px] bg-[#f4fbfb] p-4">
                    <div className="h-4 w-24 rounded bg-[#4fc3cf]/60" />
                    <div className="mt-3 space-y-2">
                      <div className="h-2 rounded bg-[#d5e8ea]" />
                      <div className="h-2 rounded bg-[#d5e8ea]" />
                      <div className="h-2 w-2/3 rounded bg-[#d5e8ea]" />
                    </div>
                  </div>
                  <div className="rounded-[12px] bg-[#f4fbfb] p-4">
                    <div className="h-4 w-20 rounded bg-[#4fc3cf]/60" />
                    <div className="mt-3 h-20 rounded-[10px] bg-[#d9efdc]" />
                  </div>
                </div>
              </div>
            </div>
          </MockupPanel>

          <MockupPanel title="Participation and Progress">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[12px] bg-[#f7fbfb] p-4">
                <div className="h-4 w-24 rounded bg-[#4fc3cf]/60" />
                <div className="mt-4 h-24 rounded-[10px] bg-[#dceff1]" />
                <div className="mt-4 h-9 w-24 rounded-full bg-[#4fc3cf]" />
              </div>
              <div className="rounded-[12px] bg-[#f7fbfb] p-4">
                <div className="h-4 w-20 rounded bg-[#4fc3cf]/60" />
                <div className="mt-4 space-y-3">
                  <div className="h-3 rounded bg-[#dceff1]" />
                  <div className="h-3 rounded bg-[#dceff1]" />
                  <div className="h-3 w-4/5 rounded bg-[#dceff1]" />
                </div>
              </div>
              <div className="rounded-[12px] bg-[#f7fbfb] p-4">
                <div className="h-4 w-28 rounded bg-[#4fc3cf]/60" />
                <div className="mt-4 h-24 rounded-[10px] bg-[#fbe8dd]" />
                <div className="mt-4 h-3 w-2/3 rounded bg-[#dceff1]" />
              </div>
            </div>
          </MockupPanel>

          <MockupPanel title="Visual Direction">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="grid grid-cols-5 gap-2">
                  {["#1e1e1e", "#f2f2f2", "#cf3f4d", "#1c90cb", "#4cc4ce"].map(
                    (color) => (
                      <div
                        key={color}
                        className="h-12 rounded-[10px]"
                        style={{ backgroundColor: color }}
                      />
                    ),
                  )}
                </div>
                <div className="space-y-2 text-[0.95rem] leading-7">
                  <p>
                    The visual system balanced approachable education with the
                    existing product environment.
                  </p>
                  <p>
                    Turquoise and soft neutrals helped the feature feel light,
                    clear, and supportive.
                  </p>
                </div>
              </div>
              <div className="rounded-[14px] bg-[#ecf7f7] p-5">
                <div className="grid gap-3 md:grid-cols-3">
                  {["Course card", "Lesson state", "Illustration zone"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-[12px] bg-white p-4 text-center text-[0.9rem] text-[#005f5d] shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </MockupPanel>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[840px] flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
        <div className="text-center">
          <h2 className="text-[1.75rem] font-bold text-[#006a68]">
            Outcomes
          </h2>
        </div>

        <ul className="space-y-3 pl-6 text-[1.125rem] leading-[1.55] text-[#333333]">
          {outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
