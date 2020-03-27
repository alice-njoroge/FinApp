const express = require('express');
const router = express.Router();
const IncomesController = require('../controllers/IncomesController');

router.get('/', IncomesController.index);
router.post('/', IncomesController.create);
router.get('/:id', IncomesController.show);
router.put('/:id', IncomesController.update);

module.exports = router;