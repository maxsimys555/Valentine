"use client";

import { useMemo, useState } from "react";
import ProgressiveImage from "@/components/ProgressiveImage";

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
const IMAGE_WRAP_CLASS_NAME =
  "relative w-24 h-24 sm:w-32 sm:h-32 lg:w-[150px] lg:h-[150px]";

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
        sizes={IMAGE_SIZES}
        className={IMAGE_CLASS_NAME}
        wrapClassName={IMAGE_WRAP_CLASS_NAME}
        onStageChange={setLeftStage}
        visibleStage={syncedStage}
      />
      <ProgressiveImage
        sources={resolvedRightSources}
        alt={rightAlt}
        priority={priority}
        sizes={IMAGE_SIZES}
        className={IMAGE_CLASS_NAME}
        wrapClassName={IMAGE_WRAP_CLASS_NAME}
        onStageChange={setRightStage}
        visibleStage={syncedStage}
      />
    </div>
  );
}
