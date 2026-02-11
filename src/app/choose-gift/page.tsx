"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";

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

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

const POSITIONS = [
  { x: 0, y: -260 }, // 1) наверху
  { x: 220, y: 0 }, // 2) справа
  { x: 0, y: 0 }, // 3)  внизу
  { x: 220, y: -160 }, // 4) справа вверху
];

export default function Home() {
  const router = useRouter();

  const [selected, setSelected] = useState<string[]>([]);
  const selectedSet = useMemo(() => new Set(selected), [selected]);

  const buttonsBoxRef = useRef<HTMLDivElement | null>(null);
  const massageSlotRef = useRef<HTMLDivElement | null>(null);

  const [massageOffset, setMassageOffset] = useState({ x: 0, y: 0 });
  const [posIndex, setPosIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

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
    if (isMoving) return;
    setIsMoving(true);

    const nextIndex = (posIndex + 1) % POSITIONS.length;
    setPosIndex(nextIndex);

    const desired = POSITIONS[nextIndex];

    const box = buttonsBoxRef.current?.getBoundingClientRect();
    const slot = massageSlotRef.current?.getBoundingClientRect();

    // fallback если рефы не готовы
    if (!box || !slot) {
      setMassageOffset(desired);
      return;
    }

    const maxLeft = slot.left - box.left;
    const maxRight = box.right - slot.right;
    const maxUp = slot.top - box.top;
    const maxDown = box.bottom - slot.bottom;

    const x = clamp(desired.x, -maxLeft, maxRight);
    const y = clamp(desired.y, -maxUp, maxDown);

    setMassageOffset({ x, y });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50">
        <div className="flex justify-between">
          <Image src="/smile20.png" alt="emoji" width={150} height={150} />
          <Image src="/smile20.png" alt="emoji" width={150} height={150} />
        </div>

        <div>
          <div className="text-xl text-center font-semibold text-slate-900 mb-6">
            Выбрано: {selected.length}/{MAX}
          </div>

          <div
            ref={buttonsBoxRef}
            className="flex gap-4 flex-wrap justify-center"
          >
            {gifts.map((gift) => {
              const active = selectedSet.has(gift);
              const isMassage = gift === "Масаж";

              if (!isMassage) {
                return (
                  <button
                    key={gift}
                    onClick={() => toggleGift(gift)}
                    className={[
                      "h-14 w-30 rounded-2xl text-lg cursor-pointer transition-all duration-300",
                      active
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-200 text-slate-900 hover:bg-slate-300",
                      !active && selected.length >= MAX ? "opacity-50" : "",
                    ].join(" ")}
                  >
                    {gift}
                  </button>
                );
              }

              // слот фиксированный, кнопка внутри двигается transform
              return (
                <div
                  key={gift}
                  ref={massageSlotRef}
                  className="relative w-30 h-14"
                  onMouseEnter={moveMassage}
                >
                  <button
                    onClick={() => toggleGift(gift)}
                    onTransitionEnd={() => setIsMoving(false)}
                    style={{
                      transform: `translate(${massageOffset.x}px, ${massageOffset.y}px)`,
                    }}
                    className={[
                      "absolute inset-0 rounded-2xl text-lg cursor-pointer",
                      "transition-transform duration-600 ease-out",
                      active
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-200 text-slate-900 hover:bg-slate-300",
                      !active && selected.length >= MAX ? "opacity-50" : "",
                    ].join(" ")}
                  >
                    {gift}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-5 mt-10">
            <button
              onClick={goNext}
              disabled={selected.length === 0}
              className={[
                "h-14 px-6 rounded-2xl text-lg transition-all",
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
