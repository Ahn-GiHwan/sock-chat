const express = require("express");
const router = express.Router();

router.route("/").get((req, res, next) => {
  return res.send("clubsRouter works!!!!!!");
});

router.route("/:filename/").get((req, res, next) => {
  const filename = req.params.filename;

  res.send(filename);
});

module.exports = router;
