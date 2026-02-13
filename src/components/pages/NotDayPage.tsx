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
  bottomImageClassName = "mt-35",
}: NotDayPageProps) {
  return (
    <CenteredCard>
      <ImagePairServer
        leftSrc={imageSrc}
        rightSrc={imageSrc}
        priority
      />

      <div className="flex justify-center mt-25">
        <h1 className="text-4xl font-semibold text-slate-900 text-center">{title}</h1>
      </div>
      <div className="flex justify-center gap-5 mt-15">
        <h1 className="text-3xl">Нажаль, не вгадала!</h1>
        <AppLinkButton
          href="/whatsday"
          prefetch
          prefetchImages={getProgressiveSources("/smile6.webp")}
          className="py-1 px-2 text-2xl bg-indigo-600 hover:bg-indigo-700 hover:text-red-400"
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


