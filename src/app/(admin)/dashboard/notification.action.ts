"use server";

import { checkPasswordValidity } from "@/lib/auth";
import { z } from "zod";
import prisma from "../../../lib/db";

export const NotificationSchema = z.object({
  title: z.string().min(2, {
    message: "Le titre doit fair un minimum de 2 charactères",
  }),
  text: z.string(),
  dateFrom: z.date({
    required_error: "Vous devez indiqué la date de début",
  }),
  dateTo: z.date({
    required_error: "Vous devez indiqué la date de fin",
  }),
  link: z.string(),
});

/** ACTION THAT DOESN'T REQUIRE ADMIN PERMISSION */

export const getAllNotificationsAction = async () => {
  return await prisma.notification.findMany();
};

export const getCurrentNotificationsAction = async (now: Date) => {
  return await prisma.notification.findMany({
    where: {
      dateFrom: { lt: now },
      dateTo: { gt: now },
    },
  });
};

export const getExpiredNotificationsAction = async (now: Date) => {
  return await prisma.notification.findMany({ where: { dateTo: { lt: now } } });
};

export const getUpcomingNotificationsAction = async (now: Date) => {
  return await prisma.notification.findMany({
    where: { dateFrom: { gt: now } },
  });
};

/** ACTION THAT REQUIRE ADMIN PERMISSION */

const checkPasswordOrThrow = async (password: string) => {
  if (!(await checkPasswordValidity(password))) {
    throw new Error("Invalid passowrd");
  }
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
