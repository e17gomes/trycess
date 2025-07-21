import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authManager } from "~/api/authApi";

export const useLogout = () => {
  const router = useRouter();

  const { mutate: handleLogout, isPending } = useMutation({
    mutationKey: ["submitLogin"],
    mutationFn: async () => {
      const response = await authManager.logout();
      return response;
    },
    onMutate() {
      const toastId = toast.loading("Saindo...");
      return { toastId };
    },
    onSuccess(_data, _variable, context) {
      context.toastId && toast?.dismiss(context?.toastId);
      toast.success("Até breve !");
      router.push("/login");
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
