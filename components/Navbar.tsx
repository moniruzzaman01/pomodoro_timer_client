import { auth, signIn, signOut } from "@/auth";
import React from "react";

export default async function Navbar() {
  const { user } = (await auth()) || {};
  // console.log("user", user);
  return (
    <div className=" text-white flex items-end justify-between h-12">
      <div className=" font-bold py-1">SITENAME</div>
      <div className=" flex gap-2">
        <button className=" bg-slate-800 px-3 py-1 rounded">Statistics</button>
        {user ? (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button className=" bg-slate-800 px-3 py-1 rounded">Logout</button>
          </form>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button className=" bg-slate-800 px-3 py-1 rounded">Login</button>
          </form>
        )}
      </div>
    </div>
  );
}
