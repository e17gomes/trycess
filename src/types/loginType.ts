import type z from "zod";
import type { loginSchema } from "~/schemas/loginSchema";

export type loginType = z.infer<typeof loginSchema>;
