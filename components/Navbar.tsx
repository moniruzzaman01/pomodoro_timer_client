import React from "react";

export default function Navbar() {
  return (
    <div className=" text-white flex items-end justify-between h-12">
      <div className=" font-bold py-1">SITENAME</div>
      <div className=" flex gap-2">
        <button className=" bg-slate-800 px-3 py-1 rounded">button1</button>
        <button className=" bg-slate-800 px-3 py-1 rounded">button1</button>
        <button className=" bg-slate-800 px-3 py-1 rounded">button1</button>
      </div>
    </div>
  );
}
