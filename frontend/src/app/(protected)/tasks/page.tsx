"use client";

import AddTaskModal from "@/features/task/components/AddTaskModal";
import ItemList from "@/features/task/components/ItemList";
import { getAllItems } from "@/features/task/services/item.api";
import { Item } from "@/types/Item";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Page() {
  const [items, setItems] = useState<Item[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleAddItem = (newItem: Item) => {
    if (!newItem) return;
    setItems((prev) => {
      if (!prev) return null;
      return [newItem, ...prev];
    });
  };

  const handleFetchItems = async (page: number) => {
    setCurrentPage(page);
    fetchItems(page);
  };

  const getPaginationRange = (currentPage: number, totalPages: number) => {
    const delta = 2; // Số lượng trang hiển thị bên trái/phải trang hiện tại
    const range = [];

    for (let i = 1; i <= totalPages; i++) {
      // Luôn hiển thị trang đầu, trang cuối, và các trang trong khoảng delta
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
      // Thêm dấu "..." nếu có khoảng cách
      else if (range[range.length - 1] !== "...") {
        range.push("...");
      }
    }
    return range;
  };

  const fetchItems = async (page?: number) => {
    const data = await getAllItems(page || 1);

    if (data) {
      setItems(data.items);
      setTotalPages(data.totalPages);
    }
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

          {totalPages == 0 ? (
            <div></div>
          ) : (
            <div className="flex items-center gap-1">
              <button
                disabled={currentPage === 1}
                onClick={() => handleFetchItems(currentPage - 1)}
                className={`w-7 h-7 flex items-center justify-center rounded-full 
              text-slate-400  transition-colors 
                ${currentPage !== 1 && "hover:bg-slate-50 cursor-pointer"}`}
              >
                <ChevronLeft size={14} />
              </button>

              {getPaginationRange(currentPage, totalPages).map(
                (page, index) => {
                  if (page === "...") {
                    return (
                      <span
                        key={`dots-${index}`}
                        className="px-2 text-slate-400 font-bold"
                      >
                        ...
                      </span>
                    );
                  }

                  const isActive = currentPage === page;

                  return (
                    <button
                      key={index}
                      onClick={() => {
                        if (typeof page === "number") {
                          handleFetchItems(page);
                        }
                      }}
                      className={`w-7 h-7 flex items-center justify-center
                      rounded-full font-bold text-[11px] transition-colors 
                      ${
                        isActive
                          ? "bg-[#ff8800] text-white shadow-sm"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {page}
                    </button>
                  );
                },
              )}

              <button
                disabled={currentPage === totalPages}
                onClick={() => handleFetchItems(currentPage + 1)}
                className={`w-7 h-7 flex items-center justify-center rounded-full 
              text-slate-400  transition-colors 
                ${currentPage !== totalPages && "hover:bg-slate-50 cursor-pointer"}`}
              >
                <ChevronRight size={14} />
              </button>
            </div>
          )}
        </footer>
      </section>
    </div>
  );
}
