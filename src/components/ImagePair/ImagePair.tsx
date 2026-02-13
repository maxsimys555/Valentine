"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type ImagePairProps = {
  leftSrc?: string;
  rightSrc?: string;
  leftSources?: string[];
  rightSources?: string[];
  className?: string;
  leftAlt?: string;
  rightAlt?: string;
  priority?: boolean;
  sync?: boolean;
};

const IMAGE_SIZES = "(min-width: 1024px) 150px, (min-width: 640px) 128px, 96px";
const IMAGE_CLASS_NAME =
  "w-24 h-24 sm:w-32 sm:h-32 lg:w-[150px] lg:h-[150px] object-contain";
const IMAGE_WRAP_CLASS_NAME = "relative w-24 h-24 sm:w-32 sm:h-32 lg:w-[150px] lg:h-[150px]";

type ProgressiveImageProps = {
  sources: string[];
  alt: string;
  priority: boolean;
  onStageChange?: (stage: number) => void;
  visibleStage?: number;
};

function ProgressiveImage({
  sources,
  alt,
  priority,
  onStageChange,
  visibleStage,
}: ProgressiveImageProps) {
  const [loadedStage, setLoadedStage] = useState(-1);
  const [maxRequestedIndex, setMaxRequestedIndex] = useState(0);

  useEffect(() => {
    onStageChange?.(loadedStage);
  }, [loadedStage, onStageChange]);

  const stageToShow = visibleStage ?? loadedStage;
  const requestedSources = sources.slice(0, maxRequestedIndex + 1);

  const handleLoad = (index: number) => {
    setLoadedStage((prev) => (index > prev ? index : prev));
    if (index === maxRequestedIndex && index < sources.length - 1) {
      setMaxRequestedIndex(index + 1);
    }
  };

  return (
    <div className={IMAGE_WRAP_CLASS_NAME}>
      {requestedSources.map((src, index) => (
        <Image
          key={`${src}-${index}`}
          src={src}
          alt={alt}
          width={150}
          height={150}
          loading={index === 0 && priority ? "eager" : "lazy"}
          fetchPriority={index === 0 && priority ? "high" : "auto"}
          priority={index === 0 && priority}
          sizes={IMAGE_SIZES}
          quality={70}
          onLoadingComplete={() => handleLoad(index)}
          className={[
            IMAGE_CLASS_NAME,
            "absolute inset-0 transition-opacity duration-200",
            index === stageToShow ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export default function ImagePair({
  leftSrc,
  rightSrc,
  leftSources,
  rightSources,
  className = "",
  leftAlt = "emoji",
  rightAlt = "emoji",
  priority = false,
  sync = true,
}: ImagePairProps) {
  const resolvedLeftSources = useMemo(
    () => (leftSources && leftSources.length > 0 ? leftSources : leftSrc ? [leftSrc] : []),
    [leftSources, leftSrc]
  );
  const resolvedRightSources = useMemo(
    () => (rightSources && rightSources.length > 0 ? rightSources : rightSrc ? [rightSrc] : []),
    [rightSources, rightSrc]
  );

  const [leftStage, setLeftStage] = useState(-1);
  const [rightStage, setRightStage] = useState(-1);
  const syncedStage = sync ? Math.min(leftStage, rightStage) : undefined;

  return (
    <div className={["flex justify-between", className].filter(Boolean).join(" ")}>
      <ProgressiveImage
        sources={resolvedLeftSources}
        alt={leftAlt}
        priority={priority}
        onStageChange={setLeftStage}
        visibleStage={syncedStage}
      />
      <ProgressiveImage
        sources={resolvedRightSources}
        alt={rightAlt}
        priority={priority}
        onStageChange={setRightStage}
        visibleStage={syncedStage}
      />
    </div>
  );
}
