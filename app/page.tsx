"use client";
import React from "react";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { CheckboxCard } from "@/ui/components/CheckboxCard";
import { IconButton } from "@/ui/components/IconButton";
import Link from "next/link";
import { workDetails } from "app/work/data";
import { FeatherArrowRight, FeatherShoppingCart } from "@subframe/core";
import { FeatherArrowUpRight } from "@subframe/core";
import { FeatherFileText } from "@subframe/core";
import { FeatherLayout } from "@subframe/core";
import { FeatherPenTool } from "@subframe/core";
import { FeatherServer } from "@subframe/core";
import { useRouter } from "next/navigation";


export default function Page() {
  const router = useRouter();
  return (
    <div className="flex w-full px-6 flex-col items-center bg-[#fafaf8ff] text-[#2C2C2C]">
      <div className="flex w-full flex-col items-center gap-24 py-24 mobile:flex-col mobile:flex-nowrap mobile:gap-16 mobile:px-6 mobile:py-16">
        <div className="flex w-full max-w-[1024px] items-center gap-16 mobile:flex-nowrap mobile:gap-16 mobile:flex-col-reverse">
          <div className="">
            <div className="mb-8">
              <h1 className="w-full text-heading-2 text-default-font">
                I’m Kayo Fujii, a Full Stack Developer who transforms ideas into valuable experiences by connecting design, UX, and engineering.
              </h1>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <Button
                className="h-12 w-auto flex-none px-8"
                variant="brand-primary"
                size="large"
                iconRight={<FeatherArrowRight />}
                onClick={() => router.push("/work")}
              >
                View Selected Work
              </Button>
              <Button
                className="h-12 w-auto flex-none px-8"
                variant="neutral-secondary"
                size="large"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Ka1K6BmBeQjqlC6F5yFB-q1DyjZrM9so/view?usp=sharing",
                    "_blank",
                    "noreferrer"
                  )
                }
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[1024px] flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-2">
            <h2 className="text-heading-2 font-heading-2 text-[#2c2c2cff]">
              Technical Skills
            </h2>
          </div>
          <div className="w-full items-start gap-12 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-start gap-4 rounded-md bg-default-background px-6 py-6 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md bg-[#f0fdfaff] text-teal-600">
                  <FeatherLayout className="text-body font-body text-default-font" />
                </div>
                <h3 className="text-heading-3 font-heading-3 text-[#2c2c2cff]">
                  Frontend
                </h3>
              </div>
              <div className="flex flex-wrap items-start gap-2">
                <Badge variant="neutral">React</Badge>
                <Badge variant="neutral">Vue.js</Badge>
                <Badge variant="neutral">TypeScript</Badge>
                <Badge variant="neutral">Next.js</Badge>
                <Badge variant="neutral">Tailwind CSS</Badge>
                <Badge variant="neutral">HTML5/CSS3</Badge>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-md bg-default-background px-6 py-6 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md bg-[#f0fdfaff] text-teal-600">
                  <FeatherServer className="text-body font-body text-default-font" />
                </div>
                <h3 className="text-heading-3 font-heading-3 text-[#2c2c2cff]">
                  Backend
                </h3>
              </div>
              <div className="flex flex-wrap items-start gap-2">
                <Badge variant="neutral">Ruby (Ruby on Rails)</Badge>
                <Badge variant="neutral">Python (Django)</Badge>
                <Badge variant="neutral">PHP</Badge>
                <Badge variant="neutral">SQL (MySQL, PostgreSQL)</Badge>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-md bg-default-background px-6 py-6 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md bg-[#f0fdfaff] text-teal-600">
                  <FeatherShoppingCart className="text-body font-body text-default-font" />
                </div>
                <h3 className="text-heading-3 font-heading-3 text-[#2c2c2cff]">
                  CMS & E-commerce
                </h3>
              </div>
              <div className="flex flex-wrap items-start gap-2">
                <Badge variant="neutral">WordPress</Badge>
                <Badge variant="neutral">WooCommerce</Badge>
                <Badge variant="neutral">Elementor</Badge>
                <Badge variant="neutral">Shopify</Badge>
                <Badge variant="neutral">Headless CMS</Badge>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-md bg-default-background px-6 py-6 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md bg-[#f0fdfaff] text-teal-600">
                  <FeatherPenTool className="text-body font-body text-default-font" />
                </div>
                <h3 className="text-heading-3 font-heading-3 text-[#2c2c2cff]">
                  Design
                </h3>
              </div>
              <div className="flex flex-wrap items-start gap-2">
                <Badge variant="neutral">UI/UX design</Badge>
                <Badge variant="neutral">Web design</Badge>
                <Badge variant="neutral">Figma</Badge>
                <Badge variant="neutral">Adobe XD</Badge>
                <Badge variant="neutral">Prototyping</Badge>
                <Badge variant="neutral">Design Systems</Badge>
                <Badge variant="neutral">Accessibility (a11y)</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[1024px] flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-2">
            <h2 className="text-heading-2 font-heading-2 text-[#2c2c2cff]" id="work">
              Work
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 gap-12">
            {workDetails
              .slice()
              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
              .slice(0, 4)
              .map((work) => (
              <Link
                key={work.slug}
                href={`/work/${work.slug}`}
                className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg bg-default-background px-6 py-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                {work.heroVideo ? (
                  <video
                    className="flex w-full flex-none rounded-md object-cover"
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
                    className="flex h-64 w-full flex-none rounded-md object-cover"
                    src={work.heroImage}
                  />
                )}
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex w-full flex-col items-start gap-2">
                    <h3 className="text-heading-3 font-heading-3 text-default-font">
                      {work.title}
                    </h3>
                    <p className="text-body font-body text-subtext-color">
                      {work.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {work.details.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="neutral" icon={null}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <p className="text-caption font-caption text-subtext-color">
                      {work.details.company}
                    </p>
                    <p className="text-caption font-caption text-subtext-color">
                      {work.details.period}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Button
            className="h-12 w-auto flex-none px-8"
            variant="neutral-secondary"
            size="large"
            iconRight={<FeatherArrowRight />}
            onClick={() => router.push("/work")}
          >
            View More Work
          </Button>
        </div>
        <div className="flex w-full max-w-[1024px] flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-2">
            <h2 className="text-heading-2 font-heading-2 text-[#2c2c2cff]">
              Recommendations
            </h2>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-start gap-6 rounded-2xl bg-white px-8 py-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-start">
                  <h3 className="text-body-bold font-body-bold text-[#2c2c2cff]">
                    Yusuke Tabata
                  </h3>
                  <p className="text-caption font-caption text-subtext-color">
                    CTO, mediPhone, Inc.
                  </p>
                </div>
              </div>
              <p className="text-body font-body text-[#2c2c2cff]">
                I was really fortunate to work with Kayo-san to build our new
                SaaS product. She always did great work both as a backend
                engineer and UX designer. In both roles, she has been trying
                hard to understand every aspect of the product like users’
                requirements and expectations, how team mates build the product,
                how software framework works and so on.
              </p>
            </div>
            <div className="flex flex-col items-start gap-6 rounded-2xl bg-white px-8 py-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-start">
                  <h3 className="text-body-bold font-body-bold text-[#2c2c2cff]">
                    Mai Takagi
                  </h3>
                  <p className="text-caption font-caption text-subtext-color">
                    Full Stack Web Developer, Temona, Inc.
                  </p>
                </div>
              </div>
              <p className="text-body font-body text-[#2c2c2cff]">
                I am delighted to have collaborated with Kayo in the software
                team at Temona for a year. She demonstrates great dedication to
                her work, sharing her to-do list and accomplishments with her
                manager every morning and evening, which allows for effective
                tracking of project progress. When it comes to coding questions,
                she is always available and has been a tremendous help to me. I
                highly recommend Kayo for her professionalism and expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[1024px] flex-col items-start gap-12 shadow-sm">
          <div className="flex w-full flex-col items-start gap-2">
            <h2 className="text-heading-2 font-heading-2 text-[#2c2c2cff]">
              Creative Outputs
            </h2>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <Link
              href="https://medium.com/@kayosamu1025/category-pages-vs-filters-in-e-commerce-seo-e5480b981b4b"
              target="_blank"
              rel="noreferrer"
              className="w-full flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg bg-default-background px-6 py-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-[#e0f7f4ff] text-teal-700">
                <FeatherFileText className="text-body font-body text-default-font" />
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                <h3 className="text-heading-3 font-heading-3 text-[#2c2c2cff]">
                  Category Pages vs Filters in E-commerce SEO
                </h3>
                <p className="text-body font-body text-subtext-color">
                  Why do dedicated category pages drive stronger organic traffic?
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="neutral">Medium</Badge>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex w-full max-w-[1024px] flex-col items-start gap-12 shadow-sm">
          <div className="flex w-full flex-col items-start gap-2">
            <h2 className="text-heading-2 font-heading-2 text-[#2c2c2cff]">
              About me
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-[4fr_6fr] items-start gap-6 rounded-lg bg-default-background px-6 py-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-80 w-full grow shrink-0 basis-0 items-center justify-center overflow-hidden rounded-lg bg-neutral-100 shadow-md mobile:max-w-full">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/DX0i_9QtDGU?si=XdVRx2TvL3C6ArzB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6">
              <p className="text-body font-body text-default-font">
                Hi there, I&#39;m Kayo! :) <br />
                I moved to Vancouver, Canada from Japan in 2025.<br />
                I&#39;ve been working as a full-stack web developer at retail stores in Vancouver for the past 5 months.
              </p>
              <p className="text-body font-body text-default-font">
                My strengths are:<br />
                1. Bridging UX/UI design and development<br />
                2. Driving conversions and sales for small businesses and startups through UX principles and SEO strategies
              </p>
              <p className="text-body font-body text-default-font">
                I&#39;m currently looking for a new role where I can bring these strengths to make an impact!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
