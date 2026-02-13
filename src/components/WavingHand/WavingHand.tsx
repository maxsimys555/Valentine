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
        sizes="(min-width: 768px) 60px, 48px"
        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 ${styles.wave}`}
        draggable={false}
      />
    </div>
  );
}
