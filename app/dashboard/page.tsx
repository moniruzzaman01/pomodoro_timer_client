"use client";
import MonthlyChart from "@/components/MonthlyChart";
import SessionChart from "@/components/SessionChart";
import YearlyChart from "@/components/YearlyChart";
import React from "react";

export default function Dashboard() {
  return (
    <div className=" flex flex-col gap-5">
      <div className=" min-h-[35vh]">
        <h1 className=" text-white text-center text-2xl mb-4 uppercase underline font-bold">
          Last seven days session data
        </h1>
        <SessionChart />
      </div>
      <div className=" min-h-[35vh]">
        <h1 className=" text-white text-center text-2xl mb-4 uppercase underline font-bold">
          This month session data
        </h1>
        <MonthlyChart />
      </div>
      <div className=" min-h-[35vh]">
        <h1 className=" text-white text-center text-2xl mb-4 uppercase underline font-bold">
          This Year session data
        </h1>
        <YearlyChart />
      </div>
    </div>
  );
}
