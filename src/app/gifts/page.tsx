import { Suspense } from "react";
import GiftsClient from "./GiftsClient";

export default function GiftsPage() {
  return (
    <Suspense fallback={<div className="h-screen" />}>
      <GiftsClient />
    </Suspense>
  );
}
