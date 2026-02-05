"use client";
/*
 * Documentation:
 * Line Chart — https://app.subframe.com/866db6c0dc55/library?component=Line+Chart_22944dd2-3cdd-42fd-913a-1b11a3c1d16d
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface LineChartRootProps
  extends React.ComponentProps<typeof SubframeCore.LineChart> {
  className?: string;
}

const LineChartRoot = React.forwardRef<
  React.ElementRef<typeof SubframeCore.LineChart>,
  LineChartRootProps
>(function LineChartRoot(
  { className, ...otherProps }: LineChartRootProps,
  ref
) {
  return (
    <SubframeCore.LineChart
      className={SubframeUtils.twClassNames("h-80 w-full", className)}
      ref={ref}
      colors={[
        "#14b8a6",
        "#ccf1ed",
        "#0d9488",
        "#99e2dc",
        "#0f766e",
        "#5ed4cb",
      ]}
      {...otherProps}
    />
  );
});

export const LineChart = LineChartRoot;
