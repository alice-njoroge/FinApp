const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
        return res.json({message: "you need jwt auth"});
});
module.exports = router;