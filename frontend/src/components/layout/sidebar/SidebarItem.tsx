import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  icon: React.ComponentType<{ size: number; className: string }>;
  label: string;
  path: string;
}

export const SidebarItem = ({ icon: Icon, label, path }: SidebarItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link href={path}>
      <section className="relative w-fit">
        {/* KHỐI 1: ICON */}
        <div
          className={`peer group p-2.5 cursor-pointer transition-all duration-500 ease-in-out active:scale-90 active:duration-75
            ${
              isActive
                ? "ring-1 ring-white/80 shadow-md bg-primary rounded-br-3xl rounded-bl-3xl rounded-tr-3xl rounded-tl-none"
                : "rounded-md hover:ring-1 hover:ring-white/80 hover:shadow-md hover:bg-primary hover:rounded-br-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl hover:rounded-tl-none"
            }`}
        >
          <Icon
            size={30}
            className={`transition-all duration-300 ease-in-out ${
              isActive ? "text-white" : "text-primary group-hover:text-white"
            }`}
          />
        </div>

        <div
          className="absolute pointer-events-none opacity-0 py-1.5 
          border-2 border-amber-500
          rounded-bl-none rounded-tr-none
          px-3 rounded-full bottom-2 left-12 
          peer-hover:rounded-bl-full
          peer-hover:rounded-tr-full
          peer-hover:opacity-100 peer-hover:left-21
          duration-500 transition-all ease-in-out"
        >
          <p className="text-amber-500 font-bold">{label}</p>
        </div>
      </section>
    </Link>
  );
};
