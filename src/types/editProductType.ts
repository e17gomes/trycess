import type { UseMutationResult } from "@tanstack/react-query";
import type { CreateProduct, Product } from "./productsType";

export type EditProductHandlerType = UseMutationResult<
  Product,
  Error,
  { id: number; data: CreateProduct }
>;
