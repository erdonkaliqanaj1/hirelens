import express from "express";
import cors from "cors";
import healthRouter from "./routes/health.js";

const app = express();

//Alow only the frontend origin
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

//Endpoint i thjeshte
app.get("/", (req, res) => {
  res.send("HireLens API is running");
});

//Health check

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

//Database health route
app.use("/api/health", healthRouter);

export default app;
