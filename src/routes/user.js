const express = require('express');
const router = express.Router();

const JWT = require('../helpers/JWT');
const controller = require('../controller/UserController');

router.post('/login', controller.login, JWT.generate);
router.use('/', JWT.verify);
router.get('/:_id', controller.read);

module.exports = router;