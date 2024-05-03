import * as React from "react";
import { H1 } from "../typos";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const basicHeaderVariants = cva("flex gap-4", {
  variants: { variant: { default: "" } },
  defaultVariants: {
    variant: "default",
  },
});

const BasicHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof basicHeaderVariants>
>(({ className, variant, children, ...props }, ref) => {
  let text: string | undefined;
  let LeadingButtonIcon: React.ReactNode | undefined;

  React.Children.forEach(children, (child) => {
    if (typeof child !== "string" && React.isValidElement(child)) {
      LeadingButtonIcon = child;
    } else if (typeof child === "string") {
      text = child;
    }
  });

  return (
    <div
      ref={ref}
      className={cn(basicHeaderVariants({ variant, className }))}
      {...props}
    >
      {LeadingButtonIcon}
      <H1>{text}</H1>
    </div>
  );
});

BasicHeader.displayName = "BasicHeader";
export { BasicHeader, basicHeaderVariants };
