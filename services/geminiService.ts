
import { GoogleGenAI } from "@google/genai";

// Use process.env.API_KEY directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStudyBuddyResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Kamu adalah 'Futureline Study Buddy'. Kamu adalah asisten belajar yang cerdas tapi santai, menggunakan bahasa gaul/santai anak SMA di Indonesia (seperti 'gue', 'lo', 'oke banget', 'santai aja'). Tugasmu adalah membantu menjelaskan materi, merangkum, atau memberikan contoh soal dengan cara yang sesederhana mungkin agar mudah dimengerti. Tetap profesional tapi asik.`,
        temperature: 0.8,
      },
    });
    return response.text || "Waduh, koneksi gue lagi bermasalah nih. Coba tanya lagi ya!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Yah, otak gue lagi nge-hang sebentar. Bentar ya, coba lagi nanti!";
  }
};
