"use client";
import { AtSign, Eye, EyeOff, Lock, Mail, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "~/components/ui/atoms/button";
import { Input } from "~/components/ui/atoms/input";
import { useLogin } from "~/hooks/useLogin";
import { cn } from "~/lib/utils";
import { Card, CardContent } from "../atoms/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../atoms/form";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [showPassword, setShowPassword] = useState(false);

  const { loginForm, handleSubmitLogin, isPending } = useLogin();
  const router = useRouter();
  return (
    <Form {...loginForm}>
      <form
        onSubmit={loginForm.handleSubmit((data) => handleSubmitLogin(data))}
        className={cn("flex flex-col gap-6 w-10/12 m-auto", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Bem vindo</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Insira o suas credenciais para acessar o sistema.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1">
                    {" "}
                    <AtSign size={18} /> Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Insira aqui seu email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel
                      htmlFor="password"
                      className="flex items-center gap-1"
                    >
                      <Lock size={18} /> Senha
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Insira aqui sua senha"
                          autoComplete="current-password"
                          {...field}
                          className="pr-10"
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute inset-y-0 right-2 flex items-center px-2 text-muted-foreground"
                          aria-label={
                            showPassword ? "Ocultar senha" : "Mostrar senha"
                          }
                          id="password-visibility-toggle"
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <Button type="submit" size={"lg"} disabled={isPending}>
            Login
          </Button>
        </div>
        <div className="text-center text-sm">
          <Button
            variant={"ghost"}
            onClick={() => router.push("/register")}
            className="underline underline-offset-4 cursor-pointer"
            type="button"
          >
            Registre-se
          </Button>
        </div>
        <Card className="bg-slate-800/30 border-slate-700">
          <CardContent>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-accent-foreground">
                Credenciais de Demonstração
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-accent-foreground">
                <Mail className="h-3 w-3" />
                <span className="font-mono">user@test.com</span>
              </div>
              <div className="flex items-center gap-2 text-accent-foreground">
                <Lock className="h-3 w-3" />
                <span className="font-mono">password</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
