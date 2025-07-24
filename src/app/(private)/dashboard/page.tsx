import { ProductsTable } from "./_components/products_table";

const DashboardPage = () => {
  return (
    <div className="min-h-[30rem] max-h-[50rem] overflow-auto py-4 flex flex-col gap-4">
      <div className="flex flex-col text-start px-5">
        <h1 className="text-4xl font-bold  flex items-center gap-2 ">
          Meus Produtos
        </h1>
          <span className="text-muted-foreground text-sm">
            Gerencie seu inventário de itens
          </span>
      </div>
      <ProductsTable />
    </div>
  );
};

export default DashboardPage;
