import z from "zod";
import {
  createProductSchema,
  updateProductSchema,
} from "~/schemas/productSchema";

export type Product = z.infer<typeof updateProductSchema>;
export type CreateProduct = z.infer<typeof createProductSchema>;
