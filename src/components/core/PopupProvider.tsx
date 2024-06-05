/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { getAllNotificationAction } from "@/app/(admin)/dashboard/notification.action";
import { Notification } from "@prisma/client";
import { useEffect, useState } from "react";
import NotificationDrawer from "../widgets/NotificationDrawer";

const isDateLessByOneDay = (date1: Date, date2: Date) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const differenceInTime = date2.getTime() - date1.getTime();
  const differenceInDays = differenceInTime / oneDay;

  console.log("Last check: " + differenceInDays + " days ago");

  return differenceInDays >= 1;
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
    localStorage.clear();

    const fetchNotification = async () => {
      let localNotifications = JSON.parse(
        localStorage.getItem("notification") || "{}"
      );

      const lastChecked: Date =
        new Date(localNotifications.lastChecked) || new Date(0);

      if (!lastChecked || isDateLessByOneDay(lastChecked, now)) {
        let updatedNotification = { ...localNotifications, lastChecked: now };
        localStorage.setItem(
          "notification",
          JSON.stringify(updatedNotification)
        );
        // return;http://localhost:3000/
      }

      const baseNotifications = await getAllNotificationAction();
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

  console.log(notifications);

  return (
    <NotificationDrawer drawerArray={notifications} />
    // <Modal
    //   title={notifications[0].title}
    //   text="lorem ipsum"
    //   period="periode"
    //   href="#"
    // ></Modal>
  );
};

export default PopupProvider;
