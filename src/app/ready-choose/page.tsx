"use client";

import Image from "next/image";
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
      <div className="w-145 h-170  rounded-4xl bg-rose-50">
        <div className="flex justify-between">
          <Image src="/smile10.png" alt="emoji" width={150} height={150} />
          <Image src="/smile10.png" alt="emoji" width={150} height={150} />
        </div>
        <div>
          <div className="flex flex-col text-center justify-center">
            <h1
              className={[
                "text-4xl font-semibold text-slate-900 text-center ",
                "transition-all duration-800 ease-out mt-5",
                showText1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2",
              ].join(" ")}
            >
              Ти маєш обрати <br />
              <span className="text-red-500">3</span> з 10 подарунків,
              <br />
              яких ти отримаєш сьогодні.
            </h1>
            <h1
              className={[
                "text-4xl font-semibold text-slate-900 text-center ",
                "transition-all duration-800 ease-out mt-20",
                showText2
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2",
              ].join(" ")}
            >
              Готова зробити вибір?
            </h1>
          </div>
          <div className="flex justify-center gap-5 mt-15">
            <button
              onClick={() => router.push("/choose-gift")}
              className={[
                "w-75 h-15 rounded-2xl text-3xl text-white bg-indigo-600 hover:bg-indigo-700",
                "active:scale-95 transition-all duration-500 ease-out cursor-pointer",
                showBtn
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12 pointer-events-none",
              ].join(" ")}
            >
              Готова
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <Image src="/smile10.png" alt="emoji" width={150} height={150} />
          <Image src="/smile10.png" alt="emoji" width={150} height={150} />
        </div>
      </div>
    </div>
  );
}
