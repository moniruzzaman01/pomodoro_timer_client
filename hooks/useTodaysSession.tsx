import { setSession } from "@/app/redux/features/session/sessionSlice";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

export default function useTodaysSession() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["todays-session", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5001/api/v1/focus-session/todays-session/${user.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await res.json();
      const sortedData = data.sort(
        (b, a) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );
      // console.log("from query", sortedData);

      dispatch(setSession(sortedData));
      return sortedData;
    },
  });
  return { data, isLoading, isError, refetch };
}
