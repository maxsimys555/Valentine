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

      <div className="flex justify-center mt-15">
        <h1 className="text-5xl font-semibold text-slate-900">Який сьогодні день?</h1>
      </div>

      <div className="flex justify-center gap-5 mt-15">
        <AppLinkButton
          href="/notdays-mikolay"
          prefetch
          prefetchImages={getProgressiveSources("/smile9.webp")}
          className="p-2 text-2xl bg-indigo-600 hover:bg-indigo-700"
        >
          Миколайчик
        </AppLinkButton>
        <AppLinkButton
          href="/notdays-8march"
          prefetch
          prefetchImages={getProgressiveSources("/smile9.webp")}
          className="p-2 text-2xl bg-indigo-600 hover:bg-indigo-700"
        >
          8 Березня
        </AppLinkButton>
        <AppLinkButton
          href="/notdays-max"
          prefetch
          prefetchImages={getProgressiveSources("/smile9.webp")}
          className="p-2 text-2xl bg-indigo-600 hover:bg-indigo-700"
        >
          Максима
        </AppLinkButton>
      </div>
      <div className="flex justify-center gap-5 mt-10">
        <AppLinkButton
          href="/second"
          prefetch
          prefetchImages={getProgressiveSources("/smile19.webp")}
          className="p-2 text-2xl bg-indigo-600 hover:bg-indigo-700"
        >
          День святого Валентина
        </AppLinkButton>
        <AppLinkButton
          href="/notdays-smm"
          prefetch
          prefetchImages={getProgressiveSources("/smile9.webp")}
          className="p-2 text-2xl bg-indigo-600 hover:bg-indigo-700"
        >
          День святого SMM
        </AppLinkButton>
      </div>

      <ImagePairServer
        leftSrc="/smile6.webp"
        rightSrc="/smile6.webp"
        className="mt-20"
      />
    </CenteredCard>
  );
}

