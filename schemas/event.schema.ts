import { z } from "zod";

export const TicketSchema = z.object({
  price: z.number().nullable(),
  currency: z.string(),
  title: z.string(),
});

export const EventFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  city: z.string(),
  street: z.string(),
  streetNumber: z.string(),
  postalCode: z.string(),
  country: z.string(),
  placeId: z.string(),
  placeName: z.string(),
  longitude: z.number().nullable(),
  latitude: z.number().nullable(),
  tickets: TicketSchema.array(),
});

export type Ticket = z.infer<typeof TicketSchema>;
export type EventForm = z.infer<typeof EventFormSchema>;
