import z from "zod";
import { loginSchema } from "~/schemas/loginSchema";

export type loginType = z.infer<typeof loginSchema>;
