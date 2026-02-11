"use client";
import WavingHand from "@/components/WavingHand/WavingHand";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170  rounded-4xl bg-rose-50">
        <div className="flex justify-between">
          <Image src="/smile25.png" alt="emoji" width={150} height={150} />
          <Image src="/smile25.png" alt="emoji" width={150} height={150} />
        </div>
        <div>
          <div className="flex justify-center mt-27">
            <h1 className="text-5xl font-semibold text-slate-900">
              Привіт, Анжеліка
            </h1>
            <WavingHand />
          </div>
          <div className="flex justify-center mt-15">
            <button
              onClick={() => router.push("/first")}
              className="w-50 h-15  rounded-2xl text-3xl text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
            >
              Привіт
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-26">
          <Image src="/smile25.png" alt="emoji" width={150} height={150} />
          <Image src="/smile25.png" alt="emoji" width={150} height={150} />
        </div>
      </div>
    </div>
  );
}
