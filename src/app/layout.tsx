import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: "Max Valentine for Angelika",
  description: "Valentines Day",
  icons: {
    icon: "/Love.jpg",
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
        {children}
      </body>
    </html>
  );
}
