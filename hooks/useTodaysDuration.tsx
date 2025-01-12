import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export default function useTodaysDuration() {
  const user = useSelector((state) => state.user);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["todays-duration", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5001/api/v1/focus-session/todays-duration/${user?.email}`,
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
