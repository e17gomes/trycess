"use client";

import {
  Boxes,
  DollarSign,
  FileText,
  Image,
  Package,
  PlusCircle,
  Tag,
} from "lucide-react";
import { categories } from "~/data/categories";
import { masks } from "~/utils/inputMasks";
import { Button } from "../atoms/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../atoms/form";
import { Input } from "../atoms/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../atoms/select";
import { Textarea } from "../atoms/textarea";
import type { UseFormReturn } from "react-hook-form";
import type { CreateProductHandlerType } from "~/types/addProductType";

type FormFieldsCreateProductProps = {
  createFormHandler: CreateProductHandlerType;
  createProductForm: UseFormReturn<{
    name: string;
    description: string;
    price: string;
    stock: number;
    category: string;
    imageUrl?: string | undefined;
  }>;
};

export const CreateProductForm = ({
  createFormHandler,
  createProductForm,
}: FormFieldsCreateProductProps) => {
  return (
    <Form {...createProductForm}>
      <form
        onSubmit={createProductForm.handleSubmit((data) => {
          createFormHandler.mutate(data);
        })}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={createProductForm.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="flex gap-1">
                  <Tag size={18} /> Nome
                </FormLabel>
                <FormControl>
                  <Input placeholder="Insira o nome do produto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={createProductForm.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="flex gap-1">
                  <DollarSign size={18} /> Preço
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

        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={createProductForm.control}
            name="stock"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="flex gap-1">
                  <Package size={18} />
                  Estoque
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insira a quantidade disponível"
                    type="number"
                    value={field.value ?? ""}
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
            control={createProductForm.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="flex gap-1">
                  <Boxes size={18} /> Categoria
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
          control={createProductForm.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-1">
                <Image size={18} /> URL da imagem
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Insira a URL da imagem"
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
          control={createProductForm.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-1">
                <FileText size={18} /> Descrição
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
          className="mt-2 flex items-center gap-2"
          disabled={createFormHandler.isPending}
        >
          Adicionar produto <PlusCircle />
        </Button>
      </form>
    </Form>
  );
};
