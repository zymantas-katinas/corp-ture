import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/features/topbar/TopBar";

export const mainFont = Noto_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-main",
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
      <body className={`${mainFont.variable} antialiased`}>
        <TopBar />
        <main className="max-w-5xl font-main mx-auto px-4 pt-6">
          {children}
        </main>
      </body>
    </html>
  );
}
