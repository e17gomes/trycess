"use client";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/atoms/button";
import { Input } from "~/components/ui/atoms/input";
import { Label } from "~/components/ui/atoms/label";
import { useLogin } from "~/hooks/useLogin";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../atoms/form";
import { Card, CardDescription, CardTitle } from "../atoms/card";
import { useState } from "react";
import { AtSign, Eye, EyeOff, Lock, Stars } from "lucide-react";
import { useRouter } from "next/navigation";

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
          <h1 className="text-2xl font-bold">Entre na sua conta</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Insira o seu email e senha abaixo
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
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
                    <FormLabel htmlFor="password">Senha</FormLabel>
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
          <Button variant={"ghost"}
            onClick={() => router.push("/register")}
            className="underline underline-offset-4 cursor-pointer"
          >
            Registre-se
          </Button>
        </div>
        <Card className="bg-chart-1 p-4 w-64 ">
          <CardTitle className="flex gap-1 items-center">
            <Stars /> Credenciais para teste:
          </CardTitle>
          <CardDescription className="text-card-foreground flex flex-col gap-1">
            <span className="flex gap-1 items-center">
              <AtSign size={20} />
              user@test.com
            </span>
            <span className="flex gap-1 items-center">
              <Lock size={20} /> password
            </span>
          </CardDescription>
        </Card>
      </form>
    </Form>
  );
}
