"use client";

import useTodaysSession from "@/hooks/useTodaysSession";
import React from "react";
import { useSelector } from "react-redux";

export default function Table() {
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const session = useSelector((state) => state.session);
  const { isLoading } = useTodaysSession();
  // console.log(result);
  // useEffect(() => {
  //   if (user?.email) {
  //     fetch(
  //       `http://localhost:5001/api/v1/focus-session/todays-session/${user.email}`,
  //       {
  //         headers: {
  //           authorization: `bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const sortedData = data.sort(
  //           (b, a) =>
  //             new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  //         );
  //         dispatch(setSession(sortedData));
  //         //   setTodaysSession(sortedData);
  //       });
  //   }
  // }, [user?.email, dispatch]);
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
          {session?.map((ts, idx) => (
            <tr
              key={idx}
              className=" odd:bg-gray-900  even:bg-gray-800 border-b border-gray-700"
            >
              <td className="px-6 py-4">{idx + 1}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap text-white"
              >
                {ts?.email}
              </th>
              <td className="px-6 py-4">{ts?.duration}</td>
              <td className="px-6 py-4">{ts.timestamp.split("T")[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
