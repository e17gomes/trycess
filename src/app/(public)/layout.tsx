import type { Metadata } from "next";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Login Trycess ",
  description: "Gerenciador de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
