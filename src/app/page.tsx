"use client";

import WavingHand from "@/components/WavingHand/WavingHand";
import AppLinkButton from "@/components/buttons/AppLinkButton";
import ImagePair from "@/components/ImagePair/ImagePair";
import { getProgressiveSources } from "@/lib/images";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50">
        <ImagePair
          leftSources={getProgressiveSources("/smile25.webp")}
          rightSources={getProgressiveSources("/smile25.webp")}
          priority
        />
        <div>
          <div className="flex justify-center mt-27">
            <h1 className="text-5xl font-semibold text-slate-900">Привіт, Анжеліка</h1>
            <WavingHand />
          </div>
          <div className="flex justify-center mt-15">
            <AppLinkButton
              href="/first"
              prefetch
              className="w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700"
            >
              Привіт
            </AppLinkButton>
          </div>
        </div>
        <ImagePair
          leftSources={getProgressiveSources("/smile25.webp")}
          rightSources={getProgressiveSources("/smile25.webp")}
          className="mt-26"
        />
      </div>
    </div>
  );
}



