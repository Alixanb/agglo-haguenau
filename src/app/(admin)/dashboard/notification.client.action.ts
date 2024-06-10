import { Notification } from "@prisma/client";
import { z } from "zod";

export interface NotificationOrganizedByStatus {
  upcoming: Notification[];
  current: Notification[];
  expired: Notification[];
}

export const extractNotificationsByPeriod = (
  notifications: Notification[],
  now: Date
): NotificationOrganizedByStatus => {
  return {
    upcoming: notifications.filter((elem) => new Date(elem.dateFrom) > now),
    current: notifications.filter(
      (elem) => new Date(elem.dateFrom) <= now && new Date(elem.dateTo) >= now
    ),
    expired: notifications.filter((elem) => new Date(elem.dateTo) < now),
  };
};

export const NotificationSchema = z.object({
  title: z.string().min(2, {
    message: "Le titre doit fair un minimum de 2 charactères",
  }),
  text: z.string(),
  dateFrom: z.date({
    required_error: "Vous devez indiqué la date de début",
  }),
  dateTo: z.date({
    required_error: "Vous devez indiqué la date de fin",
  }),
  link: z.string(),
});
