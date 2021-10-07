const express = require("express");
const router = express.Router();

router.route("/").get((req, res, next) => {
  return res.send("chatRouter works!!!!!!");
});

module.exports = router;
