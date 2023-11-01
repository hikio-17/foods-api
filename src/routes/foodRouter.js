const express = require('express');
const {
  addFoodHandler,
  getAllFoodHandler,
  getFoodByIdHandler,
  updateFoodByIdHandler,
  deleteFoodByIdHandler,
} = require('../controllers/foodController');

const router = express.Router();

router.get('/foods', getAllFoodHandler);
router.get('/foods/:id', getFoodByIdHandler);
router.post('/foods', addFoodHandler);
router.put('/foods/:id', updateFoodByIdHandler);
router.delete('/foods/:id', deleteFoodByIdHandler);

module.exports = router;