import ImagePairServer from "@/components/ImagePair/ImagePairServer";
import CenteredCard from "@/components/layout/CenteredCard";
import { Suspense } from "react";
import GiftsClient from "./GiftsClient";

export default function GiftsPage() {
  return (
    <CenteredCard>
      <ImagePairServer leftSrc="/smile20.webp" rightSrc="/smile20.webp" priority />
      <Suspense fallback={<div className="h-[50vh]" />}>
        <GiftsClient />
      </Suspense>
      <ImagePairServer leftSrc="/smile20.webp" rightSrc="/smile20.webp" className="mt-8" />
    </CenteredCard>
  );
}
