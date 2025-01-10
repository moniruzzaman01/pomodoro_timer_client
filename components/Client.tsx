"use client";

import { setUser } from "@/app/redux/features/user/userSlice";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Client() {
  const dispatch = useDispatch();
  const session = useSession();
  useEffect(() => {
    if (session.data) {
      try {
        fetch(`http://localhost:5001/api/v1/users/add-a-user`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(session.data.user),
        });
      } catch (error) {
        console.log(error);
      }
      dispatch(setUser(session.data.user));
    }
  }, [session, dispatch]);

  return <div></div>;
}
