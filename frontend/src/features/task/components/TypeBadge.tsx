import { Badge } from "@/components/ui/badge";
import { ItemType } from "@/types/Item";

interface TypeBadgeProps {
  type: ItemType;
}

export default function TypeBadge({ type }: TypeBadgeProps) {
  if (!type) return null;

  const getBadgeVariant = (type: ItemType) => {
    switch (type) {
      case "task":
        return `text-purple-700 bg-purple-100/80 border-purple-200/50`;
      case "event":
        return `text-blue-700 bg-blue-100/80 border-blue-200/50`;
      case "meeting":
        return `text-amber-700 bg-amber-100/80 border-amber-200/50`;
      default:
        return `text-slate-700 bg-slate-100/80 border-slate-200/50`;
    }
  };

  return (
    <Badge
      className={`text-[12px] px-4 py-3 rounded-lg border shadow-sm w-fit capitalize font-bold ${getBadgeVariant(type)}`}
    >
      {type}
    </Badge>
  );
}
