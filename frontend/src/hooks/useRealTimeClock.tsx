import { useState, useEffect } from "react";
import { format } from "date-fns";

// Khai báo kiểu dữ liệu trả về cho Hook
interface ClockData {
  time: string;
  date: string;
}

export function useRealTimeClock(): ClockData {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  // Trả về object chứa 2 chuỗi đã được format
  return {
    // HH:mm:ss là định dạng 24h (VD: 14:30:45).
    // Nếu muốn 12h (AM/PM), bạn có thể đổi thành 'hh:mm:ss a'
    time: format(currentDate, "hh:mm a"),

    // Định dạng ngày theo đúng yêu cầu của bạn
    date: format(currentDate, "EEEE, dd MMMM yyyy"),
  };
}
