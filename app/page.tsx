"use client";
import React from "react";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { CheckboxCard } from "@/ui/components/CheckboxCard";
import { Footer } from "@/ui/components/Footer";
import SiteHeader from "./components/header";
import { IconButton } from "@/ui/components/IconButton";
import { FeatherArrowRight } from "@subframe/core";
import { FeatherArrowUpRight } from "@subframe/core";
import { FeatherFileText } from "@subframe/core";
import { FeatherLayout } from "@subframe/core";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherMail } from "@subframe/core";
import { FeatherMenu } from "@subframe/core";
import { FeatherPenTool } from "@subframe/core";
import { FeatherServer } from "@subframe/core";
import { FeatherYoutube } from "@subframe/core";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-[#fafaf8ff] text-[#2C2C2C]">
      <div className="flex w-256 flex-col items-center gap-24 px-6 py-24 mobile:flex-col mobile:flex-nowrap mobile:gap-16 mobile:px-6 mobile:py-16">
        <div className="flex w-full items-center gap-16 mobile:flex-nowrap mobile:gap-16 mobile:flex-col-reverse">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-4">
              <span className="text-heading-3 font-heading-3 text-brand-600 uppercase tracking-wider">
                Full Stack Developer
              </span>
              <span className="w-full text-heading-1 font-heading-1 text-default-font -tracking-[0.02em]">
                Building digital products that matter.
              </span>
              <span className="w-full max-w-[576px] text-body font-body text-subtext-color">
                I transform complex ideas into valuable experiences by connecting
                design, UX, and engineering. Specialized in building scalable,
                user-centric web applications.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                className="h-12 w-auto flex-none px-8"
                size="large"
                iconRight={<FeatherArrowRight />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                View Selected Work
              </Button>
              <Button
                className="h-12 w-auto flex-none"
                variant="neutral-secondary"
                size="large"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Download Resume
              </Button>
            </div>
          </div>
          <div className="flex h-112 w-96 flex-none items-center justify-center bg-white relative mobile:h-96 mobile:w-full mobile:flex-none">
            <img
              className="flex-none"
              src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
            />
          </div>
        </div>
        <div className="flex w-full max-w-[1280px] flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-heading-2 font-heading-2 text-[#2c2c2cff]">
              Technical Skills
            </span>
            <span className="text-body font-body text-subtext-color">
              The tools and technologies I use to bring ideas to life.
            </span>
          </div>
          <div className="w-full items-start gap-12 grid grid-cols-3">
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
                <Badge variant="neutral">TypeScript</Badge>
                <Badge variant="neutral">Next.js</Badge>
                <Badge variant="neutral">Tailwind CSS</Badge>
                <Badge variant="neutral">HTML5/CSS3</Badge>
                <Badge variant="neutral">Framer Motion</Badge>
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
                <Badge variant="neutral">Node.js</Badge>
                <Badge variant="neutral">PostgreSQL</Badge>
                <Badge variant="neutral">GraphQL</Badge>
                <Badge variant="neutral">Supabase</Badge>
                <Badge variant="neutral">AWS Lambda</Badge>
                <Badge variant="neutral">Prisma</Badge>
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
                <Badge variant="neutral">Figma</Badge>
                <Badge variant="neutral">Adobe XD</Badge>
                <Badge variant="neutral">Prototyping</Badge>
                <Badge variant="neutral">Design Systems</Badge>
                <Badge variant="neutral">Accessibility (a11y)</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-12">
          <div className="flex w-full max-w-[1280px] flex-col items-start gap-4">
            <span className="text-heading-1 font-heading-1 text-default-font">
              Work
            </span>
            <span className="text-body font-body text-subtext-color">
              A collection of projects showcasing design and development expertise
            </span>
          </div>
          <div className="flex w-full max-w-[1280px] flex-wrap items-center gap-3">
            <span className="text-caption-bold font-caption-bold text-subtext-color">
              Filter by
            </span>
            <CheckboxCard
              className="h-8 w-auto flex-none"
              hideCheckbox={true}
              checked={false}
              onCheckedChange={(checked: boolean) => {}}
            >
              <span className="text-caption-bold font-caption-bold text-default-font">
                All Projects
              </span>
            </CheckboxCard>
            <CheckboxCard
              className="h-8 w-auto flex-none"
              hideCheckbox={true}
              checked={false}
              onCheckedChange={(checked: boolean) => {}}
            >
              <span className="text-caption-bold font-caption-bold text-default-font">
                Web Development
              </span>
            </CheckboxCard>
            <CheckboxCard
              className="h-8 w-auto flex-none"
              hideCheckbox={true}
              checked={false}
              onCheckedChange={(checked: boolean) => {}}
            >
              <span className="text-caption-bold font-caption-bold text-default-font">
                UI/UX Design
              </span>
            </CheckboxCard>
            <CheckboxCard
              className="h-8 w-auto flex-none"
              hideCheckbox={true}
              checked={false}
              onCheckedChange={(checked: boolean) => {}}
            >
              <span className="text-caption-bold font-caption-bold text-default-font">
                Healthcare
              </span>
            </CheckboxCard>
            <CheckboxCard
              className="h-8 w-auto flex-none"
              hideCheckbox={true}
              checked={false}
              onCheckedChange={(checked: boolean) => {}}
            >
              <span className="text-caption-bold font-caption-bold text-default-font">
                E-commerce
              </span>
            </CheckboxCard>
          </div>
          <div className="flex w-full flex-col items-center gap-12">
            <div className="flex w-full max-w-[1280px] flex-wrap items-start gap-8">
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg bg-default-background px-6 py-6 shadow-sm">
                <div className="flex h-64 w-full flex-none flex-col items-center justify-center gap-4 rounded-md bg-brand-100 px-8 py-8" />
                <div className="flex w-full flex-col items-start gap-4">
                  <Badge variant="brand">WEB DEVELOPMENT</Badge>
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="text-heading-2 font-heading-2 text-default-font">
                      SpartX E-Learning for Employees
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Comprehensive e-learning platform designed to enhance employee
                      training and development through interactive courses and
                      progress tracking.
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="neutral" icon={null}>
                      React
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      JavaScript
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      CSS
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      Ruby on Rails
                    </Badge>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      Temsoft
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      2024
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg bg-default-background px-6 py-6 shadow-sm">
                <div className="flex h-64 w-full flex-none flex-col items-center justify-center gap-4 rounded-md bg-warning-100 px-8 py-8" />
                <div className="flex w-full flex-col items-start gap-4">
                  <Badge variant="warning">WEB DEVELOPMENT</Badge>
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="text-heading-2 font-heading-2 text-default-font">
                      Analytics Tool for Multiplex Dorms Reserving Program
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Data visualization and analytics platform for tracking
                      dormitory reservations across multiple locations with
                      real-time insights.
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="neutral" icon={null}>
                      Vue
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      JavaScript
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      HTML
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      CSS
                    </Badge>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      Freelance
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full max-w-[1280px] flex-wrap items-start gap-8">
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg bg-default-background px-6 py-6 shadow-sm">
                <div className="flex h-64 w-full flex-none flex-col items-center justify-center gap-4 rounded-md bg-success-100 px-8 py-8" />
                <div className="flex w-full flex-col items-start gap-4">
                  <Badge variant="success">HEALTHCARE</Badge>
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="text-heading-2 font-heading-2 text-default-font">
                      Occupational Health Consultation Tool
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Digital platform enabling seamless occupational health
                      consultations between medical professionals and employees with
                      scheduling and documentation.
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="neutral" icon={null}>
                      React
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      Figma
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      JavaScript
                    </Badge>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      medPhone, Inc.
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      2024
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg bg-default-background px-6 py-6 shadow-sm">
                <div className="flex h-64 w-full flex-none flex-col items-center justify-center gap-4 rounded-md bg-error-100 px-8 py-8" />
                <div className="flex w-full flex-col items-start gap-4">
                  <Badge variant="error">UI/UX DESIGN</Badge>
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="text-heading-2 font-heading-2 text-default-font">
                      New Parental Waitlist in Crèche
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Streamlined waitlist management system for daycare centers to
                      help parents track enrollment status and facility
                      availability.
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="neutral" icon={null}>
                      Figma
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      UI Design
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      UX Research
                    </Badge>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      Freelance
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full max-w-[1280px] flex-wrap items-start gap-8">
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg bg-default-background px-6 py-6 shadow-sm">
                <div className="flex h-64 w-full flex-none flex-col items-center justify-center gap-4 rounded-md bg-[#5b9fedff] px-8 py-8" />
                <div className="flex w-full flex-col items-start gap-4">
                  <Badge variant="brand">WEB DEVELOPMENT</Badge>
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="text-heading-2 font-heading-2 text-default-font">
                      High-SEC Website Comparison Platform
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Online service platform for users to compare corporate cards
                      with 300+ corporate card products and detailed feature
                      comparisons.
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="neutral" icon={null}>
                      HTML
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      CSS
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      JavaScript
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      Ruby on Rails
                    </Badge>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      Freelance
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      2023
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg bg-default-background px-6 py-6 shadow-sm">
                <div className="flex h-64 w-full flex-none flex-col items-center justify-center gap-4 rounded-md bg-[#6dd4d0ff] px-8 py-8" />
                <div className="flex w-full flex-col items-start gap-4">
                  <Badge variant="success">HEALTHCARE</Badge>
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="text-heading-2 font-heading-2 text-default-font">
                      Meeting Scheduling Feature for Technicians and Engineers
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Automated scheduling system for coordinating meetings between
                      healthcare technicians, engineers, and medical staff with
                      availability management.
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="neutral" icon={null}>
                      React
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      JavaScript
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      Ruby on Rails
                    </Badge>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      medPhone, Inc.
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full max-w-[1280px] flex-wrap items-start gap-8">
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg bg-default-background px-6 py-6 shadow-sm">
                <div className="flex h-64 w-full flex-none flex-col items-center justify-center gap-4 rounded-md bg-[#fdb572ff] px-8 py-8" />
                <div className="flex w-full flex-col items-start gap-4">
                  <Badge variant="warning">E-COMMERCE</Badge>
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="text-heading-2 font-heading-2 text-default-font">
                      E-commerce Website for Ramen Creative
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Full-featured online storefront with product catalog, shopping
                      cart, secure checkout, and order management system for
                      creative merchandise.
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="neutral" icon={null}>
                      React
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      JavaScript
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      Figma
                    </Badge>
                    <Badge variant="neutral" icon={null}>
                      CSS
                    </Badge>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      Ramen Creative
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      2023
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex grow shrink-0 basis-0 items-start" />
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[1280px] flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-heading-2 font-heading-2 text-[#2c2c2cff]">
              Recommendations
            </span>
            <span className="text-body font-body text-subtext-color">
              Kind words from people I&#39;ve collaborated with.
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-3">
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
        <div className="flex w-full max-w-[1280px] flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-heading-2 font-heading-2 text-[#2c2c2cff]">
              Creative Outputs
            </span>
            <span className="text-body font-body text-subtext-color">
              Writing, speaking, and sharing what I learn.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-full items-center gap-6 rounded-xl border border-solid border-neutral-100 bg-white px-6 py-6 transition-colors hover:border-teal-200">
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
            <div className="flex w-full items-center gap-6 rounded-xl border border-solid border-neutral-100 bg-white px-6 py-6 transition-colors hover:border-teal-200">
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
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
