import express from "express";
import cors from "cors";
import logger from "morgan";
import usersRouter from "./routes/users.js";

const port = process.env.PORT ?? 5000;
const app = express();

app.use(
  cors({ origin: ["https://flare-a4x.pages.dev", "http://localhost:3000"] }),
  express.json(),
  logger("dev")
);
app.use("/api/users", usersRouter);

app.listen(port, () => {
  console.log(
    `The server is running on port:  ${port} \n\nGo to: http://localhost:${port}`
  );
});
