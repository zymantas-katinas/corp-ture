import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { TopbarContent } from "@/features/topbar/TopbarContent";
import { TopBar } from "@/features/topbar/TopBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const vtSans = Pixelify_Sans({
//   variable: "--font-vt-sans",
//   // subsets: ["latin"],
//   weight: "400",
// });

export const gameFont = Noto_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vt-sans",
});

export const metadata: Metadata = {
  title: "CorpTure™: Interview Torture Perfected",
  description:
    "Where tech careers go to be thoroughly examined and occasionally rejected",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gameFont.variable} antialiased`}>
        <TopBar />
        <main className="max-w-5xl mx-auto px-4 pt-6">{children}</main>
      </body>
    </html>
  );
}
