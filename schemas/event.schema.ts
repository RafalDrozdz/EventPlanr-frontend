import { z } from "zod";

export const MetadataTicketSchema = z.object({
  id: z.number(),
  event_id: z.number(),
  price: z.number().nullable(),
  currency: z.string(),
  title: z.string(),
});

export const TicketSchema = z.object({
  id: z.string(),
  object: z.string(),
  active: z.boolean(),
  created: z.number(),
  default_price: z.string(),
  description: z.string().nullable(),
  images: z.string().array(),
  livemode: z.boolean(),
  metadata: MetadataTicketSchema,
  name: z.string(),
  updated: z.number(),
  url: z.string().nullable(),
});

export const EventFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  start_date: z.string(),
  end_date: z.string(),
  city: z.string(),
  street: z.string(),
  street_number: z.string(),
  postal_code: z.string(),
  country: z.string(),
  place_id: z.string(),
  place_name: z.string(),
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
