"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FireworksOnLoad = dynamic(() => import("@/components/FireworksOnLoad"), {
  ssr: false,
});

export default function Home() {
  const router = useRouter();
  const [showTitle, setShowTitle] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowTitle(true), 150);
    const t2 = setTimeout(() => setShowText1(true), 1200); 
    const t3 = setTimeout(() => setShowText2(true), 2200); 
    const t4 = setTimeout(() => setShowBtn(true), 3000); 

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div>
      <FireworksOnLoad durationMs={2000} />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-145 h-170  rounded-4xl bg-rose-50">
          <div className="flex justify-between">
            <Image src="/smile19.png" alt="emoji" width={150} height={150} />
            <Image src="/smile19.png" alt="emoji" width={150} height={150} />
          </div>
          <div>
            <div className="flex flex-col gap-5 justify-center">
              <h1
                className={[
                  "text-5xl font-semibold text-slate-900 text-center",
                  "transition-all duration-500 ease-out",
                  showTitle
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2",
                ].join(" ")}
              >
                Правильно!
              </h1>
              <h1
                className={[
                  "text-4xl font-semibold text-slate-900 text-center ",
                  "transition-all duration-800 ease-out mt-5",
                  showText1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2",
                ].join(" ")}
              >
                І сьогодні, у тебе є можливість,
              </h1>
              <h1
                className={[
                  "text-4xl font-semibold text-slate-900 text-center ",
                  "transition-all duration-800 ease-out mt-2",
                  showText2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2",
                ].join(" ")}
              >
                обрати собі подарунок!
              </h1>
            </div>
            <div className="flex justify-center gap-5 mt-15">
              <button
                onClick={() => router.push("/ready-choose")}
                className={[
                  "w-75 h-15 rounded-2xl text-3xl text-white bg-indigo-600 hover:bg-indigo-700",
                  "active:scale-95 transition-all duration-500 ease-out cursor-pointer",
                  showBtn
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12 pointer-events-none",
                ].join(" ")}
              >
                Обрати подарунок
              </button>
            </div>
          </div>
          <div className="flex justify-between mt-17">
            <Image src="/smile19.png" alt="emoji" width={150} height={150} />
            <Image src="/smile19.png" alt="emoji" width={150} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
}
