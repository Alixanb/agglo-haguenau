import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import React from "react";

/**
 * H1 Component
 *
 * Renders the main title of the page. There must be only one H1 component per page.
 *
 * @param className Additional CSS overload classes for the element.
 * @param children The content to be rendered within the heading element.
 * @param props Additional HTML attributes to be passed to the heading element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLHeadingElement>.
 */
const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h1
      className={cn(
        className,
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary"
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

/**
 * H2 Component
 *
 * Renders a secondary title or section heading within the page.
 *
 * @param className Additional CSS overload classes for the element.
 * @param children The content to be rendered within the heading element.
 * @param props Additional HTML attributes to be passed to the heading element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLHeadingElement>.
 */
const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h2
      className={cn(
        className,
        "scroll-m-20 text-2xl font-semibold first:mt-0 text-primary"
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

/**
 * H3 Component
 *
 * Renders a subsection title within the page content.
 *
 * @param className Additional CSS overload classes for the element.
 * @param children The content to be rendered within the heading element.
 * @param props Additional HTML attributes to be passed to the heading element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLHeadingElement>.
 */
const H3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h3
      className={cn(className, "scroll-m-20 text-lg font-medium text-primary")}
      {...props}
    >
      {children}
    </h3>
  );
};

/**
 * H4 Component
 *
 * Renders a sub-subsection title within the page content.
 *
 * @param className Additional CSS overload classes for the element.
 * @param children The content to be rendered within the heading element.
 * @param props Additional HTML attributes to be passed to the heading element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLHeadingElement>.
 */
const H4: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h4
      className={cn(
        className,
        "scroll-m-20 text-xl font-semibold tracking-tight text-secondary"
      )}
      {...props}
    >
      {children}
    </h4>
  );
};

export { H1, H2, H3, H4 };
