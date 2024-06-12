"use client";
import { H2, Small } from "@/components/typos";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { EventsProductType, EventsType } from "@/lib/types";
import { cn, mois } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  getDateArrayBetweenTwoDate,
  getEventForADate,
  getInclusiveStartAndEndOfMonth,
  isSameDay,
  isTimeSpanLongerThan,
  stringToDate,
} from "./date";

export interface CalendarSectionProps {
  event: EventsType;
  month: number;
}

export interface CellProps {
  date: Date;
  products: EventsProductType[];
  cache: AgendaCacheProps;
  onClick: (date: Date, products: EventsProductType[]) => void;
  key: string | number;
}

export interface CellEventProps {
  product: EventsProductType;
  date: Date;
  key: string | number;
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

  const handleCellClick = (date: Date, products: EventsProductType[]) => {
    console.log(date);
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

  const { products, productsAllYear } = event.products.reduce(
    (acc, product) => {
      if (
        isTimeSpanLongerThan(
          stringToDate(product.date_debut),
          stringToDate(product.date_fin),
          TIMESPAN_TOO_LONG
        )
      ) {
        acc.productsAllYear.push(product);
      } else {
        acc.products.push(product);
      }
      return acc;
    },
    { products: [], productsAllYear: [] }
  );
  console.log(products, productsAllYear);
  // const products = event.products;

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
        <div className="grid grid-cols-7 my-2 font-bold text-center text-sm">
          <span>LUN.</span>
          <span>MAR.</span>
          <span>MER.</span>
          <span>JEU.</span>
          <span>VEN.</span>
          <span>SAM.</span>
          <span className="text-red-500">DIM.</span>
        </div>
        <div className="grid grid-cols-7 ">
          {dates.map((date, i) => {
            return (
              <Cell
                date={date}
                products={getEventForADate(date, products)}
                cache={cache}
                key={i}
                onClick={() => handleCellClick(date, products)}
              />
            );
          })}
        </div>
      </div>
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

  // On regarde si la cell est d'un mois different, car si oui on la met en gris claire
  const cacheDate = new Date(cache.date);
  const isSecondary = cacheDate.getMonth() === date.getMonth();
  const isSunday = date.getDay() === 0;

  const handleClick = () => {
    onClick(date, products);
    cellRef.current?.focus();
  };

  console.log(products);

  return (
    <div
      ref={cellRef}
      className={cn(
        "border-t border-border w-full h-24 text-slate-600 focus:bg-slate-100 focus:outline outline-offset-2 rounded",
        !isSecondary ? "text-muted-foreground" : null,
        isSunday ? "text-red-500" : null
      )}
      onClick={handleClick}
      tabIndex={0}
      {...props}
    >
      <div className="w-full font-bold text-center p-2">{date.getDate()}</div>
      <div className="flex-1 flex-col">
        {products &&
          products.map((product, i) => {
            return <CellEvent product={product} date={date} key={i} />;
          })}
      </div>
    </div>
  );
};

//TODO : Hash pour couleur unique et persistente
const CellEvent: React.FC<CellEventProps> = ({ product, date, ...props }) => {
  // Boolean is this day the first one to have the event ?
  const isFirstDay = isSameDay(stringToDate(product.date_debut), date);

  return (
    <div className="truncate" {...props}>
      {product.nom}
    </div>
  );
};

export default CalendarSection;
