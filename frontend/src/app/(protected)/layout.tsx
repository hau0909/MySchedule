"use client";
// app/(protected)/layout.tsx
import SideBar from "@/components/layout/sidebar/SideBar";
import Aside from "@/components/layout/aside/Aside";
import Header from "@/components/layout/header/Header";
import { useEffect } from "react";
import { useAuth } from "@/features/auth";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) return router.push("/auth");
  }, [loading, router, user]);

  if (loading)
    return (
      <div
        className="flex h-screen items-center justify-center gap-2
        text-xl text-slate-500"
      >
        <Loader2 className="animate-spin" />
        <p className="animate-pulse">Loading</p>
      </div>
    );

  if (!user) return null;

  return (
    <main className="grid grid-cols-[100px_1fr_332px] h-screen">
      {/* Sidebar */}
      <aside className="">
        <SideBar />
      </aside>

      {/* Main Content */}
      <section className="overflow-y-auto bg-neutral-100/75">
        <div className="my-7 mx-10">
          <Header />
          <div className="mt-8">{children}</div>
        </div>
      </section>

      {/* Right Aside */}
      <aside className="">
        <Aside />
      </aside>
    </main>
  );
}
