const express = require('express');
const router = express.Router();
const IncomeSourcesController  = require('../controllers/IncomeSourcesController');
router.get('/',IncomeSourcesController.index );
module.exports = router;
