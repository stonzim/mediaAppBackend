var express = require("express");
var router = express.Router();
const pool = require("../database");

router.get("/", function (req, res, next) {
  let sql = "SELECT * FROM members";
  let query = pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
