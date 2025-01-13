"use client";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function useTodaysDuration() {
  const { data: session } = useSession();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["todays-duration", session?.user?.email],
    enabled: !!session?.user?.email && !!localStorage.getItem("token"),
    queryFn: async () => {
      const res = await fetch(
        `https://pomodoro-timer-server.vercel.app/api/v1/focus-session/todays-duration/${session?.user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, isError, refetch };
}
