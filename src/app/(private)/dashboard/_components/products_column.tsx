"use client";

import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import type { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Image as Image2,
  InfoIcon,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "~/components/ui/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/atoms/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/atoms/tooltip";
import { DeleteProductDialog } from "~/components/ui/molecules/deleteDialog";
import { EditProductDialog } from "~/components/ui/molecules/editDialog";
import ImageModal from "~/components/ui/molecules/imageModal";
import type { DeleteProductHandlerType } from "~/types/deleteProductType";
import type { EditProductHandlerType } from "~/types/editProductType";
import type { Product } from "~/types/productsType";

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
          <div className="w-12 ">
            <ImageModal src={row.original.imageUrl} alt={row.original.name} />
          </div>
        ) : (
          <div className="bg-sidebar-accent rounded-full h-12 w-12 flex items-center">
            <Image2 className=" m-auto" />
          </div>
        ),
    },
    {
      accessorKey: "name",
      header: "Nome",
      cell: ({ row }) => (
        <div className="capitalize flex flex-col">
          <span>{row.original.name}</span>
          <span className="text-muted-foreground">ID: {row.original.id}</span>
        </div>
      ),
    },
    {
      accessorKey: "price",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="w-full text-center"
          >
            Preços
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="w-full text-center capitalize">
          {row?.original?.price}
        </div>
      ),
    },
    {
      accessorKey: "stock",
      header: () => <div className="text-center">Em estoque</div>,
      cell: ({ row }) => {
        let closeToEnd = "";

        switch (true) {
          case row.original.stock > 20:
            closeToEnd =
              "bg-blue-400/60 dark:bg-blue-200 border border-blue-500 text-blue-800";
            break;
          case row.original.stock >= 10:
            closeToEnd =
              "bg-green-400/60 dark:bg-green-200 border border-green-500 text-green-800";
            break;
          case row.original.stock > 5:
            closeToEnd =
              "bg-yellow-400/60 dark:bg-yellow-200 border border-yellow-500 text-yellow-700";
            break;
          case row.original.stock <= 5:
            closeToEnd =
              "bg-red-400/80 dark:bg-red-200 border border-red-400 text-red-700";
            break;
          default:
            closeToEnd = "bg-muted/60 dark:bg-muted-foreground/90";
        }

        return (
          <div
            className={`text-center m-auto w-2/6 rounded-xl font-medium text-accent-foreground cursor-default ${closeToEnd}`}
          >
            {row.original.stock}
          </div>
        );
      },
    },
    {
      accessorKey: "category",
      header: () => <div className="text-center">Categoria</div>,
      cell: ({ row }) => {
        return (
          <div className="text-center font-medium border rounded-md w-4/6 p-1 m-auto cursor-default ">
            {row.original?.category}
          </div>
        );
      },
    },
    {
      accessorKey: "description",
      header: () => <div className="text-center">Descrição</div>,
      cell: ({ row }) => {
        return (
          <div className="flex justify-center">
            <Tooltip>
              <TooltipTrigger className="cursor-pointer">
                <InfoIcon size={20} />
              </TooltipTrigger>
              <TooltipContent>
                <p className="m-auto">{row.original.description}</p>
              </TooltipContent>
            </Tooltip>
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
          <div className="m-auto flex  justify-center w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
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
          </div>
        );
      },
    },
  ];

  return {
    columns,
  };
}
