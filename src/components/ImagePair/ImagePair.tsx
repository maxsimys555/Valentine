import Image from "next/image";

type ImagePairProps = {
  leftSrc: string;
  rightSrc: string;
  className?: string;
  leftAlt?: string;
  rightAlt?: string;
  width?: number;
  height?: number;
};

export default function ImagePair({
  leftSrc,
  rightSrc,
  className = "",
  leftAlt = "emoji",
  rightAlt = "emoji",
  width = 150,
  height = 150,
}: ImagePairProps) {
  return (
    <div className={["flex justify-between", className].filter(Boolean).join(" ")}>
      <Image src={leftSrc} alt={leftAlt} width={width} height={height} />
      <Image src={rightSrc} alt={rightAlt} width={width} height={height} />
    </div>
  );
}
