import AppLinkButton from "@/components/buttons/AppLinkButton";
import ImagePairServer from "@/components/ImagePair/ImagePairServer";
import CenteredCard from "@/components/layout/CenteredCard";
import { getProgressiveSources } from "@/lib/images";

export default function Home() {
  return (
    <CenteredCard>
      <ImagePairServer
        leftSrc="/smile6.webp"
        rightSrc="/smile6.webp"
        priority
      />

      <div className="flex justify-center mt-8 sm:mt-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 text-center">
          Який сьогодні день?
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-3 px-3 sm:gap-5 mt-8 sm:mt-12">
        <AppLinkButton
          href="/notdays-max"
          prefetch
          prefetchImages={getProgressiveSources("/smile9.webp")}
          className="px-4 py-2 text-lg sm:text-xl bg-indigo-600 hover:bg-indigo-700"
        >
          Максима
        </AppLinkButton>
        <AppLinkButton
          href="/notdays-8march"
          prefetch
          prefetchImages={getProgressiveSources("/smile9.webp")}
          className="px-4 py-2 text-lg sm:text-xl bg-indigo-600 hover:bg-indigo-700"
        >
          8 Березня
        </AppLinkButton>
        <AppLinkButton
          href="/notdays-mikolay"
          prefetch
          prefetchImages={getProgressiveSources("/smile9.webp")}
          className="px-4 py-2 text-lg sm:text-xl bg-indigo-600 hover:bg-indigo-700"
        >
          Миколайчик
        </AppLinkButton>
      </div>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-6 sm:mt-10">
        <AppLinkButton
          href="/second"
          prefetch
          prefetchImages={getProgressiveSources("/smile19.webp")}
          className="px-4 py-2 text-lg sm:text-xl bg-indigo-600 hover:bg-indigo-700"
        >
          День святого Валентина
        </AppLinkButton>
        <AppLinkButton
          href="/notdays-smm"
          prefetch
          prefetchImages={getProgressiveSources("/smile9.webp")}
          className="px-4 py-2 text-lg sm:text-xl bg-indigo-600 hover:bg-indigo-700"
        >
          День святого SMM
        </AppLinkButton>
      </div>

      <ImagePairServer
        leftSrc="/smile6.webp"
        rightSrc="/smile6.webp"
        className="mt-10 sm:mt-24"
      />
    </CenteredCard>
  );
}
