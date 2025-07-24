import { Skeleton } from "../atoms/skeleton";

export const TableLoader = () => {
  return (
    <div className="border p-6 rounded-lg space-y-4">
      <div className="flex w-full justify-between items-center">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-10 w-[200px] bg-purple-600/20" />
      </div>

      <div className="grid grid-cols-6 gap-4 py-3 border-b">
        <Skeleton className="h-4 w-[60px] " />
        <Skeleton className="h-4 w-[80px] " />
        <Skeleton className="h-4 w-[90px] " />
        <Skeleton className="h-4 w-[90px] " />
        <Skeleton className="h-4 w-[80px] " />
        <Skeleton className="h-4 w-[70px] " />
      </div>

      {Array.from({ length: 4 }).map((_, index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <>
          key={index}
          className="grid grid-cols-6 gap-4 py-4 items-center border-b border-accent last:border-b-0"
        >
          <div className="flex items-center space-x-3">
            <Skeleton className="h-12 w-12 rounded-full " />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[150px] " />
              <Skeleton className="h-3 w-[60px]" />
            </div>
          </div>

          <Skeleton className="h-4 w-[80px] " />

          {/* Stock Badge */}
          <Skeleton
            className={`h-6 w-[50px] rounded-full ${
              index === 0
                ? "bg-green-600/30"
                : index === 1
                  ? "bg-blue-600/30"
                  : index === 2
                    ? "bg-red-600/30"
                    : index === 3
                      ? "bg-blue-600/30"
                      : "bg-yellow-600/30"
            }`}
          />

          {/* Category */}
          <Skeleton className="h-4 w-[100px] " />

          {/* Description Icon */}
          <Skeleton className="h-5 w-5 rounded-full " />

          {/* Actions */}
          <div className="flex justify-end">
            <Skeleton className="h-6 w-6 " />
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t ">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-[120px] " />
          <Skeleton className="h-8 w-[50px] " />
        </div>

        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-[140px] " />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-[80px] " />
            <Skeleton className="h-8 w-[60px] " />
          </div>
        </div>
      </div>
    </div>
  );
};
