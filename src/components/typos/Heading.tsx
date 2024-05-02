import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import React from "react";

export const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h1
      className={cn(
        className,
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h2
      className={cn(
        className,
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h3
      className={cn(
        className,
        "scroll-m-20 text-2xl font-semibold tracking-tight"
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export const H4: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h4
      className={cn(
        className,
        "scroll-m-20 text-xl font-semibold tracking-tight"
      )}
      {...props}
    >
      {children}
    </h4>
  );
};
