import { ButtonHTMLAttributes, ReactNode } from "react";

type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const BASE_BUTTON_CLASS =
  "rounded-2xl text-white active:scale-95 transition cursor-pointer disabled:cursor-not-allowed";

export default function AppButton({
  children,
  className = "",
  ...props
}: AppButtonProps) {
  return (
    <button className={`${BASE_BUTTON_CLASS} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
