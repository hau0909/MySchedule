import { FormEvent, useState } from "react";
import { Input } from "../../../components/ui/input";
import { useRouter } from "next/navigation";
import { signup } from "../services/auth.api";

type Props = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

export default function Signup({ isLogin, setIsLogin }: Props) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleChangeStatus = () => {
    setIsLogin(!isLogin);
  };

  const handleValidate = () => {
    if (password.trim() !== confirmPassword.trim()) {
      console.error("Not matching password!");
      return false;
    }

    return true;
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (!handleValidate()) return;

      const isCreated = await signup({ email, password, name });

      if (isCreated) return router.push("/dashboard");
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
          signup
        </p>
        <form className="space-y-2" onSubmit={handleSignup}>
          <section className="space-y-1">
            <p className="font-semibold text-slate-800">Name</p>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-80 placeholder:italic p-5 outline-none focus-visible:ring-0
              border-2 focus-visible:border-primary focus-visible:bg-secondary/5"
              type="text"
              placeholder="your name..."
            />
            <p className="text-red-400 text-xs pl-3 opacity-0">Invalid name!</p>
          </section>

          <section className="space-y-1">
            <p className="font-semibold text-slate-800">Email</p>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-80 placeholder:italic p-5 outline-none focus-visible:ring-0
              border-2 focus-visible:border-primary focus-visible:bg-secondary/5"
              type="email"
              placeholder="youremail@example.com..."
            />
            <p className="text-red-400 text-xs pl-3 opacity-0">
              Invalid email!
            </p>
          </section>

          <section className="space-y-1">
            <p className="font-semibold text-slate-800">Password</p>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-80 placeholder:italic p-5 outline-none focus-visible:ring-0
              border-2 focus-visible:border-primary focus-visible:bg-secondary/5"
              type="password"
              placeholder="•••••••"
            />
            <p className="text-red-400 text-xs pl-3 opacity-0 ">
              Invalid password!
            </p>
          </section>

          <section className="space-y-1">
            <p className="font-semibold text-slate-800">Confirm Password</p>
            <Input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-80 placeholder:italic p-5 outline-none focus-visible:ring-0
              border-2 focus-visible:border-primary focus-visible:bg-secondary/5"
              type="password"
              placeholder="•••••••"
            />
            <p className="text-red-400 text-xs pl-3 opacity-0 ">
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
              <p className="uppercase font-bold text-xs text-white">Register</p>
            </button>
          </section>
        </form>

        <span
          className="flex justify-center items-center gap-1 text-sm text-slate-400
        text-shadow-sm/5"
        >
          Have an account?
          <strong
            className="text-slate-600 hover:underline underline-offset-2 cursor-pointer"
            onClick={handleChangeStatus}
          >
            Signin now.
          </strong>
        </span>
      </section>
    </div>
  );
}
