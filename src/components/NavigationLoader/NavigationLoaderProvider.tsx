"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

   const startLoading = useCallback(() => {
     setIsLoading(true);
   }, []);

   useEffect(() => {
     if (!isLoading) return;
     const t = window.setTimeout(() => setIsLoading(false), 150);
     return () => window.clearTimeout(t);
  }, [pathname, isLoading]);

   return (
     <NavigationLoaderContext.Provider value={{ startLoading }}>
       {children}
       {isLoading ? (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
           <div className="h-14 w-14 rounded-full border-4 border-white/60 border-t-white animate-spin" />
         </div>
       ) : null}
     </NavigationLoaderContext.Provider>
   );
 }
