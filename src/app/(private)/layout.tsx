import { Copyright } from "lucide-react";
import { Header } from "~/components/ui/organisms/header";
import "~/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 overflow-auto px-4 min-h-[90dvh]">
        {children}
      </main>
        <footer className="p-4 border-t flex gap-4 justify-between text-accent-foreground/70">
          <span className="flex items-center gap-1">
            Trycess <Copyright size={12} />
          </span>
          <span>More features coming soon</span>
        </footer>
    </div>
  );
}
