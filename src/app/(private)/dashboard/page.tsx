"use client";

import { Card, CardContent, CardTitle } from "~/components/ui/atoms/card";
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
