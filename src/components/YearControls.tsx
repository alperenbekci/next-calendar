import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const YearControls = ({
  currentYear,
  handleYearChange,
}: {
  currentYear: number;
  handleYearChange: (direction: "prev" | "next") => void;
}) => (
  <div className="text-center py-6 flex items-center justify-center gap-4">
    <button
      onClick={() => handleYearChange("prev")}
      className="text-2xl font-bold hover:text-blue-500 transition flex items-center"
    >
      <ArrowLeftIcon className="w-5 h-5" />
    </button>
    <h1 className="text-4xl font-black transition-transform font-mono">
      {currentYear}
    </h1>
    <button
      onClick={() => handleYearChange("next")}
      className="text-2xl font-bold hover:text-blue-500 transition flex items-center"
    >
      <ArrowRightIcon className="w-5 h-5" />
    </button>
  </div>
);

export default YearControls;
