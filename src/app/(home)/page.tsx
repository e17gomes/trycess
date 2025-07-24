import Link from "next/link";
import { Button } from "~/components/ui/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/atoms/card";
import { Sparkles, LogIn, UserPlus, SquareDashedKanban } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-background flex items-center justify-center p-4 transition-colors">
      <div className=" space-y-8 w-full text-center">
        <div className="space-y-4">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="relative bg-gradient-to-br from-primary to-secondary rounded-full p-6 shadow-lg">
              <SquareDashedKanban className="w-24 h-24" color="white" />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <h1 className="text-5xl font-bold tracking-tight primary-foreground transition-all duration-300 ease-in-out cursor-pointer flex items-center text-center">
              Try
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Cess
              </span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Escolha uma opção para continuar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="bg-card text-card-foreground backdrop-blur-sm shadow-2xl border border-border hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary rounded-full p-3 w-fit mb-2">
                <LogIn className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl font-bold">Fazer Login</CardTitle>
              <CardDescription className="text-muted-foreground">
                Já possui uma conta? Acesse aqui
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/login">
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  Entrar
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground backdrop-blur-sm shadow-2xl border border-border hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary rounded-full p-3 w-fit mb-2">
                <UserPlus className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl font-bold">Criar Conta</CardTitle>
              <CardDescription className="text-muted-foreground">
                Novo por aqui? Registre-se agora
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/register">
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  Registrar
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
