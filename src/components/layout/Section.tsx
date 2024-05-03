import { cn } from "@/lib/utils";
import React from "react";

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

const Main: React.FC<React.HTMLAttributes<HTMLElement>> = (
  { className, children },
  ...props
) => {
  return (
    <main className={cn(className, "flex flex-col gap-12")} {...props}>
      {children}
    </main>
  );
};

export { Section, SubSection, Main };
