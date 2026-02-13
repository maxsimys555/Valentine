import type { ReactNode } from "react";
import AppLinkButton from "@/components/buttons/AppLinkButton";
import ImagePairServer from "@/components/ImagePair/ImagePairServer";
import CenteredCard from "@/components/layout/CenteredCard";
import { getProgressiveSources } from "@/lib/images";

type NotDayPageProps = {
  title: ReactNode;
  imageSrc?: string;
  bottomImageClassName?: string;
};

export default function NotDayPage({
  title,
  imageSrc = "/smile9.webp",
  bottomImageClassName = "mt-20 sm:mt-32",
}: NotDayPageProps) {
  return (
    <CenteredCard>
      <ImagePairServer leftSrc={imageSrc} rightSrc={imageSrc} priority />

      <div className="flex justify-center mt-12 sm:mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 text-center">
          {title}
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3  mt-8 sm:mt-20 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl">Нажаль, не вгадала!</h1>
        <AppLinkButton
          href="/whatsday"
          prefetch
          prefetchImages={getProgressiveSources("/smile6.webp")}
          className="px-4 py-2 text-lg sm:text-xl bg-indigo-600 hover:bg-indigo-700 hover:text-red-400"
        >
          Спробувати ще раз
        </AppLinkButton>
      </div>
      <ImagePairServer
        leftSrc={imageSrc}
        rightSrc={imageSrc}
        className={bottomImageClassName}
      />
    </CenteredCard>
  );
}
