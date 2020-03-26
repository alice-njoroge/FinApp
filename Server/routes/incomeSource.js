const express = require('express');
const router = express.Router();
const IncomeSourcesController = require('../controllers/IncomeSourcesController');


router.get('/', IncomeSourcesController.index);
router.post('/', IncomeSourcesController.create);
router.put('/:id', IncomeSourcesController.update);
router.get('/:id', IncomeSourcesController.show);
router.delete('/:id', IncomeSourcesController.destroy);


module.exports = router;
