const express = require('express');
const { addToppingHandler, getAllToppingHandler, deleteToppingByIdHandler } = require('../controllers/toppingController');

const router = express.Router();

router.get('/toppings', getAllToppingHandler);
router.post('/toppings', addToppingHandler);
router.delete('/toppings/:id', deleteToppingByIdHandler);

module.exports = router;