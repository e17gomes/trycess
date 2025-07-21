"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Image as Image2, MoreHorizontal } from "lucide-react";

import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { Button } from "~/components/ui/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/atoms/dropdown-menu";
import { DeleteProductDialog } from "~/components/ui/molecules/deleteDialog";
import { EditProductDialog } from "~/components/ui/molecules/editDialog";
import ImageModal from "~/components/ui/molecules/imageModal";
import { DeleteProductHandlerType } from "~/types/deleteProductType";
import { EditProductHandlerType } from "~/types/editProductType";
import { Product } from "~/types/productsType";

type productsColumProps = {
  editProduct: EditProductHandlerType;
  deleteProduct: DeleteProductHandlerType;
};

export function productColumn({
  editProduct,
  deleteProduct,
}: productsColumProps) {
  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "imageUrl",
      header: "Itens",
      cell: ({ row }) =>
        row.original.imageUrl ? (
          <ImageModal src={row.original.imageUrl} alt={row.original.name} />
        ) : (
          <div className="bg-sidebar-accent-foreground rounded-full h-12 w-12 flex items-center">
            <Image2 className="text-accent m-auto" />
          </div>
        ),
    },
    {
      accessorKey: "name",
      header: "Nome",
      cell: ({ row }) => <div className="capitalize">{row.original.name}</div>,
    },
    {
      accessorKey: "price",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Preços
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row?.original?.price}</div>
      ),
    },
    {
      accessorKey: "stock",
      header: () => <div className="text-right">Em estoque</div>,
      cell: ({ row }) => {
        return (
          <div className="text-right font-medium">{row.original.stock}</div>
        );
      },
    },
    {
      accessorKey: "category",
      header: () => <div className="text-right">Categoria</div>,
      cell: ({ row }) => {
        return (
          <div className="text-right font-medium">
            {row.original.category}
          </div>
        );
      },
    },
    {
      accessorKey: "description",
      header: () => <div className="text-right">Descrição</div>,
      cell: ({ row }) => {
        return (
          <div className="text-right font-medium">
            {row.original.description}
          </div>
        );
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const product = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuGroup>
                <EditProductDialog
                  editProductHandler={editProduct}
                  product={product}
                />
                <DropdownMenuSeparator />
                <DeleteProductDialog
                  product={row.original}
                  deleteProductHandler={deleteProduct}
                />
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return {
    columns,
  };
}
