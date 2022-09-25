const router = require("express").Router();
const { Character, User } = require("../models");

router.get("/", (req, res) => {
  return res.render("homepage");
});

router.get('/homepage', (req, res) => {
  return res.render('homepage');
})

router.get("/login", (req, res) => {
  return res.render("login");
});

router.get("/mycharacters", (req, res) => {
  return res.render("mycharacters");
});

router.get("/createcharacter", (req, res) => {
  return res.render("createcharacter");
});

router.get('/signup', (req, res) => {
  return res.render('signup');
})

router.get('/about', (req, res) => {
  return res.render('about');
})

module.exports = router;
