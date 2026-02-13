"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "@/store/nameSlice/nameSlice";
import type { RootState } from "@/store/store";

export default function NameFromQuery() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.name.value);

  useEffect(() => {
    const q = searchParams.get("name");
    if (q && q.trim()) {
      dispatch(setName(q.trim()));
    } else {
      dispatch(setName("Любима"));
    }
  }, [searchParams, dispatch]);

  return <span>{name}</span>;
}
