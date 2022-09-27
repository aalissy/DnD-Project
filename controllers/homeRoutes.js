const router = require("express").Router();
const { Character, User } = require("../models");

router.get("/", (req, res) => {
  return res.render("homepage", {loggedIn: req.session.loggedIn});
});

router.get("/login", (req, res) => {
  return res.render("login");
});

router.get("/mycharacters", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('login');
    return;
  } else {
  try {
    const data = await Character.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: [
        'id',
            'strength',
            'dexterity',
            'constitution',
            'intelligence',
            'wisdom',
            'charisma',
            'strength_save',
            'dexterity_save',
            'constitution_save',
            'intelligence_save',
            'wisdom_save',
            'charisma_save',
            'proficiency_bonus',
            'acrobatics',
            'animal_handling',
            'arcana',
            'athletics',
            'deception',
            'history',
            'insight',
            'intimidation',
            'investigation',
            'medicine',
            'nature',
            'perception',
            'performance',
            'persuasion',
            'religion',
            'sleight_of_hand',
            'stealth',
            'survival'
      ],
    });
    const myChars = data.map((chars) =>
    chars.get({ plain: true})
    );
    res.render('mycharacters', {
      characters: myChars,
      loggedIn: req.session.loggedIn,
      username: req.session.username
    })
  }
  catch(err) {
    res.status(500).json(err);
  }
}
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