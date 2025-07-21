import { UserCircle } from "lucide-react";
import { Button } from "~/components/ui/atoms/button";
import { ModeToggle } from "~/components/ui/molecules/modeToggle";
import LogOutButton from "../molecules/logoutButton";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-accent rounded-full p-4 mb-4 flex items-center justify-between">
      <div className="">
        <ModeToggle />
      </div>
      <div>
        <h1 className="font-bold text-2xl"> TRYCESS </h1>
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
