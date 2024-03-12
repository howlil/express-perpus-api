const mysql = require("mysql");
require("dotenv").config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.getConnection((error, connection) => {
  if (error) throw error;
  if (connection) connection.release();// Koneksi berhasil, lepaskan kembali ke pool
  console.log("database sudah konek");
});

module.exports = pool;
