"use client";

import Link from "next/link";

function ContactPill({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="inline-flex items-center rounded-full border border-[#0d7478] px-6 py-3 text-[1rem] leading-none text-[#0d7478] transition-colors hover:bg-[#eef8f8]"
    >
      {label}
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-[#efebe6] bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 py-20 text-center md:px-10">
        <div className="flex max-w-[960px] flex-col items-center gap-5">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.75rem] font-bold tracking-normal text-[#2d2d2d] md:text-[2.3rem]">
            Contact
          </h2>
          <p className="text-[1.35rem] leading-[1.5] text-[#202020] md:text-[1.5rem]">
            Feel free to reach out to me at{" "}
            <a
              href="mailto:kayofujii1025@gmail.com"
              className="text-[#1677ff] underline underline-offset-4"
            >
              kayofujii1025@gmail.com
            </a>
            .
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-5">
            <ContactPill
              href="https://www.linkedin.com/in/kayo-fujii/"
              label="LinkedIn"
            />
            <ContactPill
              href="https://github.com/kayofujii"
              label="GitHub"
            />
            <ContactPill
              href="https://drive.google.com/file/d/1S8YAI-QvWzMSxtb6_pej-KB_lnNSscsM/view?usp=sharing"
              label="Resume"
            />
            <ContactPill
              href="https://medium.com/@kayosamu1025"
              label="Medium"
            />
          </div>
        </div>

        <div className="mt-20 flex w-full max-w-[960px] flex-col items-center gap-8">
          <Link href="/" className="block">
            <img
              src="/images/logo.svg"
              alt="Kayo Fujii"
              className="h-14 w-14"
            />
          </Link>
          <div className="h-px w-full bg-[#e8e8e8]" />
          <p className="text-[0.95rem] text-[#333333]">
            {new Date().getFullYear()} © Kayo Fujii All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
