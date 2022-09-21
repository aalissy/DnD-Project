const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const data = await Character.findAll();
        const characters = data.map((character) => character.get({ plain: true }));
        res.render('character', {
            characters,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const myCharacter = await Character.create({
            ...req.body,
            name: req.body.name,
            class: req.body.class,
            level: req.body.level,
            background: req.body.background,
            race: req.body.race,
            alignment: req.body.alignment,
            experience_points: req.body.experience_points,
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
            acrobatics: req.body.acrobatics,
            animal_handling: req.body.animal_handling,
            arcana: req.body.arcana,
            athletics: req.body.athletics,
            deception: req.body.deception,
            history: req.body.history,
            insight: req.body.insight,
            intimidation: req.body.intimidation,
            investigation: req.body.investigation,
            medicine: req.body.medicine,
            nature: req.body.nature,
            perception: req.body.perception,
            performance: req.body.performance,
            persuasion: req.body.persuasion,
            religion: req.body.religion,
            sleight_of_hand: req.body.sleight_of_hand,
            stealth: req.body.stealth,
            survival: req.body.survival,
            inspiration: req.body.inspiration,
            proficiency_bonus: req.body.proficiency_bonus,
            ac: req.body.ac,
            initiative: req.body.initiative,
            speed: req.body.speed,
            hp_max: req.body.hp_max,
            hp_current: req.body.hp_current,
            hit_dice: req.body.hit_dice,
            ds_success: req.body.ds_success,
            ds_failure: req.body.ds_failure
        });
        res.json(myCharacter);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        await Character.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).end();
    } catch(err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const data = await Character.destroy({
            where: {
                id: req.params.id,
            },
        });
        if(!data) {
            res.status(404).json({ message: 'No character found with this id!' });
            return;
        }
        res.status(200).end();
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;