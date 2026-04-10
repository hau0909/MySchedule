/* eslint-disable @next/next/no-img-element */
"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Send } from "lucide-react";

export default function Aside() {
  return (
    <div
      className="bg-linear-to-b from-[#FFF2E5] via-[#F8D5B9] to-[#F3B081] 
      h-full flex flex-col relative overflow-hidden"
    >
      {/* Image at bottom (Background layer) */}
      <div className="absolute inset-x-0 bottom-0 w-full pointer-events-none">
        <img
          src="/bg-desk-variation.png"
          alt="Illustration"
          className="w-full h-auto object-cover opacity-90 
          mask-[linear-gradient(to_bottom,transparent_0%,black_30%)]"
        />
      </div>

      <div className="p-5 flex-1 relative flex flex-col">
        {/* profile preview */}
        <header className="w-full flex justify-between items-center mb-3">
          <div className="w-1/3">
            <button
              className="relative p-2 bg-white rounded-full text-gray-500 
            hover:text-gray-700 shadow-sm cursor-pointer
              active:scale-90 transition-all duration-300 ease-in-out"
            >
              <Bell className="w-5 h-5" />
              <span
                className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary 
                rounded-full border-2 border-white"
              ></span>
            </button>
          </div>
          <div className="w-2/3 text-right flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex justify-end gap-3 items-center 
                rounded-xl py-2 px-3 hover:bg-white/50
                transition-all outline-none cursor-pointer"
                >
                  <div className="text-right">
                    <p
                      className="font-semibold text-gray-900 text-sm 
                      leading-snug line-clamp-1"
                    >
                      Rayhan Amir
                    </p>
                    <p
                      className="text-gray-500 text-xs 
                      leading-snug line-clamp-1"
                    >
                      Free member
                    </p>
                  </div>
                  <div>
                    <Avatar size="default">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>RA</AvatarFallback>
                    </Avatar>
                  </div>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-44" align="end">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* content (Overview task/supporting chatbot) */}
        <main className="flex flex-col justify-end gap-2 z-10 h-130 pb-4">
          {/* Chat Messages */}
          <div className="overflow-y-auto flex flex-col gap-4 [&::-webkit-scrollbar]:hidden pb-2">
            {/* User Bubble */}
            <div className="self-end max-w-[85%]">
              <div
                className="bg-gray-900 border border-gray-700/50 text-white p-3.5 
                rounded-2xl rounded-tr-sm shadow-sm relative backdrop-blur-md"
              >
                <p className="text-[13px] leading-relaxed relative z-10 font-medium">
                  Study React at 8 PM tomorrow
                </p>
              </div>
            </div>

            {/* Normal AI Message (Message thường có khung) */}
            <div className="self-start max-w-[85%] pr-6">
              {/* Thêm lại một lớp bg-white/50 mỏng kết hợp backdrop-blur-lg và inset-shadow */}
              <div
                className="bg-white/10 backdrop-blur-xl border border-white/60 
                text-gray-800 p-3.5 rounded-2xl rounded-tl-sm shadow-sm relative 
                  inset-shadow-sm inset-shadow-white/50"
              >
                <div
                  className="absolute top-0 left-0 w-full h-[45%] 
                  bg-linear-to-b from-white to-transparent rounded-tr-xl opacity-60 
                  z-0 pointer-events-none"
                ></div>

                <p className="text-[13px] leading-relaxed font-medium relative z-10">
                  I&apos;ve parsed your request. Here is the generated task:
                </p>
              </div>
            </div>

            {/* AI Bubble with Task Card (Message hiển thị add không có khung bubble) */}
            <div className="self-start w-full pr-8">
              {/* Task Card - Sửa lại bg-white/60 để thấy hiệu ứng khối mờ */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-[22px] border border-white/80 
                p-4.5 relative overflow-hidden shadow-sm inset-shadow-sm inset-shadow-white/70"
              >
                {/* Glossy shine */}
                <div
                  className="absolute top-0 left-0 w-full h-[45%] 
                  bg-linear-to-b from-white to-transparent opacity-60 z-0 pointer-events-none"
                ></div>

                <div className="relative z-10 flex flex-col gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">
                      Task
                    </span>
                    <span className="text-[15px] text-gray-900 font-bold leading-tight">
                      Study React
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">
                      Description
                    </span>
                    <span className="text-[12px] text-gray-600 line-clamp-2 leading-snug">
                      Learn Next.js App Router and React Fundamentals...
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span
                      className="text-[12px] text-gray-900 font-semibold bg-orange-100/80 
                      px-2.5 py-1 rounded-lg border border-orange-200/50 shadow-sm w-fit"
                    >
                      Tomorrow, 8:00 PM
                    </span>
                    <span
                      className="text-[12px] text-purple-700 font-bold bg-purple-100/80 
                      px-3 py-1 rounded-lg border border-purple-200/50 shadow-sm w-fit capitalize"
                    >
                      Task
                    </span>
                  </div>

                  <button
                    className="mt-2 w-full py-2.5 bg-gray-900 hover:bg-black 
                    text-white text-[13px] font-bold rounded-xl shadow-sm transition-all active:scale-[0.98] border border-gray-700 cursor-pointer flex justify-center items-center"
                  >
                    Add task
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area (Separated) */}
          <div className="w-full flex items-center gap-3 shrink-0">
            {/* Input Wrapper */}
            <div
              className="flex-1 relative overflow-hidden bg-transparent 
              focus-within:bg-white/30 backdrop-blur-xs rounded-[24px] border border-white/80 
                shadow-sm transition-all duration-300 ease-in-out"
            >
              {/* Glossy shine */}
              <div
                className="absolute top-0 left-0 w-full h-[45%] bg-linear-to-b from-white 
                to-transparent opacity-60 z-0 pointer-events-none"
              ></div>
              <input
                type="text"
                placeholder="ask AI..."
                className="relative z-10 w-full bg-transparent py-3.5 px-5 text-[14px] text-gray-900 
              placeholder:text-gray-100 placeholder:text-shadow-2xs
              outline-none font-medium"
              />
            </div>

            {/* Button */}
            <button
              className="w-13 h-13 relative overflow-hidden 
              bg-transparent hover:bg-white/30 backdrop-blur-xs rounded-full 
              transition-all duration-300 shadow-sm border border-white/80 active:scale-95 
              shrink-0 cursor-pointer flex items-center justify-center"
            >
              {/* Glossy shine */}
              <div
                className="absolute top-0 left-0 w-full h-[45%] 
                bg-linear-to-b from-white to-transparent opacity-60 z-0 pointer-events-none"
              ></div>
              <Send className="relative z-10 w-5 h-5 text-white" />
            </button>
          </div>
        </main>

        {/* Spacer to push everything up, revealing the background image at the bottom */}
        <div className="flex-1 pointer-events-none"></div>
      </div>
    </div>
  );
}
