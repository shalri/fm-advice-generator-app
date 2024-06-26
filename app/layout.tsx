import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: "800" });

export const metadata: Metadata = {
  title: "Advice Generator App | FScode",
  description:
    "Solution for Advice Generator App challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className}  flex min-h-screen flex-col bg-ag-dark-blue`}
      >
        {children}
      </body>
    </html>
  );
}
