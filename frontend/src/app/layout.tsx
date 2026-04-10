import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/layout/sidebar/SideBar";
import Aside from "@/components/layout/aside/Aside";
import Header from "@/components/layout/header/Header";

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
      <body className="min-h-full flex flex-col">
        <main className="grid grid-cols-[100px_1fr_332px] h-screen">
          {/* Sidebar */}
          <aside className="">
            <SideBar />
          </aside>

          {/* Main Content */}
          <section className="overflow-y-auto bg-neutral-100/75">
            <div className="my-7 mx-10">
              <Header />
              <div className="mt-10">{children}</div>
            </div>
          </section>

          {/* Right Aside */}
          <aside className="">
            <Aside />
          </aside>
        </main>
      </body>
    </html>
  );
}
