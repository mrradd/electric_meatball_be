import z from "zod";

export const ChatRequestDtoSchema = z.object({
    model: z.string().default("gpt-5-nano-2025-08-07"),
    threadId: z.uuid().nullish(),
    message: z.string().min(1),
});

export type ChatResponseDto = {
    id: string, //UUID
    threadId: string | null | undefined,
    message: string,
    tokensUsed: string,
    createdDate: string,
    role: string,
}