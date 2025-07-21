import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { fakeRequestTime } from "~/utils/fakeRequestTime";
import { authManager } from "~/api/authApi";
import z from "zod";
import { useRouter } from "next/navigation";

export const useRegister = () => {
  const router = useRouter();
  const registerSchema = z
    .object({
      fullName: z.string().min(2, "Informe seu nome completo"),
      email: z.string().email("Email inválido"),
      password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
      confirmPassword: z.string().min(6, "Confirme sua senha"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "As senhas não conferem",
      path: ["confirmPassword"],
    });

  type RegisterUserType = z.infer<typeof registerSchema>;
  const registerForm = useForm<RegisterUserType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    criteriaMode: "firstError",
  });

  const { mutate: handleSubmitRegister, isPending } = useMutation({
    mutationKey: ["submitRegister"],
    mutationFn: async (formValues: RegisterUserType) => {
      await fakeRequestTime;
      const response = await authManager.register(
        formValues.fullName,
        formValues.email,
        formValues.password,
        formValues.confirmPassword,
      );
      return response;
    },

    onMutate() {
      const toastId = toast.loading("Registrando usuário...");
      return { toastId };
    },

    onSuccess(_data, variable, context) {
      context.toastId && toast.dismiss(context.toastId);
      toast.success(
        "No momento nossos dados são mockados, mas valeu a tentativa " +
          variable.fullName +
          "!",
        { style: { height: 100 } },
      );

      //só para ver se o middleware tá bom de verdade kkkk
      router.push("/dashboard");
    },

    onError(error, _variable, context) {
      context?.toastId && toast.dismiss(context.toastId);
      toast.error(error.message || "Erro ao registrar usuário");
    },
  });

  return {
    registerForm,
    handleSubmitRegister,
    isPending,
  };
};
