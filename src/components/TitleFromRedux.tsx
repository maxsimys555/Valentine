"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function TitleFromRedux() {
  const name = useSelector((state: RootState) => state.name.value);
  const pathname = usePathname();

  useEffect(() => {
    const safeName = name?.trim();
    document.title = safeName ? `Valentine for ${safeName}` : "Valentine for You";
  }, [name, pathname]);

  return null;
}

