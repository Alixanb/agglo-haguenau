import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { P } from "../typos";

// Buton classes
const leadingButtonVariants = cva("flex gap-4 rounded-md items-center curre", {
  variants: {
    variant: {
      default: "border border-slate-200 p-1 pr-4",
      dark: "border border-slate-600 p-1 pr-4",
      buttonOnly: "",
      active: "bg-blue-100 p-1 pr-4",
    },
    size: {
      default: "w-fit",
      full: "w-full-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

//Icon classes
const leadingButtonIconVariants = cva("rounded-sm p-2", {
  variants: {
    button: {
      slate: "bg-slate-100 stroke-slate-600",
      dark: "bg-slate-600 stroke-slate-100",
      gray: "bg-gray-100 stroke-gray-600",
      black: "bg-black stroke-gray-400",
      blue: "bg-blue-100 stroke-blue-600",
      red: "bg-red-100 stroke-red-600",
      sky: "bg-sky-100 stroke-sky-600",
      yellow: "bg-yellow-100 stroke-yellow-600",
      orange: "bg-orange-100 stroke-orange-600",
      green: "bg-green-100 stroke-green-600",
      lime: "bg-lime-100 stroke-lime-600",
      purple: "bg-purple-100 stroke-purple-600",
    },
  },
  defaultVariants: {
    button: "blue",
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
}

/**
 * LeadingButton Component
 *
 * Renders a button with a colored and styled icon.
 *
 * @param className Additional CSS classes for the button element.
 * @param variant Variant of the button (e.g., default, dark, active).
 * @param size Size of the button (e.g., default, full).
 * @param button Button variant (e.g., slate, dark, gray).
 * @param children Child elements to be rendered inside the button. Must be a LucideReact SVG And a text
 * @param link Type of link associated with the button (e.g., default, out, next).
 * @param src Source URL for the button.
 * @param props Additional HTML attributes to be passed to the button element.
 * @returns A button with a styled icon.
 */
const LeadingButton: React.FC<LeadingButtonProps> = ({
  className,
  variant,
  size,
  button,
  children,
  link,
  src,
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
      <span className={cn(leadingButtonIconVariants({ button }))}>
        {React.cloneElement(icon, {
          stroke: "default",
        })}
      </span>
      <div className="w-full justify-between">
        {text && <P variant="medium">{text}</P>}
        {link === "out" && true}
      </div>
    </button>
  );
};

export { LeadingButton, leadingButtonVariants, leadingButtonIconVariants };
