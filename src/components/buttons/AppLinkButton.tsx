"use client";

import Link, { LinkProps } from "next/link";
import { FocusEvent, MouseEvent, ReactNode, TouchEvent } from "react";
import { preloadImages } from "@/lib/images";

type AppLinkButtonProps = LinkProps & {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  prefetchImages?: string[];
  onMouseEnter?: (event: MouseEvent<HTMLAnchorElement>) => void;
  onFocus?: (event: FocusEvent<HTMLAnchorElement>) => void;
  onTouchStart?: (event: TouchEvent<HTMLAnchorElement>) => void;
};

const BASE_LINK_BUTTON_CLASS =
  "rounded-2xl text-white active:scale-95 transition cursor-pointer inline-flex items-center justify-center";

export default function AppLinkButton({
  children,
  className = "",
  disabled = false,
  onClick,
  onMouseEnter,
  onFocus,
  onTouchStart,
  prefetchImages,
  ...props
}: AppLinkButtonProps) {
  const handlePrefetch = () => {
    if (!prefetchImages || prefetchImages.length === 0) return;
    preloadImages(prefetchImages);
  };

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  };

  const handleMouseEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    handlePrefetch();
    onMouseEnter?.(event);
  };

  const handleFocus = (event: FocusEvent<HTMLAnchorElement>) => {
    handlePrefetch();
    onFocus?.(event);
  };

  const handleTouchStart = (event: TouchEvent<HTMLAnchorElement>) => {
    handlePrefetch();
    onTouchStart?.(event);
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
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      onTouchStart={handleTouchStart}
      {...props}
    >
      {children}
    </Link>
  );
}
