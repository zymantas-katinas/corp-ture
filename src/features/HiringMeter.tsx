"use client";

import React, { useEffect, useState } from "react";

interface HiringMeterProps {
  score: number; // Score from 0-100
}

export function HiringMeter({ score }: HiringMeterProps) {
  const [animating, setAnimating] = useState(false);

  // Animation effect when score changes
  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [score]);

  // Get fun category text based on the hiring score
  const getHiringCategory = () => {
    if (score >= 80) return "Rock Star!";
    if (score >= 60) return "Looking Good!";
    if (score >= 40) return "Hmm, Maybe?";
    if (score >= 20) return "Needs Work...";
    return "Yikes!";
  };

  // Get color theme based on score
  const getColorTheme = () => {
    if (score >= 80)
      return {
        main: "rgb(34, 197, 94)", // green-500
        gradient: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
      };
    if (score >= 60)
      return {
        main: "rgb(56, 189, 248)", // sky-400
        gradient: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
      };
    if (score >= 40)
      return {
        main: "rgb(250, 204, 21)", // yellow-400
        gradient: "linear-gradient(135deg, #facc15 0%, #eab308 100%)",
      };
    if (score >= 20)
      return {
        main: "rgb(251, 146, 60)", // orange-400
        gradient: "linear-gradient(135deg, #fb923c 0%, #f97316 100%)",
      };
    return {
      main: "rgb(248, 113, 113)", // red-400
      gradient: "linear-gradient(135deg, #f87171 0%, #ef4444 100%)",
    };
  };

  const colorTheme = getColorTheme();

  // Emoji based on score
  const getEmoji = () => {
    if (score >= 80) return "🤩";
    if (score >= 60) return "😊";
    if (score >= 40) return "🤔";
    if (score >= 20) return "😬";
    return "😱";
  };

  return (
    <div className="fixed right-4 top-4 w-56 bg-white rounded-xl shadow-lg overflow-hidden z-50 ">
      {/* Header with emoji and score */}
      <div
        className="p-3 text-white"
        style={{
          background: colorTheme.gradient,
        }}
      >
        <div className="flex justify-between items-center">
          <span className="text-3xl" role="img" aria-label="Rating emoji">
            {getEmoji()}
          </span>
          <div>
            <div className="text-2xl font-bold">{Math.round(score)}%</div>
            <div className="text-xs font-medium">{getHiringCategory()}</div>
          </div>
        </div>
      </div>

      {/* Meter */}
      <div className="p-3">
        <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`absolute left-0 top-0 bottom-0 transition-all duration-700 ease-out ${
              animating ? "pulse-animation" : ""
            }`}
            style={{
              width: `${score}%`,
              background: colorTheme.gradient,
            }}
          ></div>

          {/* Tick marks */}
          <div className="absolute inset-0 flex justify-between px-1 items-center">
            <div className="h-2 w-px bg-gray-400"></div>
            <div className="h-2 w-px bg-gray-400"></div>
            <div className="h-2 w-px bg-gray-400"></div>
            <div className="h-2 w-px bg-gray-400"></div>
            <div className="h-2 w-px bg-gray-400"></div>
          </div>
        </div>

        {/* Quick rating guide */}
        <div className="mt-2 flex text-xs justify-between">
          <span>Yikes!</span>
          <span>Rock Star!</span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-animation {
          0% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.8;
          }
        }
        .pulse-animation {
          animation: pulse-animation 0.7s infinite;
        }
      `}</style>
    </div>
  );
}
