import { Copyright } from "lucide-react";
import { Header } from "~/components/ui/organisms/header";
import "~/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="m-4 mb-0 min-h-[97dvh]">
      <Header />
      {children}
      <footer className="p-8 mt-4 border-t flex gap-4 bottom-0 w-full justify-between text-accent-foreground/70">
        <span className="flex items-center gap-1">
          Trycess <Copyright size={12} />
        </span>
        <span>More features coming soon</span>
      </footer>
    </div>
  );
}
