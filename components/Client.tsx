"use client";

import { setSession } from "@/app/redux/features/session/sessionSlice";
import { setUser } from "@/app/redux/features/user/userSlice";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Client() {
  const dispatch = useDispatch();
  const { data } = useSession();
  // console.log("client", data);

  useEffect(() => {
    if (data) {
      try {
        fetch(
          `https://pomodoro-timer-server.vercel.app/api/v1/users/add-a-user`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data.user),
          }
        )
          .then((res) => res.json())
          .then(() => {
            fetch(`https://pomodoro-timer-server.vercel.app/jwt`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(data.user),
            })
              .then((res) => res.json())
              .then((data) => {
                localStorage.setItem("token", data.token);
              });
          });
      } catch (error) {
        console.log(error);
      }
      dispatch(setUser(data.user));
    } else {
      localStorage.removeItem("token");
      dispatch(
        setUser({
          id: "",
          name: "",
          email: "",
          image: "",
          token: "",
        })
      );
      dispatch(setSession([]));
    }
  }, [data, dispatch]);

  return <div></div>;
}
