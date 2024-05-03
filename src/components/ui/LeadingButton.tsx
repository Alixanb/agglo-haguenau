import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { P } from "../typos";

// Buton classes
const leadingButtonVariants = cva(
  "flex gap-4 rounded-md items-center text-slate-600",
  {
    variants: {
      variant: {
        default: "border border-slate-200 p-1 pr-4",
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
  }
);

//Icon classes
const leadingButtonIconVariants = cva("rounded-sm p-2", {
  variants: {
    button: {
      slate: "bg-slate-100 fill-slate-600",
      gray: "bg-gray-100 fill-gray-600",
      black: "bg-black fill-gray-400",
      blue: "bg-blue-100 fill-blue-600",
      red: "bg-red-100 fill-red-600",
      sky: "bg-sky-100 fill-sky-600",
      yellow: "bg-yellow-100 fill-yellow-600",
      orange: "bg-orange-100 fill-orange-600",
      green: "bg-green-100 fill-green-600",
      lime: "bg-lime-100 fill-lime-600",
      purple: "bg-purple-100 fill-purple-600",
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
}

/**
 * A button with a colored and styled icon
 *
 * @param param0 Takes classical HTML tags
 * @todo Make this turnable into a Link Component
 * @returns A button with a styled icon.
 */
const LeadingButton: React.FC<LeadingButtonProps> = (
  { className, variant, size, button, children, ...props },
  src
) => {
  const text = React.Children.toArray(children).find(
    (child) => typeof child === "string"
  );

  typeof text === "undefined" ? (variant = "buttonOnly") : null;

  const icon = React.Children.toArray(children).find((child) =>
    testButton(child)
  );

  return (
    <button
      className={cn(leadingButtonVariants({ variant, size, className }))}
      {...props}
    >
      <span className={cn(leadingButtonIconVariants({ button }))}>{icon}</span>
      {text && <P variant="medium">{text}</P>}
    </button>
  );
};

export { LeadingButton, leadingButtonVariants, leadingButtonIconVariants };
