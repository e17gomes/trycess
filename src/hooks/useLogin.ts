import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authManager } from "~/api/authApi";
import type { loginType } from "~/types/loginType";
import { loginSchema } from "../schemas/loginSchema";

export const useLogin = () => {
  const router = useRouter();
  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    criteriaMode: "firstError",
  });

  const { mutate: handleSubmitLogin, isPending } = useMutation({
    mutationKey: ["submitLogin"],
    mutationFn: async (formValues: loginType) => {
      const { email, password } = formValues;
      const response = await authManager.login(email, password);
      return response;
    },

    onMutate() {
      const toastId = toast.loading("Verificando credenciais...");
      return { toastId };
    },

    onSuccess(data, _variable, context) {
      context.toastId && toast?.dismiss(context?.toastId);
      // biome-ignore lint/suspicious/noDocumentCookie: <>
      document.cookie = `tkn=mocked_token_value; path=/;`;
      localStorage.setItem("loggedInUser", JSON.stringify(data));
      router.push("/dashboard");
      toast.success("Bem vindo " + data?.name + "!");
    },

    onError(error, _variable, context) {
      context?.toastId && toast.dismiss(context.toastId);
      toast.error(error.message || "Credenciais inválidas");
    },
  });

  return {
    loginForm,
    handleSubmitLogin,
    isPending,
  };
};
