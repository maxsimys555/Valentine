"use client";

import AppButton from "@/components/buttons/AppButton";
import ImagePair from "@/components/ImagePair/ImagePair";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50">
        <ImagePair leftSrc="/smile13.webp" rightSrc="/smile13.webp"  priority />
        <div>
          <div className="flex justify-center mt-25">
            <h1 className="text-4xl font-semibold text-slate-900">
              А ти знаєш, який сьогодні день?
            </h1>
          </div>
          <div className="flex justify-center gap-5 mt-25">
            <AppButton
              onClick={() => router.push("/whatsday")}
              className="w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700"
            >
              Так
            </AppButton>
            <AppButton
              onClick={() => router.push("/goodbye")}
              className="w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700"
            >
              Ні
            </AppButton>
          </div>
        </div>
        <ImagePair leftSrc="/smile13.webp" rightSrc="/smile13.webp" className="mt-20" />
      </div>
    </div>
  );
}



