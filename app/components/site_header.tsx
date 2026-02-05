"use client";

import { Header as UiHeader } from "@/ui/components/Header";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { FeatherMenu } from "@subframe/core";

export default function SiteHeader() {
  return (
    <UiHeader
      logo="alex.dev"
      navigationLinks={
        <>
          <span className="text-body-bold font-body-bold text-[#2c2c2cff] cursor-pointer hover:text-teal-600">
            Home
          </span>
          <span className="text-body-bold font-body-bold text-subtext-color cursor-pointer hover:text-teal-600">
            Work
          </span>
          <span className="text-body-bold font-body-bold text-subtext-color cursor-pointer hover:text-teal-600">
            Resume
          </span>
        </>
      }
      ctaButton={
        <Button
          className="bg-teal-600 hover:bg-teal-700"
          variant="brand-primary"
          onClick={() => {}}
        >
          Contact Me
        </Button>
      }
      mobileMenuButton={
        <IconButton icon={<FeatherMenu />} onClick={() => {}} />
      }
    />
  );
}
