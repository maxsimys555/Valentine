"use client";

import AppLinkButton from "@/components/buttons/AppLinkButton";
import { getProgressiveSources } from "@/lib/images";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function ReadyChooseClient() {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const name = useSelector((state: RootState) => state.name.value);
  const displayName = name?.trim() ? name.trim() : "Кохана";

  useEffect(() => {
    const t2 = setTimeout(() => setShowText1(true), 300);
    const t3 = setTimeout(() => setShowText2(true), 1500);
    const t4 = setTimeout(() => setShowBtn(true), 2500);

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col text-center justify-center">
        <h1
          className={[
            "text-4xl font-semibold text-slate-900 text-center",
            "transition-all duration-800 ease-out mt-3",
            showText1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          {displayName}, <br />Ти маєш обрати <br />
          <span className="text-red-500">3</span> з 10 подарунків,
          <br />
          яких ти отримаєш сьогодні.
        </h1>
        <h1
          className={[
            "text-4xl font-semibold text-slate-900 text-center",
            "transition-all duration-800 ease-out mt-15",
            showText2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          Готова зробити вибір?
        </h1>
      </div>
      <div className="flex justify-center gap-5 mt-15">
        <AppLinkButton
          href="/choose-gift"
          prefetch
          prefetchImages={getProgressiveSources("/smile13.webp")}
          className={[
            "w-75 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700",
            "transition-all duration-500 ease-out",
            showBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none",
          ].join(" ")}
        >
          Готова
        </AppLinkButton>
      </div>
    </div>
  );
}
