import Image from "next/image";

type ImagePairProps = {
  leftSrc: string;
  rightSrc: string;
  className?: string;
  leftAlt?: string;
  rightAlt?: string;
};

const IMAGE_SIZES = "(min-width: 1024px) 150px, (min-width: 640px) 128px, 96px";
const IMAGE_CLASS_NAME = "w-24 h-24 sm:w-32 sm:h-32 lg:w-[150px] lg:h-[150px] object-contain";

export default function ImagePair({
  leftSrc,
  rightSrc,
  className = "",
  leftAlt = "emoji",
  rightAlt = "emoji",
}: ImagePairProps) {
  return (
    <div className={["flex justify-between", className].filter(Boolean).join(" ")}>
      <Image
        src={leftSrc}
        alt={leftAlt}
        width={150}
        height={150}
        className={IMAGE_CLASS_NAME}
        loading="lazy"
        sizes={IMAGE_SIZES}
        quality={70}
      />
      <Image
        src={rightSrc}
        alt={rightAlt}
        width={150}
        height={150}
        className={IMAGE_CLASS_NAME}
        loading="lazy"
        sizes={IMAGE_SIZES}
        quality={70}
      />
    </div>
  );
}
