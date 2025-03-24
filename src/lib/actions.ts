"use server";

import { openai } from "./openai";
import { responseFormat } from "./schemas";
import { zodResponseFormat } from "openai/helpers/zod.mjs";
import { InterviewResponse } from "./types";
import OpenAI from "openai";

/**
 * Server Action to get an interview response from OpenAI
 * This function is marked with 'use server' and will execute on the server
 */
export async function getInterviewResponseAction(
  message: string,
  systemPrompt: string,
  history: OpenAI.Chat.Completions.ChatCompletionMessageParam[]
): Promise<InterviewResponse | null> {
  try {
    if (!message || !systemPrompt) {
      console.error("Message and system prompt are required");
      return null;
    }

    const response = await openai.chat.completions.create({
      temperature: 1.1,
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...(history || []),
        { role: "user", content: message },
      ],
      response_format: zodResponseFormat(responseFormat, "response"),
    });

    const interviewResponse = JSON.parse(
      (response?.choices[0]?.message?.content || "") as string
    ) as unknown as InterviewResponse;

    return interviewResponse;
  } catch (error) {
    console.error("Error in interview server action:", error);
    return null;
  }
}
