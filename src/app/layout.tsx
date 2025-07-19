import type { Metadata } from "next";
import {  } from "next/font/google";
import "./styles/globals.css"
import { ThemeProvider } from "~/components/theme-provider";
import { Toaster } from "react-hot-toast";
import { ModeToggle } from "~/components/ui/molecules/modeToggle";

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
    <html lang="en" suppressHydrationWarning>
      <body
       className={`antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <ModeToggle/>
          {children}
          <Toaster position="top-right" toastOptions={{
            duration: 3000
          }}/>
          </ThemeProvider>
      </body>
    </html>
  );
}
