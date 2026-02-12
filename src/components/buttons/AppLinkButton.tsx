import Link, { LinkProps } from "next/link";
import { MouseEvent, ReactNode } from "react";

type AppLinkButtonProps = LinkProps & {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

const BASE_LINK_BUTTON_CLASS =
  "rounded-2xl text-white active:scale-95 transition cursor-pointer inline-flex items-center justify-center";

export default function AppLinkButton({
  children,
  className = "",
  disabled = false,
  onClick,
  ...props
}: AppLinkButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  };

  return (
    <Link
      className={[
        BASE_LINK_BUTTON_CLASS,
        disabled ? "pointer-events-none opacity-50" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
