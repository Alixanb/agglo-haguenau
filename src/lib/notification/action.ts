/**
 *
 * Takes a TypeScript Date and returns a formatted string
 *
 * @param dateString TypeScript Date
 * @returns string of the formatted date
 */
export const formatDate = (date: Date) => {
  const jours = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  const mois = [
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

  const dayLabel = jours[date.getDay()];
  const day = date.getDate();
  const month = mois[date.getMonth()];
  const year = date.getFullYear();

  return `${dayLabel} ${day} ${month} ${year}`;
};
