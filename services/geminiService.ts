

import { GoogleGenAI, Type } from "@google/genai";
import type { ProjectIdea } from '../types';

// Fix: Per @google/genai coding guidelines, the API key must be obtained from process.env.API_KEY. This also resolves the TypeScript error "Property 'env' does not exist on type 'ImportMeta'".
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const projectIdeaSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      title: {
        type: Type.STRING,
        description: "Il titolo accattivante del progetto.",
      },
      description: {
        type: Type.STRING,
        description: "Una breve ma convincente descrizione del progetto (2-3 frasi).",
      },
      steps: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
        },
        description: "Una lista di 3-5 passaggi concreti per realizzare l'idea.",
      },
    },
    required: ["title", "description", "steps"],
  },
};


export const generateProjectIdeas = async (theme: string): Promise<ProjectIdea[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Genera 3 idee di progetto innovative e realizzabili per un'associazione che si concentra sul tema: "${theme}". Le idee devono essere creative e adatte ad un contesto associativo.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: projectIdeaSchema,
        temperature: 0.8,
        topP: 0.9,
      },
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error("Received an empty or undefined response from the API.");
    }
    const ideas: ProjectIdea[] = JSON.parse(jsonText.trim());
    return ideas;

  } catch (error) {
    console.error("Error generating project ideas:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate ideas from Gemini API: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating project ideas.");
  }
};
