import { cn } from "@/lib/utils";
import React from "react";

export const Hr: React.FC<React.HTMLAttributes<HTMLHRElement>> = ({
  className,
  ...props
}) => {
  return (
    <hr
      className={cn("my-3 w-full h-[2px] bg-border border-hidden", className)}
      {...props}
    />
  );
};
