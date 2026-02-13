"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { preloadImages } from "@/lib/images";

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
  const [overlayStage, setOverlayStage] = useState(-1);
  const [maxRequestedIndex, setMaxRequestedIndex] = useState(0);

  useEffect(() => {
    const fullStage = overlayStage < 0 ? 0 : overlayStage + 1;
    onStageChange?.(fullStage);
  }, [overlayStage, onStageChange]);

  useEffect(() => {
    if (!priority) return;
    preloadImages(sources);
  }, [priority, sources]);

  if (!sources || sources.length === 0) return null;

  const baseSrc = sources[0];
  const overlaySources = sources.slice(1);
  const stageToShow = visibleStage ?? (overlayStage < 0 ? 0 : overlayStage + 1);
  const overlayStageToShow = stageToShow - 1;
  const requestedSources = overlaySources.slice(0, maxRequestedIndex + 1);

  const handleLoad = (index: number) => {
    setOverlayStage((prev) => (index > prev ? index : prev));
    if (index === maxRequestedIndex && index < overlaySources.length - 1) {
      setMaxRequestedIndex(index + 1);
    }
  };

  return (
    <div className={wrapClassName}>
      <Image
        src={baseSrc}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        fetchPriority={priority ? "high" : "auto"}
        priority={priority}
        sizes={sizes}
        quality={quality}
        className={className}
      />
      {requestedSources.map((src, index) => (
        <Image
          key={`${src}-${index}`}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          sizes={sizes}
          quality={quality}
          onLoadingComplete={() => handleLoad(index)}
          onError={() => handleLoad(index)}
          className={[
            "absolute inset-0 transition-opacity duration-200",
            index <= overlayStageToShow ? "opacity-100" : "opacity-0",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
        />
      ))}
    </div>
  );
}
