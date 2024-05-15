import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Globe, Mail, Phone } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { H1, Small } from "../typos";
import { LeadingButton } from "../ui/LeadingButton";

interface BannerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  src: string;
  subTitle?: string;
}

const BannerHeader: React.FC<BannerHeaderProps> = ({
  title,
  src,
  className,
  subTitle = "Bienvenue à",
  ...props
}) => {
  return (
    <header
      className={cn("relative w-full h-64 p-5 flex items-end", className)}
      {...props}
    >
      <Image
        src={src}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />
      <div className="absolute w-full h-1/2 bg-gradient-to-t from-black/50 left-0 bottom-0"></div>
      <div className="flex justify-between w-full items-end z-10">
        <div className="flex flex-col">
          <Small className="text-muted-foreground">{subTitle}</Small>
          <H1 className="text-white">{title}</H1>
        </div>
        <div className="flex gap-2">
          <LeadingButton size="fit" accent="slate">
            <Phone size={20} />
          </LeadingButton>
          <LeadingButton size="fit" accent="blue">
            <Mail size={20} />
          </LeadingButton>
          <LeadingButton size="fit" accent="yellow">
            <Globe size={20} />
          </LeadingButton>
        </div>
      </div>
    </header>
  );
};

const basicHeaderVariants = cva("flex gap-4", {
  variants: { variant: { default: "" } },
  defaultVariants: {
    variant: "default",
  },
});

const BasicHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof basicHeaderVariants>
>(({ className, variant, children, ...props }, ref) => {
  let text: string | undefined;
  let LeadingButtonIcon: React.ReactNode | undefined;

  React.Children.forEach(children, (child) => {
    if (typeof child !== "string" && React.isValidElement(child)) {
      LeadingButtonIcon = child;
    } else if (typeof child === "string") {
      text = child;
    }
  });

  return (
    <div
      ref={ref}
      className={cn(basicHeaderVariants({ variant, className }))}
      {...props}
    >
      {LeadingButtonIcon}
      <H1>{text}</H1>
    </div>
  );
});

BasicHeader.displayName = "BasicHeader";
export { BannerHeader, BasicHeader, basicHeaderVariants };
