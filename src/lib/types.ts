import { z } from "zod";

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

export type NotificationType = z.infer<typeof NotificationSchema>;
