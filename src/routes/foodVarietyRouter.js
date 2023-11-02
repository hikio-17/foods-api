const express = require('express');
const {
  addFoodVarietyHandler,
  getAllFoodVariety,
  getVarietyByIdHandler,
  deleteVarietyByIdHandler,
  updateVarietyByIdHandler,
} = require('../controllers/foodVarietyController');
const { authCheck, adminCheck } = require('../middlewares/authCheck');
const { validateFoodVariety } = require('../validators/foodVarietyValidate');

const router = express.Router();

router.get('/food-variety', getAllFoodVariety);
router.get('/food-variety/:id', getVarietyByIdHandler);
router.post('/food-variety', validateFoodVariety, authCheck, adminCheck, addFoodVarietyHandler);
router.put('/food-variety/:id', authCheck, adminCheck, updateVarietyByIdHandler);
router.delete('/food-variety/:id', authCheck, adminCheck, deleteVarietyByIdHandler);

module.exports = router;