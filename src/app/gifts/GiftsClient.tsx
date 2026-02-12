"use client";

import AppButton from "@/components/buttons/AppButton";
import ImagePair from "@/components/ImagePair/ImagePair";
import { gifts } from "@/lib/gifts";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const CHOSEN_GIFT_CLASS =
  "h-14 w-30 rounded-2xl text-lg bg-indigo-600 text-white flex items-center justify-center";

const giftById = Object.fromEntries(gifts.map((gift) => [gift.id, gift]));

export default function GiftsClient() {
  const searchParams = useSearchParams();
  const chosen = searchParams.getAll("g");
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50">
        <ImagePair leftSrc="/smile20.webp" rightSrc="/smile20.webp" />

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
                      <Image src={gift.image} alt="gift" width={30} height={30} />
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
          <AppButton
            onClick={() => router.push("/choose-gift")}
            className="w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700"
          >
            Так
          </AppButton>
          <AppButton
            onClick={() => router.push("/finish")}
            className="w-50 h-15 text-3xl bg-indigo-600 hover:bg-indigo-700"
          >
            Ні
          </AppButton>
        </div>

        <ImagePair leftSrc="/smile20.webp" rightSrc="/smile20.webp" className="mt-8" />
      </div>
    </div>
  );
}

