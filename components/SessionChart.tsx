import useLastSevenDaysSession from "@/hooks/useLastSevenDaysSession";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function SessionChart() {
  const { data } = useLastSevenDaysSession();

  return (
    <>
      {data && (
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="duration" fill="#8884d8" />
        </BarChart>
      )}
    </>
  );
}
