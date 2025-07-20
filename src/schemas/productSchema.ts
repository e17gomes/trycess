import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  description: z.string().min(3, "A descrição é obrigatoria"),
  price: z.string().min(1,"O preço deve ser positivo"),
  stock: z.number().min(1,"O estoque deve ser positivo"),
  category: z.string().min(1, "Insira a categoria"),
  imageUrl: z.string().optional().refine(val => !val || /^https?:\/\/.+\..+/.test(val), { message: "URL inválida" }),
});


export const updateProductSchema = createProductSchema.extend({
  id: z.number().int().positive("ID inválido"),
});
