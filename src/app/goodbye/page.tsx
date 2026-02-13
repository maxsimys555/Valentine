import AppLinkButton from "@/components/buttons/AppLinkButton";
import CenteredCard from "@/components/layout/CenteredCard";
import ProgressiveImage from "@/components/ProgressiveImage";
import { getProgressiveSources } from "@/lib/images";

export default function GoodbyePage() {
  return (
    <CenteredCard>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center mt-6 sm:mt-10 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-slate-900">
            Чудово!
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mt-4 sm:mt-8">
            Ну, тоді до зустрічі!
          </h1>
          <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-slate-900 mt-0 sm:mt-2">
            (Пощастило мені в цьому році)
          </h1>
        </div>
        <div className="flex  justify-center items-center gap-4 sm:gap-5 mt-4 sm:mt-10">
          <ProgressiveImage
            sources={getProgressiveSources("/smile7.webp")}
            alt="emoji"
            width={150}
            height={150}
            wrapClassName="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]"
          />
          <ProgressiveImage
            sources={getProgressiveSources("/smile5.webp")}
            alt="emoji"
            width={150}
            height={150}
            wrapClassName="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-6 sm:mt-10 mb-5 sm:mb-0">
          <div
            className={[
              "flex flex-col justify-center items-center text-center",
              "transition-all duration-700 ease-out",
              "delayed-reveal-3s",
            ].join(" ")}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900">
              Добре, даю тобі ще одну спробу...
            </h1>
            <ProgressiveImage
              sources={["/smile8.webp"]}
              alt="emoji"
              width={100}
              height={100}
              wrapClassName="relative w-[90px] h-[90px] sm:w-[100px] sm:h-[100px]"
            />

            <AppLinkButton
              href="/first"
              prefetch
              prefetchImages={getProgressiveSources("/smile13.webp")}
              className="w-full max-w-[280px] h-12 sm:h-14 text-lg sm:text-2xl bg-indigo-600 hover:bg-indigo-700"
            >
              Реабілітуватись
            </AppLinkButton>
          </div>
        </div>
      </div>
    </CenteredCard>
  );
}
