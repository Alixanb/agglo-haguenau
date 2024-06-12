import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncate(str: string, num: number) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "..";
}

/**
 *
 * Takes a TypeScript Date and returns a formatted string
 *
 * @param dateString TypeScript Date
 * @returns string of the formatted date
 */
export const formatDate = (date: Date) => {
  const dayLabel = jours[date.getDay()];
  const day = date.getDate();
  const month = mois[date.getMonth()];
  const year = date.getFullYear();

  return `${dayLabel} ${day} ${month} ${year}`;
};

export function daysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export const mois = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

export const jours = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
