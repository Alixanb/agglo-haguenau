"use server";

import { checkPasswordValidity } from "@/lib/auth";
import { z } from "zod";
import prisma from "../../../lib/db";
import { NotificationSchema } from "./new/page";

const checkPasswordOrThrow = async (password: string) => {
  if (!(await checkPasswordValidity(password))) {
    throw new Error("Invalid passowrd");
  }
};

export const getAllNotificationAction = async (password: string) => {
  checkPasswordOrThrow(password);
  return await prisma.notification.findMany();
};

export const getCurrentNotificationAction = async (now: Date) => {
  return await prisma.notification.findMany({
    where: {
      dateTo: { lt: now },
    },
  });
};
export const createNotificationAction = async (
  input: z.infer<typeof NotificationSchema>,
  password: string
) => {
  checkPasswordOrThrow(password);
  const notification = await prisma.notification.create({ data: { ...input } });

  return notification;
};

export const deleteNotificationAction = async (
  notificationId: string,
  password: string
) => {
  checkPasswordOrThrow(password);

  const notification = await prisma.notification.delete({
    where: { id: notificationId },
  });

  return notification;
};
