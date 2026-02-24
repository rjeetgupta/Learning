import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config({
    path: "./.env"
})

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
        {
            role: "user",
            parts: [{text: "What is current date ?"}]
        }
        // {
        //     role: "user",
        //     parts: [{text: "What is my name ?"}]
        // },
        // {
        //     role: "model",
        //     parts: [{
        //         text: "I don't know your name yet! As an AI, I don't have access to your personal information or identity unless you tell me."
        //     }]
        // },
        // {
        //     role: "user",
        //     parts: [{text: "My name is Ranjeet Gupta"}]
        // },
        // {
        //     role: "user",
        //     parts: [{
        //         text: "What is my name ?"
        //     }]
        // }
    ],
  });

  console.log(response.text);
}

await main();