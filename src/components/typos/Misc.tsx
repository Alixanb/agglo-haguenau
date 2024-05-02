import { cn } from "@/lib/utils";
import React from "react";

export const BlockQuote: React.FC<React.HTMLAttributes<HTMLQuoteElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <blockquote
      className={cn(className, "mt-6 border-l-2 pl-6 italic")}
      {...props}
    >
      {children}
    </blockquote>
  );
};

export const Code: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <code
      className={cn(
        className,
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      )}
      {...props}
    >
      {children}
    </code>
  );
};

export const Large: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(className, "text-lg font-semibold")} {...props}>
      {children}
    </div>
  );
};

export const Small: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <small
      className={cn(className, "text-sm font-medium leading-none")}
      {...props}
    >
      {children}
    </small>
  );
};
