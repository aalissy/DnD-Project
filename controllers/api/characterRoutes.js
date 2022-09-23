const router = require('express').Router();
const { Character } = require('../../models');

router.get('/creator', (req, res) => {
  Character.findAll({        
    attributes: [
    'user_id',
    'name',
  ]}).then((dbplayerData) => {
    res.json(dbplayerData);
  })
});

router.get('/', async (req, res) => {
  try {
    const dbPlayerData = await Character.findAll({
      include: [
        {
          attributes: ['name', 'level']
        },
      ],
    });
    const chars = dbPlayerData.map((char) =>
      char.get({ plain: true })
    );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/mycharacters/:id', async (req, res) => {
    Character.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'name', 'level', 'class', 'race', 'background'],
    }).then(data => {
        if (!data) {
          res.status(404).json({ message: 'No player found with this id' });
          return;
        }
        res.json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/mycharacters/new', (req, res) => {
    console.log(req.body)
    Character.create({
      name: req.body.name,
      level: req.body.level,
      class: req.body.class,
      race: req.body.race,
      background: req.body.playerBackground
    })
      .then(data => 
        {
          res.json(data)
        }
        )
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.delete('/mycharacters/:id', (req, res) => {
    Character.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        if (!data) {
          res.status(404).json({ message: 'No player found with this id' });
          return;
        }
        res.json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;