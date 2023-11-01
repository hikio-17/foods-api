const asyncHandler = require('express-async-handler');
const { addVariety, checkExistingVariety } = require('../services/foodVarietyService');

const addFoodVarietyHandler = asyncHandler(async (req, res) => {
  const { name, price } = req.body;
  await checkExistingVariety(name);
  const variety = await addVariety({ name, price });

  res.status(200).json({
    status: 'success',
    message: 'New variety is created',
    data: {
      variety,
    },
  });
});

module.exports = {
  addFoodVarietyHandler,
};