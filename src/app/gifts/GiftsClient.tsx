"use client";

import AppLinkButton from "@/components/buttons/AppLinkButton";
import ProgressiveImage from "@/components/ProgressiveImage";
import { gifts } from "@/lib/gifts";
import { getProgressiveSources } from "@/lib/images";
import { useSearchParams } from "next/navigation";

const CHOSEN_GIFT_CLASS =
  "h-12 w-24 sm:h-14 sm:w-30 rounded-2xl text-base sm:text-lg bg-rose-300 text-rose-950 flex items-center justify-center";

const giftById = Object.fromEntries(gifts.map((gift) => [gift.id, gift]));

export default function GiftsClient() {
  const searchParams = useSearchParams();
  const chosen = searchParams.getAll("g");

  return (
    <div>
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          Твій вибір:
        </h1>

        {chosen.length === 0 ? (
          <p className="text-lg">Нічого не обрано.</p>
        ) : (
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center mt-6 sm:mt-10 text-center">
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

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mt-12 sm:mt-18">
        Хочеш змінити вибір?
      </h1>
      <div className="flex px-4 justify-center gap-4 sm:gap-5 mt-6 sm:mt-10">
        <AppLinkButton
          href="/choose-gift"
          prefetch
          prefetchImages={getProgressiveSources("/smile13.webp")}
          className="w-full max-w-[220px] h-12 sm:h-14 text-xl sm:text-2xl md:text-3xl bg-indigo-600 hover:bg-indigo-700"
        >
          Так
        </AppLinkButton>
        <AppLinkButton
          href="/finish"
          prefetch
          prefetchImages={[
            ...getProgressiveSources("/smile12.webp"),
            ...getProgressiveSources("/smile22.webp"),
            ...getProgressiveSources("/Love.webp"),
          ]}
          className="w-full max-w-[220px] h-12 sm:h-14 text-xl sm:text-2xl md:text-3xl bg-indigo-600 hover:bg-indigo-700"
        >
          Ні
        </AppLinkButton>
      </div>
    </div>
  );
}
