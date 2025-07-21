"use client";

import { Loader2, Trash2 } from "lucide-react";
import { Button } from "~/components/ui/atoms/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/atoms/dialog";
import { DropdownMenuItem } from "~/components/ui/atoms/dropdown-menu";
import { DeleteProductHandlerType } from "~/types/deleteProductType";
import { Product } from "~/types/productsType";

type DeleteProductDialogProps = {
  product: Product;
  deleteProductHandler: DeleteProductHandlerType;
};

export const DeleteProductDialog = ({
  product,
  deleteProductHandler,
}: DeleteProductDialogProps) => {
  const handleDelete = () => {
    deleteProductHandler.mutate({ id: product.id });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Trash2 color="red" className="mr-2 h-4 w-4" />
          Deletar produto
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="max-w-md" aria-describedby={undefined}>
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
