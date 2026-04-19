import { Badge } from "@/components/ui/badge";
import { ItemPriority } from "@/types/Item";

interface PriorityBadgeProps {
  priority: ItemPriority;
}

export default function PriorityBadge({ priority }: PriorityBadgeProps) {
  if (!priority) return null;

  const getBadgeVariant = (priority: ItemPriority) => {
    switch (priority) {
      case "high":
        return `text-red-500 bg-red-50 border-red-200 shadow-sm`;
      case "medium":
        return `text-yellow-500 bg-yellow-50 border-yellow-200 shadow-sm`;
      case "low":
        return `text-green-500 bg-green-50 border-green-200 shadow-sm`;
      default:
        return `text-slate-600 bg-slate-50 border-slate-200 shadow-sm`;
    }
  };

  return (
    <Badge
      className={`text-[12px] px-4 py-3 rounded-lg border w-fit capitalize font-bold ${getBadgeVariant(
        priority,
      )}`}
    >
      {priority}
    </Badge>
  );
}
