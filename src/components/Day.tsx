"use client";

import { useState } from "react";

const Day = ({
  day,
  date,
  isPast,
  isDarkMode,
}: {
  day: number;
  date: string;
  isPast: boolean;
  isDarkMode: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gün Noktası */}
      <div
        className={`w-1 h-1 rounded-full transition-all ${
          isPast
            ? isDarkMode
              ? "bg-blue-300 shadow-[0_0_8px_4px_rgba(0,150,255,0.5)]"
              : "bg-blue-500 shadow-[0_0_8px_4px_rgba(0,150,255,0.5)]"
            : isDarkMode
            ? "bg-gray-600"
            : "bg-gray-300"
        }`}
      ></div>

      {/* Tooltip */}
      {isHovered && (
        <div
          className={`absolute top-[-2rem] left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded shadow-md ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {`Day ${day}: ${date}`}
        </div>
      )}
    </div>
  );
};

export default Day;
