"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const chosen = searchParams.getAll("g");
  
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170  rounded-4xl bg-rose-50">
        <div className="flex justify-between">
          <Image src="/smile20.png" alt="emoji" width={150} height={150} />
          <Image src="/smile20.png" alt="emoji" width={150} height={150} />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">Твой выбор:</h1>

          {chosen.length === 0 ? (
            <p className="text-lg">Ничего не выбрано.</p>
          ) : (
            <ul className="list-disc pl-6 text-xl">
              {chosen.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex justify-between">
          <Image src="/smile20.png" alt="emoji" width={150} height={150} />
          <Image src="/smile20.png" alt="emoji" width={150} height={150} />
        </div>
      </div>
    </div>
  );
}
