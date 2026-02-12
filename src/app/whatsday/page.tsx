"use client";

import AppLinkButton from "@/components/buttons/AppLinkButton";
import ImagePair from "@/components/ImagePair/ImagePair";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50">
        <ImagePair leftSrc="/smile6.png" rightSrc="/smile6.png" />

        <div className="flex justify-center mt-15">
          <h1 className="text-5xl font-semibold text-slate-900">Який сьогодні день?</h1>
        </div>

        <div className="flex justify-center gap-5 mt-15">
          <AppLinkButton
            href="/notdays-mikolay"
            className="p-2 text-2xl bg-indigo-600 hover:bg-indigo-700"
          >
            Миколайчик
          </AppLinkButton>
          <AppLinkButton
            href="/notdays-8march"
            className="p-2 text-2xl bg-indigo-600 hover:bg-indigo-700"
          >
            8 Березня
          </AppLinkButton>
          <AppLinkButton
            href="/notdays-max"
            className="p-2 text-2xl bg-indigo-600 hover:bg-indigo-700"
          >
            Максима
          </AppLinkButton>
        </div>
        <div className="flex justify-center gap-5 mt-10">
          <AppLinkButton href="/second" className="p-2 text-2xl bg-indigo-600 hover:bg-indigo-700">
            День святого Валентина
          </AppLinkButton>
          <AppLinkButton
            href="/notdays-smm"
            className="p-2 text-2xl bg-indigo-600 hover:bg-indigo-700"
          >
            День святого SMM
          </AppLinkButton>
        </div>

        <ImagePair leftSrc="/smile6.png" rightSrc="/smile6.png" className="mt-20" />
      </div>
    </div>
  );
}
