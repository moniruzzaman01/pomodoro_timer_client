"use client";

import CompleteButton from "@/components/CompleteButton";
import CountDown from "@/components/CountDown";
import ResetButton from "@/components/ResetButton";
import Table from "@/components/Table";
import TimerButton from "@/components/TimerButton";
import TimerNav from "@/components/TimerNav";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const user = useSelector((state) => state.user);

  // Start or stop the timer
  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };
  const handleReset = () => {
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setIsBreak(false);
  };
  const handleComplete = () => {
    if (user && !isBreak) {
      const sessionData = {
        email: user?.email,
        duration: 1500 - timeLeft,
      };
      fetch(`http://localhost:5001/api/v1/focus-session/add-session`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(sessionData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data-37: ", data);
        });
    }
    handleReset();
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
      if (user && !isBreak) {
        const sessionData = {
          email: user?.email,
          duration: 1500,
        };
        fetch(`http://localhost:5001/api/v1/focus-session/add-session`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(sessionData),
        })
          .then((res) => res.json())
          .then((data) => console.log("data-44: ", data));
      }

      setIsRunning(false);
      setIsBreak((prev) => !prev);
      setTimeLeft(3 * 60);
    }
    return () => {
      if (timer !== null) clearInterval(timer);
    };
  }, [isRunning, timeLeft, isBreak, user]);

  return (
    <div>
      <div className=" flex justify-center text-white gap-2 mb-4">
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
          <div className=" flex justify-between items-end gap-2">
            <CompleteButton
              handleComplete={handleComplete}
              timeLeft={timeLeft}
              isBreak={isBreak}
            />
            <TimerButton
              handleStartStop={handleStartStop}
              isRunning={isRunning}
            />
            <ResetButton handleReset={handleReset} />
          </div>
        </div>
        <div className=" w-full bg-amber-200 rounded bg-opacity-25 text-white text-center">
          motivaton text
        </div>
      </div>
      <div>
        <h1 className=" text-2xl text-white text-center mb-2">
          Todays All Session
        </h1>
        <Table />
      </div>
    </div>
  );
}

// className=" ">
