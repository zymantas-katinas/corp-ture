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

export type InterviewerMood = {
  mood: string;
  score: number;
  emoji: string;
};

export type InterviewResponse = {
  response: string;
  reasoning: string;
  answerNeeded: boolean;
  answeredByInterviewerId: number;
  interviewersMoods: Record<string, InterviewerMood>;
  hireScore: number;
  interviewProgress: number;
  isFinished: boolean;
};
