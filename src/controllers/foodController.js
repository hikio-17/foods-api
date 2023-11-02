const asyncHandler = require('express-async-handler');
const {
  addFood, findAllFood, findFoodById, removeFoodById,
} = require('../services/foodService');

const addFoodHandler = asyncHandler(async (req, res) => {
  console.log(req.body);
  const food = await addFood(req.body);

  res.status(201).json({
    status: 'success',
    message: 'New food created',
    data: {
      addedFood: {
        food,
      },
    },
  });
});

const getAllFoodHandler = asyncHandler(async (req, res) => {
  const foods = await findAllFood();

  res.status(200).json({
    status: 'success',
    message: 'Retrieve all foods',
    data: {
      foods,
    },
  });
});

const getFoodByIdHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const food = await findFoodById(id);

  res.status(200).json({
    status: 'success',
    message: 'Get food Detail',
    data: {
      food,
    },
  });
});

const updateFoodByIdHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;
  //
});

const deleteFoodByIdHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await removeFoodById(id);

  res.status(200).json({
    status: 'success',
    message: `Delete food with id '${id}' successfully`,
  });
});

module.exports = {
  addFoodHandler,
  getAllFoodHandler,
  getFoodByIdHandler,
  updateFoodByIdHandler,
  deleteFoodByIdHandler,

};
