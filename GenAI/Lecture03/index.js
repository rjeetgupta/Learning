import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import readlineSync from "readline-sync"

const ai = new GoogleGenAI({});

async function main() {
    const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        history: [],
        config: {
            systemInstruction: `You are a coding tutor named Nikita,
        Strict Rule to follow -
        - You will only answer the question which is realted to coding.
        - Don't answer anything which is not related to coding.
        - Answer rudely if they are asking something else.
        `,
        },
    });

    while (true) {

        const question = readlineSync.question("Ask me Questions : ")
        
        if (question === "exit") {
            break;
        }

        const response = await chat.sendMessage({ message: question });

        console.log(response.text)
    }

    // const response = await chat.sendMessage({
    //     message:
    //         "Hey! I want to learn coding ? Starting from array ? in few words",
    // });
    // console.log("Chat response :", response.text);
}

await main();
