const asyncHandler = require('express-async-handler');
const { addTopping, findAllTopping, removeToppingById } = require('../services/toppingService');

const addToppingHandler = asyncHandler(async (req, res) => {
  const { name, price, parent } = req.body;

  const topping = await addTopping({ name, price, parent });

  res.status(200).json({
    status: 'success',
    message: 'Created new topping successfully',
    data: {
      topping,
    },
  });
});

const getAllToppingHandler = asyncHandler(async (req, res) => {
  const toppings = await findAllTopping();

  res.status(200).json({
    status: 'success',
    message: 'Retrieve all toppings',
    data: {
      toppings,
    },
  });
});

const deleteToppingByIdHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await removeToppingById(id);

  res.status(200).json({
    status: 'success',
    message: `Delete topping with id '${id}' successfully`,
  });
});

module.exports = {
  addToppingHandler,
  getAllToppingHandler,
  deleteToppingByIdHandler,
};