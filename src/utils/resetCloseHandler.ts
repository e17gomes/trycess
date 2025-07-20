import type { FieldValues, UseFormReturn } from "react-hook-form";

export function resetOnCloseHandler<T extends FieldValues>(form: UseFormReturn<T>) {
  return (open: boolean) => {
    if (!open) {
      form.reset();
    }
  };
}
