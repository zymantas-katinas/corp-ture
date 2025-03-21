import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { InterviewerMood } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getMoodForInterviewer = (
  interviewerId?: number,
  interviewersMoods?: Record<string, InterviewerMood>
): InterviewerMood => {
  if (!interviewerId || !interviewersMoods)
    return {
      mood: "Neutral",
      score: 0,
      emoji: "😐",
    };

  const idStr = interviewerId.toString();

  if (typeof interviewersMoods === "object" && idStr in interviewersMoods) {
    const mood = interviewersMoods[idStr];
    return mood;
  }

  return {
    mood: "Neutral",
    score: 0,
    emoji: "😐",
  };
};
