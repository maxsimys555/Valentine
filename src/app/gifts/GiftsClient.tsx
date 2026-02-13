"use client";

import AppLinkButton from "@/components/buttons/AppLinkButton";
import ImagePair from "@/components/ImagePair/ImagePair";
import CenteredCard from "@/components/layout/CenteredCard";
import ProgressiveImage from "@/components/ProgressiveImage";
import { gifts } from "@/lib/gifts";
import { getProgressiveSources } from "@/lib/images";
import { useSearchParams } from "next/navigation";

const CHOSEN_GIFT_CLASS =
  "h-14 w-30 rounded-2xl text-lg bg-indigo-600 text-white flex items-center justify-center";

const giftById = Object.fromEntries(gifts.map((gift) => [gift.id, gift]));

export default function GiftsClient() {
  const searchParams = useSearchParams();
  const chosen = searchParams.getAll("g");

  return (
    <CenteredCard>
      <ImagePair
        leftSources={getProgressiveSources("/smile20.webp")}
        rightSources={getProgressiveSources("/smile20.webp")}
        priority
      />

      <div>
        <h1 className="text-3xl font-semibold text-center">Твій вибір:</h1>

        {chosen.length === 0 ? (
          <p className="text-lg">Нічого не обрано.</p>
        ) : (
          <div className="flex gap-6 flex-wrap justify-center mt-10 text-center">
            {chosen.map((giftId) => {
              const gift = giftById[giftId];

              return (
                <div key={giftId} className={CHOSEN_GIFT_CLASS}>
                  {gift?.image ? (
                    <ProgressiveImage
                      sources={getProgressiveSources(gift.image)}
                      alt="gift"
                      width={30}
                      height={30}
                      wrapClassName="relative w-[30px] h-[30px]"
                    />
                  ) : (
                    gift?.label ?? giftId
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <h1 className="text-4xl font-semibold text-center mt-20">Хочеш змінити вибір?</h1>
      <div className="flex justify-center gap-5 mt-10">
        <AppLinkButton
          href="/choose-gift"
          prefetch
          className="w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700"
        >
          Так
        </AppLinkButton>
        <AppLinkButton
          href="/finish"
          prefetch
          className="w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700"
        >
          Ні
        </AppLinkButton>
      </div>

      <ImagePair
        leftSources={getProgressiveSources("/smile20.webp")}
        rightSources={getProgressiveSources("/smile20.webp")}
        className="mt-8"
      />
    </CenteredCard>
  );
}

