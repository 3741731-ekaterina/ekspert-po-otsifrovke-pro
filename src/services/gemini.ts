import { GoogleGenAI, ThinkingLevel, Type } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn("GEMINI_API_KEY is not set. AI features will not work.");
}

export const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export const MODELS = {
  FLASH: "gemini-3-flash-preview",
  PRO: "gemini-3.1-pro-preview",
  IMAGE: "gemini-2.5-flash-image",
};

export interface ChatMessage {
  role: "user" | "model";
  content: string;
  image?: string; // base64
}

export async function generateChatResponse(
  messages: ChatMessage[],
  model: string = MODELS.FLASH,
  systemInstruction?: string
) {
  const contents = messages.map((m) => ({
    role: m.role,
    parts: m.image 
      ? [{ inlineData: { data: m.image.split(",")[1], mimeType: "image/png" } }, { text: m.content }]
      : [{ text: m.content }],
  }));

  const response = await ai.models.generateContent({
    model,
    contents,
    config: {
      systemInstruction,
    },
  });

  return response.text;
}

export async function* streamChatResponse(
  messages: ChatMessage[],
  model: string = MODELS.FLASH,
  systemInstruction?: string
) {
  const contents = messages.map((m) => ({
    role: m.role,
    parts: m.image 
      ? [{ inlineData: { data: m.image.split(",")[1], mimeType: "image/png" } }, { text: m.content }]
      : [{ text: m.content }],
  }));

  const stream = await ai.models.generateContentStream({
    model,
    contents,
    config: {
      systemInstruction,
    },
  });

  for await (const chunk of stream) {
    yield chunk.text;
  }
}

export async function generateImage(prompt: string) {
  const response = await ai.models.generateContent({
    model: MODELS.IMAGE,
    contents: [{ parts: [{ text: prompt }] }],
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
