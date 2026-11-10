import pg from "pg";

const { Pool } = pg;

//Temporary credentials - will move to .env in Task 0.5

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database:"hirelens_dev",
    password:"Ahijeker123456",
    port: 5432,
});

export default pool;