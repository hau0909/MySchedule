import { Badge } from "@/components/ui/badge";

interface DateBadgeProps {
  date: string;
}

export default function DateBadge({ date }: DateBadgeProps) {
  if (!date) return null;

  const formatDateString = (dateStr: string) => {
    const d = new Date(dateStr);

    // If invalid date (like "09:00 AM" fallback), just return the raw string
    if (isNaN(d.getTime())) return dateStr;

    const now = new Date();
    const isSameDay = (d1: Date, d2: Date) =>
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    const pad = (n: number) => n.toString().padStart(2, "0");
    const datePart = `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
    
    const hours = d.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    const timePart = `${pad(displayHours)}:${pad(d.getMinutes())} ${ampm}`;

    if (isSameDay(d, now)) {
      return `Today, ${timePart}`;
    } else if (isSameDay(d, yesterday)) {
      return `Yesterday, ${timePart}`;
    } else if (isSameDay(d, tomorrow)) {
      return `Tomorrow, ${timePart}`;
    } else {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const dayName = days[d.getDay()];
      return `${dayName}, ${datePart} ${timePart}`;
    }
  };

  return (
    <Badge
      className="text-[12px] text-gray-900 font-semibold bg-orange-100/80 
      px-3 py-3 rounded-lg border border-orange-200/50 shadow-sm w-fit whitespace-nowrap"
    >
      {formatDateString(date)}
    </Badge>
  );
}
