"use client";

import { RootState } from "@/app/redux/store";
import useTodaysSession from "@/hooks/useTodaysSession";
import React from "react";
import { useSelector } from "react-redux";

export default function Table() {
  const session = useSelector((state: RootState) => state.session);
  const { isLoading } = useTodaysSession();

  if (isLoading) return;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg  max-h-[60vh] overflow-y-auto">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              SL
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Duration
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {session.map((ts, idx) => (
            <tr
              key={idx}
              className=" odd:bg-gray-900  even:bg-gray-800 border-b border-gray-700"
            >
              <td className="px-6 py-4">{idx + 1}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap text-white"
              >
                {ts.email}
              </th>
              <td className="px-6 py-4">
                {Math.floor(ts.duration / 60)}min{" "}
                {(() => {
                  const min = Math.floor(ts.duration / 60);
                  const remSec = ts.duration - min * 60;
                  return remSec;
                })()}
                sec
              </td>
              <td className="px-6 py-4">{ts.timestamp.split("T")[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
