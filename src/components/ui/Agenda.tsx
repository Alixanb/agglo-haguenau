import { cn } from "@/lib/utils";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { forwardRef } from "react";
import { H3, Small } from "../typos";

interface AgendaCardProps extends React.HTMLAttributes<HTMLLinkElement> {
  title: string;
  date: [string, string?];
  period?: [string, string];
  href: Url;
  src?: string;
  place: string;
  target?: string;
}

const AgendaCard = forwardRef<HTMLAnchorElement, AgendaCardProps>(
  (
    {
      title,
      date,
      period,
      href,
      place,
      src,
      className,
      target = "_self",
      ...props
    },
    ref
  ) => {
    const formatedDate = date[1]
      ? `du ${date[0]} au ${date[1]}`
      : `le ${date[0]}`;
    return (
      <Link href={href} ref={ref} target={target}>
        <article
          className={cn(
            "rounded border border-border bg-card p-2 flex justify-between gap-4 items-stretch ",
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
                  className="stroke-muted-foreground"
                />
                <Small className="text-muted-foreground">{formatedDate}</Small>
              </div>
              {period && period[0] && period[1] && (
                <Small className="text-green-400 flex gap-1 items-center">
                  {period[0]}
                  <ArrowRight size={14} />
                  {period[1]}
                </Small>
              )}
              {place && <Small className="uppercase py-1">{place}</Small>}
            </div>
          </div>
          {/* 
          DISBALING IMAGE DISPLAYING BECAUSE OF PERFORMANCE, ENABLE IF THE UPLOADED IMAGE ARE NOW LOW RESOLUTION
          {src && (
            <div className="w-36 relative justify-items-stretch self-stretch">
              <Image
                src={src}
                alt={title}
                className="rounded-md h-full object-cover aspect-square"
              />
            </div>
          )} */}
        </article>
      </Link>
    );
  }
);
AgendaCard.displayName = "AgendaCard";

export default AgendaCard;
