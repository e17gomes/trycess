import type z from "zod";
import type {
  createProductSchema,
  updateProductSchema,
} from "~/schemas/productSchema";

export type Product = z.infer<typeof updateProductSchema>;
export type CreateProduct = z.infer<typeof createProductSchema>;
