"use client";

import type { ReactNode } from "react";

type CenteredCardProps = {
  children: ReactNode;
  className?: string;
  cardClassName?: string;
};

const BASE_WRAPPER_CLASS =
  "flex flex-col justify-center items-center min-h-screen px-4  ";
const BASE_CARD_CLASS =
  "w-full max-w-[550px] min-h-[45vh] sm:h-[670px] rounded-3xl sm:rounded-4xl bg-rose-50    shadow-lg";

export default function CenteredCard({
  children,
  className = "",
  cardClassName = "",
}: CenteredCardProps) {
  return (
    <div className={[BASE_WRAPPER_CLASS, className].filter(Boolean).join(" ")}>
      <div className={[BASE_CARD_CLASS, cardClassName].filter(Boolean).join(" ")}>
        {children}
      </div>
    </div>
  );
}

