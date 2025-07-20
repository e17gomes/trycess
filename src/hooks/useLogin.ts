import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { validCredentials } from "~/data/mockUsers";
import { loginType } from "~/types/loginType";
import { fakeRequestTime } from "~/utils/fakeRequestTime";
import { loginSchema } from "../schemas/loginSchema";

export const useLogin = () => {
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
      await fakeRequestTime;
      function verifyUser() {
        const user = validCredentials.find(
          (user) =>
            user.email === formValues.email &&
            user.password === formValues.password
        );
        if (user) {
          return true;
        }
        throw new Error("Credenciais inválidas");
      }
      const response = verifyUser();
      return response;
    },

    onMutate() {
      const toastId = toast.loading("Verificando credenciais...");
      return { toastId };
    },

    onSuccess(_data, variable, context) {
      context.toastId && toast?.dismiss(context?.toastId);
      document.cookie = `tkn=mocked_token_value; path=/;`;
      window.location.href = "/dashboard";
      toast.success("Bem vindo " + variable.email + "!");
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
