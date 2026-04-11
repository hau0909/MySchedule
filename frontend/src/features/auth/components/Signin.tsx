import { FormEvent, useEffect, useState } from "react";
import { Input } from "../../../components/ui/input";
import { useAuth } from "@/features/auth";
import { useRouter } from "next/navigation";

type Props = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

export default function Signin({ isLogin, setIsLogin }: Props) {
  const { login, user } = useAuth();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetch = () => {
      if (user) router.push("/dashboard");
    };
    fetch();
  }, [router, user]);

  const handleChangeStatus = () => {
    setIsLogin(!isLogin);
  };

  const handleValidate = () => {};

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await login({ email, password });
    } catch (error) {
      console.error("(Login failed)", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center
    opacity-100 translate-y-0 transition duration-500
    starting:opacity-0 starting:translate-y-4"
    >
      <section className="space-y-5">
        <p
          className="text-3xl uppercase text-center
          font-bold text-primary text-shadow-sm"
        >
          signin
        </p>
        <form className="space-y-2" onSubmit={handleSignin}>
          <section className="space-y-1">
            <p className="font-semibold text-slate-800">Email</p>
            <Input
              disabled={isLoading}
              className="w-80 placeholder:italic p-5 outline-none border-2  focus-visible:ring-0
               focus-visible:border-primary focus-visible:bg-secondary/5"
              type="email"
              placeholder="youremail@example.com..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-red-400 text-xs pl-3 opacity-0">
              Invalid email!
            </p>
          </section>

          <section className="space-y-1">
            <p className="font-semibold text-slate-800">Password</p>
            <Input
              disabled={isLoading}
              className="w-80 placeholder:italic p-5 outline-none ring-0 focus-visible:ring-0
              border-2 focus-visible:border-primary focus-visible:bg-secondary/5"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-400 text-xs pl-3 opacity-0">
              Invalid password!
            </p>
          </section>

          <section className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="py-2 px-3.5 bg-primary shadow-sm rounded-full transition-all duration-300 ease-in-out
              cursor-pointer active:scale-90
              disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              <p className="uppercase font-bold text-xs text-white">login</p>
            </button>
          </section>
        </form>

        <span
          className={`flex justify-center items-center gap-1 text-sm text-slate-400
        text-shadow-sm/5`}
        >
          Don&apos;t have an account?
          <strong
            className="text-slate-600 hover:underline underline-offset-2 cursor-pointer"
            onClick={handleChangeStatus}
          >
            Signup now.
          </strong>
        </span>
      </section>
    </div>
  );
}
