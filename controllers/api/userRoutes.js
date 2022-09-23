const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async, (req, res) => {
    try {
        const data = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = data.id;
            req.session.logged_in = true;
            res.status(200).json(data);
        });
    } catch(err) {
        res.status(400).json(err);
    }
});

router.post('/login', async, (req, res) => {
    try {
        const data = await User.findOne({ where: { username: req.body.username }});
        if (!data) {
            res
            .status(400)
            .json({ message: 'Incorrect username or password! Please try again later!' });
            return;
        }
        const validPw = await data.checkPassword(req.body.password);
        if (!validPw) {
            res
            .status(400)
            .json({ message: 'Incorrect username or password! Please try again later!' });
            return;
        }
        res.session.save(() => {
            req.session.user_id = data.id;
            req.session.username = data.username;
            req.session.logged_in = true;
            res.json({ user: data, message: 'You are now logged in.' });
        });
    } catch(err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end;
        });
    } else {
        res.status(404).end;
    }
});

module.exports = router;