"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "@/store/nameSlice/nameSlice";
import type { RootState } from "@/store/store";

const STORAGE_KEY = "valentine_name";

export default function NameBootstrapper() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.name.value);

  useEffect(() => {
    const q = searchParams.get("name");
    if (q && q.trim()) {
      const trimmed = q.trim();
      dispatch(setName(trimmed));
      localStorage.setItem(STORAGE_KEY, trimmed);
      return;
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && stored.trim() && !name) {
      dispatch(setName(stored.trim()));
    }
  }, [searchParams, dispatch, name]);

  useEffect(() => {
    if (name && name.trim()) {
      localStorage.setItem(STORAGE_KEY, name.trim());
    }
  }, [name]);

  return null;
}

