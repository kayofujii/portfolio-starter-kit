"use client";
import React from "react";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { CheckboxCard } from "@/ui/components/CheckboxCard";
import { IconButton } from "@/ui/components/IconButton";
import Link from "next/link";
import { workDetails } from "app/work/data";
import { FeatherArrowRight } from "@subframe/core";
import { FeatherArrowUpRight } from "@subframe/core";
import { FeatherFileText } from "@subframe/core";
import { FeatherLayout } from "@subframe/core";
import { FeatherPenTool } from "@subframe/core";
import { FeatherServer } from "@subframe/core";
import { FeatherYoutube } from "@subframe/core";

export default function Page() {
  return (
    <div className="flex w-full px-6 flex-col items-center bg-[#fafaf8ff] text-[#2C2C2C]">
      <div className="flex w-full flex-col items-center gap-24 py-24 mobile:flex-col mobile:flex-nowrap mobile:gap-16 mobile:px-6 mobile:py-16">
        <div className="flex w-full max-w-[1024px] items-center gap-16 mobile:flex-nowrap mobile:gap-16 mobile:flex-col-reverse">
          <div className="">
            <div className="mb-4">
              <span className="w-full text-heading-2 text-default-font">
                I’m Kayo Fujii, a Full Stack Developer who transforms ideas into valuable experiences by connecting design, UX, and engineering.
              </span>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <Button
                className="h-12 w-auto flex-none px-8"
                variant="brand-primary"
                size="large"
                iconRight={<FeatherArrowRight />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                View Selected Work
              </Button>
              <Button
                className="h-12 w-auto flex-none px-8"
                variant="neutral-secondary"
                size="large"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[1024px] flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-heading-2 font-heading-2 text-[#2c2c2cff]">
              Technical Skills
            </span>
          </div>
          <div className="w-full items-start gap-12 grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-start gap-4 rounded-md bg-default-background px-6 py-6 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md bg-[#f0fdfaff] text-teal-600">
                  <FeatherLayout className="text-body font-body text-default-font" />
                </div>
                <span className="text-heading-3 font-heading-3 text-[#2c2c2cff]">
                  Frontend
                </span>
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
                <span className="text-heading-3 font-heading-3 text-[#2c2c2cff]">
                  Backend
                </span>
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
                  <FeatherPenTool className="text-body font-body text-default-font" />
                </div>
                <span className="text-heading-3 font-heading-3 text-[#2c2c2cff]">
                  Design
                </span>
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
            <span className="text-heading-2 font-heading-2 text-[#2c2c2cff]">
              Work
            </span>
          </div>
          <div className="flex w-full flex-col items-center gap-12">
            <div className="flex w-full max-w-[1024px] flex-wrap items-start gap-8">
              {workDetails.map((work) => (
                <Link
                  key={work.slug}
                  href={`/work/${work.slug}`}
                  className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg bg-default-background px-6 py-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
                >
                  <img
                    className="flex h-64 w-full flex-none rounded-md object-cover"
                    src={work.heroImage}
                  />
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
        <div className="flex w-full max-w-[1024px] flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-heading-2 font-heading-2 text-[#2c2c2cff]">
              Recommendations
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-start gap-6 rounded-2xl bg-white px-8 py-8 transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-4">
                <Avatar
                  size="large"
                  image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                >
                  SJ
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-[#2c2c2cff]">
                    Sarah Jenkins
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Senior PM at TechFlow
                  </span>
                </div>
              </div>
              <span className="text-body font-body text-[#2c2c2cff]">
                &quot;Alex is one of those rare developers who truly understands
                design. He doesn&#39;t just implement specs; he improves them. His
                ability to bridge the gap between our design team and engineering
                was invaluable.&quot;
              </span>
            </div>
            <div className="flex flex-col items-start gap-6 rounded-2xl bg-white px-8 py-8 transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-4">
                <Avatar
                  size="large"
                  image="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                >
                  MR
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-[#2c2c2cff]">
                    Marcus Reid
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    CTO at StartUp Inc
                  </span>
                </div>
              </div>
              <span className="text-body font-body text-[#2c2c2cff]">
                &quot;I&#39;ve never met a developer more reliable than Alex. When
                he says a feature will be done, it&#39;s done—and usually with
                better performance metrics than we anticipated. A true
                professional.&quot;
              </span>
            </div>
            <div className="flex flex-col items-start gap-6 rounded-2xl bg-white px-8 py-8 transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-4">
                <Avatar
                  size="large"
                  image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
                >
                  EL
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-[#2c2c2cff]">
                    Emily Liu
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Lead Designer
                  </span>
                </div>
              </div>
              <span className="text-body font-body text-[#2c2c2cff]">
                &quot;Collaborating with Alex is a dream. He respects the design
                process and often catches edge cases we missed during the prototype
                phase. His attention to detail is unmatched.&quot;
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[1024px] flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-heading-2 font-heading-2 text-[#2c2c2cff]">
              Creative Outputs
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <div className="w-full flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg bg-default-background px-6 py-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-[#e0f7f4ff] text-teal-700">
                <FeatherFileText className="text-body font-body text-default-font" />
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="text-heading-3 font-heading-3 text-[#2c2c2cff]">
                  Category Pages vs Filters in E-commerce SEO
                </span>
                <span className="text-body font-body text-subtext-color">
                  A deep dive into site architecture and how it affects search
                  engine ranking for large scale e-commerce sites.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="neutral">Medium</Badge>
                <IconButton
                  icon={<FeatherArrowUpRight />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div>
            {/* <div className="flex flex-col gap-4 md:flex-row w-full items-start md:items-center rounded-xl border-neutral-100 bg-white px-6 py-6 transition-colors hover:border-teal-200">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-[#e0f7f4ff] text-teal-700">
                <FeatherYoutube className="text-body font-body text-default-font" />
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="text-heading-3 font-heading-3 text-[#2c2c2cff]">
                  Building a Component Library from Scratch
                </span>
                <span className="text-body font-body text-subtext-color">
                  Live coding session demonstrating how to build accessible,
                  reusable React components using Tailwind CSS.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="neutral">YouTube</Badge>
                <IconButton
                  icon={<FeatherArrowUpRight />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
