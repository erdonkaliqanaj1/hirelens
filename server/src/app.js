import express from "express";
import cors from "cors";

const app = express();

//Alow only the frontend origin
app.use(
    cors({
        origin:"http://localhost:5173",
    })
);

//Endpoint i thjeshte
app.get("/", (req, res) => {
    res.send("HireLens API is running");
});

//Health check

app.get("/api/health", (req, res) => {
    res.json({
        status:"ok",
        timestamp: new Date().toISOString(),
    });
});

export default app;