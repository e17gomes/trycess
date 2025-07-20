"use client";
import * as React from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import { productManager } from "~/api/productsApi";
import { productColumn } from "../app/(private)/dashboard/_components/products_column";
import { useMutation, useQuery } from "@tanstack/react-query";
import { type CreateProduct as BaseProduct } from "~/types/productsType";
import toast from "react-hot-toast";
import { queryClient } from "~/lib/tanstack-query";

export const useProducts = () => {
  // States no inicio da página, apenas para padronizar mesmo
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const { data: allProducts, isFetching } = useQuery({
    queryKey: ["GetAllProducts"],
    queryFn: async () => {
      const response = productManager.getAllProducts();
      return response;
    },
  });

  const editProduct = useMutation({
    mutationKey: ["EditProduct"],
    mutationFn: async ({ id, data }: { id: number; data: BaseProduct }) => {
        const response = await productManager.updateProduct(id, data);
        return response
      },
      onMutate() {
          const toastId = toast.loading("Editando produto...")
          return {toastId}
      },
      onSuccess(_d, _v, context) {
          context.toastId && toast.dismiss(context.toastId)
          queryClient.invalidateQueries({queryKey:["GetAllProducts"]})
          toast.success("Produto editado com sucesso")
      },
      onError(error, _v, context) {
          context?.toastId && toast.dismiss(context.toastId)
          console.error(error.message)
          toast.error( "Erro ao editar produto" )
      },
  });
    
  const deleteProduct = useMutation({
    mutationKey: ["EditProduct"],
    mutationFn: async ({ id }: { id: number }) => {
        const response = await productManager.deleteProduct(id);
        return response
      },
      onMutate() {
          const toastId = toast.loading("Editando produto...")
          return {toastId}
      },
      onSuccess(_d, _v, context) {
          context.toastId && toast.dismiss(context.toastId)
          toast.success("Produto deletado com sucesso")
          queryClient.invalidateQueries({queryKey:["GetAllProducts"]})
      },
      onError(error, _v, context) {
          context?.toastId && toast.dismiss(context.toastId)
          console.error(error.message)
          toast.error( "Erro ao deletar produto" )
      },
  });

  const { columns } = productColumn({editProduct, deleteProduct });
  const table = useReactTable({
    data: allProducts ?? [],
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      pagination,
    },
    onPaginationChange: setPagination,
  });

  return {
    allProducts,
    columns,
    isFetching,
    table,
    sorting,
    setSorting,
    pagination,
    setPagination,
  };
};
