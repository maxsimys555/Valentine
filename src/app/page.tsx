"use client";

import WavingHand from "@/components/WavingHand/WavingHand";
import AppButton from "@/components/buttons/AppButton";
import ImagePair from "@/components/ImagePair/ImagePair";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50">
        <ImagePair leftSrc="/smile25.webp" rightSrc="/smile25.webp" />
        <div>
          <div className="flex justify-center mt-27">
            <h1 className="text-5xl font-semibold text-slate-900">Привіт, Анжеліка</h1>
            <WavingHand />
          </div>
          <div className="flex justify-center mt-15">
            <AppButton
              onClick={() => router.push("/first")}
              className="w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700"
            >
              Привіт
            </AppButton>
          </div>
        </div>
        <ImagePair leftSrc="/smile25.webp" rightSrc="/smile25.webp" className="mt-26" />
      </div>
    </div>
  );
}


