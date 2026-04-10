"use client";
import { useRealTimeClock } from "@/hooks/useRealTimeClock";

export default function Header() {
  const { date, time } = useRealTimeClock();

  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-500">{date}</p>
      <p className="text-gray-500">{time}</p>

      {/* <div className="inline-block ring ring-primary rounded-full">
        <p
          className="inline-block bg-amber-500 px-2.5 py-1.5 
        rounded-full font-semibold text-white 
        text-shadow-2xs shadow-md/10"
        >
          {time}
        </p>
      </div> */}
    </div>
  );
}
