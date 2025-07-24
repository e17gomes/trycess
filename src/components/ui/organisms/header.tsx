import { ModeToggle } from "~/components/ui/molecules/modeToggle";
import { DropDownNav } from "../molecules/dropdownNav";
import { SquareDashedKanban } from "lucide-react";

export const Header = () => {
  return (
    <div className="p-4 flex items-center justify-between top-0 sticky border-b shadow-md shadow-accent-foreground/10 backdrop-blur-2xl">
      <div>
        <h1
          className="border- px-4 text-2xl font-bold tracking-tight primary-foreground transition-all duration-300 ease-in-out
          
          cursor-pointer flex items-center"
        >
          <SquareDashedKanban size={32} className="mr-2" />
          Try
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Cess
          </span>
        </h1>
      </div>
      <div className="flex items-center gap-4 ">
        <ModeToggle />
        <DropDownNav />
      </div>
    </div>
  );
};
