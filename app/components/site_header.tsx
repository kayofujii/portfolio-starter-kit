"use client";

import React from "react";
import Link from "next/link";
import { Header as UiHeader } from "@/ui/components/Header";
import { Button } from "@/ui/components/Button";
import { Drawer } from "@/ui/components/Drawer";
import { IconButton } from "@/ui/components/IconButton";
import { FeatherMenu } from "@subframe/core";
import { usePathname } from "next/navigation";
import { localePath, type Locale, ui } from "app/lib/i18n";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith('/ja') ? 'ja' : 'en';
  const copy = ui[locale];
  const pathWithoutLocale = pathname.replace(/^\/(en|ja)(?=\/|$)/, '') || '/';
  const switchLocale: Locale = locale === 'en' ? 'ja' : 'en';

  const closeMenu = () => setMenuOpen(false);
  const linkClass = (href: string) =>
    `text-body-bold font-body-bold transition-colors hover:text-teal-600 ${
      pathname === href ? "text-[#2c2c2cff]" : "text-subtext-color"
    }`;

  return (
    <>
      <UiHeader
        logo={
          <Link href={localePath(locale)} className="block">
            <img
              src="/images/logo.svg"
              alt="K.F logo"
              className="h-8 w-auto"
            />
          </Link>
        }         
        navigationLinks={
          <>
            <Link
              href={localePath(locale)}
              className={linkClass(localePath(locale))}
            >
              {copy.design}
            </Link>
            <Link
              href={localePath(locale, "/work")}
              className={linkClass(localePath(locale, "/work"))}
            >
              {copy.development}
            </Link>
            <Link href={localePath(locale, "/about")} className={linkClass(localePath(locale, "/about"))}>
              {copy.about}
            </Link>
            {locale === 'en' && (
              <Link href="https://drive.google.com/file/d/1S8YAI-QvWzMSxtb6_pej-KB_lnNSscsM/view?usp=sharing" className="text-body-bold font-body-bold transition-colors hover:text-teal-600 text-subtext-color">
                {copy.resume}
              </Link>
            )}
            <Link href={localePath(switchLocale, pathWithoutLocale)} className="text-body-bold font-body-bold text-subtext-color transition-colors hover:text-teal-600">
              {switchLocale === 'ja' ? '日本語' : 'EN'}
            </Link>
          </>
        }
        mobileMenuButton={
          <IconButton icon={<FeatherMenu />} onClick={() => setMenuOpen(true)} />
        }
      />

      <Drawer open={menuOpen} onOpenChange={setMenuOpen} className="z-[20]">
        <Drawer.Content className="w-[80vw] max-w-[360px] px-6 py-8">
          <div className="flex w-full flex-col gap-6">
            <Link
              href={localePath(locale)}
              onClick={closeMenu}
              className="text-[#2c2c2cff]"
            >
              {copy.design}
            </Link>
            <Link
              href={localePath(locale, "/work")}
              onClick={closeMenu}
              className="text-[#2c2c2cff]"
            >
              {copy.development}
            </Link>
            <Link
              href={localePath(locale, "/about")}
              onClick={closeMenu}
              className="text-[#2c2c2cff]"
            >
              {copy.about}
            </Link>
            {locale === 'en' && (
              <Link
                href="https://drive.google.com/file/d/1S8YAI-QvWzMSxtb6_pej-KB_lnNSscsM/view?usp=sharing"
                onClick={closeMenu}
                className="text-[#2c2c2cff]"
              >
                {copy.resume}
              </Link>
            )}
            <Link href={localePath(switchLocale, pathWithoutLocale)} onClick={closeMenu} className="text-[#2c2c2cff]">
              {switchLocale === 'ja' ? '日本語' : 'EN'}
            </Link>
          </div>
        </Drawer.Content>
      </Drawer>
    </>
  );
}
