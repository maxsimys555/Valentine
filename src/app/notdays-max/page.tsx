"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170  rounded-4xl bg-rose-50">
        <div className="flex justify-between">
          <Image src="/smile9.png" alt="emoji" width={150} height={150} />
          <Image src="/smile9.png" alt="emoji" width={150} height={150} />
        </div>

        <div className="flex justify-center mt-25">
          <h1 className="text-4xl font-semibold text-slate-900">
            хммм.. Було б прикольно!
          </h1>
        </div>
        <div className="flex justify-center gap-5 mt-15">
          <h1 className="text-3xl">Нажаль, не вгадала!</h1>
          <Link
            href="/whatsday"
            className="py-1 px-2  text-2xl text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition cursor-pointer hover:text-red-400"
          >
            Спробувати ще раз
          </Link>
        </div>
        <div className="flex justify-between mt-35">
          <Image src="/smile9.png" alt="emoji" width={150} height={150} />
          <Image src="/smile9.png" alt="emoji" width={150} height={150} />
        </div>
      </div>
    </div>
  );
}
