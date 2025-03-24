import Link from "next/link";
import { TopbarContent } from "./TopbarContent";

export const TopBar = () => {
  return (
    <header className="bg-gradient-to-r fixed top-0 left-0 right-0 z-50 w-screen  bg-slate-800 text-white py-1 px-4 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity"
        >
          <span className="font-bold text-lg mr-3">CorpTure™</span>
          <span className="text-xs opacity-75">
            Interview Torture Perfected
          </span>
        </Link>

        <TopbarContent />
      </div>
    </header>
  );
};
