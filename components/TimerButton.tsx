import React from "react";

interface TimerButtonProps {
  handleStartStop: () => void;
  isRunning: boolean;
}
export default function TimerButton({
  handleStartStop,
  isRunning,
}: TimerButtonProps) {
  return (
    <button
      onClick={handleStartStop}
      className={` px-6 py-3 rounded font-bold tracking-wider hover:scale-105 duration-200 ${
        isRunning ? "bg-red-500" : "bg-slate-900"
      }`}
    >
      {isRunning ? "Freeze" : "Let's go"}
    </button>
  );
}
