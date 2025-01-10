"use client";

import CountDown from "@/components/CountDown";
import TimerNav from "@/components/TimerNav";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const user = useSelector((state) => state.user);
  // console.log("timeleft", timeLeft, isBreak);
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
      //api call will be done from here to store the session data
      const sessionData = {
        email: user?.email,
        duration: 1500,
      };
      console.log(sessionData);
      console.log("done");
      setIsRunning(false);
      setIsBreak((prev) => !prev);
      setTimeLeft(3 * 60);
    }
    return () => {
      if (timer !== null) clearInterval(timer);
    };
  }, [isRunning, timeLeft]);

  return (
    <div className=" flex justify-center text-white gap-2">
      {/* timer part */}
      <div
        className={` w-full rounded flex flex-col items-center gap-5 py-2 ${
          isBreak ? "bg-red-200 bg-opacity-25" : "bg-green-200 bg-opacity-25"
        }`}
      >
        <TimerNav
          isBreak={isBreak}
          setIsBreak={setIsBreak}
          setTimeLeft={setTimeLeft}
        />
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
      <div className=" w-full bg-amber-200 rounded bg-opacity-25 text-white text-center">
        motivaton text
      </div>
    </div>
  );
}

// className=" ">
