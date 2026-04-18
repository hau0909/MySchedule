"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Item } from "@/types/Item";
import { createNewItem } from "../services/item.api";
import toast from "react-hot-toast";

export default function AddTaskModal() {
  const [open, setOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [item, setItem] = useState<Item | null>();

  const handleInputChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setItem((prev) => {
      if (!prev) {
        return { [name]: value } as unknown as Item;
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setItem((prev) => {
      if (!prev) {
        return { [name]: value } as unknown as Item;
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsCreating(true);

      if (!item) return;

      const payload = {
        ...item,
        type: item.type ?? "task",
        priority: item.priority ?? "low",
        status: "pending",
      } as Item;

      setItem(payload);

      await toast.promise(createNewItem(payload), {
        loading: "Creating your task...",
        success: () => {
          setItem(null);
          setOpen(false);
          return "Task created successfully!";
        },
        error: "Failed to create task",
      });
    } catch (error) {
      console.error("Create failed: ", error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="flex group justify-center gap-2 items-center p-3 cursor-pointer
            bg-primary rounded-full text-white ring-1 ring-slate-100 shadow-md/10 
            inset-shadow-sm inset-shadow-white hover:bg-primary/90 hover:scale-105 
            active:scale-90 duration-300 transition-all ease-in-out"
        >
          <Plus
            size={30}
            className="group-hover:-rotate-90 duration-300 transition-all ease-in-out"
          />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-125 overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-800">
            Create New Task
          </DialogTitle>
          <DialogDescription>
            Add a new task to your timeline. Fill in the details below.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-6" onSubmit={(e) => handleCreate(e)}>
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-semibold">
              Task Title
            </Label>
            <Input
              disabled={isCreating}
              required
              value={item?.title || ""}
              onChange={handleInputChange}
              name="title"
              placeholder="e.g., Product Strategy Sync"
              className="placeholder:italic p-5 outline-none border-2 focus-visible:ring-0
              focus-visible:border-primary focus-visible:bg-secondary/5"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-semibold">
              Description
            </Label>

            <Textarea
              disabled={isCreating}
              required
              value={item?.description || ""}
              onChange={handleInputChange}
              name="description"
              placeholder="What needs to be done?"
              className="placeholder:italic p-5 outline-none border-2 focus-visible:ring-0
              focus-visible:border-primary focus-visible:bg-secondary/5"
            />
          </div>

          {/* Type & Priority Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Label className="text-sm font-semibold">Type</Label>
              <Select
                disabled={isCreating}
                defaultValue="task"
                onValueChange={(value) => handleSelectChange("type", value)}
              >
                <SelectTrigger className="rounded-xl border-slate-200">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="task">Task</SelectItem>
                  <SelectItem value="event">Event</SelectItem>
                  <SelectItem value="meeting">Meeting</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Label className="text-sm font-semibold">Priority</Label>
              <Select
                disabled={isCreating}
                defaultValue="low"
                onValueChange={(value) => handleSelectChange("priority", value)}
              >
                <SelectTrigger className="rounded-xl border-slate-200">
                  <SelectValue placeholder="Set priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Dates Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startTime" className="text-sm font-semibold">
                Start Time
              </Label>
              <Input
                disabled={isCreating}
                required
                value={item?.startTime || ""}
                onChange={handleInputChange}
                name="startTime"
                type="datetime-local"
                className="rounded-xl border-slate-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endTime" className="text-sm font-semibold">
                End Time
              </Label>
              <Input
                disabled={isCreating}
                required
                value={item?.endTime || ""}
                onChange={handleInputChange}
                name="endTime"
                type="datetime-local"
                className="rounded-xl border-slate-200"
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button
                disabled={isCreating}
                type="button"
                variant="ghost"
                className="rounded-full px-6 shadow-sm cursor-pointer"
                onClick={() => setItem(null)}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              disabled={isCreating}
              type="submit"
              className="rounded-full px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20
              hover:scale-103 active:scale-93 transition-all duration-300 ease-in-out cursor-pointer"
            >
              Create Task
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
