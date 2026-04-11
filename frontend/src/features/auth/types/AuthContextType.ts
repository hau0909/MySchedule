import { User } from "@/types/User";
import { SigninPayload } from "./SigninPayload";

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (data: SigninPayload) => Promise<void>;
  logout: () => Promise<void>;
};
