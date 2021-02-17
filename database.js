const mysql = require("mysql");

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
