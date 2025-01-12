import type { Metadata } from "next";
import { Poppins } from "@next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ReduxProvider from "./redux/provider";
import { SessionProvider } from "next-auth/react";
import Client from "@/components/Client";
import ReactQueryProvider from "@/reactQuery/provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-slate-900`}>
        <ReactQueryProvider>
          <SessionProvider>
            <ReduxProvider>
              <div className=" max-w-3xl mx-auto">
                <Client></Client>
                <Navbar></Navbar>
                <div className=" h-[1px] bg-slate-700 my-2"></div>
                {children}
              </div>
            </ReduxProvider>
          </SessionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
