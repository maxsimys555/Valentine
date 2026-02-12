"use client";

import AppButton from "@/components/buttons/AppButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GoodbyePage() {
  const router = useRouter();
  const [showRetry, setShowRetry] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setShowRetry(true), 5000);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-6xl font-semibold text-slate-900">Чудово!</h1>
            <h1 className="text-5xl font-semibold text-slate-900 mt-10">
              Ну, тоді до зустрічі!
            </h1>
            <h1 className="text-3xl font-semibold text-slate-900">
              (Пощастило мені в цьому році)
            </h1>
          </div>
          <div className="flex justify-center gap-5 mt-10">
            <Image src="/smile5.webp" alt="emoji" width={150} height={150} />
            <Image src="/smile7.webp" alt="emoji" width={150} height={150} />
          </div>
          <div className="flex flex-col justify-center items-center mt-15">
            <div
              className={[
                "flex flex-col justify-center items-center",
                "transition-all duration-700 ease-out",
                showRetry
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none",
              ].join(" ")}
            >
              <h1 className="text-3xl font-semibold text-slate-900">
                Добре, даю тобі ще одну спробу...
              </h1>
              <Image src="/smile8.webp" alt="emoji" width={100} height={100} />

              <AppButton
                onClick={() => router.push("/first")}
                className="w-70 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700"
              >
                Реабілітуватись
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


