import { cn } from "@/lib/utils";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
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
            "rounded border border-border bg-card p-2 flex  gap-2 items-stretch",
            className
          )}
          {...props}
        >
          {/* DISBALING IMAGE DISPLAYING BECAUSE OF PERFORMANCE, ENABLE IF THE UPLOADED IMAGE ARE NOW LOW RESOLUTION */}
          {src && (
            <div className="flex-none w-[100px] h-[100px] relative">
              <Image
                src={src}
                layout="fill"
                objectFit="cover"
                alt={title}
                className="rounded-md"
              />
            </div>
          )}
          <div className="  flex flex-col justify-between grow-0 ">
            <div className="w-full relative">
              <H3 className="leading-tight line-clamp-2">{title}</H3>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <CalendarDays
                  size={12}
                  stroke="default"
                  className="stroke-muted-foreground"
                />
                <Small className="text-xs text-muted-foreground">
                  {formatedDate}
                </Small>
              </div>
              {period && period[0] && period[1] && (
                <Small className="text-xs text-green-400 flex gap-1 items-center">
                  {period[0]}
                  <ArrowRight size={14} />
                  {period[1]}
                </Small>
              )}
              {place && <Small className="text-xs uppercase">{place}</Small>}
            </div>
          </div>
        </article>
      </Link>
    );
  }
);
AgendaCard.displayName = "AgendaCard";

export default AgendaCard;
