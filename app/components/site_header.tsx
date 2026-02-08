"use client";

import React from "react";
import Link from "next/link";
import { Header as UiHeader } from "@/ui/components/Header";
import { Button } from "@/ui/components/Button";
import { Drawer } from "@/ui/components/Drawer";
import { IconButton } from "@/ui/components/IconButton";
import { FeatherMenu } from "@subframe/core";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <UiHeader
        logo={
          <Link
            href="/"
            className="font-heading-3 font-bold text-[#2c2c2cff] hover:text-teal-600"
          >
            K.F
          </Link>
        }          
        navigationLinks={
          <>
            <Link
              href="/"
              className="text-body-bold font-body-bold text-[#2c2c2cff] hover:text-teal-600"
            >
              Home
            </Link>
            <Link
              href="/work"
              className="text-body-bold font-body-bold text-subtext-color hover:text-teal-600"
            >
              Work
            </Link>
            <Link
              href="https://drive.google.com/file/d/1Ka1K6BmBeQjqlC6F5yFB-q1DyjZrM9so/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-body-bold font-body-bold text-subtext-color hover:text-teal-600"
            >
              Resume
            </Link>
          </>
        }
        ctaButton={
          <Link href="mailto:kayofujii1025@gmail.com">
            <Button
              className="bg-teal-600 hover:bg-teal-700"
              variant="brand-primary"
            >
              Contact Me
            </Button>
          </Link>
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
              href="/work"
              onClick={closeMenu}
              className="text-heading-2 font-heading-2 text-default-font"
            >
              Work
            </Link>
            <Link
              href="https://drive.google.com/file/d/1Ka1K6BmBeQjqlC6F5yFB-q1DyjZrM9so/view?usp=sharing"
              onClick={closeMenu}
              className="text-heading-2 font-heading-2 text-default-font"
              target="_blank"
              rel="noreferrer"
            >
              Resume
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
