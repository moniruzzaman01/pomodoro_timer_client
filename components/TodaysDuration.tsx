"use client";
import useTodaysDuration from "@/hooks/useTodaysDuration";

export default function TodaysDuration() {
  const { data, isLoading } = useTodaysDuration();

  if (isLoading) return;

  return (
    <div className=" flex flex-col gap-5">
      <h1 className=" text-xl tracking-wide">Todays Duration</h1>
      {data ? (
        <div className=" text-xs">
          <span className="text-8xl font-bold">
            {Math.floor(data?.duration / 60)}
          </span>
          min
          <span className="text-8xl font-bold">
            {(() => {
              const min = Math.floor(data?.duration / 60);
              const remSec = data?.duration - min * 60;
              return remSec;
            })()}
          </span>
          sec
        </div>
      ) : (
        <div className=" text-xs">
          <span className="text-8xl font-bold">00</span>
          min
          <span className="text-8xl font-bold">00</span>
          sec
        </div>
      )}
    </div>
  );
}
