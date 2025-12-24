export type Chats = {
    id: string, //UUID
    message: string,
    role: string,
    created_date: string,
}

export type ChatThread = {
    id: string, //UUID
    name: string,
    created_date: string,
}

export type ChatDatas = {
    id: string, //UUID
    model: string,
    tokens: string,
    created_date: string,
}

// 1 Thread to many Chats
export type ChatThreads_Chats_Map = {
    thread_id: string, //UUID
    chat_id: string, //UUID
}

// 1 Chat to 1 ChatData
export type Chats_ChatDatas_Map = {
    chat_id: string, //UUID
    chat_data_id: string, //UUID
}