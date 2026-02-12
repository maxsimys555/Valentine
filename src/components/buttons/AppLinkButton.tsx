import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type AppLinkButtonProps = LinkProps & {
  children: ReactNode;
  className?: string;
};

const BASE_LINK_BUTTON_CLASS =
  "rounded-2xl text-white active:scale-95 transition cursor-pointer inline-flex items-center justify-center";

export default function AppLinkButton({
  children,
  className = "",
  ...props
}: AppLinkButtonProps) {
  return (
    <Link className={`${BASE_LINK_BUTTON_CLASS} ${className}`.trim()} {...props}>
      {children}
    </Link>
  );
}
