import styles from "./WavingHand.module.css";

export default function WavingHand() {
  return (
    <div>
      <img
        src="/hand.png"
        alt="hand"
        className={`w-15 h-15 ${styles.wave}`}
        draggable={false}
      />
    </div>
  );
}
