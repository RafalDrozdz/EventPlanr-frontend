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

export const EventSchema = z.object({
  id: z.number(),
  creator_user_id: z.number(),
  title: z.string(),
  description: z.string(),
  status: z.string(),
  city: z.string(),
  street: z.string(),
  street_number: z.string(),
  postal_code: z.string(),
  country: z.string(),
  place_id: z.string(),
  place_name: z.string(),
  longitude: z.string().nullable(),
  latitude: z.string().nullable(),
  start_date: z.string(),
  end_date: z.string(),
});

export type Ticket = z.infer<typeof TicketSchema>;
export type Event = z.infer<typeof EventSchema>;
export type EventForm = z.infer<typeof EventFormSchema>;
