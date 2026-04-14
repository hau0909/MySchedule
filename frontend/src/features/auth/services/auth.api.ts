import { fetcher } from "@/lib/fetcher";
import { SigninPayload } from "../types/SigninPayload";
import { SignupPayload } from "../types/SignupPayload";

export const signin = async (data: SigninPayload) => {
  return await fetcher("/auth/signin", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const signup = async (data: SignupPayload) => {
  return await fetcher("/auth/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const getMe = async () => {
  return await fetcher("/auth/me");
};

export const logout = async () => {
  return await fetcher("/auth/logout", {
    method: "POST",
  });
};
