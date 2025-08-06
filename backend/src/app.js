import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userrouter } from "./routes/user.route";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(express.static("public"))
app.use(cookieParser());

app.use('/user', userrouter)

export default app;

