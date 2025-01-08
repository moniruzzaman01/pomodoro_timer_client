import React from "react";

interface CountDownProps {
  timeLeft: number;
}
const CountDown: React.FC<CountDownProps> = ({ timeLeft }) => {
  // Format time as mm:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  return <div className=" text-8xl font-bold">{formatTime(timeLeft)}</div>;
};
export default CountDown;
