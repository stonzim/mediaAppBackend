const mysql = require("mysql");
// const config = require("./config/databaseConfig");

// const app = express();
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "friendship",
// });
// db.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to database...");
// });

var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "friendship",
});

pool.getConnection((err, connection) => {
  if (err) throw err;
});

module.exports = pool;
