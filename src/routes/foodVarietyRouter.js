const express = require('express');
const { addFoodVarietyHandler } = require('../controllers/foodVarietyController');

const router = express.Router();

router.post('/food-variety', addFoodVarietyHandler);

module.exports = router;