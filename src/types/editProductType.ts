import type { UseMutationResult } from "@tanstack/react-query";
import type { BaseProduct, Product } from "./productsType";

export type EditProductHandlerType = UseMutationResult<
  Product | undefined,
  Error,
  { id: number; data: BaseProduct }
>;
