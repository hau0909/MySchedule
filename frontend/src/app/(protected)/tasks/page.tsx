/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import AddTaskModal from "@/features/task/components/AddTaskModal";
import ItemList from "@/features/task/components/ItemList";
import { getAllItems } from "@/features/task/services/item.api";
import { Item } from "@/types/Item";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Page() {
  const [items, setItems] = useState<Item[] | null>(null);

  const handleAddItem = (newItem: Item) => {
    if (!newItem) return;
    setItems((prev) => {
      if (!prev) return null;
      return [newItem, ...prev];
    });
  };

  const fetchItems = async () => {
    const itemsData = await getAllItems();
    if (itemsData) setItems(itemsData);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="w-full space-y-8">
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

        <AddTaskModal onAddSuccess={handleAddItem} />
      </header>

      <section
        className="w-full border h-140 rounded-2xl bg-white p-5 
      flex flex-col justify-between"
      >
        {!items || items.length <= 0 ? <></> : <ItemList items={items} />}
        <footer className="flex justify-between items-center w-full">
          {/* filter */}
          <div></div>

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
