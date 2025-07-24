"use client";

import { AtSign, Eye, EyeOff, Lock, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "~/components/ui/atoms/button";
import { Input } from "~/components/ui/atoms/input";
import { useRegister } from "~/hooks/useRegister";
import { cn } from "~/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../atoms/form";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [showPassword, setShowPassword] = useState(false);

  const { registerForm, handleSubmitRegister, isPending } = useRegister();
  const router = useRouter();

  return (
    <Form {...registerForm}>
      <form
        onSubmit={registerForm.handleSubmit((data) =>
          handleSubmitRegister(data)
        )}
        className={cn("flex flex-col gap-6 w-10/12 m-auto", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Crie sua conta</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Insira seus dados para criar uma conta
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <FormField
            control={registerForm.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-1">
                  <User size={18} /> Nome Completo
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Seu nome completo"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={registerForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-1">
                  <AtSign size={18} /> Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Insira seu email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={registerForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password" className="flex items-center gap-1">
                  <Lock size={18} /> Senha
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Insira sua senha"
                      autoComplete="new-password"
                      {...field}
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute inset-y-0 right-2 flex items-center px-2 text-muted-foreground"
                      aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                      id="password-visibility-toggle"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={registerForm.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="confirmPassword" className="flex items-center gap-1">
                  <Lock size={18} /> Confirmar Senha
                </FormLabel>
                <FormControl>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirme sua senha"
                    autoComplete="new-password"
                    {...field}
                    className="pr-10"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" size="lg" disabled={isPending}>
          {isPending ? "Registrando..." : "Registrar"}
        </Button>
        <Button
          variant="ghost"
          onClick={() => router.push("/login")}
          className="underline underline-offset-4 cursor-pointer"
          type="button"
        >
          Já tem conta? clique aqui.
        </Button>
      </form>
    </Form>
  );
}
