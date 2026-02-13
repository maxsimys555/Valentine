"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ProgressiveImageProps = {
  sources: string[];
  alt: string;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  quality?: number;
  className?: string;
  wrapClassName?: string;
  onStageChange?: (stage: number) => void;
  visibleStage?: number;
};

export default function ProgressiveImage({
  sources,
  alt,
  priority = false,
  sizes,
  width = 150,
  height = 150,
  quality = 70,
  className = "w-full h-full object-contain",
  wrapClassName = "relative",
  onStageChange,
  visibleStage,
}: ProgressiveImageProps) {
  const [loadedStage, setLoadedStage] = useState(-1);
  const [maxRequestedIndex, setMaxRequestedIndex] = useState(0);

  useEffect(() => {
    onStageChange?.(loadedStage);
  }, [loadedStage, onStageChange]);

  if (!sources || sources.length === 0) return null;

  const stageToShow = visibleStage ?? loadedStage;
  const resolvedStageToShow = stageToShow < 0 ? 0 : stageToShow;
  const requestedSources = sources.slice(0, maxRequestedIndex + 1);

  const handleLoad = (index: number) => {
    setLoadedStage((prev) => (index > prev ? index : prev));
    if (index === maxRequestedIndex && index < sources.length - 1) {
      setMaxRequestedIndex(index + 1);
    }
  };

  return (
    <div className={wrapClassName}>
      {requestedSources.map((src, index) => (
        <Image
          key={`${src}-${index}`}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={index === 0 && priority ? "eager" : "lazy"}
          fetchPriority={index === 0 && priority ? "high" : "auto"}
          priority={index === 0 && priority}
          sizes={sizes}
          quality={quality}
          onLoadingComplete={() => handleLoad(index)}
          onError={() => handleLoad(index)}
          className={[
            "absolute inset-0 transition-opacity duration-200",
            index <= resolvedStageToShow ? "opacity-100" : "opacity-0",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
        />
      ))}
    </div>
  );
}
