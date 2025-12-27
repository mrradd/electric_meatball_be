import OpenAI from "openai";
import { ChatResponseDto } from "../dtos/ChatDtos";


/**
 * 
 * @param model - LLM model to use.
 * @param threadId - ID for the Thread this message belongs to.
 * @param message - Message to send to the LLM.
 */
export const processChatMessage = async (model: string, threadId: string, message: string): Promise<ChatResponseDto> => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    //Get chat history from db.
    //Compile chat history.
    //Add message to the chat history.

    const response = await openai.chat.completions.create({
        model: model,
        messages: [{ role: "user", content: message }],
    });

    console.log(response);
    // { message: response.choices[0].message.content }

    //Save response to db
    //Save new chat message to db.

    return {
    } as ChatResponseDto;
}