"use client";
import { Section } from "@/components/layout";
import { H2, Small } from "@/components/typos";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EventsType } from "@/lib/types";
import { clamp, cn, formatDate, mois, truncate } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  extendsPreviousEvents,
  getDateArrayBetweenTwoDate,
  getInclusiveStartAndEndOfMonth,
  IS_LONG_EVENT_THRESHOLD,
  isTimeSpanLongerThan,
  OrderedProduct,
  orderProducts,
  orderProductsByDate,
} from "./date";

export interface CalendarSectionProps {
  event: EventsType;
}

export interface CellProps {
  date: Date;
  products: OrderedProduct[] | undefined;
  cache: AgendaCacheProps;
  onClick: (cellDate: Date, cellProducts: OrderedProduct[] | undefined) => void;
  key: string | number;
}

export interface CellEventProps {
  product: OrderedProduct;
  date: Date;
  key: string | number;
}

export interface CellDetailProps {
  data: SelectionInterface;
  key?: number;
}

interface SelectionInterface {
  products: OrderedProduct[];
  date?: Date;
}

interface AgendaCacheProps {
  date: string;
}

const defaultAgendaCache: AgendaCacheProps = {
  date: new Date().toISOString(),
};

const CalendarSection: React.FC<CalendarSectionProps> = ({ event }) => {
  // Quand le cache n'est pas set, alors on met le cache par defaut
  const [cache, setCache] = useState<AgendaCacheProps>(defaultAgendaCache);
  const [selection, setSelection] = useState<SelectionInterface>({
    products: [],
  });
  const cacheDate = new Date(cache.date);

  // Nombre de jour à partir duquelle on affiche plus dans le calendrier mais en tant que "Toute l'année"
  const TIMESPAN_TOO_LONG = 4 * 30;

  useEffect(() => {
    const fetchCalendarCacheData = async () => {
      const agenda_cache = await sessionStorage.getItem("agenda_cache");

      if (!agenda_cache) {
        return;
      }

      setCache(JSON.parse(agenda_cache));
    };

    fetchCalendarCacheData();
  }, []);

  const handleCellClick = (
    cellDate: Date,
    cellProducts: OrderedProduct[] | undefined
  ) => {
    // On met les products sur le state

    if (!cellProducts) cellProducts = [];
    setSelection({ products: cellProducts, date: cellDate });
  };

  const pushAgendaCache = (newCache: AgendaCacheProps | null = null) => {
    if (newCache) setCache(newCache);
    sessionStorage.setItem("agenda_cache", JSON.stringify(newCache));
  };

  const changeMonthIndex = (change: number) => {
    const newDate = cacheDate;
    newDate.setMonth(newDate.getMonth() + change);
    pushAgendaCache({ ...cache, date: newDate.toISOString() });
  };

  const productsFetched = orderProductsByDate(event.products);

  const limitDate = getInclusiveStartAndEndOfMonth(
    cacheDate.getFullYear(),
    cacheDate.getMonth()
  );
  const dates = getDateArrayBetweenTwoDate(limitDate[0], limitDate[1]);

  return (
    <div className="flex-1 flex-col items-center">
      <div className="flex justify-between ">
        <LeadingButton
          accent="slate"
          size="fit"
          variant="buttonOnly"
          onClick={() => changeMonthIndex(-1)}
        >
          <ArrowLeft />
        </LeadingButton>
        <H2 className="uppercase ">
          {mois[cacheDate.getMonth()]}
          <Small className="ml-2">{cacheDate.getFullYear()}</Small>
        </H2>
        <LeadingButton
          accent="slate"
          size="fit"
          variant="buttonOnly"
          onClick={() => changeMonthIndex(1)}
        >
          <ArrowRight />
        </LeadingButton>
      </div>
      <div className="flex-1 flex-col my-8">
        <div className="grid grid-cols-7 my-2  font-bold text-center text-sm">
          <span>LUN.</span>
          <span>MAR.</span>
          <span>MER.</span>
          <span>JEU.</span>
          <span>VEN.</span>
          <span>SAM.</span>
          <span className="text-red-500">DIM.</span>
        </div>
        <div className="grid grid-cols-7 grid-rows-1fr grow shrink-0 h-[calc(80vh_-_100px)]">
          {dates.map((date, i) => {
            const localProduct = extendsPreviousEvents(date, productsFetched);
            return (
              <Cell
                date={date}
                products={localProduct}
                cache={cache}
                key={i}
                onClick={() => handleCellClick(date, localProduct)}
              />
            );
          })}
        </div>
      </div>
      <CellDetail data={selection} />
    </div>
  );
};

