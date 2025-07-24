"use client";
import { LogOut, Settings, Settings2Icon, User2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "~/components/ui/atoms/dropdown-menu";
import { useLogout } from "~/hooks/useLogout";

export function DropDownNav() {
  const { handleLogout, isPending } = useLogout();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full w-10 h-10">
          <Settings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36" align="end">
        <DropdownMenuItem onClick={() => router.push("/user")}>
          <User2Icon className="mr-2 h-4 w-4" /> Perfil
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Settings2Icon /> Configurações
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleLogout()} disabled={isPending}>
          <LogOut color="red" /> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
