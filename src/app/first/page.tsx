import Link from "next/link";
import ImagePair from "@/components/ImagePair/ImagePair";
import { getProgressiveSources } from "@/lib/images";

const BASE_LINK_BUTTON_CLASS =
  "rounded-2xl text-white active:scale-95 transition cursor-pointer inline-flex items-center justify-center";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50">
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
            <Link
              href="/whatsday"
              prefetch
              className={[
                BASE_LINK_BUTTON_CLASS,
                "w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700",
              ].join(" ")}
            >
              Так
            </Link>
            <Link
              href="/goodbye"
              prefetch
              className={[
                BASE_LINK_BUTTON_CLASS,
                "w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700",
              ].join(" ")}
            >
              Ні
            </Link>
          </div>
        </div>
        <ImagePair
          leftSources={getProgressiveSources("/smile13.webp")}
          rightSources={getProgressiveSources("/smile13.webp")}
          className="mt-20"
        />
      </div>
    </div>
  );
}








