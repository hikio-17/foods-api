const express = require('express');
const {
  addFoodHandler,
  getAllFoodHandler,
  getFoodByIdHandler,
  updateFoodByIdHandler,
  deleteFoodByIdHandler,
} = require('../controllers/foodController');
const { authCheck, adminCheck } = require('../middlewares/authCheck');

const router = express.Router();

router.get('/foods', getAllFoodHandler);
router.get('/foods/:id', getFoodByIdHandler);
router.post('/foods', authCheck, adminCheck, addFoodHandler);
router.put('/foods/:id', authCheck, adminCheck, updateFoodByIdHandler);
router.delete('/foods/:id', authCheck, adminCheck, deleteFoodByIdHandler);

module.exports = router;