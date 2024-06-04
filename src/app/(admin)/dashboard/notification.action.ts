"use server";

import prisma from "../../../lib/db";

export const getAllNotificationAction = async () => {
  return await prisma.notification.findMany();
};

export const getCurrentNotificationAction = async (now: Date) => {
  return await prisma.notification.findMany({
    where: {
      dateTo: { lt: now },
    },
  });
};
