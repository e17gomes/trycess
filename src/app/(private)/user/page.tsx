"use client";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeftIcon, Mail, UserCircle, Hash, Package, PackageOpen, DollarSign } from "lucide-react";
import Link from "next/link";
import { productManager } from "~/api/productsApi";
import { Button } from "~/components/ui/atoms/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/atoms/card";
import { useAuthContext } from "~/contexts/AuthContext";

const UserPage = () => {
  const { user } = useAuthContext();

  const { data: products, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await productManager.getAllProducts()
      console.log(response)
      return response
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <Button variant={"outline"} size={"icon"} asChild>
        <Link href={"/dashboard"}>
          <ArrowLeftIcon />
        </Link>
      </Button>

      <Card className="w-full max-w-2xl h-96 mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <UserCircle className="w-6 h-6" />
            Perfil do Usuário
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground flex flex-col  items-start">
          <div className="flex items-center gap-2">
            <Hash className="w-4 h-4 text-primary" />
            <span>
              <strong>ID:</strong> {user?.id}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <UserCircle className="w-4 h-4 text-primary" />
            <span>
              <strong>Nome:</strong> {user?.name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>
              <strong>Email:</strong> {user?.email}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-primary" />
            <span>
              <strong>Produtos cadastrados:</strong> {isFetching ?  "Carregando..." : products?.length }
            </span>
          </div>

          <div className="flex items-center gap-2">
            <PackageOpen className="w-4 h-4 text-primary" />
            <span>
              <strong>Produtos em estoque:</strong> {isFetching ?  "Carregando..." : products?.reduce((total, product) => total + product.stock, 0)} 
            </span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-primary" />
            <span>
              <strong>Valor em produtos:</strong> {isFetching ?  "Carregando..." : products?.reduce((total, product) => total + Number(product.price), 0)} 
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserPage;
