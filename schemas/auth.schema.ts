import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  role: z.string().optional(),
  password: z.string(),
  repeatedPassword: z.string(),
});

export const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type Register = z.infer<typeof RegisterSchema>;
export type Login = z.infer<typeof LoginSchema>;
