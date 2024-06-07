"use client";

import { NotificationDataTable } from "@/components/admin/NotificationTable";
import { Main } from "@/components/layout";
import { H1 } from "@/components/typos";
import { Notification } from "@prisma/client";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllNotificationAction } from "./notification.action";
import { getLocalAdminPassword } from "@/lib/client-utils";

const RootPage = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      setNotifications(await getAllNotificationAction(getLocalAdminPassword()));
    };

    fetchNotifications();
  }, []);

  return (
    <Main>
      <H1>Dashboard des notifications</H1>
      <Link
        href="/dashboard/new"
        className="flex gap-2 px-4 py-2 bg-primary-foreground border border-border rounded w-fit"
      >
        <Plus />
        Ajouter une notification
      </Link>
      <NotificationDataTable data={notifications} />
    </Main>
  );
};

export default RootPage;
