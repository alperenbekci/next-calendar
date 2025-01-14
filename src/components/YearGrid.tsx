"use client";

import { useState } from "react";
import Day from "./Day";
import YearControls from "./YearControls";
import DarkModeToggle from "./DarkModeToggle";
import { isLeapYear, isPastDay, daysLeftText } from "../utils/dateUtils";
import { useDarkMode } from "../utils/darkModeUtils";
import Link from "next/link";

const YearGrid = () => {
  const today = new Date();
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [currentYear, setCurrentYear] = useState(2025);

  const daysInYear = Array.from(
    { length: isLeapYear(currentYear) ? 366 : 365 },
    (_, i) => i + 1
  );

  const handleYearChange = (direction: "prev" | "next") => {
    setCurrentYear((prevYear) => prevYear + (direction === "next" ? 1 : -1));
  };

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen transition-colors ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <YearControls
        currentYear={currentYear}
        handleYearChange={handleYearChange}
      />
      <main className="flex flex-col items-center">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(20px,1fr))] gap-3 w-[90vw] md:w-[40vw]">
          {daysInYear.map((day) => (
            <Day
              key={day}
              day={day}
              date={new Date(currentYear, 0, day).toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
              isPast={isPastDay(currentYear, day)}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
        <p className="mt-6 text-lg font-semibold font-mono">
          {daysLeftText(currentYear, today)}
        </p>
      </main>
      <footer className="w-full py-4 px-6 flex justify-between items-center fixed bottom-0 font-mono">
        <Link
          href="https://github.com/alperenbekci/next-calender"
          className="text-sm underline hover:text-blue-500 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source
        </Link>
        <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </footer>
    </div>
  );
};

export default YearGrid;
