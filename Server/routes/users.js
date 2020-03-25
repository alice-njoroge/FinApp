const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

router.get('/profile', UsersController.profile);
router.post('/change-password', UsersController.changePassword);

module.exports = router;