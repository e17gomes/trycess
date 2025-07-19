import type { Metadata } from "next";
import {  } from "next/font/google";

export const metadata: Metadata = {
  title: "Estudando Next.js com Turbopack",
  description: "Estudando Next.js com Turbopack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
