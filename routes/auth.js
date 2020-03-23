const express = require('express');
const passport = require('passport');
const router = express.Router();
const RegisterController = require('../controllers/RegisterController');


router.post(
    '/signup',
    RegisterController.register
);

module.exports = router;