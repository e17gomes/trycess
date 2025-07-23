"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
	DollarSign,
	FileText,
	Image,
	ListTree,
	Package,
	PlusCircle,
	Tag,
} from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { productManager } from "~/api/productsApi";
import { categories } from "~/data/categories";
import { queryClient } from "~/lib/tanstack-query";
import { createProductSchema } from "~/schemas/productSchema";
import type { CreateProduct, Product } from "~/types/productsType";
import { masks } from "~/utils/inputMasks";
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
					className=" mx-7 p-4 text- w-fit px-8"
					size={"sm"}
					variant={"outline"}
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
				<Form {...createProductForm}>
					<form
						onSubmit={createProductForm.handleSubmit((data) => {
							createProduct(data);
						})}
						className=" flex flex-col gap-4"
					>
						<div className="flex items-center gap-4">
							<FormField
								control={createProductForm.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="flex gap-1">
											<Tag size={18} /> Nome
										</FormLabel>
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

							<FormField
								control={createProductForm.control}
								name="price"
								render={({ field }) => (
									<FormItem>
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
						<div className="flex gap-4">
							<FormField
								control={createProductForm.control}
								name="stock"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="flex gap-1">
											<Package size={18} />
											Estoque
										</FormLabel>
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
								control={createProductForm.control}
								name="category"
								render={({ field }) => (
									<FormItem className="flex flex-col flex-1">
										<FormLabel>
											{" "}
											<ListTree size={18} /> Categoria
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
						<div>
							<FormField
								control={createProductForm.control}
								name="imageUrl"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											<Image size={18} /> Url da imagem
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
						</div>
						<div>
							<FormField
								control={createProductForm.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											{" "}
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
