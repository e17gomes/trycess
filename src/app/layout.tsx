import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "~/styles/globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Trycess",
  description: "Gerenciador de produtos",
  icons: "/favicon.jpg"
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
