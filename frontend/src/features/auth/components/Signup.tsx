import { Input } from "../../../components/ui/input";

type Props = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

export default function Signup({ isLogin, setIsLogin }: Props) {
  const handleChangeStatus = () => {
    setIsLogin(!isLogin);
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
        <form className="space-y-2">
          <section className="space-y-1">
            <p className="font-semibold text-slate-800">Name</p>
            <Input
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
              className="py-2 px-3.5 bg-primary shadow-sm rounded-full cursor-pointer
              active:scale-90 duration-300 transition-all ease-in-out"
            >
              <p className="uppercase font-bold text-xs text-white">login</p>
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
