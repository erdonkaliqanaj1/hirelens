import { Router } from "express";
import pool from "../config/db.js";

const router = Router();

//Basic health check
router.get("/", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

//Database health check
router.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      status: "ok",
      database_time: result.rows[0].now,
    });
  } catch (error) {
    console.error("Database connection error:", error.message);
    res.status(500).json({
      status: "error",
      message: "Unable to connect to the database",
    });
  }
});

export default router;
