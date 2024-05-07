import { cn } from "@/lib/utils";
import React from "react";
import { Nav } from "./";

/**
 * Section Component
 *
 * Renders a section with flexible layout and optional additional HTML attributes.
 *
 * @param className Additional CSS classes for the section element.
 * @param children Child elements to be rendered inside the section.
 * @param props Additional HTML attributes to be passed to the section element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLElement>.
 */
const Section: React.FC<React.HTMLAttributes<HTMLElement>> = (
  { className, children },
  ...props
) => {
  return (
    <section className={cn(className, "flex flex-col gap-4")} {...props}>
      {children}
    </section>
  );
};

/**
 * SubSection Component
 *
 * Renders a subsection with flexible layout and optional additional HTML attributes.
 *
 * @param className Additional CSS classes for the div element.
 * @param children Child elements to be rendered inside the subsection.
 * @param props Additional HTML attributes to be passed to the div element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLElement>.
 */
const SubSection: React.FC<React.HTMLAttributes<HTMLElement>> = (
  { className, children },
  ...props
) => {
  return (
    <div className={cn(className, "flex flex-col gap-2")} {...props}>
      {children}
    </div>
  );
};

/**
 * Main Component
 *
 * Renders a main content area with flexible layout and optional additional HTML attributes.
 *
 * @param className Additional CSS classes for the main element.
 * @param children Child elements to be rendered inside the main content area.
 * @param props Additional HTML attributes to be passed to the main element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLElement>.
 */
const Main: React.FC<React.HTMLAttributes<HTMLElement>> = (
  { className, children },
  ...props
) => {
  return (
    <main className={cn(className, "flex flex-col gap-12 pb-20")} {...props}>
      <Nav active="home" />
      {children}
    </main>
  );
};

export { Section, SubSection, Main };
