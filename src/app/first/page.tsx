import AppLinkButton from "@/components/buttons/AppLinkButton";
import ImagePair from "@/components/ImagePair/ImagePair";
import CenteredCard from "@/components/layout/CenteredCard";
import { getProgressiveSources } from "@/lib/images";

export default function Home() {
  return (
    <CenteredCard>
      <ImagePair
        leftSources={getProgressiveSources("/smile13.webp")}
        rightSources={getProgressiveSources("/smile13.webp")}
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
            className="w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700"
          >
            Так
          </AppLinkButton>
          <AppLinkButton
            href="/goodbye"
            prefetch
            className="w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700"
          >
            Ні
          </AppLinkButton>
        </div>
      </div>
      <ImagePair
        leftSources={getProgressiveSources("/smile13.webp")}
        rightSources={getProgressiveSources("/smile13.webp")}
        className="mt-20"
      />
    </CenteredCard>
  );
}

