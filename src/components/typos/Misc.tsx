import { cn } from "@/lib/utils";
import React from "react";

/**
 * BlockQuote Component
 *
 * Renders a blockquote element used for quotation.
 *
 * @param className Additional CSS overload classes for the element.
 * @param children The content to be rendered within the element.
 * @param props Additional HTML attributes to be passed to the element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLQuoteElement>.
 */
const BlockQuote: React.FC<React.HTMLAttributes<HTMLQuoteElement>> = ({
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

/**
 * Code Component
 *
 * Renders a code element to show code in mono lettering
 *
 * @param className Additional CSS overload classes for the element.
 * @param children The content to be rendered within the element.
 * @param props Additional HTML attributes to be passed to the element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLElement>.
 */
const Code: React.FC<React.HTMLAttributes<HTMLElement>> = ({
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

/**
 * Large Component
 *
 * Renders a div intricated text of type large to be impactfull
 *
 * @param className Additional CSS overload classes for the element.
 * @param children The content to be rendered within the element.
 * @param props Additional HTML attributes to be passed to the element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLDivElement>.
 */
const Large: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
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

/**
 * Small Component
 *
 * Renders a small text, wich have low SEO weight
 *
 * @param className Additional CSS overload classes for the element.
 * @param children The content to be rendered within the element.
 * @param props Additional HTML attributes to be passed to the element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLElement>.
 */
const Small: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <small
      className={cn(
        "text-sm font-medium leading-none text-slate-600",
        className
      )}
      {...props}
    >
      {children}
    </small>
  );
};

export { BlockQuote, Code, Large, Small };
