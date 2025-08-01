import type { JSX } from "react";

type SpinnerProps = {
  className?: string;
  size?: number;
};

export function LoadingComponent({
  className = "",
  size = 32,
}: SpinnerProps): JSX.Element {
  return (
    <svg
      className={`animate-spin text-primary ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role="status"
      aria-label="loading"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}
