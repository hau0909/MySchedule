import AddTaskModal from "@/features/task/components/AddTaskModal";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

export default function page() {
  return (
    <div className="w-full space-y-5">
      <header className="flex justify-between items-center">
        {/* title */}
        <section>
          <p className="text-4xl font-bold text-slate-900">
            Timeline & Task Details
          </p>
          <p className="text-gray-500">
            Organize your flow and counquer the digital day.
          </p>
        </section>

        {/* Add button */}
        {/* <section
          className="flex group justify-center gap-2 items-center p-3 cursor-pointer
        bg-primary rounded-full text-white ring-1 ring-slate-100 shadow-md/10 
        inset-shadow-sm inset-shadow-white hover:bg-primary/90 hover:scale-105 
        active:scale-90 duration-300 transition-all ease-in-out"
        >
          <Plus
            size={30}
            className="group-hover:-rotate-90 duration-300 transition-all ease-in-out"
          />
        </section> */}

        <AddTaskModal />
      </header>

      <main className="flex items-center w-full gap-4">
        {/* Total Tasks */}
        <section
          className="shrink-0 min-w-50 py-5 px-7 rounded-[2.5rem] bg-white
          shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] border border-slate-50"
        >
          <p className="uppercase text-[10px] tracking-widest text-[#939393] font-bold mb-1.5">
            Total Tasks
          </p>
          <p className="flex items-baseline gap-2">
            <span className="text-[32px] font-extrabold text-[#1f2937] leading-none">
              24
            </span>
            <span className="text-sm font-bold text-[#22c55e]">+12%</span>
          </p>
        </section>

        {/* Time Allocated */}
        <section
          className="shrink-0 min-w-50 py-5 px-7 rounded-[2.5rem] bg-white
          shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] border border-slate-50"
        >
          <p className="uppercase text-[10px] tracking-widest text-[#939393] font-bold mb-1.5">
            Time Allocated
          </p>
          <p className="flex items-baseline gap-1.5">
            <span className="text-[32px] font-extrabold text-[#1f2937] leading-none">
              6.5
            </span>
            <span className="text-sm font-semibold text-[#8b929e]">hrs</span>
          </p>
        </section>

        {/* Daily Goal Progress */}
        <section
          className="flex-1 py-5 px-7 rounded-[2.5rem] bg-[#f8f1ea]
          flex flex-col justify-center border border-[#f3e5d8]"
        >
          <div className="flex flex-col w-full relative">
            <p className="uppercase text-[10px] tracking-widest text-[#978577] font-bold mb-1.5">
              Daily Goal Progress
            </p>
            <div className="flex items-center justify-between w-full">
              <span className="text-[32px] font-extrabold text-[#1f2937] leading-none">
                82%
              </span>
              <div className="w-1/2 max-w-55 h-2 rounded-full bg-[#eadecd] overflow-hidden ml-4">
                <div className="h-full bg-[#ff8800] rounded-full w-[82%]"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Task List Section */}
      <section className="w-full bg-white rounded-[2.5rem] py-8 px-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] border border-slate-50">
        {/* Table Header */}
        <header className="flex w-full uppercase text-[10px] tracking-widest text-[#939393] font-bold pb-8">
          <div className="w-[35%]">Task Name</div>
          <div className="w-[20%] text-center">Goal Category</div>
          <div className="w-[20%] text-center">Time Allocation</div>
          <div className="w-[15%]">Status</div>
          <div className="w-[10%] text-right">Action</div>
        </header>

        {/* Task Rows */}
        <div className="flex flex-col gap-8 w-full">
          {/* Row 1 */}
          <div className="flex w-full items-center">
            <div className="w-[35%] flex gap-3 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-[#9c591c] mt-1.5 shrink-0"></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800">
                  Product Strategy Sync
                </span>
                <span className="text-[11px] text-slate-400 font-semibold">
                  High Priority
                </span>
              </div>
            </div>
            <div className="w-[20%] flex justify-center">
              <span className="bg-[#fef3c7]/60 text-[#b45309] text-[10px] font-extrabold px-3 py-1 rounded-full">
                Work
              </span>
            </div>
            <div className="w-[20%] text-center">
              <span className="text-xs font-semibold text-slate-600">
                45 min
              </span>
            </div>
            <div className="w-[15%] flex gap-2 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0"></div>
              <span className="text-xs font-extrabold text-slate-800">
                In Progress
              </span>
            </div>
            <div className="w-[10%] text-right"></div>
          </div>

          {/* Row 2 */}
          <div className="flex w-full items-center">
            <div className="w-[35%] flex gap-3 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-[#cbd5e1] mt-1.5 shrink-0"></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800">
                  UI Design Review
                </span>
                <span className="text-[11px] text-slate-400 font-semibold">
                  Project: Radiant
                </span>
              </div>
            </div>
            <div className="w-[20%] flex justify-center">
              <span className="bg-[#fed7aa]/30 text-[#c2410c] text-[10px] font-extrabold px-3 py-1 rounded-full">
                Design
              </span>
            </div>
            <div className="w-[20%] text-center">
              <span className="text-xs font-semibold text-slate-600">
                120 min
              </span>
            </div>
            <div className="w-[15%] flex gap-2 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#eab308] shrink-0"></div>
              <span className="text-xs font-extrabold text-slate-800">
                Pending
              </span>
            </div>
            <div className="w-[10%] text-right"></div>
          </div>

          {/* Row 3 */}
          <div className="flex w-full items-center">
            <div className="w-[35%] flex gap-3 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mt-1.5 shrink-0"></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800">
                  Daily Reflection
                </span>
                <span className="text-[11px] text-slate-400 font-semibold">
                  Personal Wellbeing
                </span>
              </div>
            </div>
            <div className="w-[20%] flex justify-center">
              <span className="bg-slate-100 text-slate-500 text-[10px] font-extrabold px-3 py-1 rounded-full">
                Health
              </span>
            </div>
            <div className="w-[20%] text-center">
              <span className="text-xs font-semibold text-slate-600">
                15 min
              </span>
            </div>
            <div className="w-[15%] flex gap-2 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shrink-0"></div>
              <span className="text-xs font-extrabold text-slate-800">
                Completed
              </span>
            </div>
            <div className="w-[10%] text-right"></div>
          </div>

          {/* Row 4 */}
          <div className="flex w-full items-center">
            <div className="w-[35%] flex gap-3 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-1.5 shrink-0"></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800">
                  Database Optimization
                </span>
                <span className="text-[11px] text-slate-400 font-semibold">
                  Engineering
                </span>
              </div>
            </div>
            <div className="w-[20%] flex justify-center">
              <span className="bg-[#fef3c7]/60 text-[#b45309] text-[10px] font-extrabold px-3 py-1 rounded-full">
                Work
              </span>
            </div>
            <div className="w-[20%] text-center">
              <span className="text-xs font-semibold text-slate-600">
                90 min
              </span>
            </div>
            <div className="w-[15%] flex gap-2 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444] shrink-0"></div>
              <span className="text-xs font-extrabold text-slate-800">
                Critical
              </span>
            </div>
            <div className="w-[10%] text-right"></div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-between items-center mt-12 pt-4 w-full">
          <span className="text-[11px] font-semibold text-slate-400">
            Showing 4 of 24 tasks
          </span>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-50 transition-colors">
              <ChevronLeft size={14} />
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#ff8800] text-white font-bold text-[11px] shadow-sm">
              1
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-full text-slate-600 font-bold text-[11px] hover:bg-slate-50 transition-colors">
              2
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-full text-slate-600 font-bold text-[11px] hover:bg-slate-50 transition-colors">
              3
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-50 transition-colors">
              <ChevronRight size={14} />
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
}
