const express = require('express');
const router = express.Router();
const IncomesController = require('../controllers/IncomesController');

router.get('/', IncomesController.index);

module.exports = router;