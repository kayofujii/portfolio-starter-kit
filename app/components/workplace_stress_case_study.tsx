import Link from "next/link";

const prototypeUrl =
  "https://www.figma.com/design/91Jkuzg8ezASrojYFuqOzx/Workspace?node-id=1979-1043&t=rOn4YDGPAl2Nh43L-4";

const overviewItems = [
  { label: "Timeline", value: "2 person-months" },
  { label: "Role", value: "UX/UI Design, UX Research" },
  { label: "Tool", value: "Figma" },
  { label: "Company", value: "mediPhone, inc." },
  {
    label: "Team",
    value:
      "Engineer x1, Project Owner x1, Outside Domain Specialist x1, Customer Success Representative x1, Product Designer (me)",
  },
  {
    label: "Impacts",
    value:
      "The redesign improved usability, addressed key client concerns, and helped prevent the cancellation of 3 major clients.",
  },
];

const keyFindings = [
  {
    title: "Core metrics were hard to scan",
    body:
      "Important group-level signals were buried in the interface, so HR managers needed too much effort to understand the overall stress situation.",
  },
  {
    title: "Charts lacked clear hierarchy",
    body:
      "Different graphs were presented with similar visual weight, making it harder for users to know what to review first and what actions to take next.",
  },
  {
    title: "Reporting workflow felt fragmented",
    body:
      "Users needed a smoother path from analysis to report creation so they could explain results to clients and stakeholders more confidently.",
  },
];

const takeaways = [
  "I learned data visualization methods and the roles of different types of graphs through this project.",
  "It is essential to identify the most important information and prioritize it through collaboration with stakeholders, including domain specialists and the project owner.",
];

