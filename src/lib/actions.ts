"use server";

import { openai } from "./openai";
import { responseFormat } from "./schemas";
import { zodResponseFormat } from "openai/helpers/zod.mjs";
import { Interviewer, InterviewResponse } from "./types";
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
      temperature: 0.9,
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

export const getInterviewerAvatar = async ({
  currentAvatar,
  interviewer,
  mood,
}: {
  currentAvatar: string;
  interviewer: Interviewer;
  mood: string;
}): Promise<string | null> => {
  const interviewerInfo = JSON.stringify(interviewer);
  if (currentAvatar) {
    try {
      const response = await fetch(currentAvatar);
      const blob = await response.blob();
      const file = new File([blob], "avatar.png", { type: "image/png" });

      const variationResponse = await openai.images.createVariation({
        model: "dall-e-2",
        n: 1,
        image: file,
        size: "256x256",
      });

      return variationResponse.data[0].url || null;
    } catch (error) {
      console.error("Error in getInterviewerAvatar variation:", error);
      // Fall through to generate a new image
    }
  }

  try {
    const response = await openai.images.generate({
      prompt: `A portrait of ${interviewerInfo} with ${mood} mood`,
      n: 1,
      size: "256x256",
    });

    return response.data[0].url || null;
  } catch (error) {
    console.error("Error in getInterviewersAvatars:", error);
    return null;
  }
};
