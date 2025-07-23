import { ModeToggle } from "~/components/ui/molecules/modeToggle";
import { DropDownNav } from "../molecules/dropdownNav";
import { SquareDashedKanban } from "lucide-react";

export const Header = () => {
  return (
    <div className="p-4 mb-4 flex items-center justify-between top-0 sticky border-b bg-white dark:bg-black/60 backdrop-blur-md ">
      <div>
        <h1
          className="border-b px-4 text-2xl font-bold tracking-tight text-primary   transition-all duration-300 ease-in-out
          hover:text-accent-foreground hover:shadow-md
          cursor-pointer flex items-center" 
        >
          <SquareDashedKanban className="mr-2"/>
          Trys
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Cess
          </span>
        </h1>
      </div>
      <div className="flex items-center gap-4 ">
        <ModeToggle />
        <DropDownNav/>
      </div>
    </div>
  );
};
