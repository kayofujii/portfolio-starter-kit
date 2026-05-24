"use client";

import React from "react";
import Link from "next/link";
import { Header as UiHeader } from "@/ui/components/Header";
import { Button } from "@/ui/components/Button";
import { Drawer } from "@/ui/components/Drawer";
import { IconButton } from "@/ui/components/IconButton";
import { FeatherMenu } from "@subframe/core";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);
  const linkClass = (href: string) =>
    `text-body-bold font-body-bold transition-colors hover:text-teal-600 ${
      pathname === href ? "text-[#2c2c2cff]" : "text-subtext-color"
    }`;

  return (
    <>
      <UiHeader
        logo={
          <Link href="/" className="block">
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
              href="/"
              className={linkClass("/")}
            >
              Design
            </Link>
            <Link
              href="/development"
              className={linkClass("/development")}
            >
              Dev
            </Link>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link href="https://drive.google.com/file/d/1S8YAI-QvWzMSxtb6_pej-KB_lnNSscsM/view?usp=sharing" className="text-body-bold font-body-bold transition-colors hover:text-teal-600 text-subtext-color">
              Resume
            </Link>
          </>
        }
        mobileMenuButton={
          <IconButton icon={<FeatherMenu />} onClick={() => setMenuOpen(true)} />
        }
      />

      <Drawer open={menuOpen} onOpenChange={setMenuOpen}>
        <Drawer.Content className="w-[80vw] max-w-[360px] px-6 py-8">
          <div className="flex w-full flex-col gap-6">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-heading-2 font-heading-2 text-default-font"
            >
              Home
            </Link>
            <Link
              href="/development"
              onClick={closeMenu}
              className="text-heading-2 font-heading-2 text-default-font"
            >
              Dev
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-heading-2 font-heading-2 text-default-font"
            >
              About
            </Link>
            <Link href="mailto:kayofujii1025@gmail.com">
              <Button
                className="w-full bg-teal-600 hover:bg-teal-700"
                variant="brand-primary"
                onClick={closeMenu}
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </Drawer.Content>
      </Drawer>
    </>
  );
}
