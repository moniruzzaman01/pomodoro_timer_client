"use client";

import CompleteButton from "@/components/CompleteButton";
import CountDown from "@/components/CountDown";
import ResetButton from "@/components/ResetButton";
import Table from "@/components/Table";
import TimerButton from "@/components/TimerButton";
import TimerNav from "@/components/TimerNav";
import TodaysDuration from "@/components/TodaysDuration";
import useTodaysDuration from "@/hooks/useTodaysDuration";
import useTodaysSession from "@/hooks/useTodaysSession";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const { refetch: sessionRefectch } = useTodaysSession();
  const { refetch: durationRefetch } = useTodaysDuration();

  // Start or stop the timer
  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };
  const handleReset = () => {
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setIsBreak(false);
  };
  const handleComplete = async () => {
    if (user.email && !isBreak) {
      const sessionData = {
        email: user?.email,
        duration: 1500 - timeLeft,
      };
      await fetch(
        `https://pomodoro-timer-server.vercel.app/api/v1/focus-session/add-session`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(sessionData),
        }
      );
      sessionRefectch();
      durationRefetch();
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
      if (user.email && !isBreak) {
        const sessionData = {
          email: user?.email,
          duration: 1500,
        };
        fetch(
          `https://pomodoro-timer-server.vercel.app/api/v1/focus-session/add-session`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(sessionData),
          }
        )
          .then((res) => res.json())
          .then(() => {
            sessionRefectch();
            durationRefetch();
          });
      }

      setIsRunning(false);
      setIsBreak((prev) => !prev);
      setTimeLeft(3 * 60);
    }
    return () => {
      if (timer !== null) clearInterval(timer);
    };
  }, [
    isRunning,
    timeLeft,
    isBreak,
    user.email,
    sessionRefectch,
    durationRefetch,
  ]);

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
          <TodaysDuration />
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
