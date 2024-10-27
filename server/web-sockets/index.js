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

  socket.on("joinRoom", (data) => {
    console.log(`${data.userName} has joined in the room: ${data.roomid}`);
    socket.join(data.roomid);
    socket.broadcast.to(data.roomid).emit("recieveMessage", data);
  });

  socket.on("sendMessage", (data) => {
    io.to(data.roomid).emit("recieveMessage", data);
  });
});

// Listen port
server.listen(port, () => {
  console.log(
    `The server is running on port: ${port} \n\nGo to: http://localhost:${port}`
  );
});
