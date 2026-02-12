"use client";

import AppButton from "@/components/buttons/AppButton";
import ImagePair from "@/components/ImagePair/ImagePair";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

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
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50">
        <ImagePair leftSrc="/smile10.webp" rightSrc="/smile10.webp" />
        <div>
          <div className="flex flex-col text-center justify-center">
            <h1
              className={[
                "text-4xl font-semibold text-slate-900 text-center",
                "transition-all duration-800 ease-out mt-5",
                showText1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
              ].join(" ")}
            >
              Ти маєш обрати <br />
              <span className="text-red-500">3</span> з 10 подарунків,
              <br />
              яких ти отримаєш сьогодні.
            </h1>
            <h1
              className={[
                "text-4xl font-semibold text-slate-900 text-center",
                "transition-all duration-800 ease-out mt-20",
                showText2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
              ].join(" ")}
            >
              Готова зробити вибір?
            </h1>
          </div>
          <div className="flex justify-center gap-5 mt-15">
            <AppButton
              onClick={() => router.push("/choose-gift")}
              className={[
                "w-75 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700",
                "transition-all duration-500 ease-out",
                showBtn
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12 pointer-events-none",
              ].join(" ")}
            >
              Готова
            </AppButton>
          </div>
        </div>
        <ImagePair leftSrc="/smile10.webp" rightSrc="/smile10.webp" />
      </div>
    </div>
  );
}


