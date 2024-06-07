"use server";

import prisma from "@/lib/db";
import { z } from "zod";
import { NotificationSchema } from "./page";

export const createProductAction = async (
  input: z.infer<typeof NotificationSchema>
) => {
  const notification = await prisma.notification.create({ data: { ...input } });

  return notification;
};

export const deleteNotificationAction = async (notificationId: string) => {
  const notification = await prisma.notification.delete({
    where: { id: notificationId },
  });

  return notification;
};
