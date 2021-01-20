var express = require("express");
var router = express.Router();
const pool = require("../database");

router.get("/:id", function (req, res, next) {
  //   let sql = `SELECT * FROM friends WHERE id = ${req.params.id}`;
  let sql = `SELECT username, piclocation FROM members INNER JOIN friends on members.id=friends.friend_id AND friends.id=${req.params.id}`;
  let query = pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
