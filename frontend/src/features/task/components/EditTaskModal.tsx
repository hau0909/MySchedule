import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Item } from "@/types/Item";
import { toDateTimeLocal } from "../utils/toDateTimeLocal";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;

  isEditing: boolean;

  item: Item | null;
  setItem: Dispatch<SetStateAction<Item | null>>;

  onUpdating: (e: ChangeEvent) => void;
};

export default function EditTaskModal({
  isOpen,
  setIsOpen,
  isEditing,
  onUpdating,
  item,
  setItem,
}: Props) {
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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-125 overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-800">
            Edit Task
          </DialogTitle>
          <DialogDescription>
            Edit the task to your timeline. Fill in the details below.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-6" onSubmit={onUpdating}>
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-semibold">
              Task Title
            </Label>
            <Input
              disabled={isEditing}
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
              disabled={isEditing}
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
                disabled={isEditing}
                defaultValue={item?.type}
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
                disabled={isEditing}
                defaultValue={item?.priority}
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
                disabled={isEditing}
                required
                value={toDateTimeLocal(item?.startTime)}
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
                disabled={isEditing}
                required
                value={toDateTimeLocal(item?.endTime)}
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
                disabled={isEditing}
                type="button"
                variant="ghost"
                className="rounded-full px-6 shadow-sm cursor-pointer"
                onClick={() => setItem(null)}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              disabled={isEditing}
              type="submit"
              className="rounded-full px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20
              hover:scale-103 active:scale-93 transition-all duration-300 ease-in-out cursor-pointer"
            >
              Update Task
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
