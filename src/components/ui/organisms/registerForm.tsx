"use client";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/atoms/button";
import { Input } from "~/components/ui/atoms/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../atoms/form";
import { Eye, EyeOff } from "lucide-react";
import { useRegister } from "~/hooks/useRegister";
import { useRouter } from "next/navigation";

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
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Seu nome completo"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Insira seu email"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={registerForm.control}
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
                        placeholder="Insira sua senha"
                        autoComplete="new-password"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
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

          <FormField
            control={registerForm.control}
            name="confirmPassword"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel htmlFor="confirmPassword">
                    Confirmar Senha
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={"password"}
                        placeholder="Confirme sua senha"
                        autoComplete="new-password"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                        className="pr-10"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>

        <Button type="submit" size="lg" disabled={isPending}>
          {isPending ? "Registrando..." : "Registrar"}
        </Button>
        <span
          onClick={() => router.push("/login")}
          className="underline underline-offset-4 cursor-pointer"
        >
          Já tem conta? clique aqui.{" "}
        </span>
      </form>
    </Form>
  );
}
