"use client";

import AppButton from "@/components/buttons/AppButton";
import ImagePair from "@/components/ImagePair/ImagePair";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50">
        <ImagePair leftSrc="/smile12.webp" rightSrc="/smile12.webp"  priority />
        <div>
          <div className="flex justify-center mt-5">
            <h1 className="text-5xl font-semibold text-slate-900 text-center">
              Вітаю тебе!
            </h1>
          </div>
          <div className="flex justify-center mt-10">
            <Image src="/smile22.webp" alt="emoji" width={150} height={150} />
            <Image src="/Love.jpg" alt="emoji" width={150} height={150} />
          </div>
          <div className="flex justify-center gap-5 mt-15">
            <AppButton className="w-60 h-17 text-2xl bg-indigo-600 hover:bg-indigo-700">
              Забрати подарунки
            </AppButton>
          </div>
        </div>
        <ImagePair leftSrc="/smile12.webp" rightSrc="/smile12.webp" />
      </div>
    </div>
  );
}



