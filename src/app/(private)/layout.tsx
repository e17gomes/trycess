
import type { Metadata } from "next";
import { Header } from "~/components/ui/organisms/header";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Trycess",
  description: "Gerenciador de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="m-4">
      <Header />
      {children}
    </div>
  );
}
