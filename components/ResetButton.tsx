import React from "react";

interface ResetButtonProps {
  handleReset: () => void;
}

export default function ResetButton({ handleReset }: ResetButtonProps) {
  return (
    <button
      onClick={handleReset}
      className="px-1 py-0 rounded hover:scale-105 duration-200 text-xs bg-red-500"
    >
      Reset
    </button>
  );
}
