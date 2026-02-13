import WavingHand from "@/components/WavingHand/WavingHand";
import ImagePairServer from "@/components/ImagePair/ImagePairServer";
import { getProgressiveSources } from "@/lib/images";
import NameFromQuery from "@/components/NameFromQuery";
import type { Metadata } from "next";
import AppLinkButton from "@/components/buttons/AppLinkButton";
import CenteredCard from "@/components/layout/CenteredCard";

function getNameFromSearchParams(searchParams: { name?: string | string[] }) {
  const raw = searchParams?.name;
  if (Array.isArray(raw)) {
    return raw[0]?.trim() ?? "";
  }
  return raw?.trim() ?? "";
}

export function generateMetadata({
  searchParams,
}: {
  searchParams: { name?: string | string[] };
}): Metadata {
  const name = getNameFromSearchParams(searchParams);
  return {
    title: name ? `Valentine for ${name}` : "Valentine for You",
  };
}

export default function Home() {
  return (
    <CenteredCard>
      <ImagePairServer
        leftSrc="/smile25.webp"
        rightSrc="/smile25.webp"
        priority
      />
      <div>
        <div className="flex   items-center justify-center gap-2 mt-8 sm:mt-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 text-center break-words">
            Привіт, <NameFromQuery />
          </h1>
          <WavingHand />
        </div>
        <div className="flex justify-center mt-10 sm:mt-18">
          <AppLinkButton
            href="/first"
            prefetch
            prefetchImages={getProgressiveSources("/smile13.webp")}
            className=" w-[240px]  sm:w-[240px] h-12 sm:h-14 text-xl sm:text-2xl md:text-3xl bg-indigo-600 hover:bg-indigo-700"
          >
            Привіт
          </AppLinkButton>
        </div>
      </div>
      <ImagePairServer
        leftSrc="/smile25.webp"
        rightSrc="/smile25.webp"
        className="mt-12 sm:mt-28"
      />
    </CenteredCard>
  );
}

