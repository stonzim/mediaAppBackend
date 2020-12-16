var express = require("express");
var router = express.Router();
const pool = require("../database");

router.get("/", function (req, res, next) {
  let sql = `SELECT * FROM members WHERE username=${req.params.username} AND password=${req.params.password}`;
  let query = pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
