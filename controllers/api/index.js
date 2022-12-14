const router = require('express').Router();

const characterRoutes = require('./characterRoutes.js');
const userRoutes = require('./userRoutes.js');

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);

module.exports = router;