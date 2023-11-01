const express = require('express');
const { addFoodHandler } = require('../controllers/foodController');

const router = express.Router();

router.post('/foods', addFoodHandler);

module.exports = router;