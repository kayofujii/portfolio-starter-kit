"use client";

import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import Link from "next/link";
import { FeatherArrowRight } from "@subframe/core";

type WorkDetailFeature = {
  image: string;
  title: string;
  description: string;
};

type WorkDetailProps = {
  title: string;
  subtitle: string;
  heroImage: string;
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
    outcome: string[];
    team: string;
    teamDetails: string;
  };
  features: WorkDetailFeature[];
  nextProject: {
    image: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref?: string;
  };
};

export default function WorkDetail({
  title,
  subtitle,
  heroImage,
  overview,
  details,
  features,
  nextProject,
}: WorkDetailProps) {
  return (
    <div className="flex w-full px-6 flex-col items-center bg-[#fafaf8ff] text-[#2C2C2C]">
      <div className="flex w-full flex-col items-center justify-center px-6 py-24">
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-12">
          <div className="flex max-w-[1024px] flex-col items-start gap-4">
            <span className="text-heading-1 font-heading-1 text-default-font text-center -tracking-[0.04em]">
              {title}
            </span>
            <span className="text-heading-2 font-heading-2 text-default-font text-center">
              {subtitle}
            </span>
          </div>
          <img
            className="w-full max-w-[1024px] flex-none rounded-lg"
            src={heroImage}
          />
        </div>
      </div>

      <div className="flex max-w-[1024px] flex-col items-center px-6 py-24">
        <div className="flex w-full max-w-[1280px] flex-col items-start gap-24">
          <div className="flex w-full flex-wrap items-start gap-12">
            <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-6">
              <span className="text-heading-1 font-heading-1 text-default-font">
                Project Overview
              </span>
              <div className="flex w-full flex-col items-start gap-4">
                <span className="text-heading-2 font-heading-2 text-default-font">
                  Background
                </span>
                <span className="text-body font-body text-subtext-color">
                  {overview.background}
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <span className="text-heading-2 font-heading-2 text-default-font">
                  The Challenge
                </span>
                <span className="text-body font-body text-subtext-color">
                  {overview.challenge}
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <span className="text-heading-2 font-heading-2 text-default-font">
                  The Solution
                </span>
                <span className="text-body font-body text-subtext-color">
                  {overview.solution}
                </span>
              </div>
            </div>

            <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-6">
              <span className="text-heading-1 font-heading-1 text-default-font">
                Project Details
              </span>
              <div className="flex w-full flex-col items-start gap-8 rounded-lg bg-white px-8 py-8 shadow-sm">
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="text-caption-bold font-caption-bold text-subtext-color">
                    PERIOD
                  </span>
                  <span className="text-body-bold font-body-bold text-default-font">
                    {details.period}
                  </span>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="text-caption-bold font-caption-bold text-subtext-color">
                    TECH STACK
                  </span>
                  <div className="flex flex-wrap items-start gap-2">
                    {details.techStack.map((tech) => (
                      <Badge key={tech} variant="neutral">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="text-caption-bold font-caption-bold text-subtext-color">
                    COMPANY
                  </span>
                  <span className="text-body-bold font-body-bold text-default-font">
                    {details.company}
                  </span>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="text-caption-bold font-caption-bold text-subtext-color">
                    MY ROLE
                  </span>
                  <span className="text-body-bold font-body-bold text-default-font">
                    {details.role}
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    {details.roleDescription}
                  </span>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="text-caption-bold font-caption-bold text-subtext-color">
                    OUTCOME
                  </span>
                  {details.outcome.map((item) => (
                    <span
                      key={item}
                      className="text-body font-body text-subtext-color"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="text-caption-bold font-caption-bold text-subtext-color">
                    TEAM
                  </span>
                  <span className="text-body-bold font-body-bold text-default-font">
                    {details.team}
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    {details.teamDetails}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-12">
            <span className="text-heading-1 font-heading-1 text-default-font">
              Key Features &amp; Screenshots
            </span>
            <div className="flex w-full flex-col items-start gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex w-full flex-col items-start gap-4"
                >
                  <img
                    className="w-full flex-none rounded-lg shadow-md"
                    src={feature.image}
                  />
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    {feature.title}
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    {feature.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-8 rounded-lg bg-white px-12 py-12 shadow-sm">
            <div className="flex w-full flex-col items-start gap-8">
              <span className="text-heading-2 font-heading-2 text-subtext-color text-center">
                Up next
              </span>
            </div>
            <div className="flex flex-col items-start gap-6">
              <img className="w-full flex-none rounded-md" src={nextProject.image} />
              <div className="flex flex-col items-start gap-2">
                <span className="text-heading-2 font-heading-2 text-default-font">
                  {nextProject.title}
                </span>
                <span className="text-body font-body text-subtext-color">
                  {nextProject.description}
                </span>
              </div>
            </div>
            {nextProject.ctaHref ? (
              <Link href={nextProject.ctaHref}>
                <Button
                  variant="neutral-secondary"
                  size="large"
                  iconRight={<FeatherArrowRight />}
                >
                  {nextProject.ctaLabel}
                </Button>
              </Link>
            ) : (
              <Button
                variant="neutral-secondary"
                size="large"
                iconRight={<FeatherArrowRight />}
              >
                {nextProject.ctaLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
