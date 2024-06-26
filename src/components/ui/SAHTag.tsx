import { cva, VariantProps } from "class-variance-authority";
import React from "react";

interface SAHTagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SAHTagVariants> {
  tag: string;
}

const SAHTagVariants = cva("capitalize", {
  variants: { variant: { spectacle: "", evenement: "" } },
  defaultVariants: {
    variant: "spectacle",
  },
});

const SAHTag: React.FC<SAHTagProps> = ({ tag, className, ...props }) => {
  return (
    <div className={SAHTagVariants({ className })} {...props}>
      {tag}
    </div>
  );
};

export default SAHTag;
