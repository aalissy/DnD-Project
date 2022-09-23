const router = require("express").Router();
const { Character, User } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/mycharacters", (req, res) => {
  res.render("mycharacters");
});

router.get("/createcharacter", (req, res) => {
  return res.render("createcharacter");
});

module.exports = router;
