var express = require("express");
var router = express.Router();
const pool = require("../database");

// router.get("/:username/:password", function (req, res, next) {
//   let sql = `SELECT * FROM members WHERE username=${req.params.username} AND password=${req.params.password}`;
//   let query = pool.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });
// router.get("/", function (req, res, next) {
//   let sql = "SELECT * FROM members";
//   let query = pool.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });
router.post("/", function (req, res, next) {
  let sql = `SELECT * FROM members WHERE username="${req.body.username}" AND password="${req.body.password}"`;
  console.log(sql);
  let query = pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
