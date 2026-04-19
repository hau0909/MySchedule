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

export default function ItemList({ items = [] }: { items: Item[] }) {
  return (
    <Table>
      {/* <TableCaption className="text-left">Showing 4 of 24 tasks</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-100">
            <p className="px-2 font-semibold text-[15px] text-slate-600">
              Title
            </p>
          </TableHead>
          <TableHead className="w-30">
            <p className="font-semibold text-[15px] text-slate-600">Priority</p>
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
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, index) => (
          <TableRow key={item.id || index}>
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
