"use client";

import { createContext, ReactNode, useCallback, useContext } from "react";

 type NavigationLoaderContextValue = {
   startLoading: () => void;
 };

 const NavigationLoaderContext = createContext<NavigationLoaderContextValue | null>(null);

 export function useNavigationLoader() {
   const ctx = useContext(NavigationLoaderContext);
   if (!ctx) {
     throw new Error("useNavigationLoader must be used within NavigationLoaderProvider");
   }
   return ctx;
 }

export default function NavigationLoaderProvider({ children }: { children: ReactNode }) {
  const startLoading = useCallback(() => {}, []);

  return (
    <NavigationLoaderContext.Provider value={{ startLoading }}>
      {children}
    </NavigationLoaderContext.Provider>
  );
}
