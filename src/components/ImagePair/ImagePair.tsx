"use client";

import { useState } from "react";
import Image from "next/image";

type ImagePairProps = {
  leftSrc: string;
  rightSrc: string;
  className?: string;
  leftAlt?: string;
  rightAlt?: string;
  priority?: boolean;
  sync?: boolean;
};

const IMAGE_SIZES = "(min-width: 1024px) 150px, (min-width: 640px) 128px, 96px";
const IMAGE_CLASS_NAME = "w-24 h-24 sm:w-32 sm:h-32 lg:w-[150px] lg:h-[150px] object-contain";

export default function ImagePair({
  leftSrc,
  rightSrc,
  className = "",
  leftAlt = "emoji",
  rightAlt = "emoji",
  priority = false,
  sync = true,
}: ImagePairProps) {
  const [loadedCount, setLoadedCount] = useState(0);
  const isReady = !sync || loadedCount >= 2;
  const handleLoad = () => {
    setLoadedCount((count) => (count < 2 ? count + 1 : count));
  };

  return (
    <div className={["flex justify-between", className].filter(Boolean).join(" ")}>
      <Image
        src={leftSrc}
        alt={leftAlt}
        width={150}
        height={150}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        priority={priority}
        sizes={IMAGE_SIZES}
        quality={70}
        onLoadingComplete={handleLoad}
        className={[
          IMAGE_CLASS_NAME,
          "transition-opacity duration-150",
          isReady ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />
      <Image
        src={rightSrc}
        alt={rightAlt}
        width={150}
        height={150}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        priority={priority}
        sizes={IMAGE_SIZES}
        quality={70}
        onLoadingComplete={handleLoad}
        className={[
          IMAGE_CLASS_NAME,
          "transition-opacity duration-150",
          isReady ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />
    </div>
  );
}
