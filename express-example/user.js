var express = require("express");
var users = require("./userList");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.json(users);
});

router.get("/:name", (req, res, next) => {
  users.forEach((user) => {});
  res.json(users);
});

module.exports = router;
