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

// Minified version of EventsProductType to keep only the necessary values
export interface OrderedProduct {
  name: string;
  start: Date;
  end: Date;
  image: string | undefined;
  description: string;
  daysLength: number;
  originalLength: number;
}

type DateISO = string;
export interface ProductsOrderedInterface {
  [key: DateISO]:
    | {
        products: OrderedProduct[];
      }
    | undefined;
}

export function orderProductsByDate(products: EventsProductType[]) {
  const fakeEvent: OrderedProduct = {
    name: "Evenement de test",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nunc feugiat, efficitur lectus nec, venenatis leo. Pellentesque varius, augue ac feugiat sagittis, urna mi ullamcorper nulla, nec sagittis mi tellus vel nibh. Fusce quis vehicula nisl. Donec ac lorem ut risus tincidunt placerat. Etiam pulvinar sollicitudin odio, in fringilla felis eleifend non. Sed risus lorem, tincidunt non euismod sit amet, dapibus eu urna. Praesent tempus est in augue sodales tincidunt. Nunc vel augue vitae neque aliquet pellentesque. Etiam faucibus ultricies efficitur. Vivamus consequat eget libero feugiat faucibus. Sed malesuada lorem non mi blandit, ac hendrerit metus vulputate. In imperdiet, felis vitae condimentum lobortis, tortor orci gravida odio, vitae vehicula lorem dolor eu sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi elit lorem, venenatis et interdum ac, accumsan vitae elit. Nulla facilisi.",
    start: new Date(),
    end: new Date(),
    image: undefined,
    daysLength: 0,
    originalLength: 0,
  };

  let productsOrdered: ProductsOrderedInterface = {};

  productsOrdered[new Date().toISOString()] = { products: [] };

  productsOrdered[new Date().toISOString()]?.products.push(fakeEvent);
  console.log(productsOrdered);
  return productsOrdered;
  // Nombre de jour minimum à partir duquel on considere que l'evenement est trop long et est un evenement constant
  const MINIMUM_TIME_FOR_EVENT = 5 * 30;

  products.forEach((product, i) => {
    const start = stringToDate(product.date_debut);
    const end = stringToDate(product.date_fin);
    const daysLength = getTimeSpanBetweenTwoDateInDays(start, end);

    // const newProduct: OrderedProduct = {
    //   name: product.nom,
    //   description: product.commentaire,
    //   start: start,
    //   end: end,
    //   image: product.criteres.find((el) => el.id === 1900421)?.valeur,
    //   daysLength: daysLength,
    //   originalLength: daysLength,
    // };
    const productDate = stringToDate(product.date_debut);
    const productDateKey = productDate.toISOString();

    if (daysLength >= MINIMUM_TIME_FOR_EVENT) {
      // Action pour les évenements longs
      return;
    }

    let datePointer = new Date(start);
    do {
      const newProduct: OrderedProduct = {
        name: product.nom,
        description: product.commentaire,
        start: start,
        end: end,
        image: product.criteres.find((el) => el.id === 1900421)?.valeur,
        daysLength: daysLength,
        originalLength: daysLength,
      };
      productsOrdered[datePointer.toISOString()]?.products.push(newProduct);

      // Increment du pointer
      datePointer.setDate(datePointer.getDate() + 1);
    } while (datePointer <= end);

    // if (daysLength > 7) {
    //   // Si la durée de l'evenement est superieur à 5 mois, alors on le met dans "toute l'année"
    //   if (daysLength >= 5 * 30) {
    //     // Insert dans les evenements qui sont toute l'année
    //   } else {
    //     let timeSpan = daysLength;
    //     let dateKey = productDate;
    //     let i = 0;

    //     do {
    //       timeSpan -= 7;
    //       const delayedProduct: OrderedProduct = {
    //         name: product.nom,
    //         description: product.commentaire,
    //         start: start,
    //         end: end,
    //         image: product.criteres.find((el) => el.id === 1900421)?.valeur,
    //         daysLength: timeSpan,
    //         originalLength: daysLength,
    //       };

    //       if (dateKey.getDay() !== 1 && i >= 0) {
    //         dateKey.setDate(
    //           dateKey.getDate() + ((1 + 7 - dateKey.getDay()) % 7)
    //         );
    //       } else {
    //         dateKey.setDate(dateKey.getDate() + 7);
    //       }

    //       if (!productsOrdered[dateKey.toISOString()]?.products) {
    //         productsOrdered[dateKey.toISOString()] = {
    //           products: [],
    //         };
    //       }

    //       productsOrdered[dateKey.toISOString()]?.products.push(delayedProduct);
    //       i++;
    //     } while (timeSpan > 7);
    //   }
    // }

    // if (!productsOrdered[productDateKey]) {
    //   productsOrdered[productDateKey] = {
    //     products: [],
    //   };
    // }

    // productsOrdered[productDateKey].products.push(newProduct);

    // Calculate days length and assign to the corresponding day
  });

  return productsOrdered;
}

export function getEventForADate(date: Date, products: EventsProductType[]) {
  const productf = products.filter(
    (product) =>
      stringToDate(product.date_debut) <= date &&
      stringToDate(product.date_fin) >= date
  );

  return productf;
}

export function getTimeSpanBetweenTwoDateInDays(start: Date, end: Date) {
  return Math.round(
    Math.abs(end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)
  );
}

export function isTimeSpanLongerThan(start: Date, end: Date, days: number) {
  if (getTimeSpanBetweenTwoDateInDays(start, end) > days) {
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

export function extendsPreviousEvents(
  date: Date,
  products: ProductsOrderedInterface
) {
  if (typeof products == "undefined") {
    throw new Error("products undefined", products);
  }
  let productsOrdered: OrderedProduct[] = [];

  if (date.getDay() === 1) {
    productsOrdered = products[date.toISOString()]?.products || [];
  } else {
    let pointerDay = new Date(date);
    do {
      productsOrdered = productsOrdered.concat(
        products[pointerDay.toISOString()]?.products || []
      );
      pointerDay.setDate(pointerDay.getDate() - 1);
    } while (pointerDay.getDay() >= 1);
  }

  // productsOrdered.sort((a, b) => {
  //   return new Date(a.start).getTime() - new Date(b.start).getTime();
  // });

  return productsOrdered;
}

export const IS_LONG_EVENT_THRESHOLD = 1 * 30;

export function orderProducts(products: OrderedProduct[]) {
  const lim = IS_LONG_EVENT_THRESHOLD;

  return products.sort((a, b) => {
    // First, compare originalLength with IS_LONG_EVENT_THRESHOLD
    if (a.originalLength > lim && b.originalLength <= lim) {
      return -1;
    } else if (a.originalLength <= lim && b.originalLength > lim) {
      return 1;
    } else {
      // If they are in the same group, compare by start date
      return new Date(a.start).getTime() - new Date(b.start).getTime();
    }
  });
}
