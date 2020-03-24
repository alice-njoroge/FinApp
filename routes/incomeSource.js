const express = require('express');
const router = express.Router();
const IncomeSourcesController = require('../controllers/IncomeSourcesController');


router.get('/', IncomeSourcesController.index);
router.post('/create', IncomeSourcesController.create);


module.exports = router;
