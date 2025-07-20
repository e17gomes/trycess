"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { productManager } from "~/api/productsApi";
import { queryClient } from "~/lib/tanstack-query";
import { createProductSchema } from "~/schemas/productSchema";
import { CreateProduct, Product } from "~/types/productsType";
import { Button } from "../atoms/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  handleCloseDialog,
} from "../atoms/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../atoms/form";
import { Input } from "../atoms/input";
import { resetOnCloseHandler } from "~/utils/resetCloseHandler";
import { masks } from "~/utils/inputMasks";
import toast from "react-hot-toast";

const AddProduct = () => {
  const createProductForm = useForm<CreateProduct>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      imageUrl: "",
      price: "",
    },
  });

  const { mutate: createProduct, isPending } = useMutation({
    mutationKey: ["AddProductMutate"],
    mutationFn: async (newProductData: Omit<Product, "id">) => {
      const response = await productManager.createProduct(newProductData);
      return response;
    },
    onMutate() {
      const toastId = toast.loading("Criando produto...");
      return { toastId };
    },
    onSuccess(_data, _v, context) {
      context.toastId && toast.dismiss(context.toastId);
      toast.success("Produto adicionado");
      handleCloseDialog();
      queryClient.invalidateQueries({ queryKey: ["GetAllProducts"] });
      createProductForm.reset();
    },
    onError(error, _v, context) {
      context?.toastId && toast.dismiss(context.toastId);
      console.error(error.message);
      toast.error("Erro ao adicionar produto");
    },
  });
  return (
    <Dialog onOpenChange={resetOnCloseHandler(createProductForm)}>
      <DialogTrigger asChild>
        <Button className="m-4 rounded-full p-6 text-lg" size={"lg"}>
          <PlusCircle /> Adicionar novo produto
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Insira as informações do produto</DialogTitle>
        </DialogHeader>
        <Form {...createProductForm}>
          <form
            onSubmit={createProductForm.handleSubmit((data) => {
              createProduct(data);
            })}
            className=" grid grid-cols-2 gap-4"
          >
            <div>
              <FormField
                control={createProductForm.control}
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
                control={createProductForm.control}
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
                control={createProductForm.control}
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
                control={createProductForm.control}
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
                control={createProductForm.control}
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
                control={createProductForm.control}
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
              disabled={isPending}
            >
              Adicionar produto <PlusCircle />{" "}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
