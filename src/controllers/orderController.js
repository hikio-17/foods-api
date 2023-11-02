const asyncHandler = require('express-async-handler');
const { addOrder, findAllOrder, removeOrderById } = require('../services/orderService');

const createOrderHandler = asyncHandler(async (req, res) => {
  const { id: user } = req.user;
  const { items } = req.body;

  const itemsProducts = await addOrder({ user, items });

  res.status(201).json({
    status: 'success',
    message: 'New order has created',
    data: {
      order: itemsProducts,
    },
  });
});

const getAllOrderHandler = asyncHandler(async (req, res) => {
  const { user } = req;
  const orders = await findAllOrder(user);

  res.status(200).json({
    status: 'success',
    message: 'Retrieve all order',
    data: {
      orders,
    },
  });
});

const deleteOrderByIdHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await removeOrderById(id, req.user);

  res.status(200).json({
    status: 'success',
    message: `Order with id '${id}' successfully deleted`,
  });
});

module.exports = {
  createOrderHandler,
  getAllOrderHandler,
  deleteOrderByIdHandler,
};