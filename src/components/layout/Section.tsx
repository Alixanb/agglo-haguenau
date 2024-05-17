import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";
import { Nav, NavProps } from "./";

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
const Section: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...props
}) => {
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
const SubSection: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(className, "flex flex-col gap-2")} {...props}>
      {children}
    </div>
  );
};

export interface MainProps
  extends React.HTMLAttributes<HTMLElement>,
    NavProps,
    ContainerProps {}

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
const Main: React.FC<MainProps> = ({
  isRoot = false,
  active,
  className,
  children,
  ...props
}) => {
  return (
    <>
      <Container isRoot={isRoot}>
        <main
          className={cn(className, "flex flex-col gap-12 pb-20")}
          {...props}
        >
          {children}
        </main>
      </Container>
      <Nav active={active} />
    </>
  );
};

interface ContainerProps extends PropsWithChildren {
  isRoot?: boolean;
}

function Container({ isRoot = false, children }: Readonly<ContainerProps>) {
  const mt = isRoot ? "mt-8" : "mt-16";

  return <div className={cn("m-5 mb-8 ", mt)}>{children}</div>;
}

export { Container, Main, Section, SubSection };
export type { ContainerProps };
