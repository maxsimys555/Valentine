import AppLinkButton from "@/components/buttons/AppLinkButton";
import ImagePairServer from "@/components/ImagePair/ImagePairServer";
import CenteredCard from "@/components/layout/CenteredCard";
import { getProgressiveSources } from "@/lib/images";

export default function Home() {
  return (
    <CenteredCard>
      <ImagePairServer
        leftSrc="/smile13.webp"
        rightSrc="/smile13.webp"
        priority
      />
      <div>
        <div className="flex justify-center mt-8 sm:mt-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 text-center">
            А ти знаєш,
            <br /> який сьогодні день?
          </h1>
        </div>
        <div className="flex  sm:flex-row justify-center gap-4 sm:gap-5 mt-8 sm:mt-16 px-4">
          <AppLinkButton
            href="/whatsday"
            prefetch
            prefetchImages={getProgressiveSources("/smile6.webp")}
            className="w-full max-w-[190px] h-12 sm:h-14 text-xl sm:text-2xl md:text-3xl bg-indigo-600 hover:bg-indigo-700"
          >
            Так
          </AppLinkButton>
          <AppLinkButton
            href="/goodbye"
            prefetch
            prefetchImages={[
              ...getProgressiveSources("/smile5.webp"),
              ...getProgressiveSources("/smile7.webp"),
              ...getProgressiveSources("/smile8.webp"),
            ]}
            className="w-full max-w-[190px] h-12 sm:h-14 text-xl sm:text-2xl md:text-3xl bg-indigo-600 hover:bg-indigo-700"
          >
            Ні
          </AppLinkButton>
        </div>
      </div>
      <ImagePairServer
        leftSrc="/smile13.webp"
        rightSrc="/smile13.webp"
        className="mt-10 sm:mt-22"
      />
    </CenteredCard>
  );
}

