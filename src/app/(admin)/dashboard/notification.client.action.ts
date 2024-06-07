import { Notification } from "@prisma/client";

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
