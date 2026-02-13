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
        <div className="flex justify-center mt-25">
          <h1 className="text-4xl font-semibold text-slate-900">
            А ти знаєш, який сьогодні день?
          </h1>
        </div>
        <div className="flex justify-center gap-5 mt-25">
          <AppLinkButton
            href="/whatsday"
            prefetch
            prefetchImages={getProgressiveSources("/smile6.webp")}
            className="w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700"
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
            className="w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700"
          >
            Ні
          </AppLinkButton>
        </div>
      </div>
      <ImagePairServer
        leftSrc="/smile13.webp"
        rightSrc="/smile13.webp"
        className="mt-20"
      />
    </CenteredCard>
  );
}

