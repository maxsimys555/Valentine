"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

const FALLBACK_NAME = "Любима";

export default function NameFromQuery() {
  const name = useSelector((state: RootState) => state.name.value);
  const safeName = name?.trim();

  return <span>{safeName || FALLBACK_NAME}</span>;
}

