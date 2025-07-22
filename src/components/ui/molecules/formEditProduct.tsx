import { Button } from "~/components/ui/atoms/button";
import { Save } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/atoms/form";
import { Input } from "~/components/ui/atoms/input";
import { masks } from "~/utils/inputMasks";
import { EditProductHandlerType } from "~/types/editProductType";
import { Product } from "~/types/productsType";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "../atoms/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../atoms/select";
import { categories } from "~/data/categories";

type FormFieldsEditProductProps = {
  editFormHandler: EditProductHandlerType;
  onSubmit: (data: Product) => void;
  editProductForm: UseFormReturn<
    {
      name: string;
      description: string;
      price: string;
      stock: number;
      category: string;
      id: number;
      imageUrl?: string | undefined;
    },
    any,
    {
      name: string;
      description: string;
      price: string;
      stock: number;
      category: string;
      id: number;
      imageUrl?: string | undefined;
    }
  >;
};

export const FormFieldsEditProduct = ({
  editProductForm,
  onSubmit,
  editFormHandler,
}: FormFieldsEditProductProps) => {
  return (
    <Form {...editProductForm}>
      <form
        onSubmit={editProductForm.handleSubmit(onSubmit)}
        className=" flex flex-col gap-4"
      >
        <div className="flex items-center gap-4">
          <FormField
            control={editProductForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Insira o nome do produto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
        <div className="flex gap-4">
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

          <FormField
            control={editProductForm.control}
            name="category"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-1">
                <FormLabel>Categoria</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-full"> 
                      <SelectValue placeholder="Selecione a categoria" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                  <Textarea
                    maxLength={50}
                    placeholder="Insira a descrição"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="col-span-2 flex items-center gap-2"
          disabled={editFormHandler.isPending}
        >
          Salvar <Save />{" "}
        </Button>
      </form>
    </Form>
  );
};
