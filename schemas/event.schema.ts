import { z } from "zod";

export const TicketSchema = z.object({
  price: z.number().nullable(),
  currency: z.string(),
  title: z.string(),
});

export type Ticket = z.infer<typeof TicketSchema>;
