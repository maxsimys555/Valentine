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
    <html lang="en">
      <body className="min-h-screen bg-linear-to-br from-blue-500 via-red-500 to-purple-600">
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

