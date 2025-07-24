"use client";

import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeftIcon,
  DollarSign,
  Hash,
  Mail,
  Package,
  PackageOpen,
  UserCircle,
} from "lucide-react";
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
import { masks } from "~/utils/inputMasks";

const UserPage = () => {
  const { user } = useAuthContext();

  const { data: products, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await productManager.getAllProducts();
      console.log(response);
      return response;
    },
  });
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 bg-background text-foreground">
      <div className="w-full max-w-3xl mb-8">
        <Button
          variant={"outline"}
          size={"icon"}
          asChild
          className="rounded-full border-border text-foreground hover:bg-accent hover:text-accent-foreground shadow-sm transition-all duration-200"
        >
          <Link href={"/dashboard"}>
            <ArrowLeftIcon className="w-5 h-5" />
          </Link>
        </Button>
      </div>

      <Card className="w-full max-w-3xl shadow-2xl bg-card text-card-foreground rounded-lg overflow-hidden">
        <CardHeader className="border-b border-border pb-6 pt-8 px-8 bg-primary/5">
          <CardTitle className="flex items-center gap-3 text-3xl font-bold text-primary">
            <UserCircle className="w-8 h-8" />
            Perfil do Usuário
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6 text-base">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-md bg-muted/30 hover:bg-muted transition-colors duration-200">
              <Hash className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">
                ID:{" "}
                <span className="font-normal text-muted-foreground">
                  {user?.id}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-md bg-muted/30 hover:bg-muted transition-colors duration-200">
              <UserCircle className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">
                Nome:{" "}
                <span className="font-normal text-muted-foreground">
                  {user?.name}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-md bg-muted/30 hover:bg-muted transition-colors duration-200">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">
                Email:{" "}
                <span className="font-normal text-muted-foreground">
                  {user?.email}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-md bg-muted/30 hover:bg-muted transition-colors duration-200">
              <Package className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">
                Produtos cadastrados:{" "}
                <span className="font-normal text-muted-foreground">
                  {isFetching ? "Carregando..." : products?.length}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-md bg-muted/30 hover:bg-muted transition-colors duration-200">
              <PackageOpen className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">
                Produtos em estoque:{" "}
                <span className="font-normal text-muted-foreground">
                  {isFetching
                    ? "Carregando..."
                    : products?.reduce(
                        (total, product) => total + product.stock,
                        0,
                      )}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-md bg-muted/30 hover:bg-muted transition-colors duration-200">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">
                Valor em produtos:{" "}
                <span className="font-normal text-muted-foreground">
                  {isFetching
                    ? "Carregando..."
                    : products
                        ?.reduce(
                          (total, product) =>
                            total + masks.parsePrice(product.price),
                          0,
                        )
                        .toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                </span>
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserPage;
