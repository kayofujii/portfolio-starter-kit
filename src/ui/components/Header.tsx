"use client";
/*
 * Documentation:
 * Header — https://app.subframe.com/866db6c0dc55/library?component=Header_432b8293-a93a-4fbc-9c3f-14596d33329b
 */

import React from "react";
import * as SubframeUtils from "../utils";

interface HeaderRootProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode;
  navigationLinks?: React.ReactNode;
  ctaButton?: React.ReactNode;
  mobileMenuButton?: React.ReactNode;
  className?: string;
}

const HeaderRoot = React.forwardRef<HTMLDivElement, HeaderRootProps>(
  function HeaderRoot(
    {
      logo,
      navigationLinks,
      ctaButton,
      mobileMenuButton,
      className,
      ...otherProps
    }: HeaderRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full flex-col items-center justify-center border-b border-solid border-neutral-100 bg-white px-6 py-4 sticky top-0 z-50",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full max-w-[1280px] items-center justify-between">
          {logo ? <div>{logo}</div> : null}
          <div className="hidden items-center gap-8 md:flex">
            {navigationLinks ? (
              <div className="flex items-center gap-8">{navigationLinks}</div>
            ) : null}
            {ctaButton ? (
              <div className="flex items-center gap-8">{ctaButton}</div>
            ) : null}
          </div>
          <div className="flex items-start md:hidden">
            {mobileMenuButton ? (
              <div className="flex items-start">{mobileMenuButton}</div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
);

export const Header = HeaderRoot;
