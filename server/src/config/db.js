import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const requiredEnv = ["DB_HOST", "DB_PORT", "DB_NAME", "DB_USER", "DB_PASSWORD"];

for (const key of requiredEnv){
  if(!process.env[key]){
    throw new Error(`Missing required enviroment variable: ${key}`);
  }
}

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export default pool;
