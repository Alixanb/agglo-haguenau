/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { getCurrentNotificationAction } from "@/app/(admin)/dashboard/notification.action";
import { Notification } from "@prisma/client";
import { useEffect, useState } from "react";
import NotificationDrawer from "../widgets/NotificationDrawer";

/**
 * Checks if the time difference between two dates is greater than or equal to a specified interval in hours
 *
 * @param date1 The first date (Date object)
 * @param date2 The second date (Date object)
 * @param intervalInMinutes The interval in minutes to check against
 * @returns boolean indicating if the difference is greater than or equal to the interval
 */
const isTimeDifferenceGreaterThanInterval = (
  date1: Date,
  date2: Date,
  intervalInMinutes: number = 1
) => {
  // Convert interval from minutes to milliseconds
  const timeBeforeNextCheck = intervalInMinutes * 60 * 1000;
  const differenceInTime = date2.getTime() - date1.getTime();

  return differenceInTime >= timeBeforeNextCheck;
};

interface NotificationStorage {
  lastChecked: Date;
  storage: String[];
}

const PopupProvider = () => {
  const [notifications, setNotifications] = useState<Notification[] | null>(
    null
  );
  const now = new Date();

  useEffect(() => {
    // localStorage.clear();

    const fetchNotification = async () => {
      let localNotifications = JSON.parse(
        localStorage.getItem("notification") || "{}"
      );

      const lastChecked: Date = new Date(localNotifications.lastChecked || 0);

      if (!isTimeDifferenceGreaterThanInterval(lastChecked, now, 15)) {
        return;
      }

      // On ecrit dans le local storage que on vient de refresh les notifs
      let updatedNotification = { ...localNotifications, lastChecked: now };
      localStorage.setItem("notification", JSON.stringify(updatedNotification));

      const baseNotifications = await getCurrentNotificationAction(now);
      console.log("notif", await getCurrentNotificationAction(now));
      const readedNotifications: String[] = localNotifications?.storage || [];
      let notReadNotification: Notification[] = [];

      baseNotifications.map((notif) => {
        // Si la notification à déjà été lue
        if (readedNotifications.find((elem) => elem === notif.id)) {
          return;
        }

        notReadNotification.push(notif);
      });

      setNotifications(notReadNotification);

      if (!notReadNotification.length) {
        return;
      }

      // Ensuite on envois sur le cache que les notifications ont été lues
      let newLocalStorage: NotificationStorage = {
        lastChecked: now,
        storage: [],
      };
      baseNotifications.map((notif) => newLocalStorage.storage.push(notif.id));

      localStorage.setItem("notification", JSON.stringify(newLocalStorage));
    };

    fetchNotification();
  }, []);

  if (!notifications?.length) {
    return;
  }

  return <NotificationDrawer drawerArray={notifications} />;
};

export default PopupProvider;
