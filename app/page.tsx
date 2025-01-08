"use client";

import CountDown from "@/components/CountDown";
import TimerNav from "@/components/TimerNav";
import { useState, useEffect } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  // Start or stop the timer
  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  // Countdown logic
  useEffect(() => {
    let timer: number | null = null;

    if (isRunning && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => {
      if (timer !== null) clearInterval(timer);
    };
  }, [isRunning, timeLeft]);

  return (
    <div className=" flex justify-center text-white gap-2">
      {/* timer part */}
      <div className=" w-full bg-slate-600 rounded flex flex-col items-center gap-5 py-2">
        <TimerNav isBreak={isBreak} setIsBreak={setIsBreak} />
        <CountDown timeLeft={timeLeft} />
        <button
          onClick={handleStartStop}
          className={` px-6 py-3 rounded font-bold tracking-wider hover:scale-105 duration-200 ${
            isRunning ? "bg-red-500" : "bg-slate-900"
          }`}
        >
          {isRunning ? "Freeze" : "Let's go"}
        </button>
      </div>
      <div className=" w-full bg-green-300 rounded"></div>
    </div>
  );
}

// className=" ">
