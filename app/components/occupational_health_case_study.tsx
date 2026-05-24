import Link from "next/link";

const prototypeUrl =
  "https://www.figma.com/design/91Jkuzg8ezASrojYFuqOzx/Workspace?node-id=1979-1683&t=rOn4YDGPAl2Nh43L-4";

const overviewItems = [
  { label: "Timeline", value: "1 person-month" },
  { label: "Role", value: "UX/UI Design, UX Research" },
  { label: "Tool", value: "Figma" },
  { label: "Company", value: "mediPhone, inc." },
  {
    label: "Team",
    value: "Engineer x2, Project Owner x1, Product Designer (me)",
  },
  {
    label: "Impact",
    value:
      "Improved consultation usability, contributed to new contracts, and supported a 4% increase in ARR.",
  },
];

const findings = [
  {
    title: "Too much page switching",
    body:
      "Doctors had to move across multiple screens during short consultation windows, which interrupted the flow of the conversation and slowed documentation.",
  },
  {
    title: "Context was fragmented",
    body:
      "Important employee information, consultation notes, and reporting tasks were separated, forcing users to reconstruct context in their heads while speaking with employees.",
  },
  {
    title: "Existing workflows did not match real practice",
    body:
      "The product structure reflected system boundaries more than consultation behavior, so the interface felt less natural than the tools occupational health professionals were used to.",
  },
];

const designPrinciples = [
  "Consolidate the full consultation workflow into one screen so doctors can focus on the conversation instead of navigation.",
  "Keep employee health context visible while note-taking and report preparation happen in the same workspace.",
  "Borrow familiar interaction patterns from electronic medical record interfaces to reduce learning cost.",
];

const outcomes = [
  "The redesigned consultation tool brought document review, note-taking, and reporting into a single workflow.",
  "Occupational health professionals gave positive feedback because they could review employee information and write notes without losing context.",
  "The improved experience contributed to new contracts and supported a 4% increase in ARR.",
];

export default function OccupationalHealthCaseStudy() {
  return (
    <main className="w-full bg-white text-[#333333]">
      <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pb-10 pt-10 md:px-10">
        <div className="w-full max-w-[980px] text-center">
          <h1 className="text-[2rem] font-bold leading-[1.4] tracking-normal text-[#333333] md:text-[2.5rem]">
            Occupational Health Consultation Tool
          </h1>
        </div>
        <div className="mt-10 w-full overflow-hidden bg-[#f4dfbc]">
          <img
            src="/images/work/occupational_health_consultation_tool.webp"
            alt="Occupational health consultation tool overview"
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
            In Japan, employees with health issues are required to consult with
            occupational health professionals. mediment supports these
            consultations by sharing employee health information between
            professionals and HR managers.
          </p>
          <p>
            The previous consultation tool forced doctors to move between
            multiple pages during short sessions. Through user research and
            redesign, I reframed the experience around the real consultation
            workflow so professionals could review information, write notes, and
            prepare reports more smoothly in one place.
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

      <section className="mx-auto w-full max-w-[1440px] px-6 py-10 md:px-10">
        <div className="overflow-hidden rounded-[20px] bg-[#f4dfbc] p-4 md:p-8">
          <video
            className="h-auto w-full rounded-[14px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
            src="/videos/work/occupational_health_consultation_tool.mp4"
            poster="/images/work/occupational_health_consultation_tool.webp"
            controls
            playsInline
          />
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[840px] flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
        <div className="text-center">
          <h2 className="text-[1.75rem] font-bold text-[#006a68]">
            The Situation
          </h2>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <h3 className="text-[1.25rem] font-bold tracking-normal text-[#161d1c]">
              The Product
            </h3>
            <div className="space-y-3 pl-5 text-[1.125rem] leading-[1.55]">
              <p>
                The consultation tool was used by occupational health
                professionals to review employee conditions, hold consultations,
                and communicate outcomes back to labor managers and other
                stakeholders.
              </p>
              <p>
                Because consultations were often short, the tool needed to
                support quick understanding, smooth note-taking, and easy access
                to related information without disrupting the conversation.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-[1.25rem] font-bold tracking-normal text-[#161d1c]">
              The Challenge
            </h3>
            <div className="space-y-3 pl-5 text-[1.125rem] leading-[1.55]">
              <p>
                Doctors needed to switch between three separate pages during
                consultations, which made it difficult to review documents,
                write notes in real time, and keep the employee conversation
                moving naturally.
              </p>
              <p>
                The interaction cost was high enough that improving workflow
                continuity became the central design problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] bg-[#eff7f3] px-6 py-14 md:px-10">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-10">
          <div className="text-center">
            <h2 className="text-[1.75rem] font-bold text-[#006a68]">
              Key Findings
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {findings.map((finding) => (
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
            Design Direction
          </h2>
        </div>

        <div className="space-y-4">
          <h3 className="text-[1.25rem] font-bold tracking-normal text-[#161d1c]">
            Workflow-Centered Redesign
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
          <div className="overflow-hidden rounded-[20px] bg-[#d8efe2] p-4 md:p-8">
            <img
              src="/images/work/occupational_health_employee_data.webp"
              alt="Employee health data panel"
              className="h-auto w-full rounded-[14px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
            />
          </div>
          <div className="overflow-hidden rounded-[20px] bg-[#d8efe2] p-4 md:p-8">
            <img
              src="/images/work/occupational_health_consultation_reports.webp"
              alt="Consultation reports and opinion report workflow"
              className="h-auto w-full rounded-[14px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[840px] flex-col gap-8 px-6 py-12 md:px-10 md:py-16">
        <div className="space-y-3">
          <h3 className="text-[1.25rem] font-bold tracking-normal text-[#161d1c]">
            Prototype
          </h3>
          <p className="text-[1.125rem] leading-[1.55]">
            I created and refined the interaction flow in Figma so the team
            could review the single-screen consultation experience before
            implementation.
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

        <div className="space-y-3 pt-4 text-center">
          <p className="text-[1.25rem] font-bold tracking-normal text-[#161d1c]">
            Thank you for taking the time to read this
          </p>
          <Link
            href="/development"
            className="text-[1.25rem] text-[#005f5d] underline underline-offset-4"
          >
            Go Back To All Projects -&gt;
          </Link>
        </div>
      </section>
    </main>
  );
}
