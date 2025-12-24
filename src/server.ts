import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chatRouter from "./routes/chat";
dotenv.config();

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "localhost";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("42");
});

app.use("/api/v1/chat", chatRouter);

const server = app.listen(PORT, HOST, () => {
    console.log(`Server is running on port ${PORT}`);
});

server.on("error", (err) => {
    console.error("Server error:", err);
});


