"use client";

import { Footer as UiFooter } from "@/ui/components/Footer";
import { Button } from "@/ui/components/Button";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherMail } from "@subframe/core";

export default function SiteFooter() {
  return (
    <UiFooter
      heading="Let's build something great together."
      description={
        "I'm currently open to new opportunities and interesting projects.\n          Whether you have a question or just want to say hi, I'll try my\n          best to get back to you!"
      }
      primaryAction={
        <Button
          className="bg-teal-600 hover:bg-teal-700"
          size="large"
          icon={<FeatherMail />}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        >
          alex@example.com
        </Button>
      }
      secondaryAction={
        <Button
          variant="neutral-secondary"
          size="large"
          icon={<FeatherLinkedin />}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        >
          LinkedIn
        </Button>
      }
      socialLinks={
        <>
          <span className="text-body font-body text-subtext-color hover:text-teal-600">
            GitHub
          </span>
          <span className="text-body font-body text-subtext-color hover:text-teal-600">
            Twitter
          </span>
          <span className="text-body font-body text-subtext-color hover:text-teal-600">
            Dribbble
          </span>
          <span className="text-body font-body text-subtext-color hover:text-teal-600">
            Instagram
          </span>
        </>
      }
      copyright="© 2024 Alex Developer. Designed with Subframe."
    />
  );
}
