const router = require("express").Router();
const { Character } = require("../../models");

router.get("/mycharacters", (req, res) => {
  Character.findAll({
    attributes: ["user_id", "name"],
  }).then((dbplayerData) => {
    res.json(dbplayerData);
  });
});

router.get("/", async (req, res) => {
  try {
    const dbPlayerData = await Character.findAll({
      include: [
        {
          attributes: ["name", "level"],
        },
      ],
    });
    dbPlayerData.map((char) => char.get({ plain: true }));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/mycharacters/:id", async (req, res) => {
  Character.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "name", "level", "class", "race", "background"],
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No player found with this id" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Character.create({
    level: req.body.level, 
    strength: req.body.strength, 
    dexterity: req.body.dexterity, 
    constitution: req.body.constitution, 
    intelligence: req.body.intelligence, 
    wisdom: req.body.wisdom, 
    charisma: req.body.charisma, 
    strength_save: req.body.strength_save, 
    dexterity_save: req.body.dexterity_save, 
    consitution_save: req.body.consitution_save, 
    intelligence_save: req.body.intelligence_save, 
    wisdom_save: req.body.wisdom_save, 
    charisma_save: req.body.charisma_save,
    race: req.body.race, 
    proficiency_bonus: req.body.proficiency_bonus, 
    acrobatics: req.body.acrobatics, 
    animal_handling: req.body.animal_handling, 
    arcana: req.body.arcana, 
    athletics: req.body.athletics, 
    deception: req.body.deception, 
    history: req.body.history, 
    insight: req.body.insight, 
    intimidation: req.body.intimidation, 
    investigation: req.body.investigation, 
    medicine: req.body.medicines, 
    nature: req.body.nature, 
    perception: req.body.perception, 
    performance: req.body.performance, 
    persuasion: req.body.persuasion, 
    religion: req.body.religion, 
    sleight_of_hand: req.body.sleight_of_hand, 
    stealth: req.body.stealth, 
    survival: req.body.survival
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/mycharacters/:id", (req, res) => {
  Character.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No player found with this id" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
