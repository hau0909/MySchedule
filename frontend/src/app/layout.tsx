import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "The Juice - Squeeze the day",
  description: "",
  icons: "/logo/the-juice-logo-icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSans.className} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
