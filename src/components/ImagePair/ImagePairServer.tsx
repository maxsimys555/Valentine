import Image from "next/image";

type ImagePairServerProps = {
  leftSrc: string;
  rightSrc: string;
  className?: string;
  leftAlt?: string;
  rightAlt?: string;
  priority?: boolean;
};

const IMAGE_SIZES = "(min-width: 1024px) 150px, (min-width: 640px) 128px, 96px";
const IMAGE_CLASS_NAME =
  "w-24 h-24 sm:w-32 sm:h-32 lg:w-[150px] lg:h-[150px] object-contain";
const IMAGE_WRAP_CLASS_NAME =
  "relative w-24 h-24 sm:w-32 sm:h-32 lg:w-[150px] lg:h-[150px]";

export default function ImagePairServer({
  leftSrc,
  rightSrc,
  className = "",
  leftAlt = "emoji",
  rightAlt = "emoji",
  priority = true,
}: ImagePairServerProps) {
  return (
    <div className={["flex justify-between", className].filter(Boolean).join(" ")}>
      <div className={IMAGE_WRAP_CLASS_NAME}>
        <Image
          src={leftSrc}
          alt={leftAlt}
          width={150}
          height={150}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          priority={priority}
          sizes={IMAGE_SIZES}
          className={IMAGE_CLASS_NAME}
        />
      </div>
      <div className={IMAGE_WRAP_CLASS_NAME}>
        <Image
          src={rightSrc}
          alt={rightAlt}
          width={150}
          height={150}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          priority={priority}
          sizes={IMAGE_SIZES}
          className={IMAGE_CLASS_NAME}
        />
      </div>
    </div>
  );
}
