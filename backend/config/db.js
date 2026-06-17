const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "127.0.0.1",
  port: 3307,
  user: "root",
  password: "",
  database: "store_rating",
});

db.connect((err) => {
  if (err) {
    console.log("Database Error:", err);
  } else {
    console.log("Database Connected");
  }
});

module.exports = db;