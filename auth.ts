import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
console.log("secret", process.env.AUTH_SECRET);
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  secret: process.env.AUTH_SECRET,
});
