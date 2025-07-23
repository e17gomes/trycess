import { LogOut, Settings, Settings2Icon, User2Icon } from "lucide-react"
import { Button } from "~/components/ui/atoms/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "~/components/ui/atoms/dropdown-menu"

export function DropDownNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full w-10 h-10"><Settings/></Button>
      </DropdownMenuTrigger >
      <DropdownMenuContent className="w-36" align="end">
        <DropdownMenuItem>
          <User2Icon className="mr-2 h-4 w-4" />  Perfil
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Settings2Icon/> Configurações
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut color="red"/> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
