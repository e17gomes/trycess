"use client";

import { Card, CardContent, CardTitle } from "~/components/ui/atoms/card";
import { ProductsTable } from "./_components/products_table";

const DashboardPage = () => {
  return (
    <Card className="min-h-[30rem] max-h-[50rem] overflow-auto py-4">
      <CardTitle className="text-2xl font-bold px-8 ">Meus produtos</CardTitle>

      <CardContent>
        <ProductsTable />
      </CardContent>
    </Card>
  );
};

export default DashboardPage;
