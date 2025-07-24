import {
  Save,
  Tag,
  DollarSign,
  Package,
  Boxes,
  Image,
  FileText,
} from "lucide-react";
import type { UseFormReturn } from "react-hook-form";
import { Button } from "~/components/ui/atoms/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/atoms/form";
import { Input } from "~/components/ui/atoms/input";
import { categories } from "~/data/categories";
import type { EditProductHandlerType } from "~/types/editProductType";
import type { Product } from "~/types/productsType";
import { masks } from "~/utils/inputMasks";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../atoms/select";
import { Textarea } from "../atoms/textarea";

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
        className="flex flex-col gap-4"
      >
        <div className="flex gap-4">
          <FormField
            control={editProductForm.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Nome
                </FormLabel>
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
              <FormItem className="flex-1">
                <FormLabel className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Preço
                </FormLabel>
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
              <FormItem className="flex-1">
                <FormLabel className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Estoque
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insira a quantidade disponível"
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
              <FormItem className="flex-1">
                <FormLabel className="flex items-center gap-2">
                  <Boxes className="w-4 h-4" />
                  Categoria
                </FormLabel>
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

                <FormField
          control={editProductForm.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Image className="w-4 h-4" />
                Url da imagem
              </FormLabel>
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

                <FormField
          control={editProductForm.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Descrição
              </FormLabel>
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


        <Button
          className="flex items-center gap-2 w-full"
          disabled={editFormHandler.isPending || !editProductForm.formState.isDirty }
        >
          Salvar <Save />
        </Button>
      </form>
    </Form>
  );
};
