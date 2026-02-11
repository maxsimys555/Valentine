"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170  rounded-4xl bg-rose-50">
        <div className="flex justify-between">
          <Image src="/smile6.png" alt="emoji" width={150} height={150} />
          <Image src="/smile6.png" alt="emoji" width={150} height={150} />
        </div>

        <div className="flex justify-center mt-15">
          <h1 className="text-5xl font-semibold text-slate-900">
            Який сьогодні день?
          </h1>
        </div>

        <div className="flex justify-center gap-5 mt-15">
          <Link
            href="/notdays-mikolay"
            className="p-2  rounded-2xl text-2xl text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
          >
            Миколайчик
          </Link>
          <Link
            href="/notdays-8march"
            className="p-2 rounded-2xl text-2xl text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
          >
            8 Березня
          </Link>
          <Link
            href="/notdays-max"
            className="p-2 rounded-2xl text-2xl text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
          >
            Максима
          </Link>
        </div>
        <div className="flex justify-center gap-5 mt-10">
          <Link
            href="/second"
            className="p-2  rounded-2xl text-2xl text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
          >
            День святого Валентина
          </Link>
          <Link
            href="/notdays-smm"
            className="p-2  rounded-2xl text-2xl text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
          >
            День святого SMM
          </Link>
        </div>

        <div className="flex justify-between mt-20">
          <Image src="/smile6.png" alt="emoji" width={150} height={150} />
          <Image src="/smile6.png" alt="emoji" width={150} height={150} />
        </div>
      </div>
    </div>
  );
}
