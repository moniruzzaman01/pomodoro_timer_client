import React from "react";

interface TimerNavProps {
  isBreak: boolean;
  setIsBreak: React.Dispatch<React.SetStateAction<boolean>>;
}
const TimerNav: React.FC<TimerNavProps> = ({ isBreak, setIsBreak }) => {
  return (
    <div className=" flex justify-center gap-2 ">
      <button
        onClick={() => setIsBreak(!isBreak)}
        className={` px-6 rounded hover:bg-slate-900 duration-200 ${
          !isBreak && "bg-slate-900"
        }`}
      >
        focus
      </button>
      <button
        onClick={() => setIsBreak(!isBreak)}
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
