const router = require('express').Router();
const { Character, User } = require('../models');
 
router.get('/', (req, res) => {res.render('index')});

router.get('/login', (req, res) => {res.render('login')});

router.get('/characters', (req, res) => {res.render('characters')});

router.get("/creator", (req, res) => {
    return res.render('create');
});

module.exports = router;
