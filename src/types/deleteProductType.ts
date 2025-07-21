import { UseMutationResult } from "@tanstack/react-query";

export type DeleteProductHandlerType = UseMutationResult<void, Error, { id: number }, { toastId: string }>;

