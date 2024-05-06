import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

// Variants for the paragraph component
const paragraphVariants = cva("text-start", {
  variants: {
    variant: {
      default: "leading-7",
      medium: "font-medium",
      paragraph: "leading-7 [&:not(:first-child)]:mt-6",
      lead: "text-xl text-muted-foreground",
      muted: "text-sm text-muted-foreground",
    },
    defaultVariants: {
      variant: "default",
    },
  },
});

/**
 * P Component
 *
 * Renders a paragraph element with customizable styling.
 *
 * @param className Additional CSS classes for the paragraph element.
 * @param children The content to be rendered within the paragraph element.
 * @param variant Variant style for the paragraph element.
 * @param props Additional HTML attributes to be passed to the paragraph element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLParagraphElement>.
 */
const P = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> &
    VariantProps<typeof paragraphVariants>
>(({ className, children, variant, ...props }) => {
  return (
    <p className={cn(paragraphVariants({ variant, className }))} {...props}>
      {children}
    </p>
  );
});

P.displayName = "P";
export { P, paragraphVariants };
