/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { getAllNotificationAction } from "@/app/(admin)/dashboard/notification.action";
import { Notification } from "@prisma/client";
import { useEffect, useState } from "react";
import { Modal } from "../widgets/Popup";

const isDateLessByOneDay = (date1: Date, date2: Date) => {
  console.log(date1, date2);

  const oneDay = 24 * 60 * 60 * 1000;
  const differenceInTime = date2.getTime() - date1.getTime();
  const differenceInDays = differenceInTime / oneDay;

  console.log("difference est de ", differenceInDays, " jour(s)");

  return differenceInDays >= 1;
};

interface NotificationStorage {
  lastChecked: Date;
  storage: String[];
}

const PopupProvider = () => {
  // localStorage.setItem("test", JSON.stringify({ isit: "no" }));
  // console.log(JSON.parse(localStorage.getItem("test")));

  const [notifications, setNotifications] = useState<Notification[] | null>(
    null
  );
  const now = new Date();

  useEffect(() => {
    const fetchNotification = async () => {
      let localNotifications = JSON.parse(
        localStorage.getItem("notification") || "{}"
      );

      const lastChecked: Date =
        new Date(localNotifications.lastChecked) || new Date(0);

      if (false || !lastChecked || isDateLessByOneDay(lastChecked, now)) {
        let updatedNotification = { ...localNotifications, lastChecked: now };
        localStorage.setItem(
          "notification",
          JSON.stringify(updatedNotification)
        );
        return;
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

  console.log(notifications);

  if (!notifications?.length) {
    return;
  }

  return (
    <Modal
      title={notifications[0].title}
      text="lorem ipsum"
      period="periode"
      href="#"
    ></Modal>
  );
};

export default PopupProvider;
