const asyncHandler = require('express-async-handler');
const {
  addFood, findAllFood, findFoodById, checkFood, removeFoodById,
} = require('../services/foodService');

const addFoodHandler = asyncHandler(async (req, res) => {
  const { name, basePrice } = req.body;

  const food = await addFood({ name, basePrice });

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

  await checkFood(id);
  const food = await findFoodById(id);
  console.log(food);
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
  await checkFood(id);
  //
});

const deleteFoodByIdHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await checkFood(id);
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
