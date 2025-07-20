import { Loader2Icon } from "lucide-react";
import { FC, ReactNode } from "react";
import Loading from "~/app/loading";

interface LoaderProps {
  loading: boolean;
  fallback?: ReactNode;
  children: ReactNode;
}

export const Loader: FC<LoaderProps> = ({
  loading,
  fallback = <Loading />,
  children,
}) => {
  if (loading) return <>{fallback}</>;
  return <>{children}</>;
};
