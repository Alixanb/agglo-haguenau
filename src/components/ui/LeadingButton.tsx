import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const leadingButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const testButton = (child: {} | null | undefined) => {
  if (React.isValidElement(child)) {
    return true;
  } else {
    throw new Error(
      'Error ! You must pass an icon to the component "Leading Button"'
    );
  }
};

/**
 * A button with a colored and styled icon
 *
 * @param param0 Takes classical HTML tags
 * @returns A button with a styled icon.
 */
const LeadingButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof leadingButtonVariants>
> = ({ className, variant, children, ...props }) => {
  const text = React.Children.toArray(children).find(
    (child) => typeof child === "string"
  );
  const icon = React.Children.toArray(children).find((child) =>
    testButton(child)
  );

  if (!icon)
    return (
      <button className={className} {...props}>
        <span>{icon}</span>
        {text}
      </button>
    );
};

export default LeadingButton;
