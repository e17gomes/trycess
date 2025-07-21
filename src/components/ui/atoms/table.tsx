"use client";

import * as React from "react";

import { cn } from "~/lib/utils";

type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  internDivClassName?: string;
};
function Table({ className, internDivClassName, ...props }: TableProps) {
  return (
    <div
      data-slot="table-container"
      className={cn("relative w-full overflow-x-auto", internDivClassName)}
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className,
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
}

type PageSizeSelectorProps = {
  value: number;
  onChange: (value: number) => void;
  options?: number[];
};

function PageSizeSelector({
  value,
  onChange,
  options = [5, 10, 20, 50],
}: PageSizeSelectorProps) {
  return (
    <div className="inline-flex flex-col gap-1 mt-3">
      <label htmlFor="page-size" className="text-sm text-muted-foreground">
        Linhas por página
      </label>
      <select
        id="page-size"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="text-accent-foreground/70 border border-border bg-accent p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
      >
        {options.map((size) => (
          <option
            key={size}
            value={size}
            className="bg-background text-foreground hover:bg-muted"
          >
            {size} por página
          </option>
        ))}
      </select>
    </div>
  );
}

import { Button } from "~/components/ui/atoms/button";

type TablePaginationControlsProps = {
  totalItems: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

function TablePaginationControls({
  totalItems,
  canPreviousPage,
  canNextPage,
  onPrevious,
  onNext,
}: TablePaginationControlsProps) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center py-4">
      <div className="text-sm text-foreground/50">
        Total de produtos: {totalItems}
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onPrevious}
          disabled={!canPreviousPage}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onNext}
          disabled={!canNextPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  PageSizeSelector,
  TablePaginationControls,
};
