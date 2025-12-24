import OpenAI from "openai";
import express from "express";
import { ChatRequestDtoSchema } from "../dtos/chatDtos";

const chatRouter = express.Router();

chatRouter.post("/", async (req, res) => {
    try {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const dto = ChatRequestDtoSchema.parse(req.body);

        const response = await openai.chat.completions.create({
            model: dto.model,
            messages: [{ role: "user", content: dto.message }],
        });

        res.json({ message: response.choices[0].message.content });
    }
    catch (error: any) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

export default chatRouter;