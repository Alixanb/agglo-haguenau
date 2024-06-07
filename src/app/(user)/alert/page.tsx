"use client";

import { getAllNotificationsAction } from "@/app/(admin)/dashboard/notification.action";
import {
  extractNotificationsByPeriod,
  NotificationOrganizedByStatus,
} from "@/app/(admin)/dashboard/notification.client.action";
import { BasicHeader, Main, Section, SubSection } from "@/components/layout/";
import { H2, H3, Small } from "@/components/typos";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NotificationWidget from "@/components/widgets/NotificationWidget";
import { Bell, Settings } from "lucide-react";
import { useEffect, useState } from "react";

//Si les laertes de la bdd

const Alert = () => {
  const [notifications, setNotifications] =
    useState<NotificationOrganizedByStatus>({
      upcoming: [],
      current: [],
      expired: [],
    });
  const [loading, setLoading] = useState<boolean>(true);

  const now = new Date();

  useEffect(() => {
    const fetchNotifications = async () => {
      const notificationsFetch = await getAllNotificationsAction();

      const notificationOrganizedByStatus = extractNotificationsByPeriod(
        notificationsFetch,
        now
      );
      console.log(notificationOrganizedByStatus);

      setNotifications(notificationOrganizedByStatus);
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
          </>
        ) : notifications.current.length ? (
          <>
            {notifications.current.map((notification, i) => {
              return <NotificationWidget notification={notification} key={i} />;
            })}
          </>
        ) : (
          <Small>Aucune alerte en cours</Small>
        )}

        <H3 className="mt-4">Alertes obsolètes</H3>
        {(notifications.upcoming.length || notifications.expired.length) && (
          <Tabs
            defaultValue={
              notifications.upcoming.length ? "upcoming" : "expired"
            }
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="upcoming"
                disabled={!notifications.upcoming.length}
              >
                À venir
              </TabsTrigger>
              <TabsTrigger
                value="expired"
                disabled={!notifications.expired.length}
              >
                Passé
                {notifications.expired.length
                  ? `(${notifications.expired.length})`
                  : ""}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              {notifications.upcoming.map((notification, i) => {
                return (
                  <NotificationWidget notification={notification} key={i} />
                );
              })}
            </TabsContent>
            <TabsContent value="expired">
              {notifications.expired.map((notification, i) => {
                return (
                  <NotificationWidget notification={notification} key={i} />
                );
              })}
            </TabsContent>
          </Tabs>
        )}
      </Section>
    </Main>
  );
};

export default Alert;
