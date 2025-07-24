import { Label } from "../atoms/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../atoms/select";

type PageSizeSelectorProps = {
  value: number;
  onChange: (value: number) => void;
  options?: number[];
};

export function PageSizeSelector({
  value,
  onChange,
  options = [5, 10, 20, 50],
}: PageSizeSelectorProps) {
  return (
    <div className="flex w-full  items-center gap-8 lg:w-fit">
            <div className="hidden items-center gap-2 lg:flex flex-col">
              <Label htmlFor="rows-per-page" className="text-sm font-medium text-muted-foreground/40">
                Itens por página
              </Label>
              <Select
                value={`${value}`}
                onValueChange={(value) => {
                  onChange(Number(value))
                }}
              >
                <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                  <SelectValue
                    placeholder={value}
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  {options.map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
   </div>         
    
    //     id="page-size"
    //     value={value}
    //     onChange={(e) => onChange(Number(e.target.value))}
    //     className="text-accent-foreground/70 border border-border bg-accent p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
    //   >
    //     {options.map((size) => (
    //       <option
    //         key={size}
    //         value={size}
    //         className="bg-background text-foreground hover:bg-muted"
    //       >
    //         {size} por página
    //       </option>
    //     ))}
    //   </select>
    // </div>
  );
}
