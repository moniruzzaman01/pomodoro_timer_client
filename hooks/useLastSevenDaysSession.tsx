"use client";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function useLastSevenDaysSession() {
  const { data: session } = useSession();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["seven-days-session", session?.user?.email],
    enabled: !!session?.user?.email && !!localStorage.getItem("token"),
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5001/api/v1/focus-session/last-seven-days-session/${session?.user?.email}`,
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
