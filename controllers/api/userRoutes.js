const router = require('express').Router();
const { User, Character } = require('../../models/index');
const withAuth = require('../../utils/auth');

// Getting all users 
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(data => res.json(data))
        .catch(err => {
            res.status(500).json(err);
        });
});

// Getting users based on id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Character,
                attributes: [
                    'id', 'user_id', 'level'
                ]
            }
        ]
    })
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: "I'm sorry that user wasn't found! Please try again later!"
                });
                return;
            }
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// Creating new users
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(data => {
            req.session.user_id = data.id;
            req.session.username = data.username;
            req.session.loggedIn = true;
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// Editing user data by id
router.put('/:id', withAuth, (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(data => {
            if (!data) {
                res.status(400).json({
                    message: "I'm sorry that user wasn't found! Please try again later!"
                });
                return;
            }
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// Deleting user by id
router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: "I'm sorry that user wasn't found! Please try again later!"
                });
                return;
            }
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// Posting the login page
router.post('/login', async (req, res) => {
    try {
      const data = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
      if (!data) {
        console.log("Couldn't find user");
        res
          .status(400)
          .json({ message: "Incorrect username or password! Please try again later!" });
        return;
      }
      const validPw = await data.checkPassword(req.body.password);
      if (!validPw) {
        console.log("Invalid password!");
        res
          .status(400)
          .json({ message: "Incorrect username or password! Please try again later!" });
        return;
      }
      req.session.save(() => {
        console.log("Logging in", data);
        req.session.user_id = data.id;
        req.session.username = data.username;
        req.session.loggedIn = true;
        res.json({ user: data, message: "Congratulations! You have successfully logged in!" });
    });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Posting the logout page
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;