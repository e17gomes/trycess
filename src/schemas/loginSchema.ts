import z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Insira um email valido"),
  password: z.string().min(5, "A senha deve conter mais de 4 digitos"),
});
