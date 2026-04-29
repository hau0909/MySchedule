"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DateBadge from "@/features/task/components/DateBadge";
import PriorityBadge from "@/features/task/components/PriorityBadge";
import StatusBadge from "@/features/task/components/StatusBadge";
import TypeBadge from "@/features/task/components/TypeBadge";
import { Item } from "@/types/Item";

import { ChangeEvent, useState } from "react";
import EditTaskModal from "./EditTaskModal";
import { updateItem, deleteItem } from "../services/item.api";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";
import DeleteTaskConfirm from "./DeleteTaskConfirm";

export default function ItemList({
  items = [],
  onSuccessUpdate,
  onSuccessDelete,
}: {
  items: Item[];
  onSuccessUpdate: (item: Item) => void;
  onSuccessDelete: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [item, setItem] = useState<Item | null>(null);

  const [itemToDelete, setItemToDelete] = useState<Item | null>(null);
  const [isDeletingList, setIsDeletingList] = useState(false);

  const handleOpenEdit = async (item: Item) => {
    setOpen(true);
    setItem(item);
  };

  const handleUpdateItem = async (e: ChangeEvent) => {
    e.preventDefault();
    if (!item) return;
    try {
      setIsEditing(true);

      await toast.promise(updateItem(item), {
        loading: "Updating your task...",
        success: () => {
          onSuccessUpdate(item);
          setOpen(false);
          return "Task updated successfully!";
        },
        error: "Failed to update task",
      });
    } catch (error) {
      console.error("Update item Failed: ", error);
    } finally {
      setIsEditing(false);
    }
  };

  const handleDelete = async (itemToDel: Item) => {
    if (!itemToDel._id) return;
    setItemToDelete(itemToDel);
  };

  const handleConfirmDeleteList = async () => {
    if (!itemToDelete?._id) return;
    try {
      setIsDeletingList(true);
      await toast.promise(deleteItem(itemToDelete._id), {
        loading: "Deleting your task...",
        success: () => {
          onSuccessDelete(itemToDelete._id as string);
          setItemToDelete(null);
          return "Task deleted successfully!";
        },
        error: "Failed to delete task",
      });
    } catch (error) {
      console.error("Delete item Failed: ", error);
    } finally {
      setIsDeletingList(false);
    }
  };

  const handleDeleteItemModal = async (itemToDel: Item) => {
    if (!itemToDel?._id) return;
    try {
      setIsEditing(true);
      await toast.promise(deleteItem(itemToDel._id), {
        loading: "Deleting your task...",
        success: () => {
          onSuccessDelete(itemToDel._id as string);
          setOpen(false);
          return "Task deleted successfully!";
        },
        error: "Failed to delete task",
      });
    } catch (error) {
      console.error("Delete item Failed: ", error);
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-100">
              <p className="px-2 font-semibold text-[15px] text-slate-600">
                Title
              </p>
            </TableHead>
            <TableHead className="w-30">
              <p className="font-semibold text-[15px] text-slate-600">
                Priority
              </p>
            </TableHead>
            <TableHead>
              <p className="font-semibold text-[15px] text-slate-600">Start</p>
            </TableHead>
            <TableHead>
              <p className="font-semibold text-[15px] text-slate-600">End</p>
            </TableHead>
            <TableHead className="text-right w-30">
              <p className="font-semibold text-[15px] text-slate-600">Status</p>
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow
              key={item._id || index}
              onClick={() => handleOpenEdit(item)}
              className="cursor-pointer"
            >
              <TableCell className="font-medium flex items-center gap-2">
                <TypeBadge type={item.type} />
                <Tooltip>
                  <TooltipTrigger asChild>
                    {/* title */}
                    <p className="truncate">{item.title}</p>
                  </TooltipTrigger>
                  <TooltipContent
                    className="flex flex-col items-start text-left bg-white/35 backdrop-blur-md 
                  text-slate-900 shadow-sm/30 gap-1.5 p-3"
                  >
                    {/* title & type */}
                    <strong className="text-[14px] flex items-center gap-2 w-full text-left">
                      <TypeBadge type={item.type} />
                      <span>{item.title}</span>
                    </strong>

                    {/* description */}
                    <p className="text-[13px] text-slate-700 text-left">
                      {item.description}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
              <TableCell>
                <PriorityBadge priority={item.priority} />
              </TableCell>
              <TableCell>
                <DateBadge date={item.startTime} />
              </TableCell>
              <TableCell>
                <DateBadge date={item.endTime} />
              </TableCell>
              <TableCell className="text-right">
                <StatusBadge status={item.status} />
              </TableCell>
              <TableCell
                onClick={(e) => {
                  e.stopPropagation();
                  if (item) handleDelete(item);
                }}
                className="group"
              >
                <Trash2
                  size={20}
                  className="text-slate-500 group-hover:text-red-500 cursor-pointer
                  group-hover:scale-115 transition-all duration-300 ease-in-out"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {item && (
        <EditTaskModal
          isOpen={open}
          setIsOpen={setOpen}
          isEditing={isEditing}
          item={item}
          setItem={setItem}
          onUpdating={handleUpdateItem}
          onDeleting={handleDeleteItemModal}
        />
      )}

      <DeleteTaskConfirm
        isOpen={!!itemToDelete}
        setIsOpen={(isOpen) => {
          if (!isOpen && !isDeletingList) setItemToDelete(null);
        }}
        isProcessing={isDeletingList}
        onConfirm={handleConfirmDeleteList}
      />
    </>
  );
}
