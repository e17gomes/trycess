"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/atoms/dialog";
import { Pen,  } from "lucide-react";
import { Product } from "~/types/productsType";
import { DropdownMenuItem } from "~/components/ui/atoms/dropdown-menu";
import { EditProductHandlerType } from "~/types/editProductType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { updateProductSchema } from "~/schemas/productSchema";
import { FormFieldsEditProduct } from "./formEditProduct";

type EditProductDialogProps = {
  product: Product;
  editProductHandler: EditProductHandlerType;
};

export const EditProductDialog = ({
  product,
  editProductHandler,
}: EditProductDialogProps) => {

   const editProductForm = useForm<Product>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: {
      name: product.name ?? "",
      description: product.description ?? "",
      category: product.category ?? "",
      imageUrl: product.imageUrl ?? "",
      price: product?.price ?? "",
      stock: product.stock ?? 0,
      id: product.id ?? 0,
    },
  });

  const onSubmit = (data: Product) => {
    const { id, ...rest } = data;
    editProductHandler.mutate({ id, data: rest });
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (open) {
          editProductForm.reset(product);
        }
      }}
    >
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Pen className="mr-2 h-4 w-4" />
          Editar produto
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="max-w-lg" aria-describedby={undefined}>
        <DialogTitle>Editar produto</DialogTitle>
        <FormFieldsEditProduct onSubmit={onSubmit} editFormHandler={editProductHandler} editProductForm={editProductForm} />
       
      </DialogContent>
    </Dialog>
  );
};
