import WavingHand from "@/components/WavingHand/WavingHand";
import Link from "next/link";
import ImagePair from "@/components/ImagePair/ImagePair";
import { getProgressiveSources } from "@/lib/images";
import NameFromQuery from "@/components/NameFromQuery";

const BASE_LINK_BUTTON_CLASS =
  "rounded-2xl text-white active:scale-95 transition cursor-pointer inline-flex items-center justify-center";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50">
        <ImagePair
          leftSources={getProgressiveSources("/smile25.webp")}
          rightSources={getProgressiveSources("/smile25.webp")}
          priority
        />
        <div>
          <div className="flex justify-center mt-27">
            <h1 className="text-5xl font-semibold text-slate-900">
              Привіт, <NameFromQuery />
            </h1>
            <WavingHand />
          </div>
          <div className="flex justify-center mt-15">
            <Link
              href="/first"
              prefetch
              className={[
                BASE_LINK_BUTTON_CLASS,
                "w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700",
              ].join(" ")}
            >
              Привіт
            </Link>
          </div>
        </div>
        <ImagePair
          leftSources={getProgressiveSources("/smile25.webp")}
          rightSources={getProgressiveSources("/smile25.webp")}
          className="mt-26"
        />
      </div>
    </div>
  );
}









