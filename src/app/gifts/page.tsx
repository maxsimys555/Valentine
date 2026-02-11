"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const CHOSEN_GIFT_CLASS =
  "h-14 w-30 rounded-2xl text-lg bg-indigo-600 text-white flex items-center justify-center";

export default function Home() {
  const searchParams = useSearchParams();
  const chosen = searchParams.getAll("g");
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50">
        <div className="flex justify-between">
          <Image src="/smile20.png" alt="emoji" width={150} height={150} />
          <Image src="/smile20.png" alt="emoji" width={150} height={150} />
        </div>

        <div>
          <h1 className="text-3xl font-semibold text-center">Твій вибір:</h1>

          {chosen.length === 0 ? (
            <p className="text-lg">Нічого не обрано.</p>
          ) : (
            <div
              className="flex gap-6 flex-wrap justify-center
            mt-10"
            >
              {chosen.map((g) => (
                <div key={g} className={CHOSEN_GIFT_CLASS}>
                  {g}
                </div>
              ))}
            </div>
          )}
        </div>
        <h1 className="text-4xl font-semibold text-center mt-20">Хочеш змінити вибір?</h1>
        <div className="flex justify-center gap-5 mt-10">
          <button
            onClick={() => router.push("/choose-gift")}
            className="w-50 h-15  rounded-2xl text-3xl text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
          >
            Так
          </button>
          <button
            onClick={() => router.push("/")}
            className="w-50 h-15  rounded-2xl text-3xl text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
          >
            Ні
          </button>
        </div>

        <div className="flex justify-between mt-8">
          <Image src="/smile20.png" alt="emoji" width={150} height={150} />
          <Image src="/smile20.png" alt="emoji" width={150} height={150} />
        </div>
      </div>
    </div>
  );
}
