import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useLogout = () => {
  const { mutate: handleLogout, isPending } = useMutation({
    mutationKey: ["submitLogin"],
    mutationFn: async () => {
      const response = { success: true };
      return response;
    },
    onMutate() {
      const toastId = toast.loading("Saindo...");
      return { toastId };
    },
    onSuccess(_data, _variable, context) {
      context.toastId && toast?.dismiss(context?.toastId);
      document.cookie = "tkn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      window.location.href = "/login";
      toast.success("Até breve !");
    },
    onError(error, _variable, context) {
      context?.toastId && toast.dismiss(context.toastId);
      toast.error(error.message || "Erro ao fazer LogOut");
    },
  });

  return {
    handleLogout,
    isPending,
  };
};
