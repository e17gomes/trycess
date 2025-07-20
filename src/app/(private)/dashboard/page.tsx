"use client";
import { useQuery } from "@tanstack/react-query";
import { Loader2Icon, PlusCircle } from "lucide-react";
import { Suspense } from "react";
import { productManager } from "~/api/productsApi";
import { Button } from "~/components/ui/atoms/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/atoms/card";
import { Loader } from "~/components/ui/atoms/loader";
import AddProduct from "~/components/ui/molecules/addProduct";
import { ProductsTable } from "./_components/products_table";

const DashboardPage = () => {
  return (
    <Card className="min-h-[45rem] max-h-[50rem] overflow-auto">
      <CardTitle className="text-4xl font-bold text-center">
        Meus produtos
      </CardTitle>
      <AddProduct />

      <CardContent>
        <ProductsTable />
      </CardContent>
    </Card>
  );
};

export default DashboardPage;
