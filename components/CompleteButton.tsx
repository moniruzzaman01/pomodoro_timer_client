import React from "react";

interface CompleteButtonProps {
  handleComplete: () => void;
  timeLeft: number;
  isBreak: boolean;
}

export default function CompleteButton({
  handleComplete,
  timeLeft,
  isBreak,
}: CompleteButtonProps) {
  return (
    <button
      onClick={handleComplete}
      className={`px-1 py-0 rounded hover:scale-105 duration-200 text-xs bg-green-500 ${
        (timeLeft < 1500 && !isBreak) || (timeLeft < 300 && isBreak)
          ? "opacity-100"
          : "opacity-0"
      }`}
    >
      Complete
    </button>
  );
}
