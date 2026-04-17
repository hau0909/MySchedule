"use client";
import { useAuth } from "@/features/auth";
import Signin from "@/features/auth/components/Signin";
import Signup from "@/features/auth/components/Signup";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { user, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) return router.push("/dashboard");
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

  if (user) return null;

  return (
    <div className="flex justify-center items-center mt-10 ">
      <section className="space-y-3">
        <div className="flex justify-center">
          <Image
            alt=""
            src={"/logo/the-juice-logo-icon.png"}
            width={150}
            height={150}
            priority
          />
        </div>

        <section
          className={`border border-slate-50 shadow-md rounded-2xl
        inset-shadow-sm/30 inset-shadow-primary/30 p-5
        duration-300 transition-all ease-in-out 
        ${isLogin ? "w-100 h-100" : " w-100 h-145"}`}
        >
          {isLogin ? (
            <Signin isLogin={isLogin} setIsLogin={setIsLogin} />
          ) : (
            <Signup isLogin={isLogin} setIsLogin={setIsLogin} />
          )}
        </section>
      </section>
    </div>
  );
}
