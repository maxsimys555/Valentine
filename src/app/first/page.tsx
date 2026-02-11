"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170  rounded-4xl bg-rose-50">
        <div className="flex justify-between">
          <Image src="/smile1.png" alt="emoji" width={250} height={250} />
          <Image src="/smile1.png" alt="emoji" width={250} height={250} />
        </div>
        <div>
          <div className="flex justify-center">
            <h1 className="text-4xl font-semibold text-slate-900">
              А ти знаєш, який сьогодні день?
            </h1>
          </div>
          <div className="flex justify-center gap-5 mt-15">
            <button
              onClick={() => router.push("/whatsday")}
              className="w-50 h-15  rounded-2xl text-3xl text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
            >
              Так
            </button>
            <button
              onClick={() => router.push("/goodbye")}
              className="w-50 h-15  rounded-2xl text-3xl text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
            >
              Ні
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <Image src="/smile1.png" alt="emoji" width={250} height={250} />
          <Image src="/smile1.png" alt="emoji" width={250} height={250} />
        </div>
      </div>
    </div>
  );
}
