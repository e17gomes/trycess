import type { UseMutationResult } from "@tanstack/react-query";
import type { CreateProduct, Product } from "./productsType";

export type CreateProductHandlerType = UseMutationResult<
  Product,
  Error,
  CreateProduct    
>;
