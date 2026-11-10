import { Router } from "express";
import pool from "../config/db.js";

const router = Router();

//Simple health check for the database connection
router.get("/db", async (req, res) => {
    try{
        const result = await pool.query("SELECT NOW()");
        res.json({
            status: "ok",
            database_time: result.rows[0].now,
        });
    } catch (error){
        console.error("Database connection error:", error.message);
        res.status(500).json({
            status:"error",
            message:"Unable to connect to the database",
        });
    }
});

export default router;