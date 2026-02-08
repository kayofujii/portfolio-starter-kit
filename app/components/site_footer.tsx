"use client";

import { Footer as UiFooter } from "@/ui/components/Footer";
import { Button } from "@/ui/components/Button";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherGithub } from "@subframe/core";
import { FeatherMail } from "@subframe/core";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <UiFooter
      heading="Feel free to reach out to me :)"
      description={
        "I'm currently open to new opportunities and interesting projects.\n          Whether you have a question or just want to say hi, I'll try my\n          best to get back to you!"
      }
      primaryAction={
        <Link href="mailto:kayofujii1025@gmail.com">
          <Button
            className="bg-teal-600 hover:bg-teal-700"
            variant="brand-primary"
            size="large"
          >
            kayofujii1025@gmail.com
          </Button>
        </Link>
      }
      secondaryAction={
        <>
          <Button
            variant="neutral-secondary"
            size="large"
            icon={<FeatherGithub />}
            onClick={() =>
              window.open("https://github.com/kayofujii", "_blank", "noreferrer")
            }
          >
            Github
          </Button>
          <Button
            variant="neutral-secondary"
            size="large"
            icon={<FeatherLinkedin />}
            onClick={() =>
              window.open("https://www.linkedin.com/in/kayo-fujii/", "_blank", "noreferrer")
            }
          >
            LinkedIn
          </Button>
        </>
      }
      copyright="© 2026 Kayo Fujii. Developed with Next.js"
    />
  );
}
