"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170  rounded-4xl bg-rose-50">
        <div className="flex justify-between">
          <Image src="/smile12.png" alt="emoji" width={150} height={150} />
          <Image src="/smile12.png" alt="emoji" width={150} height={150} />
        </div>
        <div>
          <div className="flex justify-center mt-5">
            <h1 className="text-5xl font-semibold text-slate-900 text-center">
              Вітаю тебе!
            </h1>
          </div>
          <div className="flex justify-center mt-10 ">
            <Image src="/smile22.png" alt="emoji" width={150} height={150} />
            <Image src="/love.jpg" alt="emoji" width={150} height={150} />
          </div>
          <div className="flex justify-center gap-5 mt-15">
            <button
              onClick={() => router.push("/whatsday")}
              className="w-60 h-17   rounded-2xl text-2xl text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
            >
              Забрати подарунки
            </button>
          </div>
        </div>
        <div className="flex justify-between ">
          <Image src="/smile12.png" alt="emoji" width={150} height={150} />
          <Image src="/smile12.png" alt="emoji" width={150} height={150} />
        </div>
      </div>
    </div>
  );
}
