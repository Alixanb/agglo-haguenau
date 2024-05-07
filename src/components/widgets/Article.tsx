import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { P } from "../typos";
import Image from "next/image";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

// TailwindCSS class variants for the article element
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

// TailwindCSS class variants for the image element
const articleImageVariants = cva(
  "relative w-full overflow-hidden relative w-full overflow-hidden rounded-md",
  {
    variants: {
      imageSize: {
        md: "rounded-md h-24",
        lg: "rounded-md h-32",
      },
    },
    defaultVariants: {
      imageSize: "md",
    },
  }
);

interface ArticleProps
  extends VariantProps<typeof articleVariants>,
    VariantProps<typeof articleImageVariants>,
    React.HTMLAttributes<HTMLDivElement> {
  href: Url;
  src: string;
  title: string;
  tags?: Array<string | number>;
}

/**
 * Article Component
 *
 * Renders an article card with an image, title, and optional tags.
 *
 * @param className Additional CSS classes for the article element.
 * @param variant Variant of the article card (e.g., default, border).
 * @param imageSize Size of the image within the card (e.g., md, lg).
 * @param src Source URL for the image.
 * @param title Title of the article card.
 * @param tags Array of tags to display on the card.
 * @param props Additional HTML attributes to be passed to the article element.
 * @returns JSX.Element or React.HTMLAttributes<HTMLDivElement>.
 */
const Article = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>,
  ArticleProps
>(
  (
    {
      className,
      variant,
      imageSize,
      href,
      src,
      title,
      tags = ["Aucun tag"],
      ...props
    },
    ref
  ) => (
    <article className={cn(articleVariants({ className, variant }))} {...props}>
      <Link href={href}>
        <div className={cn(articleImageVariants({ imageSize }))}>
          <Image src={src} alt="Image" layout="fill" objectFit="cover" />
        </div>
        <h3 className="text-lg w-full font-semibold text-black text-ellipsis overflow-hidden whitespace-nowrap tracking-tigt scroll-m-20">
          {title}
        </h3>
        {tags && (
          <div className="flex gap-1 text-sm font-medium leading-none text-slate-400 pt-1">
            {tags.map((item, i) => (
              <React.Fragment key={i}>
                <p>{item}</p>
                {/* Render a &bull; char after the tag if it's not the last tag */}
                {i !== tags.length - 1 && <span>&bull;</span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </Link>
    </article>
  )
);
Article.displayName = "Article";

// TailwindCSS class variants for the article element
const articleBannerVariants = cva("relative flex flex-col gap-2 pb-4", {
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

interface ArticleBannerProps
  extends VariantProps<typeof articleVariants>,
    VariantProps<typeof articleImageVariants>,
    React.HTMLAttributes<HTMLDivElement> {
  href: Url;
  src: string;
  tags?: Array<string | number>;
}

const ArticleBanner = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>,
  ArticleBannerProps
>(
  (
    {
      className,
      variant,
      imageSize,
      href,
      src,
      title,
      tags = ["Aucun tag"],
      ...props
    },
    ref
  ) => (
    <article
      className={cn(articleBannerVariants({ className, variant }))}
      {...props}
    >
      <div className="h-36 rounded-2xl relative overflow-hidden flex items-end">
        <Image src={src} alt="Image" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="z-30 relative p-4">
          <h3 className="text-lg w-full font-semibold text-white text-ellipsis overflow-hidden whitespace-nowrap tracking-tigt scroll-m-20">
            {title}
          </h3>
          {tags && (
            <div className="flex gap-1 text-sm font-medium leading-none text-slate-200 pt-1">
              {tags.map((item, i) => (
                <React.Fragment key={i}>
                  <p>{item}</p>
                  {/* Render a &bull; char after the tag if it's not the last tag */}
                  {i !== tags.length - 1 && <span>&bull;</span>}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
);
ArticleBanner.displayName = "ArticleBanner";

export { Article, ArticleBanner, articleVariants };
