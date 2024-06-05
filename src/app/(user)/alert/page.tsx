"use client";

import { getAllNotificationAction } from "@/app/(admin)/dashboard/notification.action";
import { BasicHeader, Main, Section, SubSection } from "@/components/layout/";
import { H2 } from "@/components/typos";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { Skeleton } from "@/components/ui/skeleton";
import NotificationWidget from "@/components/widgets/NotificationWidget";
import { Notification } from "@prisma/client";
import { Bell, Settings } from "lucide-react";
import { useEffect, useState } from "react";

const Alert = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      const databaseNotification = await getAllNotificationAction();
      setNotifications(databaseNotification);
      setLoading(false);
    };

    fetchNotifications();
  }, []);

  return (
    <Main active="alert">
      <BasicHeader>
        <LeadingButton accent="red" size="fit">
          <Bell />
        </LeadingButton>
        Alertes
      </BasicHeader>
      <Section>
        <SubSection>
          <LeadingButton accent="black">
            <Settings />
            Paramètres de notifications
          </LeadingButton>
        </SubSection>
      </Section>
      <Section>
        <H2>Mes alertes</H2>
        {loading ? (
          <>
            <Skeleton className="w-full h-12" />
            <Skeleton className="w-full h-12" />
            <Skeleton className="w-full h-12" />
          </>
        ) : !notifications.length ? (
          <div>Aucune alerte en cours</div>
        ) : (
          notifications.map((notification, i) => {
            return <NotificationWidget notification={notification} key={i} />;
          })
        )}
      </Section>
    </Main>
  );
};

export default Alert;
