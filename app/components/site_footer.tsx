"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, type Locale, ui } from "app/lib/i18n";

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
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith('/ja') ? 'ja' : 'en';
  const copy = ui[locale];

  return (
    <footer className="w-full border-t border-[#efebe6] bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 py-20 text-center md:px-10">
        <div className="flex max-w-[960px] flex-col items-center gap-5">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] font-bold leading-[39.2px] text-[#2d2d2d]">
              {copy.contact}
          </h2>
          <p className="text-[20px] leading-[28px] text-[#3f4948]">
            {copy.contactText}{" "}
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
          <Link href={localePath(locale)} className="block">
            <img
              src="/images/logo.svg"
              alt="Kayo Fujii"
              className="h-14 w-14"
            />
          </Link>
          <div className="h-px w-full bg-[#e8e8e8]" />
          <p className="text-[0.95rem] text-[#333333]">
            {(year ?? "")} © Kayo Fujii All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
