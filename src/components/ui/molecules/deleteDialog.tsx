"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "~/components/ui/atoms/dialog";
import { Button } from "~/components/ui/atoms/button";
import { DropdownMenuItem } from "~/components/ui/atoms/dropdown-menu";
import { Trash2, Loader2 } from "lucide-react";
import { Product } from "~/types/productsType";
import { DeleteProductHandlerType } from "~/types/deleteProduct";

type DeleteProductDialogProps = {
  product: Product;
  deleteProductHandler: DeleteProductHandlerType;
};

export const DeleteProductDialog = ({
  product,
  deleteProductHandler,
}: DeleteProductDialogProps) => {
  const handleDelete = () => {
    deleteProductHandler.mutate({ id: product.id});
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
        >
          <Trash2 color="red" className="mr-2 h-4 w-4" />
          Deletar produto
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogTitle className="text-lg font-semibold text-red-600">
          Tem certeza que deseja excluir este produto?
        </DialogTitle>
        <p className="text-sm text-muted-foreground">
          Esta ação é irreversível. O produto <strong>{product.name}</strong>{" "}
          será excluído permanentemente.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={deleteProductHandler.isPending}
          >
            {deleteProductHandler.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deletando...
              </>
            ) : (
              "Confirmar exclusão"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
