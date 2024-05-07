import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const gridVariant = cva("grid grid-flow-row  wrap", {
  variants: {
    size: {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
    },
    cols: {
      "2": "grid-cols-2",
      "4": "grid-cols-4",
      "6": "grid-cols-6",
    },
  },
  defaultVariants: {
    size: "md",
    cols: "2",
  },
});

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
const Grid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof gridVariant>
>(({ children, cols, size, ...props }, ref) => (
  <div className={gridVariant({ cols, size })} {...props} ref={ref}>
    {children}
  </div>
));
Grid.displayName = "Grid";

const gridSpanVariant = cva("", {
  variants: {
    size: {
      "2": "col-span-2",
      "3": "col-span-3",
      "4": "col-span-4",
      "5": "col-span-5",
      "6": "col-span-6",
    },
  },
  defaultVariants: {
    size: "2",
  },
});

/**
 * GridSpan Component
 *
 * A component that spans multiple columns in a grid layout.
 *
 * @param size - The size variant of the grid span.
 * @param props - Additional HTML attributes and variant props.
 * @param ref - Forwarded ref to the underlying div element.
 *
 * @returns A div element representing the grid span.
 */
const GridSpan = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof gridSpanVariant>
>(({ children, size, ...props }, ref) => (
  <div className={cn(gridSpanVariant({ size }))}>{children}</div>
));
GridSpan.displayName = "GridSpan";

export { Grid, gridVariant, GridSpan };
