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
