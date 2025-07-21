
import { Header } from "~/components/ui/organisms/header";
import "~/styles/globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="m-4 min-h-screen">
      <Header />
      {children}
    </div>
  );
}
