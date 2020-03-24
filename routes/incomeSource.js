const express = require('express');
const router = express.Router();
const IncomeSourcesController = require('../controllers/IncomeSourcesController');


router.get('/', IncomeSourcesController.index);
router.post('/create', IncomeSourcesController.create);
router.get('/show/:id', IncomeSourcesController.show);


module.exports = router;
