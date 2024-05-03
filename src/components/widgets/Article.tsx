import React from "react";
import { P } from "../typos";

/**
 *
 * Articl Card
 *
 * Render an article card that have content in it. To Add an image or other content to the card, you must put it has a children
 *
 * @param children The content inside the ArticleCard component
 * @param title Title of the card
 * @param tags Array of the tags that you want to display on your card
 * @returns JSX.Element
 */

export default function Article({
  children,
  title,
  tags = [],
  imageHeight = 100,
  border = false,
  misc = "",
}: {
  children: React.ReactNode;
  title: string;
  tags?: string[];
  imageHeight?: number;
  border?: boolean;
  misc?: string;
}) {
  return (
    <article
      className={`${
        border ? "border border-slate-200 p-1" : ""
      }  relative flex flex-col gap-2 pb-4`}
    >
      <div
        className={`relative h-[${imageHeight}px] w-full overflow-hidden rounded-${
          border ? "[2px]" : "md"
        }`}
      >
        {children}
      </div>
      <h3 className="text-lg w-full font-semibold  text-black text-ellipsis overflow-hidden whitespace-nowrap tracking-tigt scroll-m-20">
        {title}
      </h3>
      <div className="flex gap-1 text-sm font-medium leading-none text-slate-400">
        {tags.map((item, i) => (
          <React.Fragment key={i}>
            <p>{item}</p>
            {i !== tags.length - 1 ? <span>&bull;</span> : null}
          </React.Fragment>
        ))}
      </div>
      {misc && <P className="text-blue-600">{misc}</P>}
    </article>
  );
}
