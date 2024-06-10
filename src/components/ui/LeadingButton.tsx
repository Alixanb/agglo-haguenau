import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ChevronRight, SquareArrowOutUpRight } from "lucide-react";
import React from "react";
import { P } from "../typos";

// Buton classes
const leadingButtonVariants = cva(
  "flex gap-3 rounded-md items-center bg-card",
  {
    variants: {
      variant: {
        default: "border border-border p-1 ",
        dark: "border border-border p-1",
        buttonOnly: "",
        active: "bg-blue-100 p-1",
      },
      size: {
        fit: "size-fit",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "full",
    },
  }
);

//Icon classes
const leadingButtonIconVariants = cva("rounded-sm p-2", {
  variants: {
    accent: {
      slate:
        "bg-slate-100 stroke-slate-600 dark:bg-slate-600 dark:stroke-slate-100",
      dark: "bg-slate-600 stroke-slate-100 dark:bg-slate-600 dark:stroke-slate-100",
      gray: "bg-gray-100 stroke-gray-600 dark:bg-gray-600 dark:stroke-gray-100",
      black: "bg-black stroke-gray-400 dark:bg-gray-400 dark:stroke-black",
      blue: "bg-blue-100 stroke-blue-600 dark:bg-blue-600 dark:stroke-blue-100",
      red: "bg-red-100 stroke-red-600 dark:bg-red-600 dark:stroke-red-100",
      sky: "bg-sky-100 stroke-sky-600 dark:bg-sky-600 dark:stroke-sky-100",
      yellow:
        "bg-yellow-100 stroke-yellow-600 dark:bg-yellow-600 dark:stroke-yellow-100",
      orange:
        "bg-orange-100 stroke-orange-600 dark:bg-orange-600 dark:stroke-orange-100",
      green:
        "bg-green-100 stroke-green-600 dark:bg-green-600 dark:stroke-green-100",
      pink: "bg-pink-100 stroke-pink-600 dark:bg-pink-600 dark:stroke-pink-100",
      lime: "bg-lime-100 stroke-lime-600 dark:bg-lime-600 dark:stroke-lime-100",
      purple:
        "bg-purple-100 stroke-purple-600 dark:bg-purple-600 dark:stroke-purple-100",
      primary: "bg-primary-foreground  stroke-primary ",
    },
  },
  defaultVariants: {
    accent: "blue",
  },
});

/**
 * Test if the given element is a valid React Element
 *
 * @param child ELement that will be tested
 * @returns boolean of weather or not the element given is a React ValidElement
 */
const testButton = (child: {} | null | undefined) => {
  if (React.isValidElement(child)) {
    return true;
  } else {
    throw new Error(
      'Error ! You must pass an icon to the component "Leading Button"'
    );
  }
};

interface LeadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof leadingButtonVariants>,
    VariantProps<typeof leadingButtonIconVariants> {
  src?: string;
  link?: "default" | "out" | "next" | null | undefined;
  accentClass?: string;
}

/**
 * LeadingButton Component
 *
 * Renders a button with a colored and styled icon.
 *
 * @param className Additional CSS classes for the button element.
 * @param variant Variant of the button (e.g., default, dark, active).
 * @param size Size of the button (e.g., default, full).
 * @param accent Color of the button variant (e.g., slate, dark, gray).
 * @param children Child elements to be rendered inside the button. Must be a LucideReact SVG And a text
 * @param link Type of link associated with the button (e.g., default, out, next).
 * @param src Source URL for the button.
 * @param props Additional HTML attributes to be passed to the button element.
 * @returns A button with a styled icon.
 * @todo src, if link the it's a link, or it is a button
 */
const LeadingButton: React.FC<LeadingButtonProps> = ({
  className,
  variant,
  size,
  accent,
  children,
  link,
  src,
  accentClass,
  ...props
}) => {
  const text = React.Children.toArray(children).find(
    (child) => typeof child === "string"
  );

  typeof text === "undefined" ? (variant = "buttonOnly") : null;

  const icon = React.Children.toArray(children).find((child) =>
    testButton(child)
  ) as React.ReactElement<any, string>;

  return (
    <button
      className={cn(leadingButtonVariants({ variant, size, className }))}
      {...props}
    >
      <span className={cn(leadingButtonIconVariants({ accent }), accentClass)}>
        {React.cloneElement(icon, {
          stroke: "default",
        })}
      </span>
      {text && (
        <P
          className={
            !link
              ? "text-sm h-fit font-medium text-ellipsis overflow-hidden whitespace-nowrap"
              : "text-sm font-medium h-fit text-ellipsis overflow-hidden whitespace-nowrap w-full text-start"
          }
        >
          {text}
        </P>
      )}
      {link === "out" && (
        <SquareArrowOutUpRight
          className="stroke-slate-600 w-16"
          stroke="default"
          size={20}
        />
      )}
      {link === "next" && (
        <ChevronRight className="stroke-slate-600" stroke="default" size={20} />
      )}
    </button>
  );
};

export { LeadingButton, leadingButtonIconVariants, leadingButtonVariants };
