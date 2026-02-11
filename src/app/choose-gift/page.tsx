"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const gifts = [
  "Суши сет",
  "Букет квітів",
  "Поповнення на телефон",
  "Сніданок в ліжко",
  "Шоколадка",
  "+18",
  "Шаурма",
  "200 гривень",
  "Подарок 9",
  "Масаж",
];

const MAX = 3;
const RETURN_DELAY_MS = 1000;
const TRANSITION_MS = 450;
const ADULT_GIFT = "+18";
const MASSAGE_GIFT = "Масаж";
const DEFAULT_OFFSET = { x: 0, y: 0 };
const BASE_GIFT_BUTTON_CLASS =
  "h-14 w-30 rounded-2xl text-lg cursor-pointer transition-all duration-300";

const POSITIONS = [
  { x: -65, y: 270 },
  { x: 138, y: 0 },
  { x: -272, y: 0 },
  { x: -65, y: -300 },
];

export default function Home() {
  const router = useRouter();

  const [selected, setSelected] = useState<string[]>([]);
  const selectedSet = useMemo(() => new Set(selected), [selected]);
  const isLimitReached = selected.length >= MAX;

  const returnTimerRef = useRef<number | null>(null);
  const unlockTimerRef = useRef<number | null>(null);

  const [massageOffset, setMassageOffset] = useState(DEFAULT_OFFSET);
  const [posIndex, setPosIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [isMassageCaught, setIsMassageCaught] = useState(false);

  const clearTimers = () => {
    if (returnTimerRef.current !== null) {
      window.clearTimeout(returnTimerRef.current);
      returnTimerRef.current = null;
    }
    if (unlockTimerRef.current !== null) {
      window.clearTimeout(unlockTimerRef.current);
      unlockTimerRef.current = null;
    }
  };

  const scheduleReturn = () => {
    returnTimerRef.current = window.setTimeout(() => {
      setMassageOffset(DEFAULT_OFFSET);

      unlockTimerRef.current = window.setTimeout(() => {
        setIsMoving(false);
        unlockTimerRef.current = null;
      }, TRANSITION_MS);

      returnTimerRef.current = null;
    }, RETURN_DELAY_MS);
  };

  const getGiftButtonClass = (active: boolean) =>
    [
      BASE_GIFT_BUTTON_CLASS,
      active
        ? "bg-indigo-600 text-white"
        : "bg-slate-200 text-slate-900 hover:bg-slate-300",
      !active && isLimitReached ? "opacity-50" : "",
    ].join(" ");

  const giftLabel = (gift: string) =>
    gift === ADULT_GIFT ? (
      <Image src="/smile18.png" alt="+18" width={30} height={30} />
    ) : (
      gift
    );

  const toggleGift = (gift: string) => {
    setSelected((prev) => {
      const isSelected = prev.includes(gift);
      if (isSelected) return prev.filter((x) => x !== gift);
      if (prev.length >= MAX) return prev;
      return [...prev, gift];
    });
  };

  const goNext = () => {
    const params = new URLSearchParams();
    selected.forEach((g) => params.append("g", g));
    router.push(`/gifts?${params.toString()}`);
  };

  const moveMassage = () => {
    if (isMoving || isMassageCaught) return;

    setIsMoving(true);
    clearTimers();

    const nextIndex = (posIndex + 1) % POSITIONS.length;
    setPosIndex(nextIndex);

    setMassageOffset(POSITIONS[nextIndex]);
    scheduleReturn();
  };

  useEffect(() => clearTimers, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50">
        <div className="flex justify-between">
          <Image src="/smile20.png" alt="emoji" width={150} height={150} />
          <Image src="/smile20.png" alt="emoji" width={150} height={150} />
        </div>

        <div>
          <div className="text-xl text-center font-semibold text-slate-900">
            Обрано: {selected.length}/{MAX}
          </div>

          <div className="flex gap-4 flex-wrap justify-center mt-10">
            {gifts.map((gift) => {
              const active = selectedSet.has(gift);
              const isMassage = gift === MASSAGE_GIFT;

              if (!isMassage) {
                return (
                  <button
                    key={gift}
                    onClick={() => toggleGift(gift)}
                    className={getGiftButtonClass(active)}
                  >
                    {giftLabel(gift)}
                  </button>
                );
              }

              return (
                <div
                  key={gift}
                  className="relative w-30 h-14"
                  onMouseEnter={moveMassage}
                >
                  <button
                    onClick={() => {
                      setIsMassageCaught(true);
                      toggleGift(gift);
                    }}
                    style={{
                      transform: `translate(${massageOffset.x}px, ${massageOffset.y}px)`,
                      transitionDuration: `${TRANSITION_MS}ms`,
                    }}
                    className={[
                      "absolute inset-0 h-14 w-30 rounded-2xl text-lg cursor-pointer",
                      "transition-transform ease-out",
                      active
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-200 text-slate-900 hover:bg-slate-300",
                      !active && isLimitReached ? "opacity-50" : "",
                    ].join(" ")}
                  >
                    {giftLabel(gift)}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-5 mt-15">
            <button
              onClick={goNext}
              disabled={selected.length === 0}
              className={[
                "h-14 px-6 rounded-2xl text-lg transition-all cursor-pointer",
                selected.length === 0
                  ? "bg-slate-300 text-slate-600 cursor-not-allowed"
                  : "bg-emerald-600 text-white hover:bg-emerald-700",
              ].join(" ")}
            >
              Отримати
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <Image src="/smile20.png" alt="emoji" width={150} height={150} />
          <Image src="/smile20.png" alt="emoji" width={150} height={150} />
        </div>
      </div>
    </div>
  );
}
