"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
	PlusCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { productManager } from "~/api/productsApi";
import { queryClient } from "~/lib/tanstack-query";
import { createProductSchema } from "~/schemas/productSchema";
import type { CreateProduct, Product } from "~/types/productsType";
import { resetOnCloseHandler } from "~/utils/resetCloseHandler";
import { Button } from "../atoms/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	handleCloseDialog,
} from "../atoms/dialog";
import { CreateProductForm } from "./formCreateProduct";

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

	const createProductHandler = useMutation({
		mutationKey: ["AddProductMutate"],
		mutationFn: async (newProductData: CreateProduct) => {
			const response = await productManager.createProduct(newProductData);
			return response;
		},
		onMutate() {
			const toastId = toast.loading("Criando produto...");
			return { toastId };
		},
		onSuccess(_data, _v, context) {
			context?.toastId && toast.dismiss(context?.toastId);
			toast.success("Produto adicionado");
			handleCloseDialog();
			queryClient.invalidateQueries({ queryKey: ["GetAllProducts"] });
			createProductForm.reset();
		},
		onError(error, _v, context) {
			context?.toastId && toast.dismiss(context?.toastId);
			console.error(error.message);
			toast.error("Erro ao adicionar produto");
		},
	});

	return (
		<Dialog onOpenChange={resetOnCloseHandler(createProductForm)}>
			<DialogTrigger asChild>
				<Button
					className=" mx-7 bg-chart-1 hover:bg-chart-1/80 p-4 w-fit px-8"
					size={"sm"}
				>
					<PlusCircle /> Adicionar novo produto
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold">
						Criar produto
					</DialogTitle>
					<DialogDescription>
						Insira as informações do produto
					</DialogDescription>
				</DialogHeader>
			<CreateProductForm createFormHandler={createProductHandler} createProductForm={createProductForm}/>
			</DialogContent>
		</Dialog>
	);
};

export default AddProduct;
