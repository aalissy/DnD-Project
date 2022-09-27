const router = require('express').Router();
const { User, Character } = require('../../models');
const withAuth = require('../../utils/auth');

// Getting all characters
router.get('/', (req, res) => {
    Character.findAll({
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
            'cosntitution_save',
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
        include: [
            {
                model: User,
                attributes: ['username']
            },
        ]
    })
        .then(data => res.json(data))
        .catch(err => {
            res.status(500).json(err);
        });
});

// Getting characters based on id
router.get('/:id', (req, res) => {
    Character.findOne({
        where: {
            id: req.params.id
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
          'cosntitution_save',
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
        include: [
            {
                model: User,
                attributes: ['username']
            },
        ]
    })
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: "I'm sorry that character wasn't found! Please try again later."
                });
                return;
            }
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// Creating new characters
router.post('/', withAuth, (req, res) => {
    Character.create({
        user_id: req.session.user_id,
        strength: req.body.strength,
        dexterity: req.body.dexterity,
        constitution: req.body.constitution,
        intelligence: req.body.intelligence,
        wisdom: req.body.wisdom,
        charisma: req.body.charisma,
        strength_save: req.body.strength_save,
        dexterity_save: req.body.dexterity_save,
        constitution_save: req.body.constitution_save,
        intelligence_save: req.body.intelligence_save,
        wisdom_save: req.body.wisdom_save,
        charisma_save: req.body.charisma_save,
        level: req.body.level,
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
        .then(data => res.json(data))
        .catch(err => {
            res.status(500).json(err)
        });
});

// Updating characters
router.put('/:id', withAuth, (req, res) => {
    Character.update({
        level: req.body.level
    },
        {
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: "I'm sorry that character wasn't found! Please try again later!"
                });
                return;
            }
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// Deleting characters
router.delete('/:id', withAuth, async (req, res) => {
    Character.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        if (!data) {
            res.status(404).json({
                message: "I'm sorry that character wasn't found! Please try again later!"
            });
            return;
        }
        res.json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;