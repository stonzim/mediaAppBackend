var express = require("express");
var router = express.Router();
const pool = require("../database");

router.get("/:id", function (req, res, next) {
  //   let sql = `SELECT post FROM posts WHERE wall_id=${req.params.id} ORDER BY date ASC`;
  let sql = `SELECT username, piclocation, post, date FROM posts 
    INNER JOIN members ON members.id = messenger_id AND wall_id=${req.params.id} ORDER BY date ASC`;
  let query = pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
