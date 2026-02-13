import type { Metadata } from "next";
import ReduxProvider from "@/store/Provider";
import TitleFromRedux from "@/components/TitleFromRedux";
import NameBootstrapper from "@/components/NameBootstrapper";
import { Suspense } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Valentine for You",
  description: "Valentines Day",
  icons: {
    icon: "/Love.webp",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full">
      <body className="min-h-full bg-transparent">
        <ReduxProvider>
          <Suspense fallback={null}>
            <NameBootstrapper />
          </Suspense>
          <TitleFromRedux />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

