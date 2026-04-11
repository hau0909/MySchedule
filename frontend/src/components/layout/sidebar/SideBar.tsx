"use client";
import { ChartLine, LayoutGridIcon, ListTodo } from "lucide-react";
import Image from "next/image";
import { SidebarItem } from "./SidebarItem";

export default function SideBar() {
  return (
    <div className="bg-neutral-100/75">
      <div
        className="flex flex-col justify-between h-screen bg-white
      rounded-br-[70px] border border-slate-200"
      >
        {/* Logo - top */}
        <header className="flex justify-center">
          <Image
            alt="logo"
            className="drop-shadow-md drop-shadow-amber-200"
            src="/logo/the-juice-logo.png"
            width={100}
            height={100}
            priority
          />
        </header>

        {/* Nav - center */}
        <main className="flex items-center justify-center">
          <nav className="flex flex-col gap-5">
            <SidebarItem
              icon={LayoutGridIcon}
              label="Dashboard"
              path="/dashboard"
            />
            <SidebarItem icon={ListTodo} label="Tasks" path="/tasks" />
            <SidebarItem icon={ChartLine} label="Timeline" path="/timeline" />
          </nav>
        </main>

        <footer className="h-50"></footer>
      </div>
    </div>
  );
}
