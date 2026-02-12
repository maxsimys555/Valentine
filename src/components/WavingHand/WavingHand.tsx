import Image from "next/image";
import styles from "./WavingHand.module.css";
import { imagePlaceholders } from "@/lib/imagePlaceholders";

export default function WavingHand() {
  return (
    <div>
      <Image
        src="/hand.webp"
        alt="hand"
        width={60}
        height={60}
        loading="lazy"
        sizes="60px"
        placeholder={imagePlaceholders["/hand.webp"] ? "blur" : "empty"}
        blurDataURL={imagePlaceholders["/hand.webp"]}
        className={`w-15 h-15 ${styles.wave}`}
        draggable={false}
      />
    </div>
  );
}
