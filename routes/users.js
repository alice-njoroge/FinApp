const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

router.get('/profile', UsersController.profile);

module.exports = router;