const Cell: React.FC<CellProps> = ({
  date,
  products,
  cache,
  onClick,
  ...props
}) => {
  const cellRef = useRef<HTMLDivElement>(null);

  const now = new Date();
  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  if (products) products = orderProducts(products);

  // On regarde si la cell est d'un mois different, car si oui on la met en gris claire
  const cacheDate = new Date(cache.date);
  const isSunday = date.getDay() === 0;

  const handleClick = () => {
    console.log(products);
    onClick(date, products);
    cellRef.current?.focus();
  };

  const muted = cacheDate.getMonth() !== date.getMonth();

  // Limit to the number of events diplayed
  const EVENTS_LIMIT = 3;

  return (
    <div
      ref={cellRef}
      className={cn(
        " overflow-x-visible z-10 border-t border-t-border w-full text-slate-600 focus:bg-slate-100 focus:outline outline-offset-2 rounded",
        isToday
          ? "focus:outline-offset-2 outline outline-blue-500 outline-2 outline-offset-0 bg-blue-50  border-blue-500 text-blue-500"
          : null
      )}
      onClick={handleClick}
      tabIndex={0}
      {...props}
    >
      <div
        className={cn(
          "w-full font-bold text-center p-2",
          muted ? "text-slate-500" : null,
          isSunday ? "text-red-500" : null
        )}
      >
        {date.getDate()}
      </div>
      <div className="flex-1 flex-col z-20">
        {products &&
          products.map((product, i) => {
            // on ne draw l'event que si c'est al premiere sur son row à avoir cet vent
            if (
              date.getDay() !== 1 &&
              isTimeSpanLongerThan(product.start, date, 1)
            ) {
              return <span key={i} className="px-2 my-[6px] h-4"></span>;
            }

            if (i > EVENTS_LIMIT - 1) {
              if (i === products.length - 1) {
                // return (
                //   <span className="text-xs font-bold text-slate-500" key={i}>
                //     +{i - EVENTS_LIMIT}
                //   </span>
                // );
              }
              return;
            }
            return <CellEvent product={product} date={date} key={i} />;
          })}
      </div>
    </div>
  );
};

// Fix ca, desfois la value est negative
const stringToUniqueColor = (str: string) => {
  const COLORS_OF_EVENTS = [
    "bg-blue-400",
    "bg-green-400",
    "bg-red-400",
    "bg-slate-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-sky-400",
  ];

  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash * 33) ^ char; // DJB2 hashing
  }

  const colorIndex = (hash >>> 0) / 0xffffffff;

  return COLORS_OF_EVENTS[Math.round(colorIndex * COLORS_OF_EVENTS.length - 1)];
};

const cellEventsLengthVariance = cva(
  "text-xs whitespace-nowrap truncate overflow-visible text-slate-900 z-20 rounded",
  {
    variants: {
      firstOfKind: {
        true: "rounded-l",
        false: "",
      },
      long: {
        true: "my-[2px] h-1",
        false: "px-2 my-[6px]",
      },
      duration: {
        1: "w-[50px]",
        2: "w-[100px]",
        3: "w-[150px]",
        4: "w-[200px]",
        5: "w-[250px]",
        6: "w-[300px]",
        7: "w-[350px]",
      },
    },
    defaultVariants: {
      firstOfKind: false,
      long: false,
      duration: 1,
    },
  }
);

const CellEvent: React.FC<CellEventProps> = ({ product, date, ...props }) => {
  // Durée à partir de laquelle un évenement sera consideré comme evenemnt long et ne sera affiché que partiellement

  const isLong = product.originalLength > IS_LONG_EVENT_THRESHOLD;

  // Duration of the event (le "as 1" sert pour ts meme si il est faux)
  const clampedDuration = clamp(product.daysLength, 1, 7) as 1;

  return (
    <div
      className={cn(
        cellEventsLengthVariance({
          long: isLong,
          duration: clampedDuration,
        }),
        stringToUniqueColor(product.name)
      )}
      {...props}
    >
      {!isLong && product.name}
    </div>
  );
};

const CellDetail: React.FC<CellDetailProps> = ({ data, ...props }) => {
  if (!data?.date) {
    data.date = new Date();
  }

  return (
    <Section>
      <div className="flex flex-col gap-2">
        <H2>{formatDate(data.date)}</H2>
        <Small>
          {data.products.length} produit{data.products.length - 1 ? "s" : ""}
        </Small>
      </div>
      <div className="flex flex-col gap-4">
        {data.products.map((product, i) => {
          return (
            <>
              <Sheet>
                <SheetTrigger>
                  <div
                    key={i}
                    className="flex gap-4 ring-slate-600 focus:ring-2 ring-offset-4 rounded text-start"
                    tabIndex={0}
                  >
                    <div
                      className={cn(
                        "h-8 w-1 my-auto rounded",
                        stringToUniqueColor(product.name)
                      )}
                    ></div>
                    <div className="flex flex-col">
                      <div>{truncate(product.name, 30)}</div>
                      <Small className="font-normal">
                        {formatDate(product.start) +
                          " au " +
                          formatDate(product.end)}
                      </Small>
                    </div>
                  </div>
                </SheetTrigger>
                <SheetContent className="text-start w-[90vw] overflow-scroll">
                  <SheetHeader className="text-start mt-16">
                    <SheetTitle>{product.name}</SheetTitle>
                    <div className="w-full h-32 mb-8 relative rounded overflow-hidden my-4">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={"Image de " + product.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      ) : (
                        <div className="size-full flex items-center justify-center bg-gray-200 ">
                          <div className="flex flex-col items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="48px"
                              viewBox="0 -960 960 960"
                              width="48px"
                              fill="#000000"
                            >
                              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Zm140-360q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Z" />
                            </svg>
                            <Small>Aucune image</Small>
                          </div>
                        </div>
                      )}
                    </div>
                    <SheetDescription>
                      {formatDate(product.start) +
                        " au " +
                        formatDate(product.end)}
                    </SheetDescription>
                  </SheetHeader>
                  <Separator className="my-8" />
                  <SheetDescription>
                    {product.description.split("\n").map((line, index) => (
                      <>
                        <p key={index} className="mb-4">
                          {line}
                        </p>
                      </>
                    ))}
                  </SheetDescription>
                </SheetContent>
              </Sheet>

              {i !== data.products.length - 1 && <Separator />}
            </>
          );
        })}
      </div>
    </Section>
  );
};

export default CalendarSection;
