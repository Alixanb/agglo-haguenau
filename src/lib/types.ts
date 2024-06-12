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

// Le type Events qui est pull de l'api lei. Ce type n'est pas exhaustif; certaines partie ne sont pas definie parfaitement
const EventsBooleanString = z.union([
  z.literal("O"),
  z.literal("N"),
  z.literal(""),
]);

const HoraireSchema = z.object({
  date_debut: z.string(),
  date_fin: z.string(),
  heures: z.array(
    z.object({
      heure_debut: z.string(),
      heure_fin: z.string(),
      lundi: EventsBooleanString,
      mardi: EventsBooleanString,
      mercredi: EventsBooleanString,
      jeudi: EventsBooleanString,
      vendredi: EventsBooleanString,
      samedi: EventsBooleanString,
      dimanche: EventsBooleanString,
      acces_permanent: z.union([z.literal("1"), z.literal("0"), z.literal("")]),
      tps_acces_fin: z.union([z.literal("1"), z.literal("0"), z.literal("")]),
      commentaire: z.string(),
    })
  ),
});

const CritereSchema = z.object({
  id: z.number(),
  nom: z.string(),
  type_critere: z.string(),
  type_valeur: z.string(),
  classe: z.string(),
  valeur: z.string().optional(),
  modalites: z
    .array(z.object({ id: z.number(), nom: z.string(), ordre: z.string() }))
    .optional(),
});

export const EventsProductSchema = z.object({
  debut_periode: z.string(),
  date_debut: z.string(),
  date_fin: z.string(),
  id: z.number(),
  nom: z.string(),
  type: z.object({}).passthrough(), // Placeholder for a flexible object schema
  coordonnees: z.object({}).passthrough(), // Placeholder for a flexible object schema
  latitude: z.string(),
  longitude: z.string(),
  commentaire: z.string(),
  prestataire: z
    .object({
      coordonnees: z.object({}).passthrough(),
    })
    .optional(),
  datmaj: z.string(),
  datecreation: z.string(),
  horaires: z.array(HoraireSchema),
  criteres: z.array(CritereSchema),
});

export const EventsSchema = z.object({
  type: z.string(),
  params: z.array(
    z.object({
      name: z.string(),
      value: z.union([z.string(), z.array(z.string())]),
    })
  ),
  pagination: z.object({}).passthrough(), // Placeholder for a flexible object schema
  params_et_valeurs: z.object({
    params: z.string().nullable(),
    valeurs: z.string().nullable(),
  }),
  products: z.array(EventsProductSchema),
});

export type EventsType = z.infer<typeof EventsSchema>;
export type EventsProductType = z.infer<typeof EventsProductSchema>;

// export interface Events {
//   type: string;
//   params: Array<{ name: string; value: string | Array<string> }>;
//   pagination: Object;
//   params_et_valeurs: { params: string | null; valeurs: string | null };
//   products: Array<EventsProduct>;
// }

// export interface EventsProduct {
//   debut_periode: string;
//   date_debut: string;
//   date_fin: string;
//   id: number;
//   nom: string;
//   type: Object;
//   coordonnees: Object;
//   latitude: string;
//   longitude: string;
//   commentaire: string;
//   prestataire: {
//     coordonnees: Object;
//   };
//   datemaj: string;
//   datecreation: string;
//   horaires: Array<{
//     date_debut: string;
//     date_fin: string;
//     heures: {
//       heure_debut: string;
//       heure_fin: string;
//       lundi: EventsBooleanString;
//       mardi: EventsBooleanString;
//       mercredi: EventsBooleanString;
//       jeudi: EventsBooleanString;
//       vendredi: EventsBooleanString;
//       samedi: EventsBooleanString;
//       dimanche: EventsBooleanString;
//       acces_permanent: "1" | "0" | "";
//       tps_acces_fin: "1" | "0" | "";
//       commentaire: string;
//     };
//   }>;
//   critere: Array<{
//     id: number;
//     nom: string;
//     type_critere: string;
//     type_valeur: string;
//     classe: string;
//     valeur: string;
//   }>;
// }

// type EventsBooleanString = "O" | "N" | "";