export default function WorkplaceStressCaseStudy() {
  return (
    <main className="w-full bg-white text-[#333333]">
      <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pb-10 pt-10 md:px-10">
        <div className="w-full max-w-[960px] text-center">
          <h1 className="text-[2rem] font-bold leading-[1.4] tracking-normal text-[#333333] md:text-[2.5rem]">
            Analytics Tool for a Workplace Stress Screening Program
          </h1>
        </div>
        <div className="mt-10 w-full overflow-hidden bg-[#d6f7fb]">
          <img
            src="/images/work/workplace_stress_hero.webp"
            alt="Analytics tool for workplace stress screening"
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
            The Workplace Stress Screening Analysis Tool allowed HR managers to
            assess group-level stress but risked losing three clients due to
            poor usability.
          </p>
          <p>
            Through user research and interviews with specialists and
            stakeholders, I identified three key improvements and enhanced the
            design. This addressed client concerns and resulted in retaining all
            clients.
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

        <p className="text-[1rem] text-[#b81620]">
          *This project was originally created in Japanese for a Japanese
          audience. The text has been translated into English for this
          portfolio.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-6 py-10 md:px-10">
        <img
          src="/images/work/workplace_stress_overview.webp"
          alt="Overview of the workplace stress analytics interface"
          className="h-auto w-full rounded-none"
        />
      </section>

      <section className="mx-auto flex w-full max-w-[840px] flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
        <div className="text-center">
          <h2 className="text-[1.75rem] font-bold text-[#006a68]">
            The Situation
          </h2>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <h3 className="text-[1.25rem] font-bold tracking-[0.05em] text-[#161d1c]">
              The Product
            </h3>
            <div className="space-y-3 pl-5 text-[1.125rem] leading-[1.55]">
              <p>
                The tool helped HR managers review workplace stress screening
                results at the group level and communicate those findings across
                the organization.
              </p>
              <p>
                It needed to support both quick understanding of the data and
                clear follow-up actions, especially when clients were evaluating
                whether to continue using the service.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-[1.25rem] font-bold tracking-[0.05em] text-[#161d1c]">
              The Problem
            </h3>
            <div className="space-y-3 pl-5 text-[1.125rem] leading-[1.55]">
              <p>
                Clients found the analysis screen difficult to interpret, and
                the product team was concerned that poor usability was
                contributing to churn risk.
              </p>
              <p>
                Three major clients were considering cancellation, which raised
                the urgency of improving how information was structured and
                explained.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] bg-[#effbfc] px-6 py-14 md:px-10">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-10">
          <div className="text-center">
            <h2 className="text-[1.75rem] font-bold text-[#006a68]">
              Key Findings
            </h2>
          </div>

          <img
            src="/images/work/workplace_stress_research.webp"
            alt="Research summary and key findings"
            className="h-auto w-full"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {keyFindings.map((finding) => (
              <article
                key={finding.title}
                className="rounded-[18px] bg-white px-5 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
              >
                <h3 className="text-[1.1rem] font-bold text-[#005f5d]">
                  {finding.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-7 text-[#333333]">
                  {finding.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[840px] flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
        <div className="text-center">
          <h2 className="text-[1.75rem] font-bold text-[#006a68]">
            Design
          </h2>
        </div>

        <div className="space-y-3">
          <h3 className="text-[1.25rem] font-bold tracking-[0.05em] text-[#161d1c]">
            Design Goal
          </h3>
          <p className="text-[1.125rem] leading-[1.55]">
            The redesign focused on surfacing the most important insights
            first, reducing interpretation effort, and making the analysis
            experience easier to explain to clients and internal stakeholders.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-6 py-6 md:px-10">
        <div className="space-y-12">
          <img
            src="/images/work/workplace_stress_design_part_1.webp"
            alt="Workplace stress analytics design exploration part one"
            className="h-auto w-full bg-[#effbfc]"
          />
          <img
            src="/images/work/workplace_stress_design_part_2.webp"
            alt="Workplace stress analytics design exploration part two"
            className="h-auto w-full bg-[#effbfc]"
          />
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[840px] flex-col gap-8 px-6 py-12 md:px-10 md:py-16">
        <div className="space-y-3">
          <h3 className="text-[1.25rem] font-bold tracking-[0.05em] text-[#161d1c]">
            Hi-Fidelity Prototype
          </h3>
          <p className="text-[1.125rem] leading-[1.55]">
            I created a hi-fi design based on the digital wireframe and used it
            to communicate the updated analytics flow with stakeholders.
          </p>
          <a
            href={prototypeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[1.125rem] text-[#007cff] underline underline-offset-4"
          >
            Prototype Link
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-6 py-6 md:px-10">
        <div className="space-y-12">
          <img
            src="/images/work/workplace_stress_report_preview.webp"
            alt="Report preview interface for the workplace stress analytics tool"
            className="h-auto w-full bg-[#effbfc]"
          />
          <img
            src="/images/work/workplace_stress_report_generation.webp"
            alt="Report generation interface for the workplace stress analytics tool"
            className="h-auto w-full bg-[#effbfc]"
          />
          <img
            src="/images/work/workplace_stress_report_creation.webp"
            alt="Group analysis report creation screen"
            className="h-auto w-full bg-[#effbfc]"
          />
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[840px] flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
        <div className="text-center">
          <h2 className="text-[1.75rem] font-bold text-[#006a68]">
            Going Forward
          </h2>
        </div>

        <div className="space-y-4">
          <h3 className="text-[1.125rem] font-bold text-[#005f5d]">Impact</h3>
          <ul className="space-y-3 pl-6 text-[1.125rem] leading-[1.55] text-[#333333]">
            <li>
              The redesign improved usability, addressed key client concerns,
              and helped <strong>prevent the cancellation of 3 major clients</strong>.
            </li>
            <li>
              Prospective clients expressed interest in switching to our service
              after reviewing the new design, citing its clear presentation of
              essential analytical data.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-[1.125rem] font-bold text-[#005f5d]">
            What I learned
          </h3>
          <ul className="space-y-3 pl-6 text-[1.125rem] leading-[1.55] text-[#333333]">
            {takeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
