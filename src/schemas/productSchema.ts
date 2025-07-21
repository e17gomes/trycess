import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório").max(40, "Máximo de 40 caracteres"),
  description: z.string().min(3, "A descrição é obrigatoria").max(50, "Máximo de 50 caracteres"),
  price: z.string().min(1,"O preço deve ser positivo"),
  stock: z.number("Insira um numero").min(1,"O estoque deve ser positivo"),
  category: z.string().min(1, "Insira a categoria").max(20, "Maximo de 20 caracteres "),
  imageUrl: z.string().optional().refine(val => !val || /^https?:\/\/.+\..+/.test(val), { message: "URL inválida" }),
});


export const updateProductSchema = createProductSchema.extend({
  id: z.number().int().positive("ID inválido"),
});
