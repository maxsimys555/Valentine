import Image from "next/image";
import styles from "./WavingHand.module.css";

export default function WavingHand() {
  return (
    <div>
      <Image
        src="/hand.webp"
        alt="hand"
        width={60}
        height={60}
        loading="eager"
        fetchPriority="high"
        priority
        sizes="60px"
        className={`w-15 h-15 ${styles.wave}`}
        draggable={false}
      />
    </div>
  );
}
