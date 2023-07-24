import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  role: z.string().optional(),
});

export type User = z.infer<typeof UserSchema>;
