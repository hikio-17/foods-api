const express = require('express');
const {
  createOrderHandler, getAllOrderHandler, deleteOrderByIdHandler, getOrderByIdHandler,
} = require('../controllers/orderController');
const { authCheck, adminCheck } = require('../middlewares/authCheck');

const router = express.Router();

router.get('/orders', authCheck, getAllOrderHandler);
router.get('/orders/:id', authCheck, getOrderByIdHandler);
router.post('/orders', authCheck, createOrderHandler);
router.delete('/orders/:id', authCheck, adminCheck, deleteOrderByIdHandler);

module.exports = router;