import { LogOut, UserCircle } from "lucide-react";
import { Button } from "~/components/ui/atoms/button";
import { ModeToggle } from "~/components/ui/molecules/modeToggle";
import { useLogout } from "~/hooks/useLogout";
import LogOutButton from "../molecules/logoutButton";

export const Header = () => {
    return(
    <div className="bg-accent rounded-full p-4 mb-4 flex items-center justify-between">
        <div className="">
          <ModeToggle />
        </div>
        <div>
          <h1 className="font-bold text-2xl"> TRYCESS </h1>
        </div>
        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost" className="rounded-full">
            <UserCircle />
          </Button>
          <LogOutButton/>
        </div>
      </div>
)
}