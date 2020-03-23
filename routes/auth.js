const express = require('express');
const passport = require('passport');
const router = express.Router();
const RegisterController = require('../controllers/RegisterController');
const LoginController = require('../controllers/LoginController');



router.post('/signup', RegisterController);
router.post('/login', LoginController);

module.exports = router;