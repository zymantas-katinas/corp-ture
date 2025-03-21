import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { TopbarContent } from "@/components/TopbarContent";

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
        {/* Top Navigation */}
        <header className="bg-gradient-to-r from-zinc-900 to-slate-800 text-white py-2 px-4 shadow-md">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <span className="font-bold text-lg mr-1">CorpTure™</span>
              <span className="text-xs opacity-75">
                Interview Torture Perfected
              </span>
            </Link>

            <TopbarContent />
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 pt-6">{children}</main>
      </body>
    </html>
  );
}
