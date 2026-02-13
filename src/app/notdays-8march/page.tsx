"use client";

import AppLinkButton from "@/components/buttons/AppLinkButton";
import ImagePair from "@/components/ImagePair/ImagePair";
import { getProgressiveSources } from "@/lib/images";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50">
        <ImagePair
          leftSources={getProgressiveSources("/smile9.webp")}
          rightSources={getProgressiveSources("/smile9.webp")}
          priority
        />

        <div className="flex justify-center mt-25">
          <h1 className="text-4xl font-semibold text-slate-900">Не сьогодні, але скоро буде!</h1>
        </div>
        <div className="flex justify-center gap-5 mt-15">
          <h1 className="text-3xl">Нажаль, не вгадала!</h1>
          <AppLinkButton
            href="/whatsday"
            prefetch
            className="py-1 px-2 text-2xl bg-indigo-600 hover:bg-indigo-700 hover:text-red-400"
          >
            Спробувати ще раз
          </AppLinkButton>
        </div>
        <ImagePair
          leftSources={getProgressiveSources("/smile9.webp")}
          rightSources={getProgressiveSources("/smile9.webp")}
          className="mt-35"
        />
      </div>
    </div>
  );
}



