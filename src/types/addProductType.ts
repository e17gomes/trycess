import type { UseMutationResult } from "@tanstack/react-query";
import type { BaseProduct, Product } from "./productsType";

export type CreateProductHandlerType = UseMutationResult<
  Product,
  Error,
  BaseProduct
>;
