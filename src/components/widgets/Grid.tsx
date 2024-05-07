import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const gridVariant = cva("grid grid-flow-row gap-4 wrap", {
  variants: {
    variant: {
      2: "grid-cols-2",
      4: "grid-cols-4",
      6: "grid-cols-6",
    },
  },
  defaultVariants: {
    variant: 2,
  },
});

interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariant> {
  cols?: number;
}

/**
 * Grid Component
 *
 * A reusable grid component that accepts children elements
 * and applies a specific variant of styling to its layout.
 *
 * @param children - The elements to be placed within the grid.
 * @param variant - The variant of the grid layout to be applied.
 *                  Default value is 2.
 *
 * @returns A div element representing the grid with applied styling.
 */
const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ children, variant = 2 }) => (
    <div className={gridVariant({ variant })}>{children}</div>
  )
);
Grid.displayName = "Grid";

export { Grid };
