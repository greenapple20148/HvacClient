
import { GoogleGenAI, Type } from "@google/genai";
import { DiagnosticResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDiagnosticReport = async (symptoms: string): Promise<DiagnosticResult | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User describes HVAC or plumbing symptoms: "${symptoms}". Provide a professional diagnostic report.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            issue: { type: Type.STRING, description: 'Summary of the potential issue' },
            urgency: { type: Type.STRING, description: 'Urgency level: Low, Medium, High, or Emergency' },
            recommendation: { type: Type.STRING, description: 'What the user should do next' },
            possibleCauses: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'List of likely causes'
            }
          },
          required: ["issue", "urgency", "recommendation", "possibleCauses"]
        },
        systemInstruction: "You are an expert HVAC and plumbing consultant. Provide concise, safe, and helpful diagnostic summaries. Always prioritize safety (e.g., gas leaks, electrical issues)."
      }
    });

    if (response.text) {
      return JSON.parse(response.text.trim()) as DiagnosticResult;
    }
    return null;
  } catch (error) {
    console.error("Gemini Diagnostic Error:", error);
    return null;
  }
};

export const getServiceRecommendation = async (query: string) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: query,
            config: {
                tools: [{ googleSearch: {} }],
                systemInstruction: "You are the Falcon HVAC & Plumbing expert assistant. You specialize in heating, air conditioning, and plumbing. Provide technical but easy-to-understand advice. If a user describes a hardware failure, leak, or complex technical issue, politely suggest they schedule an appointment with one of our certified technicians. Emphasize energy efficiency and preventative maintenance."
            }
        });
        return {
            text: response.text,
            sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
        };
    } catch (error) {
        console.error("Gemini Chat Error:", error);
        return { text: "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again or call us directly.", sources: [] };
    }
};

export const generateProjectImage = async (prompt: string): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `High-quality, professional architectural photography of ${prompt}. Clean, modern aesthetic, professional lighting, technical detail.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        }
      }
    });

    const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
    if (part?.inlineData) {
      return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
    }
    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
};
