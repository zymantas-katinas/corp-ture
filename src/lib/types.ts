import { z } from "zod";

export type CompanyInfo = {
  name: string;
  description: string;
  industry: string;
  location: string;
  type: string;
};

export type Interviewer = {
  id: number;
  role: string;
  name: string;
  avatar: string;
  description: string;
  personality: string;
  background: string;
  goals: string;
  weaknesses: string;
};

export type Job = {
  id: number;
  name: string;
  description: string;
  requirements: string[];
  salary: string;
  location: string;
  type: string;
  industry: string;
  company: string;
  url: string;
};

export const responseFormat = z.object({
  response: z.string(),
  reasoning: z.string(),
  answerNeeded: z.boolean(),
  answeredByInterviewerId: z.number(),
  interviewersMoods: z.record(z.number(), z.string()),
  hireScore: z.number().min(0).max(100),
  isFinished: z.boolean(),
});
