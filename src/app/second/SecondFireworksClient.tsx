"use client";

import dynamic from "next/dynamic";

const FireworksOnLoad = dynamic(() => import("@/components/FireworksOnLoad"), {
  ssr: false,
});

export default function SecondFireworksClient() {
  return <FireworksOnLoad durationMs={2000} />;
}
