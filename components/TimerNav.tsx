import React from "react";

interface TimerNavProps {
  isBreak: boolean;
  setIsBreak: React.Dispatch<React.SetStateAction<boolean>>;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

const TimerNav: React.FC<TimerNavProps> = ({
  isBreak,
  setIsBreak,
  setTimeLeft,
}) => {
  const handleButtonClick = (time: number) => {
    console.log(time);
    setIsBreak(!isBreak);
    setTimeLeft(time);
  };

  return (
    <div className=" flex justify-center gap-2 ">
      <button
        onClick={() => handleButtonClick(1500)}
        className={` px-6 rounded hover:bg-slate-900 duration-200 ${
          !isBreak && "bg-slate-900"
        }`}
      >
        focus
      </button>
      <button
        onClick={() => handleButtonClick(300)}
        className={` px-6 rounded hover:bg-slate-900 duration-200 ${
          isBreak && "bg-slate-900"
        }`}
      >
        break
      </button>
    </div>
  );
};
export default TimerNav;
