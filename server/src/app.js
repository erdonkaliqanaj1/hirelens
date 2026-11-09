import express from "express";

const app = express();

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