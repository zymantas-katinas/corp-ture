import OpenAI from "openai";
import { responseFormat } from "./types";
import { zodResponseFormat } from "openai/helpers/zod.mjs";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// export const getOpenAIResponse = async (prompt: string) => {
//   const response = await openai.responses.create({
//     model: "gpt-4o-mini",

//     input: [
//       {
//         role: "system",
//         content: prompt,
//       },
//     ],

//     tools: [{}],
//   });

//   return response.choices[0].message.content;
// };

export const getAIResponse = async (prompt: string) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "system", content: prompt }],
    response_format: zodResponseFormat(responseFormat, "response"),
  });

  return response.choices[0].message.content;
};
