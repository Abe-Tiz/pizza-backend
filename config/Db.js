
const { Pool } = require("pg");
require("dotenv").config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// Check the PostgreSQL connection
const checkConnection = async () => {
  try {
    await pool.connect();
    console.log("PostgreSQL connected successfully.");
  } catch (err) {
    console.error("Error connecting to PostgreSQL:", err);
    setTimeout(checkConnection, 5000); 
  }
};

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = {
  pool,
  checkConnection,
};
