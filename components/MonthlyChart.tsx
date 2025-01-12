import useThisMonthsSession from "@/hooks/useThisMonthsSession";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function MonthlyChart() {
  const { data } = useThisMonthsSession();

  return (
    <>
      {data && (
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="duration" stroke="#8884d8" />
        </LineChart>
      )}
    </>
  );
}
