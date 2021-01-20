var express = require("express");
var router = express.Router();
const pool = require("../database");

router.get("/:id", function (req, res, next) {
  let sql = `SELECT pic_location FROM photos WHERE member_id=${req.params.id}`;
  let query = pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
