"use client";
/*
 * Documentation:
 * Footer — https://app.subframe.com/866db6c0dc55/library?component=Footer_a2b3f031-4564-4995-b37e-f22ac87a8c6e
 */

import React from "react";
import * as SubframeUtils from "../utils";

interface FooterRootProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  socialLinks?: React.ReactNode;
  copyright?: React.ReactNode;
  className?: string;
}

const FooterRoot = React.forwardRef<HTMLDivElement, FooterRootProps>(
  function FooterRoot(
    {
      heading,
      description,
      primaryAction,
      secondaryAction,
      socialLinks,
      copyright,
      className,
      ...otherProps
    }: FooterRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full flex-col items-center justify-center border-t border-solid border-neutral-100 bg-white px-6 py-24",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-12 text-center">
          <div className="flex flex-col items-center gap-4">
            {heading ? (
              <span className="text-heading-2 font-heading-2 text-[#2c2c2cff]">
                {heading}
              </span>
            ) : null}
            {description ? (
              <span className="max-w-[576px] text-body font-body text-subtext-color">
                {description}
              </span>
            ) : null}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {primaryAction ? (
              <div className="flex items-center gap-4">{primaryAction}</div>
            ) : null}
            {secondaryAction ? (
              <div className="flex items-center gap-4">{secondaryAction}</div>
            ) : null}
          </div>
          <div className="flex flex-col items-center gap-6 pt-12">
            {socialLinks ? (
              <div className="flex items-center gap-6">{socialLinks}</div>
            ) : null}
            {copyright ? (
              <span className="text-caption font-caption text-neutral-400">
                {copyright}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
);

export const Footer = FooterRoot;
