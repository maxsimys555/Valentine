"use client";

import AppLinkButton from "@/components/buttons/AppLinkButton";
import ProgressiveImage from "@/components/ProgressiveImage";
import { gifts } from "@/lib/gifts";
import { getProgressiveSources } from "@/lib/images";
import { useEffect, useMemo, useRef, useState } from "react";

const MAX = 3;
const RETURN_DELAY_MS = 450;
const TRANSITION_MS = 250;
const DEFAULT_OFFSET = { x: 0, y: 0 };

const BASE_GIFT_BUTTON_CLASS =
  "h-12 w-24 sm:h-14 sm:w-30 rounded-2xl text-base sm:text-lg cursor-pointer transition-all duration-300 flex items-center justify-center text-center";

const POSITIONS = [
  { x: -65, y: 240 },
  { x: 138, y: 0 },
  { x: -272, y: 0 },
  { x: -65, y: -300 },
];

const MOBILE_POSITIONS = [
  { x: -107, y: 0 },
  { x: 107, y: 0 },
];

export default function Home() {
  const [selected, setSelected] = useState<string[]>([]);
  const selectedSet = useMemo(() => new Set(selected), [selected]);
  const isLimitReached = selected.length >= MAX;

  const returnTimerRef = useRef<number | null>(null);
  const unlockTimerRef = useRef<number | null>(null);

  const [massageOffset, setMassageOffset] = useState(DEFAULT_OFFSET);
  const [posIndex, setPosIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [isMassageCaught, setIsMassageCaught] = useState(false);
  const [escapeCount, setEscapeCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
        ? "bg-rose-700 text-white shadow-[0_12px_28px_rgba(190,24,93,0.45)]"
        : "bg-rose-300 text-rose-950 hover:bg-rose-600 hover:text-white",
      !active && isLimitReached ? "opacity-50" : "",
    ].join(" ");

  const toggleGift = (id: string) => {
    setSelected((prev) => {
      const isSelected = prev.includes(id);
      if (isSelected) return prev.filter((x) => x !== id);
      if (prev.length >= MAX) return prev;
      return [...prev, id];
    });
  };

  const nextHref = useMemo(() => {
    const params = new URLSearchParams();
    selected.forEach((giftId) => params.append("g", giftId));
    return `/gifts?${params.toString()}`;
  }, [selected]);

  const moveMassage = () => {
    if (isMoving || isMassageCaught) return;
    if (isLimitReached && !selectedSet.has("massage")) return;

    setIsMoving(true);
    clearTimers();

    const positions = isMobile ? MOBILE_POSITIONS : POSITIONS;
    const nextIndex = (posIndex + 1) % positions.length;
    setPosIndex(nextIndex);
    setMassageOffset(positions[nextIndex]);
    scheduleReturn();
  };

  useEffect(() => clearTimers, []);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div>
      <div>
        <div className="text-lg sm:text-xl text-center font-semibold text-slate-900">
          Обрано: {selected.length}/{MAX}
        </div>

        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center mt-6 sm:mt-10 relative overflow-visible px-1">
          {gifts.map((gift) => {
            const active = selectedSet.has(gift.id);
            const isMassage = gift.id === "massage";

            if (!isMassage) {
              return (
                <button
                  key={gift.id}
                  onClick={() => toggleGift(gift.id)}
                  disabled={!active && isLimitReached}
                  className={getGiftButtonClass(active)}
                >
                  {gift.image ? (
                    <ProgressiveImage
                      sources={getProgressiveSources(gift.image)}
                      alt="gift"
                      width={40}
                      height={40}
                      wrapClassName="relative w-10 h-10"
                    />
                  ) : (
                    gift.label
                  )}
                </button>
              );
            }

            return (
              <div
                key={gift.id}
                className="relative w-24 h-12 sm:w-30 sm:h-14"
                onMouseEnter={moveMassage}
              >
                <button
                  onClick={() => {
                    if (!isMassageCaught && escapeCount < 2) {
                      setEscapeCount((prev) => prev + 1);
                      moveMassage();
                      return;
                    }

                    setIsMassageCaught(true);
                    toggleGift(gift.id);
                  }}
                  disabled={!active && isLimitReached}
                  style={{
                    transform: `translate(${massageOffset.x}px, ${massageOffset.y}px)`,
                    transitionDuration: `${TRANSITION_MS}ms`,
                  }}
                  className={[
                    "absolute inset-0",
                    getGiftButtonClass(active),
                    "transition-transform ease-out",
                  ].join(" ")}
                >
                  {gift.image ? (
                    <ProgressiveImage
                      sources={getProgressiveSources(gift.image)}
                      alt="gift"
                      width={40}
                      height={40}
                      wrapClassName="relative w-10 h-10"
                    />
                  ) : (
                    gift.label
                  )}
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-5 mt-8 sm:mt-12">
          <AppLinkButton
            href={nextHref}
            prefetch
            prefetchImages={getProgressiveSources("/smile20.webp")}
            disabled={selected.length === 0}
            className={[
              "h-12 sm:h-14 px-6 text-base sm:text-lg",
              selected.length === 0
                ? "bg-slate-300 text-slate-600 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-700",
            ].join(" ")}
          >
            Отримати
          </AppLinkButton>
        </div>
      </div>
    </div>
  );
}
