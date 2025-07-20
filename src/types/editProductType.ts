import { UseMutationResult } from "@tanstack/react-query";
import { CreateProduct, Product } from "./productsType";

export type EditProductHandlerType = UseMutationResult<
  Product,
  Error,
  { id: number; data: CreateProduct }
>;
