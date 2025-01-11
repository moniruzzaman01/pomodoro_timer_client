"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function TodaysDuration() {
  const user = useSelector((state) => state.user);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (user) {
      fetch(
        `http://localhost:5001/api/v1/focus-session/todays-duration/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setDuration(data.duration));
    }
  }, [user]);
  return (
    <div className=" flex flex-col gap-5">
      <h1 className=" text-xl tracking-wide">Todays Duration</h1>
      <div className=" text-xs">
        <span className="text-8xl font-bold">{Math.floor(duration / 60)}</span>
        min
        <span className="text-8xl font-bold">
          {(() => {
            const min = Math.floor(duration / 60);
            const remSec = duration - min * 60;
            return remSec;
          })()}
        </span>
        sec
      </div>
    </div>
  );
}
