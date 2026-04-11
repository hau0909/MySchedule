"use client";
import Signin from "@/features/auth/components/Signin";
import Signup from "@/features/auth/components/Signup";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);

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
