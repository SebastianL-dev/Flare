import express from "express";
import cors from "cors";
import logger from "morgan";

import { Server } from "socket.io";
import { createServer } from "node:http";

// Application port
const port = process.env.PORT ?? 3001;

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["https://flare-a4x.pages.dev", "http://localhost:3000"],
  },
});

app.use(cors(), logger("dev"));

// Client acctions
io.on("connection", async (socket) => {
  console.log("🔸 New user conected: ", socket.id);

  // Join room
  socket.on("joinRoom", (data) => {
    console.log(`${data.userName} has joined in the room: ${data.roomId}`);
    socket.join(data.roomId);
    socket.broadcast.to(data.roomId).emit("recieveMessage", data);
  });

  // Send message
  socket.on("sendMessage", (data) => {
    io.to(data.roomId).emit("recieveMessage", data);
  });

  // Detect when is typing a message
  socket.on("typingMessage", (data) => {
    socket.broadcast.to(data.roomId).emit("isTyping", data);
  });
});

// Listen port
server.listen(port, () => {
  console.log(
    `The server is running on port: ${port} \n\nGo to: http://localhost:${port}`
  );
});
