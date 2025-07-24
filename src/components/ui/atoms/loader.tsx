import type { FC, ReactNode } from "react";
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
  // biome-ignore lint/style/useBlockStatements: <explanation>
  if (loading) return <>{fallback}</>;
  return <>{children}</>;
};
