import { Copyright } from "lucide-react";
import { Header } from "~/components/ui/organisms/header";
import "~/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-4 min-h-screen mb-0 flex flex-col">
      <Header />
      <div className="flex flex-col flex-grow flex-1">
        {children}
      </div>
      <footer className="p-4 mt-4 border-t flex gap-4 bottom-0 w-full justify-between text-accent-foreground/70">
        <span className="flex items-center gap-1">
          Trycess <Copyright size={12} />
        </span>
        <span>More features coming soon</span>
      </footer>
    </div>
  );
}
