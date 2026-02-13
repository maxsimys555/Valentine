"use client";

import type { ReactNode } from "react";

type CenteredCardProps = {
  children: ReactNode;
  className?: string;
  cardClassName?: string;
};

const BASE_WRAPPER_CLASS = "flex flex-col justify-center items-center h-screen";
const BASE_CARD_CLASS = "w-145 h-170 rounded-4xl bg-rose-50";

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

