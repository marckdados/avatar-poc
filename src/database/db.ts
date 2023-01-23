import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;

const connection = new Pool({
  host: process.env.HOSTNAME,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: 5432,
  database: process.env.HOSTNAME,
});

export default connection;
