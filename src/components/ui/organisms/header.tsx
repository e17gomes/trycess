import { UserCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/atoms/button";
import { ModeToggle } from "~/components/ui/molecules/modeToggle";
import LogOutButton from "../molecules/logoutButton";

export const Header = () => {
  return (
    <div className="bg-accent rounded-full py-2 px-4 my-4 flex items-center justify-between top-1">
      <div>
        <ModeToggle />
      </div>
      <div>
        <h1
          className=" border px-4 rounded-full shadow-accent-foreground/30 shadow-sm text-2xl font-bold tracking-tight text-primary   transition-all duration-300 ease-in-out
          hover:bg-accent hover:text-accent-foreground hover:shadow-md
          cursor-pointer"
        >
          TRY<span className="text-muted-foreground">CESS</span>
        </h1>
      </div>
      <div className="flex items-center gap-4 ">
        <Button
          size="icon"
          className=" rounded-full bg-accent-foreground/30 w-8 h-8 flex items-center justify-center"
          asChild
        >
          <Link href={"/user"}>
            <UserCircle />
          </Link>
        </Button>
        <LogOutButton />
      </div>
    </div>
  );
};
