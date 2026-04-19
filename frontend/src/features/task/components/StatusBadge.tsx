import { Badge } from "@/components/ui/badge";
import { ItemStatus } from "@/types/Item";

interface StatusBadgeProps {
  status: ItemStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  if (!status) return null;

  const getBadgeVariant = (status: ItemStatus) => {
    switch (status) {
      case "pending":
        return `bg-yellow-500 text-white border-transparent shadow-sm`;
      case "in-progress":
        return `bg-indigo-500 text-white border-transparent shadow-sm`;
      case "completed":
        return `bg-green-500 text-white border-transparent shadow-sm`;
      case "cancelled":
        return `bg-red-500 text-white border-transparent shadow-sm`;
      case "archived":
        return `bg-slate-500 text-white border-transparent shadow-sm`;
      default:
        return `bg-slate-500 text-white border-transparent shadow-sm`;
    }
  };

  return (
    <Badge
      className={`text-[12px] px-4 py-3 rounded-lg border w-fit capitalize font-bold ${getBadgeVariant(
        status,
      )}`}
    >
      {status.replace("-", " ")}
    </Badge>
  );
}
