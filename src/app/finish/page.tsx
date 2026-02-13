"use client";

import AppButton from "@/components/buttons/AppButton";
import ImagePair from "@/components/ImagePair/ImagePair";
import CenteredCard from "@/components/layout/CenteredCard";
import ProgressiveImage from "@/components/ProgressiveImage";
import Image from "next/image";
import { getProgressiveSources } from "@/lib/images";

export default function Home() {
  return (
    <CenteredCard>
      <ImagePair
        leftSources={getProgressiveSources("/smile12.webp")}
        rightSources={getProgressiveSources("/smile12.webp")}
        priority
      />
      <div>
        <div className="flex justify-center mt-5">
          <h1 className="text-5xl font-semibold text-slate-900 text-center">
            Вітаю тебе!
          </h1>
        </div>
        <div className="flex justify-center mt-10">
          <ProgressiveImage
            sources={getProgressiveSources("/smile22.webp")}
            alt="emoji"
            width={150}
            height={150}
            wrapClassName="relative w-[150px] h-[150px]"
          />
          <Image src="/Love.webp" alt="emoji" width={150} height={150} />
        </div>
        <div className="flex justify-center gap-5 mt-15">
          <AppButton className="w-60 h-17 text-2xl bg-indigo-600 hover:bg-indigo-700">
            Забрати подарунки
          </AppButton>
        </div>
      </div>
      <ImagePair
        leftSources={getProgressiveSources("/smile12.webp")}
        rightSources={getProgressiveSources("/smile12.webp")}
      />
    </CenteredCard>
  );
}

