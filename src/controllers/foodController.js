const asyncHnadler = require('express-async-handler');
const { addFood } = require('../services/foodService');

const addFoodHandler = asyncHnadler(async (req, res) => {
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

module.exports = {
  addFoodHandler,
};
