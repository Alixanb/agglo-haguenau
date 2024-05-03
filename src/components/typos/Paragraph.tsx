import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const paragraphVariants = cva("", {
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
