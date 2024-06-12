import { EventsProductType } from "@/lib/types";

/**
 * Renvoie la date du premier lundi avant le mois sélectionné.
 * Si le premier jour du mois n'est pas un lundi, la fonction retourne le lundi précédent.
 * @param year L'année.
 * @param month Le mois (0 pour janvier, 1 pour février, etc.).
 * @returns La date du premier lundi avant le mois sélectionné.
 */
function getFirstMondayBeforeSelectedMonth(year: number, month: number) {
  const firstDayOfMonth = new Date(year, month, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // Calcul du décalage pour le premier lundi
  let offset = 1 - firstDayOfWeek;
  if (offset > 0) {
    offset -= 7; // Si le 1er n'est pas un lundi, on va au lundi précédent
  }

  // Création de la date pour le premier lundi
  const firstMonday = new Date(year, month, 1);
  firstMonday.setDate(1 + offset);

  return firstMonday;
}

/**
 * Renvoie un tableau contenant la date de début et la date de fin du mois inclusif
 * contenant le premier lundi avant le mois sélectionné et les 41 jours suivants (jusqu'à dimanche inclus).
 * @param year L'année.
 * @param month Le mois (0 pour janvier, 1 pour février, etc.).
 * @returns Un tableau contenant la date de début et la date de fin du mois inclusif.
 */
export function getInclusiveStartAndEndOfMonth(year: number, month: number) {
  const startDate = getFirstMondayBeforeSelectedMonth(year, month);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 41);

  return [startDate, endDate];
}

export function getDateArrayBetweenTwoDate(start: Date, end: Date) {
  if (start >= end) {
    throw new Error("La date de début est plus tard que celle de fin");
  }

  let dateArray: Date[] = [];
  let tempDate = start;

  do {
    dateArray.push(new Date(tempDate));
    tempDate.setDate(tempDate.getDate() + 1);
  } while (tempDate <= end);

  return dateArray;
}

export function stringToDate(dateString: string) {
  const dateParts = dateString.split("/");
  const usDate = [dateParts[1], dateParts[0], dateParts[2]].join("/");

  return new Date(usDate);
}

export function getEventForADate(date: Date, products: EventsProductType[]) {
  const productf = products.filter(
    (product) =>
      stringToDate(product.date_debut) <= date &&
      stringToDate(product.date_fin) >= date
  );

  return productf;
}

export function isTimeSpanLongerThan(start: Date, end: Date, days: number) {
  const differenceTime = Math.abs(end.getTime() - start.getTime());

  if (differenceTime > days * 24 * 60 * 60 * 1000) {
    return true;
  }
  return false;
}

export function isSameDay(date1: Date, date2: Date) {
  // Extract day, month, and year from each date
  const day1 = date1.getDate();
  const month1 = date1.getMonth();
  const year1 = date1.getFullYear();

  const day2 = date2.getDate();
  const month2 = date2.getMonth();
  const year2 = date2.getFullYear();

  // Compare day, month, and year
  return day1 === day2 && month1 === month2 && year1 === year2;
}
