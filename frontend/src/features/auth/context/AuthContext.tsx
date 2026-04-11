/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useEffect, useState } from "react";
import * as authApi from "../services/auth.api";
import { AuthContextType } from "../types/AuthContextType";
import { useRouter } from "next/navigation";
import { User } from "@/types/User";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const data = await authApi.getMe();
        setUser(data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const login = async (formData: any) => {
    await authApi.signin(formData);
    const data = await authApi.getMe();
    setUser(data.user);
    router.push("/dashboard");
  };

  const logoutUser = async () => {
    await authApi.logout();
    setUser(null);
    router.push("/auth");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout: logoutUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
