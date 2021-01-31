var express = require("express");
var router = express.Router();
const pool = require("../database");

router.get("/:id", function (req, res, next) {
  //   let sql = `SELECT post FROM posts WHERE wall_id=${req.params.id} ORDER BY date ASC`;
  let sql = `SELECT posts.id, username, piclocation, post, date, likes FROM posts 
    INNER JOIN members ON members.id = poster_id AND wall_id=${req.params.id} ORDER BY date ASC`;
  let query = pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

router.get("/like/:id", function (req, res, next) {
  let sql = `UPDATE posts SET likes = likes + 1 WHERE id =${req.params.id}`;
  let query = pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
