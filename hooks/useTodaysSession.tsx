import {
  initialStateInterface,
  setSession,
} from "@/app/redux/features/session/sessionSlice";
import { RootState } from "@/app/redux/store";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";

export default function useTodaysSession() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["todays-session", user?.email],
    enabled: !!session?.user?.email && !!localStorage.getItem("token"),
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
        (b: initialStateInterface, a: initialStateInterface) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );
      // console.log("from query", sortedData);

      dispatch(setSession(sortedData));
      return sortedData;
    },
  });
  return { data, isLoading, isError, refetch };
}
