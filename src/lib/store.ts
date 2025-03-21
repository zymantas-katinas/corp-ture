import { create } from "zustand";
import { InterviewResponse } from "@/lib/types";
import OpenAI from "openai";
import { getInterviewResponseAction } from "@/lib/actions";
import { getSystemPrompt } from "@/lib/prompts";
import { jobs, interviewers, companyInfo } from "@/lib/constants";

type ChatMessage = OpenAI.Chat.Completions.ChatCompletionMessageParam;

interface InterviewState {
  interviewResponse: InterviewResponse | null;
  isLoading: boolean;
  initialized: boolean;
  submitted: boolean;
  error: string | null;
  answer: string;
  history: ChatMessage[];
  jobId: number | null;

  setAnswer: (answer: string) => void;
  setJobId: (jobId: number) => void;

  initInterview: () => Promise<void>;
  submitAnswer: () => Promise<void>;
  resetInterview: () => void;
}

export const useInterviewStore = create<InterviewState>((set, get) => ({
  interviewResponse: null,
  isLoading: true,
  initialized: false,
  submitted: false,
  error: null,
  answer: "",
  history: [],
  jobId: null,

  setAnswer: (answer) => set({ answer }),
  setJobId: (jobId) => set({ jobId }),

  initInterview: async () => {
    const { jobId } = get();
    if (!jobId) return;

    const job = jobs.find((j) => j.id === jobId);
    if (!job) return;

    set({ isLoading: true, error: null });

    const systemPrompt = getSystemPrompt({
      job,
      interviewers,
      companyInfo,
    });

    try {
      const response = await getInterviewResponseAction(
        "I'm ready to start the interview",
        systemPrompt,
        []
      );

      if (response) {
        set({
          interviewResponse: response,
          history: [
            {
              role: "user",
              content: "I'm ready to start the interview",
            } as ChatMessage,
            {
              role: "assistant",
              content: JSON.stringify(response),
            } as ChatMessage,
          ],
          initialized: true,
        });
      } else {
        set({
          error: "Failed to get initial interview response. Please try again.",
        });
      }
    } catch (error) {
      set({
        error: `An error occurred while starting the interview: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      });
    } finally {
      set({ isLoading: false });
    }
  },

  submitAnswer: async () => {
    const { answer, history, jobId } = get();
    if (!jobId) return;

    const job = jobs.find((j) => j.id === jobId);
    if (!job) return;

    const systemPrompt = getSystemPrompt({
      job,
      interviewers,
      companyInfo,
    });

    const currentAnswer = answer;

    set({ answer: "", isLoading: true, error: null });

    const updatedHistory = [
      ...history,
      { role: "user", content: currentAnswer } as ChatMessage,
    ];

    try {
      const response = await getInterviewResponseAction(
        currentAnswer,
        systemPrompt,
        updatedHistory
      );

      if (response) {
        set({
          interviewResponse: response,
          history: [
            ...updatedHistory,
            {
              role: "assistant",
              content: JSON.stringify(response),
            } as ChatMessage,
          ],
          submitted: response.isFinished,
        });
      } else {
        set({
          error: "Failed to get a response. Please try submitting again.",
        });
      }
    } catch (error) {
      set({
        error: `An error occurred while submitting your answer: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      });
    } finally {
      set({ isLoading: false });
    }
  },

  resetInterview: () =>
    set({
      initialized: false,
      isLoading: true,
      error: null,
    }),
}));
