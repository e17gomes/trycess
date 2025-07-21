import Link from "next/link";
import { Button } from "~/components/ui/atoms/button";
import { Card } from "~/components/ui/atoms/card";
import { CurlyBraces, ExternalLink, Github } from "lucide-react"; 

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 gap-6 bg-gradient-to-br from-accent via-foreground to-accent">
      <Card className="w-full max-w-lg p-8 h-[28rem] shadow-lg">
        <h1 className="flex items-center justify-center text-4xl font-bold mb-4 text-accent-foreground animate-pulse">
          <CurlyBraces className="w-8 h-8 mr-3 text-accent-foreground" />
          TRYCESS
        </h1>
        <p className="text-center text-accent-foreground mb-8 text-lg">
          Gerenciador simples e eficiente de produtos
        </p>

        <div className="flex justify-center flex-col items-center gap-4">
          <Link href="/login" passHref>
            <Button size={"lg"} className="text-lg flex items-center p-6 w-64">Login  <ExternalLink /></Button>
          </Link>
          <Link href="https://github.com/e17gomes/trycess" target="_blank" rel="noopener noreferrer">
            <Button size={"lg"} variant={"outline"} className="text-lg flex items-center p-6 w-64">Meu código  <Github /></Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
