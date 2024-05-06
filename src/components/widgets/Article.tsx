import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { P } from "../typos";
import Image from "next/image";

const articleVariants = cva("relative flex flex-col gap-2 pb-4", {
  variants: {
    variant: {
      default: "",
      border: "border border-slate-200 p-1",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const articleImageVariants = cva("relative w-full overflow-hidden ", {
  variants: {
    imageSize: {
      md: "rounded-[2px] h-24",
      lg: "rounded-[2px] h-32",
    },
  },
  defaultVariants: {
    imageSize: "md",
  },
});

interface ArticleProps
  extends VariantProps<typeof articleVariants>,
    VariantProps<typeof articleImageVariants>,
    React.HTMLAttributes<HTMLDivElement> {
  src: string;
  title: string;
  tags: Array<string | number>;
}

/*
 *
 *
 */
const Article = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>,
  ArticleProps
>(({ className, variant, imageSize, src, title, tags, ...props }, ref) => (
  <article className={cn(articleVariants({ className, variant }))} {...props}>
    <div
      className={cn(
        articleImageVariants({ imageSize }),
        "relative w-full overflow-hidden rounded-md"
      )}
    >
      <Image src={src} alt="Image" layout="fill" objectFit="cover" />
    </div>
    <h3 className="text-lg w-full font-semibold text-black text-ellipsis overflow-hidden whitespace-nowrap tracking-tigt scroll-m-20">
      {title}
    </h3>
    {tags && (
      <div className="flex gap-1 text-sm font-medium leading-none text-slate-400">
        {tags.map((item, i) => (
          <React.Fragment key={i}>
            <p>{item}</p>
            {i !== tags.length - 1 ? <span>&bull;</span> : null}
          </React.Fragment>
        ))}
      </div>
    )}
  </article>
));

Article.displayName = "Article";
export { Article, articleVariants };
