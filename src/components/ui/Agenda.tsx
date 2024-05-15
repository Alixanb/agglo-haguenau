import Link from "next/link";
import React from "react";
import { H3, Small } from "../typos";
import { ArrowRight, CalendarDays } from "lucide-react";
import SAHTag from "./SAHTag";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AgendaCardProps extends React.HTMLAttributes<HTMLLinkElement> {
  title: string;
  date: [string, string?];
  period?: [string, string];
  href: Url;
  src: string;
  tag: SAHCategory;
}

const AgendaCard: React.FC<AgendaCardProps> = (
  { title, date, period, href, tag, src, className, ...props },
  ref
) => {
  const formatedDate = date[1]
    ? `du ${date[0]} au ${date[1]}`
    : `le ${date[0]}`;
  return (
    <Link href={href} ref={ref}>
      <article
        className={cn(
          "rounded-xl  border border-slate-200 bg-slate-50 p-2 flex justify-between gap-4 items-stretch ",
          className
        )}
        {...props}
      >
        <div className="flex flex-col gap-4 grow">
          <H3>{title}</H3>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <CalendarDays
                size={12}
                stroke="default"
                className="stroke-slate-400"
              />
              <Small className="text-slate-400">{formatedDate}</Small>
            </div>
            {period && (
              <Small className="text-blue-400 flex gap-1 items-center">
                {period[0]}
                <ArrowRight size={14} />
                {period[1]}
              </Small>
            )}
          </div>
          <SAHTag tag="spéctacle" />
        </div>
        <div className="w-36 relative justify-items-stretch self-stretch">
          <Image
            src={src}
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md h-full"
          />
        </div>
      </article>
    </Link>
  );
};

export default AgendaCard;
