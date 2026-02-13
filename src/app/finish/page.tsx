import AppButton from "@/components/buttons/AppButton";
import ImagePairServer from "@/components/ImagePair/ImagePairServer";
import CenteredCard from "@/components/layout/CenteredCard";
import ProgressiveImage from "@/components/ProgressiveImage";
import Image from "next/image";
import { getProgressiveSources } from "@/lib/images";

export default function Home() {
  return (
    <CenteredCard>
      <ImagePairServer
        leftSrc="/smile12.webp"
        rightSrc="/smile12.webp"
        priority
      />
      <div>
        <div className="flex justify-center mt-6 sm:mt-4">
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-semibold text-slate-900 text-center">
            Вітаю тебе!
          </h1>
        </div>
        <div className="flex  justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          <ProgressiveImage
            sources={getProgressiveSources("/smile22.webp")}
            alt="emoji"
            width={150}
            height={150}
            wrapClassName="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]"
          />
          <Image
            src="/Love.webp"
            alt="emoji"
            width={150}
            height={150}
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]"
          />
        </div>
        <div className="flex justify-center gap-5 mt-10 sm:mt-12">
          <AppButton className="w-full max-w-[230px] h-12 sm:h-14 text-lg sm:text-xl bg-indigo-600 hover:bg-indigo-700">
            Забрати подарунки
          </AppButton>
        </div>
      </div>
      <ImagePairServer
        leftSrc="/smile12.webp"
        rightSrc="/smile12.webp"
        className="mt-5 sm:mt-4"
      />
    </CenteredCard>
  );
}
