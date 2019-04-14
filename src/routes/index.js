const express = require('express');
const router = express.Router();

// routes
const users = require('./user');

router.use('/', (req, res) => res.send('Index route'));
router.use('/user', users)

module.exports = router;