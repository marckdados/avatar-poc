import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456",
  port: 5432,
  database: "avatar-poc",
});

export default connection;
