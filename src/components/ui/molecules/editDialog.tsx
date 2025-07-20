"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "~/components/ui/atoms/dialog";
import { Button } from "~/components/ui/atoms/button";
import { Pen, Save } from "lucide-react";
import { CreateProduct, Product } from "~/types/productsType";
import { DropdownMenuItem } from "~/components/ui/atoms/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/atoms/form";
import { Input } from "~/components/ui/atoms/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProductSchema } from "~/schemas/productSchema";
import { UseMutationResult } from "@tanstack/react-query";
import { masks } from "~/utils/inputMasks";
import { EditProductHandlerType } from "~/types/editProductType";

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

    const onSubmit = async (data: Product) => {
        const { id, ...rest } = data;

    await editProductHandler.mutate({id, data:rest});
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e)=>e.preventDefault()}>
          <Pen className="mr-2 h-4 w-4" />
          Editar produto
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogTitle>Editar produto</DialogTitle>

<Form {...editProductForm}>
          <form
            onSubmit={editProductForm.handleSubmit(onSubmit)}
            className=" grid grid-cols-2 gap-4"
          >
            <div>
              <FormField
                control={editProductForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insira o nome do produto"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={editProductForm.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insira o preço do produto"
                        value={field.value ?? ""}
                        onChange={(e) =>
                          field.onChange(masks.money(e.target.value ?? ""))
                        }
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={editProductForm.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estoque</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insira a quantidade disponivel"
                        type="number"
                        value={field?.value ?? ""}
                        onChange={(e) =>
                          field.onChange(Number(e.target.value ?? ""))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={editProductForm.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insira a categoria do produto"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={editProductForm.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Url da imagem</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insira a url da imagem"
                        type="url"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={editProductForm.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insira a descrição"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="col-span-2 flex items-center gap-2"
              disabled={editProductHandler.isPending}
            >
              Salvar <Save />{" "}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
