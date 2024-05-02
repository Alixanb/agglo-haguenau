import { cn } from "@/lib/utils";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function ElemGrid({
  children,
  cols = 2,
}: {
  children: React.ReactNode;
  cols?: number;
}) {
  return (
    <div className={twMerge(`grid grid-cols-${cols} grid-flow-row gap-4 wrap`)}>
      {children}
    </div>
  );
}
