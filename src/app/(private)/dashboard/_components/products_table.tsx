"use client";
import { flexRender } from "@tanstack/react-table";
import { Package, Search } from "lucide-react";
import { Input } from "~/components/ui/atoms/input";
import { Loader } from "~/components/ui/atoms/loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TablePaginationControls,
  TableRow,
} from "~/components/ui/atoms/table";
import AddProduct from "~/components/ui/molecules/addProduct";
import { PageSizeSelector } from "~/components/ui/molecules/selectSize";
import { TableLoader } from "~/components/ui/molecules/tableLoader";
import { useProducts } from "~/hooks/useProducts";

export function ProductsTable() {
  const { allProducts, columns, isFetching, pagination, setPagination, table } =
    useProducts();

  return (
    <Loader loading={isFetching} fallback={<TableLoader />}>
      <div className="w-[98%] flex flex-col gap-6 border p-4 shadow-lg shadow-accent-foreground/20 rounded-lg m-auto">
        <h2 className="flex items-center font-bold text-2xl gap-2">
          <Package size={24} /> Lista de produtos
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center px-2 border rounded-lg w-fit">
            <Search size={14} />
            <Input
              placeholder="Filtre por nome"
              value={
                (table.getColumn("name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="max-w-sm !bg-transparent border-none shadow-none focus:!ring-0
            "
            />
          </div>
          <AddProduct />
        </div>

        <Table internDivClassName="max-h-96 ">
          <TableHeader className="sticky w-full top-0 bg-accent">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="last:!border-b"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="first:w-16 nth-[6]:w-12"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Sem resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center w-full justify-between ">
          <PageSizeSelector
            value={pagination.pageSize}
            onChange={(size: number) =>
              setPagination((prev) => ({ ...prev, pageSize: size }))
            }
          />
          <TablePaginationControls
            totalItems={allProducts?.length ?? 0}
            canPreviousPage={table.getCanPreviousPage()}
            canNextPage={table.getCanNextPage()}
            onPrevious={() => table.previousPage()}
            onNext={() => table.nextPage()}
          />
        </div>
      </div>
    </Loader>
  );
}
