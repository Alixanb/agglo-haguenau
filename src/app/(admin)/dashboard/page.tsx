"use client";

import { NotificationDataTable } from "@/components/admin/NotificationTable";
import BreadcrumbFactory from "@/components/core/BreadcrumbFactory";
import { Main, Section } from "@/components/layout";
import { H1 } from "@/components/typos";
import { Notification } from "@prisma/client";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllNotificationsAction } from "./notification.action";

const RootPage = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const breadcrumbItems = [{ label: "Dashboard" }];

  useEffect(() => {
    const fetchNotifications = async () => {
      setNotifications(await getAllNotificationsAction());
    };

    fetchNotifications();
  }, []);

  return (
    <Main>
      <Section>
        <BreadcrumbFactory items={breadcrumbItems} />
        <H1>Dashboard des notifications</H1>
        <Link
          href="/dashboard/new"
          className="flex gap-2 px-4 py-2 bg-primary-foreground border border-border rounded w-fit"
        >
          <Plus />
          Ajouter une notification
        </Link>
      </Section>
      <NotificationDataTable data={notifications} />
    </Main>
  );
};

export default RootPage;
