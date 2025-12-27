import OpenAI from "openai";
import express from "express";
import { ChatRequestDtoSchema } from "../dtos/ChatDtos";
import { processChatMessage } from "../businessLogic/ChatBusinessLogic";


const chatRouter = express.Router();

chatRouter.post("/", async (req, res) => {
    try {
        const dto = ChatRequestDtoSchema.parse(req.body);
        const result = await processChatMessage(dto.model, dto.threadId || "", dto.message);
        res.status(200).json(result);
    }
    catch (error: any) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

export default chatRouter;