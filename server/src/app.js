import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import healthRouter from "./routes/health.js";

dotenv.config();

const app = express();

// Allow only the frontend origin
app.use(
  cors({
    origin: process.env.CLIENT_URL ||
    "http://localhost:5173",
  }),
);

app.get("/", (req, res) => {
  res.send("HireLens API is running");
});

app.use("/api/health", healthRouter);

export default app;
