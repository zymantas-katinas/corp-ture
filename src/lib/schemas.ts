import { z } from "zod";
import { InterviewResponse } from "./types";

export const responseFormat: z.ZodType<InterviewResponse> = z.object({
  response: z.string(),
  reasoning: z.string(),
  answerNeeded: z.boolean(),
  answeredByInterviewerId: z.number(),
  hireScore: z.number(),
  isFinished: z.boolean(),
  interviewersMoods: z.object({}).catchall(
    z.object({
      mood: z.string(),
      score: z.number(),
      emoji: z.string(),
    })
  ),
  interviewProgress: z.number(),
});
